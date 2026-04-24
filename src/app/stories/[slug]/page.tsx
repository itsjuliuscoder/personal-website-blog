import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { getPostBySlug } from "@/lib/api";
import RichTextRenderer from "@/components/RichTextRenderer";
import Image from 'next/image';
import moment from 'moment';
import { siteConfig } from "@/lib/seo";
import { ArticleJsonLd } from "@/components/JsonLd";

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return { title: "Story Not Found" };
    }

    const title = String(post.title);
    const description = String(post.excerpt);
    const coverImageUrl = post.coverImage
        ? `https:${post.coverImage.fields.file.url}`
        : undefined;

    return {
        title,
        description,
        alternates: { canonical: `${siteConfig.url}/stories/${params.slug}` },
        openGraph: {
            title,
            description,
            url: `${siteConfig.url}/stories/${params.slug}`,
            type: "article",
            publishedTime: post.sys.createdAt,
            authors: [siteConfig.name],
            ...(coverImageUrl && {
                images: [{ url: coverImageUrl, width: 800, height: 400, alt: title }],
            }),
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            ...(coverImageUrl && { images: [coverImageUrl] }),
        },
    };
};

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = await getPostBySlug(slug);
    
    
    
    if (!post) {
        return <h1>Post not found</h1>;
    }

    // console.log(`This is the post ${JSON.stringify(post.author.sys.createdAt)} here!`)

    // console.log(`This is the post image https:${post.coverImage ? ((post.coverImage.fields.file.url)): ""}`)
   
    return (
        <div className="legacyPage">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mb-4">
                <div className="md:mt-[2em] mt-[1em] w-full"> 
                    <span className="flex">
                        <Link href="/" className="text-foreground flex">
                            <FaArrowLeft className="mt-1 font-[100]" />&nbsp;Home
                        </Link>
                    </span>
                </div>
            </div>

            {/* Adjust the layout for mobile to be full width */}
            <div className="grid md:w-1/2 gap-4 mt-[5em]">
                <div className="flex">
                    <div className="p-4 max-w-full mx-auto">
                        {post.coverImage && (
                            <Image
                                src={`https:${post.coverImage.fields.file.url}`}
                                alt={post.coverImage.fields.title} // Updated to access fields.title
                                width={800}
                                height={400}
                                className="mb-8 w-full object-cover"
                            />
                        )}
                        <ArticleJsonLd
                            title={String(post.title)}
                            description={String(post.excerpt)}
                            publishedAt={post.sys.createdAt}
                            slug={slug}
                            imageUrl={post.coverImage ? `https:${post.coverImage.fields.file.url}` : undefined}
                        />
                        <h2 className="text-left text-[clamp(24px,4vw,42px)] font-medium font-sans leading-tight">
                            {String(post.title)}
                        </h2>
                        <p className="mb-4 mt-2 font-mono text-xs text-text-tertiary">{String(moment(post.sys.createdAt).format('MMMM Do, YYYY'))}</p>
                        <RichTextRenderer content={post.content} /> 
                    </div>
                </div>
                <div className="flex">
                </div>
            </div>
        </div>
    );
}
