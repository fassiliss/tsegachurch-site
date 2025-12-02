/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.geecn.org",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: "weekly",
    priority: 0.8,
    exclude: ["/admin/*", "/api/*", "/private/*"],
    robotsTxtOptions: {
        additionalSitemaps: [
            "https://www.geecn.org/sitemap.xml",
            "https://www.geecn.org/sitemap-0.xml",
        ],
    },
};
