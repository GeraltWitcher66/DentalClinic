import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingSheet from '@/components/BookingSheet';
import { basePath } from '@/lib/basePath';
import { services } from '@/content/site';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | کلینیک دنتا`,
    description: service.intro,
  };
}

export default function ServicePage({ params }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <article className="service-page">
          <div className="container service-page__top">
            <nav className="breadcrumb" aria-label="مسیر صفحه">
              <Link href="/">خانه</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#services">خدمات</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.title}</span>
            </nav>

            <div className="service-page__grid">
              <div className="service-page__intro">
                <span className="eyebrow">خدمات دنتا</span>
                <h1>{service.title}</h1>
                <p>{service.intro}</p>

                <dl className="service-page__meta">
                  <div>
                    <dt>مدت درمان</dt>
                    <dd>{service.duration}</dd>
                  </div>
                  <div>
                    <dt>مشاوره اولیه</dt>
                    <dd>رایگان، همراه با معاینه</dd>
                  </div>
                </dl>

                <div className="service-page__actions">
                  <button type="button" className="btn btn--gold" data-booking-open>
                    رزرو نوبت
                  </button>
                  <Link className="btn btn--ghost" href="/#services">
                    بازگشت به خدمات
                  </Link>
                </div>
              </div>

              <div className="service-page__media">
                <img
                  src={`${basePath}${service.image}`}
                  alt={service.title}
                  width={520}
                  height={520}
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="section section--white">
            <div className="container service-page__body">
              <section className="service-page__block">
                <h2>مراحل درمان</h2>
                <ol className="step-list">
                  {service.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </section>

              <section className="service-page__block">
                <h2>مراقبت پس از درمان</h2>
                <ul className="care-list">
                  {service.aftercare.map((care) => (
                    <li key={care}>{care}</li>
                  ))}
                </ul>
                <p className="service-page__note">
                  راهنمای کامل مراقبت به‌صورت مکتوب و شمارهٔ پیگیری پس از هر جلسه در
                  اختیار شما قرار می‌گیرد.
                </p>
              </section>
            </div>
          </div>

          <div className="section">
            <div className="container">
              <h2 className="service-page__more-title">سایر خدمات دنتا</h2>
              <ul className="service-page__more">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/services/${item.slug}`}>
                      <span>{item.title}</span>
                      <span aria-hidden="true">←</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <BookingSheet />
    </>
  );
}
