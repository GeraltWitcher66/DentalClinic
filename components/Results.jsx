import SectionHeading from './SectionHeading';
import BeforeAfter from './BeforeAfter';
import { beforeAfter } from '@/content/site';

export default function Results() {
  return (
    <section className="section results" id="results">
      <div className="container">
        <SectionHeading
          eyebrow="نتایج درمان"
          title="تفاوت را با دست خودتان ببینید"
          text="خط عمودی را بکشید تا تصویر پیش و پس از درمان روی هم سنجیده شود."
        />

        <div className="results__grid">
          {beforeAfter.items.map((item) => (
            <BeforeAfter
              key={item.key}
              title={item.title}
              before={item.before}
              after={item.after}
            />
          ))}
        </div>

        <p className="results__note">
          <span className="compare__badge">تصویر نمونه</span>
          <span>{beforeAfter.note}</span>
        </p>
      </div>
    </section>
  );
}
