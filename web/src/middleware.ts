import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ja"],
  defaultLocale: "ja",
  localePrefix: 'always',
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"]
};
