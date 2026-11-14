'use client';

import { useEffect, useRef, useState } from 'react';
import BookingForm from './BookingForm';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * شیت رزرو نوبت. خودِ دکمه‌ای ندارد؛ هر عنصری با data-booking-open
 * (دکمه هیرو، «رزرو این خدمت» در کارت‌ها، منوی موبایل) آن را باز می‌کند.
 */
export default function BookingSheet() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const onClick = (event) => {
      const trigger = event.target.closest?.('[data-booking-open]');
      if (!trigger) return;
      event.preventDefault();
      triggerRef.current = trigger;
      setOpen(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!open) return;

    const close = () => {
      setOpen(false);
      const trigger = triggerRef.current;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        close();
        return;
      }
      if (event.key !== 'Tab') return;

      // فوکوس داخل دیالوگ نگه داشته می‌شود تا کاربر به محتوای پشت شیت نرسد.
      const items = [...(panelRef.current?.querySelectorAll(FOCUSABLE) ?? [])].filter(
        (element) => element.offsetParent !== null
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    const frame = requestAnimationFrame(() =>
      panelRef.current?.querySelector('input')?.focus({ preventScroll: true })
    );

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      cancelAnimationFrame(frame);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="booking-sheet"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <button
        type="button"
        className="booking-sheet__backdrop"
        aria-label="بستن فرم رزرو"
        onClick={() => setOpen(false)}
        tabIndex={-1}
      />
      <div className="booking-sheet__panel" ref={panelRef}>
        <button
          type="button"
          className="booking-sheet__close"
          aria-label="بستن فرم رزرو"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        <BookingForm />
      </div>
    </div>
  );
}
