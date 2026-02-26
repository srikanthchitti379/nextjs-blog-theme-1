import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';

export default function LovePage() {
  const globalData = {
    name: "Srikanth",
    blogTitle: "For My Nidhi ❤️",
    footerText: "Made with love ❤️"
  };

  return (
    <Layout>
      <SEO 
        title="For My Nidhi ❤️" 
        description="A special message from my heart" 
      />

      <Header name={globalData.name} />

      <main className="w-full flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="mb-10 text-4xl lg:text-6xl font-bold">
          ❤️ For My Nidhi ❤️
        </h1>

        <div className="max-w-3xl space-y-8 text-lg lg:text-xl leading-relaxed">
          <p>
            Nidhi, from the day you entered my life, everything started feeling 
            brighter and more meaningful. Your smile has a way of calming my 
            storms, and just thinking about you makes my ordinary days feel 
            special.
          </p>

          <p>
            I may not always express my feelings perfectly, but please know that 
            you truly matter to me. Your voice, your thoughts, your little 
            reactions — they stay with me throughout the day. No matter how busy 
            life gets, my heart quietly remembers you.
          </p>

          <p>
            I just want you to know that you are not just someone I like — 
            you are someone I deeply care about. I hope we continue to create 
            beautiful memories together, filled with laughter, understanding, 
            and love. You mean more to me than words can fully explain. ❤️
          </p>
        </div>
      </main>

      <Footer copyrightText={globalData.footerText} />

      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}
