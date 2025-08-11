// app/layout.js
import MainFooter from "@/shared/footer/MainFooter";
import MainNavigationBar from "@/shared/navigationBar/MainNavigationBar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.fikiara.com"),
  title: {
    default: "Fikiara – Where Gold Grows from Knowledge.",
    template: "%s | Fikiara",
  },
  description:
    "Fikiara is a platform for learning and personal transformation through books, videos, and courses inspired by many types books.",
  keywords: [
    "Fikiara", "Books", "Videos", "Courses", "Quran learning", "Life transformation",
    "Islamic courses", "Personal development", "Self-improvement", "Knowledge", "Online learning",
    "fikiara.com", "fikiara books", "fikiara videos", "fikiara courses"
  ],
  authors: [{ name: "Fikiara", url: "https://www.fikiara.com" }],
  creator: "Fikiara",
  publisher: "Fikiara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fikiara.com",
    siteName: "Fikiara",
    title: "Fikiara – Transform Your Life with Knowledge",
    description: "Books, Videos & Courses for personal transformation, inspired by the Qur’an.",
    images: [
      {
        url: "https://www.fikiara.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fikiara – চিন্তা বদলালে জীবন বদলায়।",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FikiaraOfficial",
    creator: "@FikiaraOfficial",
    title: "Fikiara – Transform Your Life with Knowledge",
    description: "Books, Videos & Courses for personal transformation.",
    images: ["https://www.fikiara.com/og-image.jpg"],
  },
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

// Auto Dynamic Sitemap Generator
export async function generateSitemap() {
  const baseUrl = "https://www.fikiara.com";

  const [books, videos, courses] = await Promise.all([
    fetch(`${baseUrl}/api/books`).then((res) => res.json()),
    fetch(`${baseUrl}/api/videos`).then((res) => res.json()),
    fetch(`${baseUrl}/api/courses`).then((res) => res.json()),
  ]);

  const staticPages = ["", "/books", "/videos", "/courses"];

  return [
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
}

// Robots.txt
export const robots = () => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: "https://www.fikiara.com/sitemap.xml",
});

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
        <link rel="icon" href="/favicon.ico" />
        {/* Schema.org JSON-LD */}
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="w-full absolute z-40">
          <MainNavigationBar />
        </div>
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
