import { useState } from "react";

interface CookieOptions {
  expires?: Date;
  path?: string;
  domain?: string;
  secure?: boolean;
}

const getCookiesList = (): string[] => {
  const listCookies = document.cookie.split(";");
  return listCookies.map(cookie => cookie.trim());
};

const useCookies = <T>(key: string, initialValue: T | null = null) => {
  const getCookie = (): T | null => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return initialValue;
    }
    
    const nameCookies = key + "=";
    const cookiesList = getCookiesList();

    const foundCookie = cookiesList.find(cookie => cookie.indexOf(nameCookies) === 0);
    if (foundCookie) {
      const value = foundCookie.substring(nameCookies.length);
      return JSON.parse(decodeURIComponent(value)) as T;
    }

    return initialValue;

    
  };

  const setCookie = (value: T, options: CookieOptions = {}): void => {
    const { expires, path, domain, secure } = options;
    let cookieString = `${key}=${encodeURIComponent(JSON.stringify(value))}`;
    
    if (expires) {
      cookieString += `; expires=${expires.toUTCString()}`;
    }
    if (path) {
      cookieString += `; path=/`;
    }
    if (domain) {
      cookieString += `; domain=${domain}`;
    }
    if (secure) {
      cookieString += "; secure";
    }

    document.cookie = cookieString;
  };

  const removeCookie = (): void => {
    if (typeof window === "undefined") {
      return;
    }

    const nameCookies = key + "=";
    const cookiesList = getCookiesList();
    cookiesList.forEach(cookie => {
      if (cookie.indexOf(nameCookies) === 0) {
        document.cookie = `${nameCookies}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    });
  };

  const cookieValue = getCookie();
  
  const updateCookieValue = (newValue: T, options: CookieOptions): void => {
    setCookie(newValue, options);
  };

  return [cookieValue, updateCookieValue, removeCookie] as const;
};

export default useCookies;
