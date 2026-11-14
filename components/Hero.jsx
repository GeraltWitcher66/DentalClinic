import { basePath } from '@/lib/basePath';
import { site } from '@/content/site';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__media" aria-hidden="true">
        <img
          src={`${basePath}/images/hero.jpg`}
          alt=""
          width={1408}
          height={1152}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__content">
        <span className="hero__eyebrow">{site.fullName}</span>

        <h1 className="hero__title">
          لبخند سالم،
          <span>با آرامش کامل</span>
        </h1>

        <p className="hero__text">{site.description}</p>

        <div className="hero__actions">
          <button type="button" className="btn btn--gold" data-booking-open>
            رزرو نوبت
          </button>
        </div>

        <p className="hero__note">مشاوره اولیه رایگان · پذیرش بیمه‌های تکمیلی</p>
      </div>
    </section>
  );
}
