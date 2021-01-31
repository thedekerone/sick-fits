import Head from "next/head";

const Meta = ({ title = "Sick Fits!" }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link rel="stylesheet" href="/static/nprogress.css" type="text/css" />
    <title>{title}</title>
  </Head>
);

export default Meta;
