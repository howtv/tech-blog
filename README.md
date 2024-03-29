# [Team Blog Hub](https://tech.howtelevision.co.jp/)

ブログのRSSのURLを登録することで、チームメンバーの投稿を一覧にまとめて表示します。
Zenn、Qiita、Medium、note、はてなブログなど、RSSフィードを取得できるサイトであれば、メンバーは好きな場所に投稿できます。
## Usage

### 自分のブログやアカウントを登録する

[member.ts](./members.ts) に追加します。

```typescript
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
    twitterUsername: "_kentrino",
    githubUsername: "kentrino",
    excludeUrlRegex: "530b50b0edfd1da40aea"
  },
```

登録したい項目のみで OK です。

## Requirements

- Node.js
- Yarn

## Optional
- nodenv
  - `Node.js 16.15.1`で動作確認取れているため nodenv で固定すると良いかもです

## Development

```bash
mkdir -p "$(nodenv root)/plugins"
git clone https://github.com/pine/nodenv-yarn-install.git "$(nodenv root)/plugins/nodenv-yarn-install"
nodenv install 16.15.1
nodenv local 16.15.1
yarn install
yarn build
yarn dev
```

## Deployment

Netlify

`main` ブランチへのコミットが自動反映されます。

## Credit

[catnose](https://github.com/catnose99)

## Licence

MIT

## References

- [チーム個々人のテックブログをRSSで集約するサイトを作った](https://zenn.dev/catnose99/articles/cb72a73368a547756862)
