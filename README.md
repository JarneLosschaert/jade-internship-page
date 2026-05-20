# My internship at COSH! — interactive one-pager

A single scrolling page that tells the internship story as a **timeline ("lifeline")**.
Each photo on the line is a chapter — **click a photo** and its full story opens.

No coding knowledge needed to update it. Everything you'll want to change lives in
**one file**: `js/content.js`.

---

## ▶ See it on your computer

Just **double-click `index.html`**. It opens in your web browser. That's it.
(Every time you change something, save the file and refresh the browser page.)

---

## ✏️ Change the words

1. Open `js/content.js` with any text editor (Notepad works, but
   [VS Code](https://code.visualstudio.com/) is nicer and free).
2. Find the text you want to change — it's always between `"quotes"`.
3. Change the words, but **keep the quotes** and the **comma** at the end of the line.
4. Save, then refresh the browser.

The very top of that file has the page title and intro. Below that, each story is one
block starting with a comment like `/* ===== 2. FASHION REVOLUTION WEEK ===== */`.

---

## 🖼️ Change or add a photo

All photos live in the `images/` folder, sorted into one folder per story:

```
images/
  intro/                     ← Introduction
  fashion-revolution-week/   ← story 2
  digital-product-passport/  ← story 3
  competitor-analysis/       ← story 4
  personal-development/      ← story 5
  critical-reflection/       ← story 6
```

**To swap a photo:** drop your new image into the right folder, then in `js/content.js`
write its file name. For example:

```js
cover: "images/intro/team.png",
```

- `cover` = the photo shown on the line.
- `gallery` = the extra photos shown inside the opened story (a list you can grow).

> Tip: capital letters and the file ending (`.png` / `.jpeg`) must match exactly.
> Smaller image files make the page load faster.

---

## ➕ Add a whole new story to the line

In `js/content.js`, inside `stories: [ ... ]`:

1. Copy one full story block — everything from `{` to `},`.
2. Paste it where you want it in the list (order on the page = order in the file).
3. Change the words and the photo.

To **remove** a story, delete its whole `{ ... },` block.
The line and the numbers (1, 2, 3…) update automatically.

---

## 🎨 Change the colours

Open `css/styles.css`. Right at the top, under `:root`, you'll see the colour list
(from the project colour scheme). Change a value to re-skin the whole page:

```css
--blue:       #274DEA;   /* the winding line + links */
--light-blue: #8EB9FC;
--mint:       #EBFFDC;
--yellow:     #FFF197;
--red:        #FF513D;
```

Each story can use a different bubble colour with `accent:` in `js/content.js`
(`"yellow"`, `"red"`, `"lightblue"`, `"blue"` or `"mint"`).

---

## 🌐 Put it online for free (no domain needed)

The easiest way is **Netlify Drop**:

1. Go to **https://app.netlify.com/drop**
2. Drag the **whole project folder** onto the page.
3. Wait a few seconds — you get a free link like `your-page.netlify.app`. Done!

To update it later, drag the folder again (or make a free account so the link stays the
same). The `_source` and `.claude` folders can stay in — they're just ignored.

**Other free options that work exactly the same way** (drag-and-drop a folder):
[Cloudflare Pages](https://pages.cloudflare.com/) and
[GitHub Pages](https://pages.github.com/). Netlify Drop is the quickest to start.

---

## 🆘 Something looks broken?

If the page goes blank after you edited `js/content.js`, you probably deleted a
`"quote"`, a `,` comma, or a `{ }` bracket by accident. Press **Ctrl + Z** to undo your
last change and refresh.

---

## What's in the project

| Folder / file      | What it is                                             |
|--------------------|--------------------------------------------------------|
| `index.html`       | The page itself (you rarely touch this).               |
| `js/content.js`    | **All the text and which photos to show — edit here.** |
| `js/main.js`       | The code that builds the timeline (no need to edit).   |
| `css/styles.css`   | Colours, fonts and the look.                           |
| `images/`          | All photos, one folder per story.                      |
| `_source/`         | Original report PDF, colour scheme & inspiration (kept for reference, not shown on the page). |
