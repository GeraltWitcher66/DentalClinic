import { basePath } from '@/lib/basePath';
import SectionHeading from './SectionHeading';
import { gallery } from '@/content/site';

export default function Gallery() {
  return (
    <section className="section section--white gallery" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="تور کلینیک"
          title="نگاهی به فضای دنتا"
          text="اتاق‌های درمان، تجهیزات و فضای انتظار؛ همان‌جایی که چند دقیقه بعد از ورود، آرام می‌شوید."
        />

        <div className="gallery__grid">
          {gallery.map((item) => (
            <figure className="gallery__item" key={item.src}>
              <img
                src={`${basePath}${item.src}`}
                alt={item.caption}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
