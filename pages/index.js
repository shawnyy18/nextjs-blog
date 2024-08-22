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
        <hr></hr>
        <h1>Future Cybersecurity Professional</h1>
        <p> an irregular I.T student of University of the Assumption who has a passion for tech stuff, especially the cybersecurity field. My favorite music is more on RNB and HipHop. For foods, I like spicy dishes.  </p>
        <p>
        </p>
        
        <h3>Why did you take up IT?</h3>
          <p>I took this course because my patience is so high when it comes to some computer or software problems. That's why I think I will excel in this industry.</p>
          <h3>What career do you see yourself exploring after graduation?
</h3>
          <p> I want to explore the field of hacking and cybersecurity and I think I will try my best to get the CompTIA Security+ for more opportunities.

      </p>
      <h3>What do you expect to learn in this subject?</h3>
        <p>I guess I’ll expect the architecture of a web or an app design system, and more fundamentals and tips for reactjs. </p>

          <h3>What topics you want to be discussed in this subject?</h3>
            <p>For me, useful tools that we can use and benefit for the long-term. At the same time, I just want us to learn something so that even if we leave or completed the semester there is something that will be special for us students in this subject</p>

      <hr></hr>
        <h2>Hobbies</h2>

          <ul>
            <li><p>Watching Educational Videos</p></li>
            <li><p>Travelling</p></li>
            <li><p>Reading</p></li>
          </ul>
          <hr></hr>
          <h2>Technologies I Use</h2>
          <ul>
            <li><p>HTML</p></li>
            <li><p>CSS</p></li>
            <li><p>JavaScript</p></li>
            <li><p>VSCode</p></li>
          </ul>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}