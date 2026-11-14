'use client';

import { useState } from 'react';
import { CheckIcon } from './icons/Icons';
import { services as clinicServices, site } from '@/content/site';

const options = ['معاینه و مشاوره', ...clinicServices.map((service) => service.title)];

const initialForm = { name: '', phone: '', service: options[1] ?? options[0] };

// ارقام فارسی/عربی را به لاتین تبدیل می‌کند تا اعتبارسنجی شماره همیشه یکسان باشد.
const normalizeDigits = (value) =>
  value
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 1776))
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 1632))
    .replace(/[\s()-]/g, '');

const isValidPhone = (value) => {
  const normalized = normalizeDigits(value);
  return /^(?:\+98|0098|0)?9\d{9}$/.test(normalized);
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      setError('لطفاً نام و نام خانوادگی خود را وارد کنید.');
      return;
    }
    if (!isValidPhone(form.phone)) {
      setError('شمارهٔ موبایل معتبر نیست؛ نمونهٔ درست: ۰۹۱۲۱۲۳۴۵۶۷.');
      return;
    }

    setError('');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-card form-card--done" role="status" aria-live="polite">
        <span className="form-card__badge">
          <CheckIcon size={22} />
        </span>
        <h3>درخواست شما ثبت شد</h3>
        <p>
          {form.name} عزیز، درخواست شما برای «{form.service}» دریافت شد. کارشناسان
          دنتا تا ۲۴ ساعت آینده برای هماهنگی زمان با شما تماس می‌گیرند.
        </p>
        <p className="form-card__note">
          برای هماهنگی سریع‌تر می‌توانید با{' '}
          <a href={`tel:${site.phone}`} dir="ltr">
            {site.phoneDisplay}
          </a>{' '}
          تماس بگیرید.
        </p>
        <button
          type="button"
          className="btn btn--ghost btn--block"
          onClick={() => {
            setForm(initialForm);
            setSent(false);
          }}
        >
          ثبت درخواست جدید
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-card__head">
        <h3 id="booking-title">رزرو نوبت</h3>
        <p>در کمتر از یک دقیقه، نوبت خود را درخواست کنید.</p>
      </div>

      <label className="field" htmlFor="booking-name">
        <span className="field__label">نام و نام خانوادگی</span>
        <input
          id="booking-name"
          type="text"
          name="name"
          placeholder="مثلاً سارا محمدی"
          value={form.name}
          onChange={update('name')}
          autoComplete="name"
          required
          aria-invalid={error && !form.name.trim() ? 'true' : undefined}
          aria-describedby={error ? 'booking-error' : undefined}
        />
      </label>

      <label className="field" htmlFor="booking-phone">
        <span className="field__label">شماره تماس</span>
        <input
          id="booking-phone"
          type="tel"
          name="phone"
          inputMode="tel"
          placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰"
          value={form.phone}
          onChange={update('phone')}
          autoComplete="tel"
          required
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? 'booking-error' : undefined}
        />
      </label>

      <label className="field">
        <span className="field__label">انتخاب خدمت</span>
        <span className="field__select">
          <select name="service" value={form.service} onChange={update('service')}>
            {options.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </span>
      </label>

      <p className="field__error" id="booking-error" role="alert" aria-live="assertive">
        {error}
      </p>

      <button type="submit" className="btn btn--gold btn--block">
        درخواست نوبت
      </button>

      <p className="form-card__note">
        بدون پرداخت اولیه — کارشناسان ما تا ۲۴ ساعت آینده با شما تماس می‌گیرند.
      </p>
    </form>
  );
}
