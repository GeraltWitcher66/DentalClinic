import SectionHeading from './SectionHeading';
import { faqs } from '@/content/site';

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container faq__grid">
        <SectionHeading
          className="faq__head"
          eyebrow="پرسش‌های متداول"
          title="پاسخ روشن، پیش از شروع درمان"
          text="اگر پاسخ سوال‌تان اینجا نبود، با یک تماس کوتاه راهنمایی کامل می‌گیرید."
        />

        <div className="faq__list">
          {faqs.map((item) => (
            <details className="faq__item" key={item.q}>
              <summary>
                <span>{item.q}</span>
                <span className="faq__sign" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
