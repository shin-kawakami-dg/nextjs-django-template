# nextjs-django-template

Next.js と Django のテンプレートレポジトリです。

## 🧸 フロントエンド

### 概要

Next.js + TailwindCSS で構成されておりルートディレクトリは`apps/frontend`です。<br>
下記のコマンドの実行で、`localhost:3000`で起動します。

```
npm install
npm run dev
```

### Lint & Format

下記のコマンドで Lint や Format を実行できます。

```
npm run lint           # Lintチェック
npm run format:check   # Formatチェック
npm run format:fix     # Format自動修正
```

### テスト

下記のコマンドで Playwright によるテストを実行できます。

```
npm run test        # E2EテストとVRTテストを実行
npm run test:e2e    # E2Eテストのみを実行
npm run test:vrt    # VRTテストのみを実行
```

テスト環境は`Desktop Chrome`と`Mobile Webkit(iPhone15)`です。

> [!NOTE]
> 環境差分をなくすためにテストは Docker 上で実行されます。<br>
> Docker が起動していない場合エラーになるので注意してください。

## 🤖 バックエンド

### 概要

Django で構成されておりルートディレクトリは`apps/backend`です。<br>
uv を使用して Python と Python パッケージの管理を行っているため、下記コマンドの実行で、`localhost:8000`で起動します。

```
uv sync
uv run manage.py runserver
```

### Lint & Format

下記コマンドを実行することで Lint や Format を実行できます。

```
docker compose up -d
```

```
uvx ruff check            # Lintチェック
uvx ruff format --check   # Formatチェック
uvx ruff format           # Format自動修正
```

### DB との接続

DB との接続設定は環境変数で定義します。<br>
[apps/backend/.env.example](https://github.com/shin-kawakami-dg/nextjs-django-template/blob/main/apps/backend/.env.example)を参考に`.env`を作成して起動してください。<br>
DB は後述の`infra/local-db`を使用することで Docker で起動することができます。

## ✈️ インフラ

### local-db

下記コマンドの実行でローカル開発時の DB を起動することができます。<br>
なお、設定は[infra/local-db/.env.example]()を参考に`.env`を作成してください。<br>

> [!WARNING]
> DB の設定は Django 側の DB 設定と合わせるようにしてください。

## 💻 VSCode

`.vscode/extensions.json`で recommendations を設定しているため、本プロジェクトを開くと推奨の拡張機能が表示されます。<br>
基本的にはすべてインストールすることをお勧めします。<br>
なお、`vscode/settings.json`は個人のプロジェクト設定と競合する可能性があるため含めていませが、推奨設定は下記のとおりです。<br>

```json
{
  "eslint.useFlatConfig": true,
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[python]": {
    "editor.tabSize": 4,
    "editor.defaultFormatter": "charliermarsh.ruff"
  }
}
```
