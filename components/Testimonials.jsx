import SectionHeading from './SectionHeading';
import { testimonials } from '@/content/site';

export default function Testimonials() {
  return (
    <section className="section section--white testimonials" id="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="تجربهٔ بیماران"
          title="آنچه بیماران دنتا می‌گویند"
          text="نظرهایی از بیمارانی که مسیر درمان را با ما طی کرده‌اند؛ بدون ویرایش و با اجازهٔ خودشان."
        />

        <div className="cards cards--3">
          {testimonials.map((testimonial) => (
            <figure className="testimonial-card" key={testimonial.name}>
              <span className="testimonial-card__mark" aria-hidden="true">
                ”
              </span>
              <blockquote>{testimonial.text}</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.treatment}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
