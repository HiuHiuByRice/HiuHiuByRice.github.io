# Post Layout And Publishing

This blog does not need any extra registration step for posts.

If a markdown file is placed inside `src/content/posts/` and:

- `draft: false`
- the frontmatter is valid
- the first category is one of `Research`, `CTF - Writeup`, or `Techniques`

then the post will appear automatically on the website.

## 1. File location

You can place posts anywhere inside:

```text
src/content/posts/
```

Examples:

```text
src/content/posts/research/unsafe-unlink-notes.md
src/content/posts/ctf/bksec-pwn01-writeup.md
src/content/posts/techniques/fsop-basics.md
```

## 2. Research post template

```yaml
---
title: Unsafe Unlink Notes
published: 2026-07-06
updated:
description: "Research notes about unsafe unlink and heap metadata corruption."
cover: ""
category:
  - Research
  - Heap
tags:
  - Heap
  - Linux
draft: false
lang: ""
---
```

## 3. CTF - Writeup post template

```yaml
---
title: BKSEC Pwn01 Writeup
published: 2026-07-06
updated:
description: "A pwn challenge writeup."
cover: ""
category:
  - CTF - Writeup
  - Heap
tags:
  - CTF
  - Heap
  - Linux
draft: false
lang: ""
---
```

## 4. Techniques post template

```yaml
---
title: FSOP Basics
published: 2026-07-06
updated:
description: "Reusable exploitation notes."
cover: ""
category:
  - Techniques
  - Fmtstr
tags:
  - Fmtstr
  - Linux
draft: false
lang: ""
---
```

## 5. Important rule

The first item inside `category` decides which main tab the post belongs to:

- `Research` -> shows in the `Research` tab
- `CTF - Writeup` -> shows in the `CTF - Writeup` tab
- `Techniques` -> shows in the `Techniques` tab

If the first category line is different, the post will not appear in the expected tab.

## 6. Markdown body example

```md
# Overview

This is the post content.

## Environment

- Ubuntu 22.04
- glibc 2.35

## Bug

Describe the bug here.

## Exploitation

Describe the exploitation flow here.
```

## 7. How to publish a post

1. Create the markdown file in `src/content/posts/`.
2. Paste the correct frontmatter.
3. Write the markdown content below it.
4. Make sure `draft: false`.
5. Run `npm run dev`.
6. Open the matching tab on the website.

No extra config is required.
