import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServiceCard from '@/components/ServiceCard';
import SectionHeading from '@/components/SectionHeading';
import WhyUs from '@/components/WhyUs';
import Doctors from '@/components/Doctors';
import Testimonials from '@/components/Testimonials';
import Results from '@/components/Results';
import Gallery from '@/components/Gallery';
import Faq from '@/components/Faq';
import ContactBand from '@/components/ContactBand';
import Footer from '@/components/Footer';
import BookingSheet from '@/components/BookingSheet';
import { services } from '@/content/site';

export default function Page() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <TrustBar />

        <section className="section services" id="services">
          <div className="container">
            <SectionHeading
              eyebrow="خدمات دنتا"
              title="مراقبتی کامل، برای هر لبخند"
              text="از پیشگیری تا طراحی لبخند؛ هر درمان با برنامه‌ای شخصی و توضیح شفاف مراحل انجام می‌شود."
            />

            <div className="cards cards--4">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  slug={service.slug}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  index={`0${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <WhyUs />
        <Doctors />
        <Testimonials />
        <Results />
        <Gallery />
        <Faq />
        <ContactBand />
      </main>

      <Footer />
      <BookingSheet />
    </>
  );
}
