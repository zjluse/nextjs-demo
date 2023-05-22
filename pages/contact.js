import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../components/contact/contact-form';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const data = await getContent();

//   if (!data) {
//     return {
//       notFound: true
//       // redirect: {
//       //   destination: '/',
//       //   permanent: false
//       // }
//     };
//   }

//   return {
//     props: { data }
//   };
// }

export default ContactPage;
