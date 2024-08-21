import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Future Cybersecurity Professional</h1>
        <p> an irregular I.T student of University of the Assumption who has a passion for tech stuff, especially the cybersecurity field. My favorite music is more on RNB and HipHop. For foods, I like spicy dishes.</p>
        <p>
        </p>
        <h2>Hobbies</h2>

          <ul>
            <li><p>Watching Educational Videos</p></li>
            <li><p>Travelling</p></li>
            <li><p>Reading</p></li>
          </ul>
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}