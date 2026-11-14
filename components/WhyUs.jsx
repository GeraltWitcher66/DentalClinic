import Media from './Media';
import SectionHeading from './SectionHeading';
import { HeartIcon, SparkIcon, UserCircleIcon } from './icons/Icons';
import { advantages } from '@/content/site';

const icons = [HeartIcon, UserCircleIcon, SparkIcon];

export default function WhyUs() {
  return (
    <section className="section section--white why" id="about">
      <div className="container why__grid">
        <div className="why__media">
          <div className="why__frame">
            <Media src="/images/clinic.jpg" alt="تجهیزات و فضای کلینیک دنتا" />
          </div>
        </div>

        <div className="why__content">
          <SectionHeading
            className="why__head"
            eyebrow="چرا دنتا؟"
            title="آرامشی که درمان را ساده می‌کند"
            text="ما معتقدیم کیفیت درمان از تجربه‌ای شروع می‌شود که بیمار در کلینیک حس می‌کند؛ از اولین تماس تا پایان دوره مراقبت."
          />

          <ul className="why__list">
            {advantages.map(({ title, text }, index) => {
              const Icon = icons[index] ?? SparkIcon;
              return (
                <li key={title}>
                  <span className="why__icon">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3>
                      <span className="why__num">{`0${index + 1}`}</span> {title}
                    </h3>
                    <p>{text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
