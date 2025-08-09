export default async function sitemap() {
  const baseUrl = "https://fikiara.com";

  // Example dynamic content URLs
  const books = ["/books/book-1", "/books/book-2"];
  const videos = ["/videos/video-1", "/videos/video-2"];
  const courses = ["/courses/course-1", "/courses/course-2"];

  const staticPages = ["", "/about", "/contact"].map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  const dynamicPages = [...books, ...videos, ...courses].map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...dynamicPages];
}
