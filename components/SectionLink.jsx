'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * لینک بخش‌های صفحهٔ اصلی. اگر کاربر در صفحهٔ دیگری (مثل صفحهٔ خدمات) باشد،
 * لینک به «/» و همان لنگر اشاره می‌کند تا مقصد واقعاً پیدا شود.
 */
export default function SectionLink({ href, children, ...rest }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const target = href.startsWith('#') && !isHome ? `/${href}` : href;

  return (
    <Link href={target} {...rest}>
      {children}
    </Link>
  );
}
