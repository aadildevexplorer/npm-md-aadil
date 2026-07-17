# md-aadil

A lightweight and easy-to-use slugify utility for Node.js that converts any text into a clean, SEO-friendly URL slug.

---

## ✨ Features

- 🚀 Lightweight and fast
- 🔗 Converts text into SEO-friendly slugs
- 🔠 Automatically converts to lowercase
- ✂️ Removes extra spaces
- 🧹 Removes special characters
- 🌍 Supports accented characters (e.g. Café → cafe)
- 📦 Zero dependencies

---

## 📦 Installation

```bash
npm install md-aadil
```

---

## 🚀 Usage

```javascript
const slugify = require("md-aadil");

console.log(slugify("Hello World"));
// hello-world

console.log(slugify("Node.js & Express"));
// nodejs-express

console.log(slugify("Mohammad Aadil"));
// mohammad-aadil

console.log(slugify(" Café Déjà Vu "));
// cafe-deja-vu
```

---

## 📌 Examples

| Input | Output |
|-------|--------|
| `Hello World` | `hello-world` |
| `Node.js & Express` | `nodejs-express` |
| `MongoDB + React` | `mongodb-react` |
| `Mohammad Aadil` | `mohammad-aadil` |
| ` Café Déjà Vu ` | `cafe-deja-vu` |

---

## 📖 API

### slugify(text)

Converts any string into a clean, SEO-friendly slug.

### Parameters

| Parameter | Type | Required |
|-----------|------|----------|
| `text` | `string` | ✅ |

### Returns

```text
string
```

---

## Example

```javascript
const slugify = require("md-aadil");

const slug = slugify("My First Blog Post");

console.log(slug);
```

Output

```text
my-first-blog-post
```

---

## 💡 Common Use Cases

- Blog URLs
- Product URLs
- SEO-friendly links
- CMS applications
- E-commerce websites
- Dynamic routing
- Static site generators

---

## 🛠 Version

Current Version

```
1.0.5
```

---

## 📄 License

MIT License

Copyright (c) 2026 Mohammad Aadil

---

## 👨‍💻 Author

**Mohammad Aadil**

GitHub: https://github.com/aadildevexplorer/npm-md-aadil

npm: https://www.npmjs.com/package/md-aadil