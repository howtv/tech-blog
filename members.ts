import { Member } from "@src/types";

export const members: Member[] = [
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
    sources: ["https://qiita.com/Syoitu/feed"],
    // excludeUrlRegex: "n3a59e3cdd820",
    // twitterUsername: "catnose99",
  },
];
