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
    id: "EN",
    name: "Eita Nawaji",
    role: "Developer",
    bio: "data-analytics, data-enginering, data-scientist, machine-learning",
    avatarSrc: "/avatars/nawajie.png",
    sources: ["https://qiita.com/21EN/feed"],
  },
  {
    id: "rrih",
    name: "Ryohei Kawahara",
    role: "Developer",
    bio: "origami",
    avatarSrc: "/avatars/rrih.png",
    sources: [
      "https://zenn.dev/ro/feed",
      "https://qiita.com/rrih/feed",
    ],
    githubUsername: "rrih",
  },
  {
    id: "TTT00x",
    name: "Mariko Suga",
    role: "Developer",
    bio: "front-end",
    avatarSrc: "/avatars/TTT00x.jpg",
    sources: ["https://qiita.com/TTT00x/feed"],
  },
  {
    id: "tora96",
    name: "Ryo Kobashiri",
    role: "Developer",
    bio: "anonymous",
    avatarSrc: "/avatars/tora96.png",
    sources: ["https://zenn.dev/tora96/feed"],
  },
  {
    id: "fafafa",
    name: "59k",
    role: "Developer",
    bio: "anonymous",
    avatarSrc: "/avatars/59k.jpeg",
    sources: ["https://zenn.dev/fafafa/feed"],
  },
  {
    id: "katahira_k",
    name: "Keita Katahira",
    role: "Developer",
    bio: "Rails / Vue / React",
    avatarSrc: "/avatars/katahira_k.jpg",
    sources: ["https://zenn.dev/katahira_k/feed"],
  },
  {
    id: "masa5555",
    name: "Nemoto Masaya",
    role: "Developer",
    bio: "front-end, back-end",
    avatarSrc: "/avatars/masa5555.png",
    sources: ["https://zenn.dev/ms5", "https://qiita.com/ms5"]
  }
];
