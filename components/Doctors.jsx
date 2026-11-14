import Media from './Media';
import SectionHeading from './SectionHeading';
import { doctors } from '@/content/site';

export default function Doctors() {
  return (
    <section className="section doctors" id="doctors">
      <div className="container">
        <SectionHeading
          eyebrow="تیم درمان"
          title="پزشکانی که با آرامش گوش می‌دهند"
          text="هر بیمار توسط متخصص همان حوزه ویزیت می‌شود؛ بدون عجله و بدون تصمیم‌های ناگهانی."
        />

        <div className="bento">
          {doctors.map((doctor, index) => (
            <article
              key={doctor.name}
              className={`doctor-card${index === 0 ? ' doctor-card--lead' : ''}`}
            >
              <Media src={doctor.image} alt={doctor.name} />
              <div className="doctor-card__body">
                <span className="doctor-card__specialty">{doctor.specialty}</span>
                <h3>{doctor.name}</h3>
                <p>«{doctor.quote}»</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
