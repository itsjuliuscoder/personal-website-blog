import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { getPostBySlug } from "@/lib/api";
import RichTextRenderer from "@/components/RichTextRenderer";
// import { BlogPost } from "@/types/contentful";
import Image from 'next/image';

// interface Document {
    
// }

// Update to use a function for metadata generation
export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
    console.log(`This is params ${JSON.stringify(params)}`)
    const post = await getPostBySlug(params.slug);
    // console.log(`This is post ${JSON.stringify(post)}`)
   // console.log(`This is the post image ${JSON.stringify(post ? (post?.coverImage?.fields?.file?.url): "Here I go")}`)

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
   
    return (
        <div className="p-4 md:p-[7em]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mb-4">
                <div className="md:mt-[2em] mt-[1em] w-full md:w-3/5"> 
                    <span className="flex">
                        <Link href="/" className="text-black flex">
                            <FaArrowLeft className="mt-1 font-[100]" />&nbsp;Home
                        </Link>
                    </span>
                </div>
                <div className="md:w-2/5 mt-[3em]">
                    {/* Additional links can be added here */}
                </div>
            </div>
            <div className="grid w-1/2 gap-4 mt-[5em]">
                <div className="flex">
                {/* Rich Text Content */}
                {/* <div className="prose max-w-none">
                    {documentToReactComponents(post.content)}
                </div> */}
                <div className="prose max-w-none">
                    {post.coverImage && post.coverImage && (
                        <Image
                        src={`https://${post.coverImage.fields.file.url}`}
                        alt={post.coverImage.fields.title} // Updated to access fields.title
                        width={800}
                        height={400}
                        className="mb-8"
                        />
                    )}
                    <h2 className="mb-[1em] text-left text-lg font-[600] font-[family-name:var(--font-geist-poppins)] leading-[38px] text-[42px] md:text-[42px]">
                        {String(post.title)}
                    </h2>
                    <RichTextRenderer content={post.content} /> 
                </div>
                </div>
                <div className="flex">
                    {/* <Image
                        src={`https:${coverImage?.fields?.file.url}`}
                        alt="Description of the image"
                        width={1000}
                        heigt
                    /> */}
                </div>
                {/* <div className="flex ">
                   <p>{String(author?.fields?.name)}</p> 
                </div>
                 */}
               
            </div>
        </div>
    );
}
