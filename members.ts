import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "howtelevision",
    name: " Howtelevision",
    avatarSrc: "/avatars/howtelevision.png",
    sources: [
      "https://blog.howtelevision.co.jp/feed",
    ],
    twitterUsername: "howtelevision",
    githubUsername: "howtv",
  },
  {
    id: "kentrino",
    name: " Kento Haneda",
    role: "CTO",
    bio:
      "KotlinとかTypeScriptとかRustが好きなCTO",
    avatarSrc: "/avatars/kentrino.png",
    sources: [
      "https://qiita.com/kentrino/feed",
      "https://zenn.dev/kentrino/feed",
    ],
    // includeUrlRegex: "medium.com|zenn.dev",
    twitterUsername: "_kentrino",
    githubUsername: "kentrino",
    // websiteUrl: "https://catnose99.com",
    excludeUrlRegex: "530b50b0edfd1da40aea"
  },
  {
    id: "syoitu",
    name: "Syoitu Den",
    role: "Developer",
    bio: "Hedgehog.",
    avatarSrc: "/avatars/syoitu.png",
    sources: [
      "https://qiita.com/Syoitu/feed",
      "https://zenn.dev/pyhrinezumi/feed",
    ],
    // excludeUrlRegex: "n3a59e3cdd820",
    // twitterUsername: "catnose99",
  },
  {
    id: "MSHR-Dec",
    name: "Masahiro Ogawa",
    role: "Developer",
    bio: "SRE",
    avatarSrc: "/avatars/MSHR-Dec.png",
    sources: [
      "https://zenn.dev/mshr_dec/feed",
      "https://qiita.com/MSHR-Dec/feed"
    ],
  },
  {
    id: "EN",
    name: "Eita Nawaji",
    role: "Developer",
    bio: "data-analytics, data-enginering, data-scientist, machine-learning",
    avatarSrc: "/avatars/nawajie.png",
    sources: ["https://qiita.com/21EN/feed"],
  }
];
