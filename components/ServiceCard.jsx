import Link from 'next/link';
import { basePath } from '@/lib/basePath';

export default function ServiceCard({ slug, image, title, description, index }) {
  return (
    <article className="service-card">
      <span className="service-card__index">{index}</span>
      <img
        className="service-card__thumb"
        src={`${basePath}${image}`}
        alt={title}
        width={104}
        height={104}
        loading="lazy"
        decoding="async"
      />
      <h3>
        <Link href={`/services/${slug}`}>{title}</Link>
      </h3>
      <p>{description}</p>
      <div className="service-card__actions">
        <button type="button" className="service-card__link" data-booking-open>
          رزرو این خدمت
          <span aria-hidden="true">←</span>
        </button>
        <Link className="service-card__more" href={`/services/${slug}`}>
          جزئیات درمان
        </Link>
      </div>
    </article>
  );
}
