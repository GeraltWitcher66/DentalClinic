/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  // خروجی استاتیک برای GitHub Pages؛ در حالت dev غیرفعال است چون Next در dev
  // بدون manifest صفحات داینامیک (مثل /services/[slug]) را نمی‌تواند بسازد.
  output: isDev ? undefined : 'export',
  trailingSlash: true,
  basePath: '/DentalClinic', // نام ریپازیتوری
  assetPrefix: '/DentalClinic/',
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
