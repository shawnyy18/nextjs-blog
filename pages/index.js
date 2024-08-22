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
        <h1>Web Designer</h1>
        <p> I am Kristofer Khurt de Dote, currently a 3rd Year College student in the field of Information Technology (irregular student), I live in Moras dela Paz, Sto. Tomas, Pampanga, I'm 22 years old,  my hobbies are playing games, learning some new languages, editing some video (newbie), playing basketball, more traveling because I like seeing new places, and watching movies; my favourite musics it depends on my mood but more like local musics and rnb songs. </p>
        <p>
        </p>
        
        <h3>Why did you take up IT?</h3>
          <p>Because I want to be a Web designer just like my other friends who are working on Manila and I like to learn more about the technology and computers
          .</p>
          <h3>What career do you see yourself exploring after graduation?
</h3>
          <p> Maybe taking some basic jobs and gain experience so that if I am applying for Manila I have experience 
          .

      </p>
      <h3>What do you expect to learn in this subject?</h3>
        <p>Some integrated systems and more on designing and to manage system effectively . </p>

          <h3>What topics you want to be discussed in this subject?</h3>
            <p>The integrations strategies and techniques, Security and privacy considerations, maintenance problem and hands on projects. 
            </p>

      
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}