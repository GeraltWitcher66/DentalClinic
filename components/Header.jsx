'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Brand from './Brand';
import SectionLink from './SectionLink';
import { navLinks } from '@/lib/navigation';
import { basePath } from '@/lib/basePath';
import { MenuIcon, CloseIcon } from './icons/Icons';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // با باز شدن منو، فوکوس روی اولین لینک می‌رود تا کاربر کیبورد بلافاصله داخل منو باشد.
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector('a[href]')?.focus({ preventScroll: true });
  }, [open]);

  // بستن با Escape و برگرداندن فوکوس به دکمه منو.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      toggleRef.current?.focus({ preventScroll: true });
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const solid = scrolled || open || !isHome;

  return (
    <header className={`header${solid ? ' is-solid' : ''}`}>
      <div className="container header__inner">
        <Brand href={isHome ? '#home' : `${basePath}/`} />

        <nav className="nav" aria-label="منوی اصلی">
          {navLinks.map((link) => (
            <SectionLink key={link.href} className="nav__link" href={link.href}>
              {link.label}
            </SectionLink>
          ))}
        </nav>

        <div className="header__actions">
          <button
            ref={toggleRef}
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'بستن منو' : 'باز کردن منو'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* منو فقط در حالت باز رندر می‌شود؛ بنابراین در حالت بسته هیچ لینکی در DOM نیست
          و با Tab یا اسکرین‌ریدر به آن دسترسی پیدا نمی‌شود. */}
      {open ? (
        <nav
          id="mobile-nav"
          ref={panelRef}
          className="mobile-nav"
          aria-label="منوی موبایل"
        >
          {navLinks.map((link) => (
            <SectionLink
              key={link.href}
              className="mobile-nav__link"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </SectionLink>
          ))}
          <button
            type="button"
            className="btn btn--gold mobile-nav__cta"
            data-booking-open
            onClick={() => setOpen(false)}
          >
            رزرو نوبت
          </button>
        </nav>
      ) : null}
    </header>
  );
}
