import SectionHeading from './SectionHeading';
import { insurers, site } from '@/content/site';
import { ClockIcon, PhoneIcon, PinIcon, WhatsappIcon } from './icons/Icons';

export default function ContactBand() {
  return (
    <section className="section section--white contact-band" id="visit">
      <div className="container">
        <SectionHeading
          eyebrow="مراجعه"
          title="ما را پیدا کنید"
          text={site.address}
        />

        <div className="contact-band__grid">
          <a className="contact-tile" href={`tel:${site.phone}`}>
            <span className="contact-tile__icon">
              <PhoneIcon size={20} />
            </span>
            <span className="contact-tile__label">تماس تلفنی</span>
            <strong dir="ltr">{site.phoneDisplay}</strong>
          </a>

          <a
            className="contact-tile"
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-tile__icon">
              <WhatsappIcon size={20} />
            </span>
            <span className="contact-tile__label">پیام در واتس‌اپ</span>
            <strong dir="ltr">{site.mobileDisplay}</strong>
          </a>

          <a
            className="contact-tile"
            href={site.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-tile__icon">
              <PinIcon size={20} />
            </span>
            <span className="contact-tile__label">مسیریابی</span>
            <strong>باز کردن روی نقشه</strong>
          </a>

          <div className="contact-tile">
            <span className="contact-tile__icon">
              <ClockIcon size={20} />
            </span>
            <span className="contact-tile__label">ساعت کاری</span>
            <strong>{site.hours}</strong>
          </div>
        </div>

        <div className="insurers">
          <p className="insurers__label">همکاری با بیمه‌های تکمیلی</p>
          <ul className="insurers__list">
            {insurers.map((insurer) => (
              <li key={insurer}>{insurer}</li>
            ))}
          </ul>
          <p className="insurers__note">
            پوشش هر بیمه پیش از درمان با پذیرش هماهنگ می‌شود. {site.license}
          </p>
        </div>
      </div>
    </section>
  );
}
