export const config = {
  siteMeta: {
    title: "HowTelevision Tech Blog Hub",
    teamName: "HowTelevision",
    description: "ハウテレビジョンのメンバーで作るテックブログです",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://howtelevision.co.jp/",
    },
    {
      title: "GitHub",
      href: "https://github.com/howtv/tech-blog",
    },
  ],
};
