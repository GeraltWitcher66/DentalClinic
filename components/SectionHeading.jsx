export default function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
  className = '',
}) {
  const classes = [
    'section__head',
    center ? 'section__head--center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <span className="eyebrow">
        <span className="eyebrow__dot" />
        {eyebrow}
      </span>
      <h2 className="section__title">{title}</h2>
      {text ? <p className="section__text">{text}</p> : null}
    </div>
  );
}
