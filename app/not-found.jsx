import Link from 'next/link';
import Brand from '@/components/Brand';
import { basePath } from '@/lib/basePath';

export const metadata = { title: 'صفحه پیدا نشد | کلینیک دنتا' };

export default function NotFound() {
  return (
    <main className="notfound" id="main" tabIndex={-1}>
      <div className="container notfound__inner">
        <Brand href={`${basePath}/`} />
        <span className="eyebrow">۴۰۴</span>
        <h1>این صفحه پیدا نشد</h1>
        <p>
          ممکن است نشانی تغییر کرده باشد. می‌توانید به صفحهٔ اصلی برگردید یا نوبت
          خود را از همان‌جا رزرو کنید.
        </p>
        <Link href="/" className="btn btn--gold">
          بازگشت به خانه
        </Link>
      </div>
    </main>
  );
}
