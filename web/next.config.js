/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    clientKey:
      '',
    routerLoginAdmin: 'admin',
    host: 'https://',
    // host_socket: 'http://server_test.rion-lab.com:9098',
    domain: 'http://',
    hostImgServer: 'https://',
  },
};

module.exports = nextConfig;
