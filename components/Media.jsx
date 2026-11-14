import { basePath } from '@/lib/basePath';

/**
 * قاب تصویر؛ اندازه و نسبت را والد تعیین می‌کند (aspect-ratio یا ارتفاع کامل).
 * اگر فایل تصویر موجود نباشد، کادر کرم‌رنگ و متن alt نمایش داده می‌شود.
 */
export default function Media({ src, alt }) {
  return (
    <div className="media">
      <img src={`${basePath}${src}`} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}
