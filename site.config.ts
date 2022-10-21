export const config = {
  siteMeta: {
    title: "HowTelevision Tech Blog Hub",
    teamName: "HowTelevision",
    description: "ハウテレビジョンのメンバーで作るテックブログです",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://tech.howtelevision.co.jp"
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
