import { BLOG_ROOT_CATEGORIES } from "@constants/blog-taxonomy";
import { getCategoryPathParts } from "@utils/category";
import { getSortedPosts } from "./post";


export interface DirectoryNode {
    name: string;
    type: "folder" | "file";
    url?: string;
    children?: DirectoryNode[];
}

const SECTION_URL_MAP: Record<(typeof BLOG_ROOT_CATEGORIES)[number], string> = {
    "Research": "/research/",
    "CTF - Writeup": "/ctf-writeup/",
    "Techniques": "/techniques/",
};

export async function getDirectoryTree(): Promise<DirectoryNode[]> {
    const posts = await getSortedPosts();

    const sectionNodes: DirectoryNode[] = BLOG_ROOT_CATEGORIES.map((category) => {
        const children = posts
            .filter((post) => {
                if (post.data.draft) return false;
                const categoryParts = getCategoryPathParts(post.data.category);
                return categoryParts?.[0] === category;
            })
            .map((post) => ({
                name: post.data.title,
                type: "file" as const,
                url: `/posts/${post.id}/`,
            }));

        return {
            name: category,
            type: "folder" as const,
            url: SECTION_URL_MAP[category],
            children,
        };
    });

    return [
        ...sectionNodes,
        {
            name: "About",
            type: "file",
            url: "/about/",
        },
    ];
}
