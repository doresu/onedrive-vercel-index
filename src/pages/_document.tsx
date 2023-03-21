import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="OneDrive Vercel Index" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
        <div className="container">
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-547B8LWE66"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-547B8LWE66');
        `}
      </Script>
    </div>
  )
}
          <script
   async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
 />
 <script
          dangerouslySetInnerHTML={{
            __html: `
               (adsbygoogle = window.adsbygoogle || []).push({
                   google_ad_client: "ca-pub-5843859428103999",
                   enable_page_level_ads: true
              });
                `
          }}
 />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
