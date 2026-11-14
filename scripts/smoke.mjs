// آزمون دود روی خروجی استاتیک (out/). بعد از «npm run build» اجرا می‌شود:
//   node scripts/smoke.mjs
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'out';
const BASE = '/DentalClinic';
const problems = [];
const checks = [];

const check = (name, condition, detail = '') => {
  checks.push({ name, ok: Boolean(condition), detail });
  if (!condition) problems.push(`${name}${detail ? ` — ${detail}` : ''}`);
};

const read = (path) => readFileSync(path, 'utf8');

// ۱. خروجی ساخت
check('پوشهٔ out موجود است', existsSync(OUT));

const home = join(OUT, 'index.html');
check('صفحهٔ اصلی ساخته شده', existsSync(home));

if (existsSync(home)) {
  const html = read(home);

  const sections = ['services', 'about', 'doctors', 'testimonials', 'results', 'gallery', 'faq', 'visit', 'contact'];
  for (const id of sections) {
    check(`بخش #${id}`, html.includes(`id="${id}"`), 'شناسه در HTML نیست');
  }

  check('دکمهٔ رزرو', html.includes('data-booking-open'));
  check(
    'دو مقایسهٔ قبل/بعد',
    (html.match(/compare__stage/g) ?? []).length === 2,
    'تعداد مقایسه‌ها دو تا نیست'
  );
  check('جدول خدمات لینک جزئیات دارد', html.includes('/services/laminate'));
  check('عنوان اصلی', html.includes('لبخند سالم'));

  // فونت‌ها باید محلی preload شوند و هیچ ارجاعی به گوگل نماند.
  check(
    'preload فونت محلی',
    html.includes(`${BASE}/fonts/vazirmatn-arabic.woff2`),
    'لینک preload پیدا نشد'
  );
  check('بدون CDN گوگل', !/fonts\.(googleapis|gstatic)\.com/.test(html));

  // ۲. بررسی همهٔ لینک‌ها و تصاویر داخلی همین صفحه
  const urls = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  const internal = [...new Set(urls)].filter(
    (url) => url.startsWith(BASE) || url.startsWith('/_next/')
  );

  const missing = [];
  for (const url of internal) {
    const clean = url.split('#')[0].split('?')[0];
    if (!clean) continue;
    const relative = clean.startsWith(BASE) ? clean.slice(BASE.length) : clean;
    const candidates = [
      join(OUT, relative),
      join(OUT, relative, 'index.html'),
      join(OUT, `${relative}.html`),
    ];
    if (!candidates.some((candidate) => existsSync(candidate) && statSync(candidate).isFile())) {
      missing.push(clean);
    }
  }
  check('لینک‌ها و تصاویر داخلی', missing.length === 0, missing.join(', '));
}

// ۳. صفحات جزئیات خدمات
const slugs = ['laminate', 'implant', 'orthodontics', 'cleaning'];
for (const slug of slugs) {
  const file = join(OUT, 'services', slug, 'index.html');
  check(`صفحهٔ ${slug}`, existsSync(file));
  if (existsSync(file)) {
    const html = read(file);
    check(`محتوای ${slug}`, html.includes('مراحل درمان') && html.includes(slug));
  }
}

// ۴. صفحهٔ ۴۰۴
check('صفحهٔ ۴۰۴', existsSync(join(OUT, '404.html')));

// ۵. فایل‌های ثابت
const assets = [
  'fonts/vazirmatn-arabic.woff2',
  'fonts/vazirmatn-latin.woff2',
  'fonts/vazirmatn-latin-ext.woff2',
  'images/hero.jpg',
  'images/clinic.jpg',
  'images/doctor-1.jpg',
  'images/doctor-2.jpg',
  'images/doctor-3.jpg',
  'images/service-laminate.jpg',
  'images/service-implant.jpg',
  'images/service-orthodontics.jpg',
  'images/service-cleaning.jpg',
  'images/before-1.jpg',
  'images/after-1.jpg',
  'images/before-2.jpg',
  'images/after-2.jpg',
  'favicon.svg',
  '.nojekyll',
];
for (const asset of assets) {
  check(`فایل ${asset}`, existsSync(join(OUT, asset)));
}

// ۶. هیچ فایل سبکی از پوشه‌های داخلی در خروجی نمانده باشد
check('بدون پوشهٔ سورس در خروجی', !existsSync(join(OUT, 'components')));

const failed = checks.filter((item) => !item.ok);
for (const item of checks) {
  if (!item.ok) console.log(`✗ ${item.name}${item.detail ? ` — ${item.detail}` : ''}`);
}

if (failed.length > 0) {
  console.log(`\n${failed.length} از ${checks.length} بررسی ناموفق بود.`);
  process.exit(1);
}

console.log(`✓ همهٔ ${checks.length} بررسی موفق بود.`);
