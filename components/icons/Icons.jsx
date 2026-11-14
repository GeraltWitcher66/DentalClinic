// آیکون‌های خطی (Line icons) قالب دنتا — همه با currentColor رنگ می‌گیرند.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function Svg({ children, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      {children}
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 3.5 19 6v5.4c0 4.2-2.8 7.6-7 9.1-4.2-1.5-7-4.9-7-9.1V6l7-2.5Z" />
      <path d="m9 11.9 2.1 2.1 3.9-4.2" />
    </Svg>
  );
}

export function HeartIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 20s-7.5-4.3-7.5-9.2A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 7.5 2.8C19.5 15.7 12 20 12 20Z" />
    </Svg>
  );
}

export function SparkIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 3.5l1.7 4.8 4.8 1.7-4.8 1.7L12 16.5l-1.7-4.8L5.5 10l4.8-1.7L12 3.5Z" />
      <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </Svg>
  );
}

export function CheckIcon(props) {
  return (
    <Svg {...props}>
      <path d="m5 12.8 4.2 4.2L19 6.6" />
    </Svg>
  );
}

export function UserCircleIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="10" r="2.8" />
      <path d="M6.6 18.2c1-2 2.9-3.1 5.4-3.1s4.4 1.1 5.4 3.1" />
    </Svg>
  );
}

export function PhoneIcon(props) {
  return (
    <Svg {...props}>
      <path d="M7.2 3.8h2.6l1.3 3.3-1.9 1.5a10.6 10.6 0 0 0 5.1 5.1l1.5-1.9 3.3 1.3v2.6c0 1.4-1.2 2.5-2.6 2.3C9.8 17.2 5.6 13 4.9 6.4c-.2-1.4.9-2.6 2.3-2.6Z" />
    </Svg>
  );
}

export function PinIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 21s6.5-5.6 6.5-10.4A6.5 6.5 0 0 0 5.5 10.6C5.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.4" r="2.4" />
    </Svg>
  );
}

export function ClockIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </Svg>
  );
}

export function MailIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </Svg>
  );
}

export function InstagramIcon(props) {
  return (
    <Svg {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.6" cy="7.4" r=".9" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function TelegramIcon(props) {
  return (
    <Svg {...props}>
      <path d="m20.5 4.5-3 15-5.2-3.6-3 3v-4.6l7.4-6.6-8.6 5.6L3.5 11l17-6.5Z" />
    </Svg>
  );
}

export function WhatsappIcon(props) {
  return (
    <Svg {...props}>
      <path d="M20 11.8a8 8 0 0 1-11.8 7L4 20l1.3-4a8 8 0 1 1 14.7-4.2Z" />
      <path d="M9.2 8.4h1.4l.7 1.7-1 .8a5.7 5.7 0 0 0 2.8 2.8l.8-1 1.7.7v1.4c0 .8-.7 1.4-1.5 1.3a7.4 7.4 0 0 1-6.2-6.2c-.1-.8.5-1.5 1.3-1.5Z" />
    </Svg>
  );
}

export function MenuIcon(props) {
  return (
    <Svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function CloseIcon(props) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}
