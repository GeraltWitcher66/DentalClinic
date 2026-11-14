import './globals.css';
import './sections.css';
import { basePath } from '@/lib/basePath';

export const metadata = {
  title: 'دنتا | کلینیک تخصصی دندانپزشکی',
  description:
    'کلینیک دندانپزشکی دنتا؛ لبخند سالم، با آرامش کامل. لمینت، ایمپلنت، ارتودنسی و جرم‌گیری با تیمی متخصص و فضایی آرام.',
  icons: { icon: `${basePath}/favicon.svg` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* فونت فارسی و لاتین از همان ابتدا بارگذاری می‌شوند تا متن با فونت جانشین پرش نکند. */}
        <link
          rel="preload"
          href={`${basePath}/fonts/vazirmatn-arabic.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${basePath}/fonts/vazirmatn-latin.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          پرش به محتوای اصلی
        </a>
        {children}
      </body>
    </html>
  );
}
