// app/layout.js  (Next.js 13+ App Router)
import MainFooter from "@/shared/footer/MainFooter";
import MainNavigationBar from "@/shared/navigationBar/MainNavigationBar";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.fikiara.com"),
  title: {
    default: "Fikiara – Where Gold Grows from Knowledge.",
    template: "%s | Fikiara",
  },
  description:
    "Fikiara is a platform for learning and personal transformation through books, videos, and courses inspired by many types books.",
  keywords: [
    "Fikiara",
    "Quran learning",
    "Life transformation",
    "Islamic courses",
    "Personal development",
    "Book learning platform",
    "Video courses",
    "Online education",
    "Spiritual growth",
    "Knowledge",
    "Self-improvement",
    "Islamic teachings",
    "Quranic studies",
    "Online learning",
    "E-learning",
    "Quranic education",
    "Islamic knowledge",
    "Transformative learning",
    "Quranic wisdom",
    "Islamic personal development",
    "Quranic life lessons",
    "Quranic teachings",
    "fikiara",
    "fikiara.com",
    "fikiara books",
    "fikiara videos",
    "fikiara courses",
    "fikiara learning",
    "fikiara education",
    "fikiara online courses",
    "fikiara personal growth",
    "fikiara spiritual growth",
    "fikiara self-improvement",
    "fikiara knowledge",
    "fikiara Quran",
    "fikiara Islamic education",
    "fikiara Quranic studies",
    "fikiara Quranic wisdom",
    "fikiara Quranic teachings",
    "fikiara Quranic life lessons",
    "fikiara Quranic personal development",
    "fikiara Quranic education",
    "fikiara Quranic learning",
  ],
  authors: [{ name: "Fikiara", url: "https://www.fikiara.com" }],
  creator: "Fikiara",
  publisher: "Fikiara",

  // Open Graph (Facebook, Instagram, TikTok, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fikiara.com",
    siteName: "Fikiara",
    title: "Fikiara – Transform Your Life with Knowledge",
    description:
      "Books, Videos & Courses for personal transformation, inspired by the Qur’an.",
    images: [
      {
        url: "https://www.fikiara.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fikiara – চিন্তা বদলালে জীবন বদলায়।",
      },
    ],
  },

  // Twitter Card (works also for YouTube sharing)
  twitter: {
    card: "summary_large_image",
    site: "@FikiaraOfficial",
    creator: "@FikiaraOfficial",
    title: "Fikiara – Transform Your Life with Knowledge",
    description: "Books, Videos & Courses for personal transformation.",
    images: ["https://www.fikiara.com/og-image.jpg"],
  },

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.fikiara.com",
  },
};

// Dynamic sitemap & robots.txt
export async function generateSitemap() {
  const baseUrl = "https://www.fikiara.com";

  // এখানে Books, Videos, Courses ডাইনামিক ডেটা ধরছে
  const books = await fetch(`${baseUrl}/api/books`).then((res) => res.json());
  const videos = await fetch(`${baseUrl}/api/videos`).then((res) => res.json());
  const courses = await fetch(`${baseUrl}/api/courses`).then((res) =>
    res.json()
  );

  const staticPages = ["", "/books", "/videos", "/courses"];

  const urls = [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
    })),
    ...books.map((book) => ({
      url: `${baseUrl}/books/${book.slug}`,
      lastModified: new Date(book.updatedAt),
    })),
    ...videos.map((video) => ({
      url: `${baseUrl}/videos/${video.slug}`,
      lastModified: new Date(video.updatedAt),
    })),
    ...courses.map((course) => ({
      url: `${baseUrl}/courses/${course.slug}`,
      lastModified: new Date(course.updatedAt),
    })),
  ];

  return urls;
}

export const robots = () => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: "https://www.fikiara.com/sitemap.xml",
});

// Google Search Console Verification
export default function RootLayout({ children }) {
  const headersList = headers();
  const currentUrl = headersList.get("x-url") || "https://www.fikiara.com";

  return (
    <html lang="en">
      <head>
        {/* Google Search Console */}

        <meta
          name="google-site-verification"
          content="UUMrfZueowRoy1izs0c_aXKUtn2LYYkNJbf2N9i3uhA"
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />

        {/* Schema.org JSON-LD for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fikiara",
              url: "https://www.fikiara.com",
              logo: "https://www.fikiara.com/logo.png",
              sameAs: [
                "https://www.facebook.com/fikiaraofficial",
                "https://www.instagram.com/fikiaraofficial",
                "https://www.tiktok.com/@fikiaraofficial",
                "https://www.youtube.com/@fikiaraofficial",
              ],
            }),
          }}
        />
      </head>
      <body>
        <MainNavigationBar />
        {children}
        <MainFooter />
        {/* TikTok Pixel */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie"];
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.instance=function(t){var e=ttq._i[t]||[];return{on:ttq.on,once:ttq.once,off:ttq.off,track:ttq.track,page:ttq.page,identify:ttq.identify,alias:ttq.alias,group:ttq.group,ready:ttq.ready}};
              ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js";
              ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r;var i=d.createElement("script");
              i.type="text/javascript",i.async=!0,i.src=r+"?sdkid="+e+"&lib="+t;
              var o=d.getElementsByTagName("script")[0];o.parentNode.insertBefore(i,o)};
              ttq.load('YOUR_TIKTOK_PIXEL_ID');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      </body>
    </html>
  );
}
