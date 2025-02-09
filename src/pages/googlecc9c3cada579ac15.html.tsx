export const config = {
  unstable_runtimeJS: false,
};

export default function GoogleVerification() {
  return 'google-site-verification: googlecc9c3cada579ac15.html';
}

export function getStaticProps() {
  return {
    props: {},
  };
}
