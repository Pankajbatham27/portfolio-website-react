import Body from '@/components/Layout/Body/Body'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Crafting Digital Solutions: Full Stack Developer Portfolio | Coding Rights</title>
        <meta name="description" content="Welcome to my Full Stack Developer Portfolio! I am a skilled and passionate professional, adept at building cutting-edge web applications using React.js, PHP, AWS, Postgres database, REST API, HTML, CSS, and JavaScript. With a keen eye for detail and a focus on user experience, I create seamless and responsive websites. Explore my projects and discover how I leverage my expertise to bring innovative solutions to life. Let's connect and discuss how I can contribute to your next project while ensuring SEO best practices are implemented for maximum online visibility." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Body />
      </main>
    </>
  )
}
