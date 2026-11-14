// لینک‌های اصلی سایت؛ هدر و فوتر از همین منبع استفاده می‌کنند.
export const navLinks = [
  { href: '#home', label: 'خانه' },
  { href: '#services', label: 'خدمات' },
  { href: '#doctors', label: 'پزشکان' },
  { href: '#contact', label: 'تماس' },
];

// فوتر همان لینک‌هاست به‌علاوه مقصدهای میان‌صفحه‌ای؛ «تماس» حذف می‌شود چون
// خود فوتر بخش تماس است.
export const footerLinks = [
  ...navLinks.filter((link) => link.href !== '#contact'),
  { href: '#about', label: 'درباره دنتا' },
  { href: '#testimonials', label: 'تجربهٔ بیماران' },
  { href: '#faq', label: 'پرسش‌های متداول' },
  { href: '#booking', label: 'رزرو نوبت', booking: true },
];
