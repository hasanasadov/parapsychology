/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://parapsychology.az",
  generateRobotsTxt: true, // robots.txt faylını avtomatik yaradır
  sitemapSize: 5000, // sitemap faylında maksimal URL sayı, default 5000
  changefreq: "daily", // axtarış motorlarına URL-lərin nə vaxt dəyişə biləcəyini bildirir
  priority: 0.7, // URL-lərin önəm səviyyəsi (0-1 arası)
  exclude: ["/secret-page", "/admin/*"], // sitemapdan URL-ləri çıxartmaq üçün
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", disallow: ["/secret-page"] },
    ],
    additionalSitemaps: [
      "https://parapsychology.az/my-custom-sitemap-1.xml",
      "https://parapsychology.az/my-custom-sitemap-2.xml",
    ],
  },
};
