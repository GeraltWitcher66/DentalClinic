'use client';

import { useId, useState } from 'react';
import { basePath } from '@/lib/basePath';

/**
 * مقایسهٔ قبل/بعد با خط عمودی کشویی.
 * خط کشو با ماوس/لمس جابه‌جا می‌شود و با کلیدهای جهت‌دار هم کار می‌کند؛
 * ورودی range شفاف روی تصویر، هم کنترل لمسی است و هم برای صفحه‌خوان‌ها.
 */
export default function BeforeAfter({ title, before, after }) {
  const [position, setPosition] = useState(50);
  const hintId = useId();

  return (
    <figure className="compare">
      {title ? <span className="compare__label">{title}</span> : null}
      <div
        className="compare__stage"
        style={{ '--position': `${position}%` }}
      >
        <img
          className="compare__image"
          src={`${basePath}${after.src}`}
          alt={after.alt}
          width={900}
          height={675}
          loading="lazy"
          decoding="async"
        />

        <div className="compare__before" aria-hidden="true">
          <img
            src={`${basePath}${before.src}`}
            alt=""
            width={900}
            height={675}
            loading="lazy"
            decoding="async"
          />
        </div>

        <span className="compare__tag compare__tag--before">قبل</span>
        <span className="compare__tag compare__tag--after">بعد</span>

        <span className="compare__line" aria-hidden="true">
          <span className="compare__handle">
            <span aria-hidden="true">‹</span>
            <span aria-hidden="true">›</span>
          </span>
        </span>

        <input
          className="compare__range"
          type="range"
          min="0"
          max="100"
          step="1"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="مقایسهٔ تصویر قبل و بعد از درمان"
          aria-describedby={hintId}
          dir="ltr"
        />
      </div>

      <p className="compare__hint" id={hintId}>
        خط عمودی را بکشید یا با کلیدهای جهت‌دار جابه‌جا کنید.
      </p>
    </figure>
  );
}
