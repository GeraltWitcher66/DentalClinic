'use client';

import Brand from './Brand';
import SectionLink from './SectionLink';
import { footerLinks } from '@/lib/navigation';
import { site } from '@/content/site';
import {
  ClockIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  TelegramIcon,
  WhatsappIcon,
} from './icons/Icons';

const socialIcons = {
  اینستاگرام: InstagramIcon,
  تلگرام: TelegramIcon,
  'واتس‌اپ': WhatsappIcon,
};

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Brand />
          <p>{site.description}</p>
          <div className="footer__socials">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.label] ?? InstagramIcon;
              const external = social.href.startsWith('http');
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="footer__social"
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="footer__title">دسترسی سریع</h3>
          <ul className="footer__links">
            {footerLinks.map((link) => (
              <li key={link.href}>
                {link.booking ? (
                  <a href={link.href} data-booking-open>
                    {link.label}
                  </a>
                ) : (
                  <SectionLink href={link.href}>{link.label}</SectionLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__title">تماس با ما</h3>
          <ul className="footer__contact">
            <li>
              <PinIcon size={18} />
              <span>{site.address}</span>
            </li>
            <li>
              <PhoneIcon size={18} />
              <a href={`tel:${site.phone}`} dir="ltr">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <MailIcon size={18} />
              <a href={`mailto:${site.email}`} dir="ltr">
                {site.email}
              </a>
            </li>
            <li>
              <ClockIcon size={18} />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© ۱۴۰۵ کلینیک دندانپزشکی دنتا. تمامی حقوق محفوظ است.</span>
        <span>{site.license}</span>
      </div>
    </footer>
  );
}
