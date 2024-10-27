import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { getPostBySlug } from "@/lib/api";
import RichTextRenderer from "@/components/RichTextRenderer";
import Image from 'next/image';


// Update to use a function for metadata generation
export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
    console.log(`This is params ${JSON.stringify(params)}`)
    const post = await getPostBySlug(params.slug);

    return {
        title: post ? String(post.title) : "Default Title", // Use post title or a default
        description: post ? String(post.excerpt) : "Default description", // Use post description or a default
    };
};

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = await getPostBySlug(slug);
    
    
    
    if (!post) {
        return <h1>Post not found</h1>;
    }

    // console.log(`This is the post ${JSON.stringify(post)} here!`)

    // console.log(`This is the post image https:${post.coverImage ? ((post.coverImage.fields.file.url)): ""}`)
   
    return (
        <div className="p-4 md:px-[7em] md:py-[5em]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mb-4">
                <div className="md:mt-[2em] mt-[1em] w-full"> 
                    <span className="flex">
                        <Link href="/" className="text-black flex">
                            <FaArrowLeft className="mt-1 font-[100]" />&nbsp;Home
                        </Link>
                    </span>
                </div>
            </div>

            {/* Adjust the layout for mobile to be full width */}
            <div className="grid md:w-1/2 gap-4 mt-[5em]">
                <div className="flex">
                    <div className="prose max-w-none w-full">
                        {post.coverImage && (
                            <Image
                                src={`https:${post.coverImage.fields.file.url}`}
                                alt={post.coverImage.fields.title} // Updated to access fields.title
                                width={800}
                                height={400}
                                className="mb-8 w-full object-cover"
                            />
                        )}
                        <h2 className="mb-[1em] text-left text-lg font-[600] font-[family-name:var(--font-geist-poppins)] leading-[38px] text-[42px] md:text-[42px]">
                            {String(post.title)}
                        </h2>
                        <RichTextRenderer content={post.content} /> 
                    </div>
                </div>
                <div className="flex">
                </div>
            </div>
        </div>
    );
}
