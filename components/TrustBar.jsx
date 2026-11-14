import { HeartIcon, ShieldIcon, UserCircleIcon } from './icons/Icons';
import { trustItems } from '@/content/site';

const icons = [HeartIcon, ShieldIcon, UserCircleIcon];

export default function TrustBar() {
  return (
    <section className="trust" aria-label="مزیت‌های کلینیک دنتا">
      <div className="container trust__inner">
        {trustItems.map(({ title, note }, index) => {
          const Icon = icons[index] ?? HeartIcon;
          return (
            <div className="trust__item" key={title}>
              <span className="trust__icon">
                <Icon size={20} />
              </span>
              <span className="trust__text">
                <strong>{title}</strong>
                <small>{note}</small>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
