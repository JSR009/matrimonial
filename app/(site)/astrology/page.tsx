"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AstrologyLandingPage() {
  const router = useRouter();

  // Function to handle section clicks and navigate to /contact
  const handleSectionClick = () => {
    router.push('/contact');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-500 to-indigo-700 text-white py-20 px-4 flex items-center justify-center" onClick={handleSectionClick}>
        <div className="text-center max-w-3xl cursor-pointer">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Unlock Your Cosmic Journey</h1>
          <p className="text-lg sm:text-xl mb-8">Discover the ancient wisdom of the stars with personalized astrology readings designed to guide your life&apos;s path.</p>
          <button className="bg-white text-indigo-700 py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition">Explore Now</button>
        </div>
        <Image src="/images/stars-bg.jpg" alt="Astrology background" layout="fill" objectFit="cover" className="opacity-30" />
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white px-4" onClick={handleSectionClick}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a team of experienced astrologers who use the wisdom of the cosmos to guide you on your life&apos;s journey. With decades of combined experience, we offer personalized readings that provide insights into your life&apos;s challenges, opportunities, and destiny.
            </p>
            <button className="bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-800 transition">Learn More</button>
          </div>
          <div>
            <Image src="/images/astrology.jpg" alt="Astrologer" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 px-4" onClick={handleSectionClick}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Astrology Services</h2>
          <p className="text-lg text-gray-600 mt-4">Explore our range of astrology services designed to guide you through life&apos;s challenges and opportunities.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <Image src="/images/card.jpg" alt="Natal Chart" width={600} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">Natal Chart Reading</h3>
            <p className="text-gray-600">Understand the cosmic blueprint of your life with an in-depth natal chart reading.</p>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <Image src="/images/Hand.jpg" alt="Horoscope Matching" width={600} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">Horoscope Matching</h3>
            <p className="text-gray-600">Find out if you&apos;re cosmically aligned with your partner through horoscope matching.</p>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <Image src="/images/horoscope.jpg" alt="Yearly Forecast" width={600} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">Yearly Forecast</h3>
            <p className="text-gray-600">Get insights into the upcoming year with a detailed astrological forecast.</p>
          </div>
        </div>
      </section>

      {/* Planets Section */}
      <section className="py-20 bg-indigo-700 text-white px-4" onClick={handleSectionClick}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Power of the Planets</h2>
          <p className="text-lg sm:text-xl mb-8">The movements and positions of celestial bodies affect all of us. Learn how the planets influence your life.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="bg-indigo-600 p-4 rounded-lg hover:bg-indigo-500 transition">
              <Image src="/images/mercury.jpg" alt="Mercury" width={80} height={80} className="mx-auto mb-2" />
              <h3 className="font-semibold">Mercury</h3>
            </div>
            <div className="bg-indigo-600 p-4 rounded-lg hover:bg-indigo-500 transition">
              <Image src="/images/venus.jpg" alt="Venus" width={80} height={80} className="mx-auto mb-2" />
              <h3 className="font-semibold">Venus</h3>
            </div>
            <div className="bg-indigo-600 p-4 rounded-lg hover:bg-indigo-500 transition">
              <Image src="/images/mars.jpg" alt="Mars" width={80} height={80} className="mx-auto mb-2" />
              <h3 className="font-semibold">Mars</h3>
            </div>
            <div className="bg-indigo-600 p-4 rounded-lg hover:bg-indigo-500 transition">
              <Image src="/images/jupiter.jpg" alt="Jupiter" width={80} height={80} className="mx-auto mb-2" />
              <h3 className="font-semibold">Jupiter</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-white text-gray-800 py-20 px-4" onClick={handleSectionClick}>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Discover Your Destiny?</h2>
          <p className="text-lg sm:text-xl mb-8">Book a personalized astrology reading today and start your journey toward self-discovery.</p>
          <button className="bg-indigo-700 text-white py-3 px-6 rounded-full font-semibold hover:bg-indigo-800 transition">Book a Reading</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">&copy; 2024 Astrology Services. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6">
            <Link href="#">
              <span className="text-gray-400 hover:text-white">Facebook</span>
            </Link>
            <Link href="#">
              <span className="text-gray-400 hover:text-white">Twitter</span>
            </Link>
            <Link href="#">
              <span className="text-gray-400 hover:text-white">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
