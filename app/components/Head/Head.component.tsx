import React from 'react';
import Head from 'next/head';

const HeadFilled: React.FC = () => {
  return (
    <Head>
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      {/* <link rel="manifest" href="/manifest.json" /> */}
      {/* <link
        href="/icons/icon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/icons/icon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      /> */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />
      <title>Humboldt.</title>
    </Head>
  );
};

export default HeadFilled;
