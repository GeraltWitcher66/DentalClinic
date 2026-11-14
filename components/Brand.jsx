import ToothMark from './icons/ToothMark';

const mark = (
  <>
    <span className="brand__mark">
      <ToothMark size={22} />
    </span>
    <span className="brand__text">
      <span className="brand__name">دنتا</span>
      <span className="brand__sub">DENTAL CLINIC</span>
    </span>
  </>
);

export default function Brand({ href, label = 'دنتا، کلینیک دندانپزشکی' }) {
  if (!href) return <div className="brand">{mark}</div>;

  return (
    <a className="brand" href={href} aria-label={label}>
      {mark}
    </a>
  );
}
