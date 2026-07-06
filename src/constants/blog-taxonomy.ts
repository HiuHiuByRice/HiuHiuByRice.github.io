export const BLOG_ROOT_CATEGORIES = [
    "Research",
    "CTF - Writeup",
    "Techniques",
] as const;

export type BlogRootCategory = typeof BLOG_ROOT_CATEGORIES[number];

export const DEFAULT_POST_TAGS = [
    "CTF",
    "Heap",
    "Fmtstr",
    "Bof",
    "Kernel",
    "Windows",
    "Linux",
] as const;

export const BLOG_SECTION_PAGES = [
    {
        title: "Research",
        slug: "research",
        icon: "material-symbols:book-2-outline-rounded",
        description: "Research notes and vulnerability documentation.",
        intro: "A place for vulnerability research notes, bug analysis, and longer technical documentation.",
    },
    {
        title: "CTF - Writeup",
        slug: "ctf-writeup",
        icon: "material-symbols:flag-outline-rounded",
        description: "Pwn writeups from CTF competitions.",
        intro: "Writeups for pwn challenges, exploitation paths, and lessons learned from CTFs.",
    },
    {
        title: "Techniques",
        slug: "techniques",
        icon: "material-symbols:psychology",
        description: "Reusable pwn techniques and exploitation notes.",
        intro: "A notebook for reusable pwn ideas, exploit patterns, and technical snippets worth keeping.",
    },
] as const;
