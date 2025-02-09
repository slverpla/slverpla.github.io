// Add correct content type header
import type { GetServerSidePropsContext } from 'next';

export default function GoogleVerification() {
  return 'google-site-verification: googlecc9c3cada579ac15.html';
}

export function getServerSideProps({ res }: GetServerSidePropsContext) {
  res.setHeader('Content-Type', 'text/html');
  return { props: {} };
}
