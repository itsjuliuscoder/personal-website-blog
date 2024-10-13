import Link from "next/link";
import { getBlogPosts } from "@/lib/contentful/client";
import { FaArrowLeft } from "react-icons/fa";
import { Metadata } from "next";


// Update to use a function for metadata generation
export const generateMetadata = (): Metadata => { // Fixed syntax
    return {
        title: "Talks | Julius Olajumoke", 
        description: "Default description",
    }
};

const Page = async () => {
    const posts = await getBlogPosts();
    // console.log(`Posts goes here ${JSON.stringify(posts)}`)
    return(
        <div className="p-4 md:p-[7em]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mb-4">
                <div className="md:mt-[2em] mt-[1em] w-full md:w-3/5"> 
                    <h2 className="text-left text-lg font-[800] font-[family-name:var(--font-geist-playfair)] text-[38px] md:text-[38px]">Stories</h2>
                </div>
                <div className="md:w-2/5 mt-[3em]">
                    <ul className="flex list-none font-[family-name:var(--font-geist-nunito)]">
                        <li className="inline-block mr-12">
                        <Link href="/" className="text-black flex">
                        <FaArrowLeft className="mt-1 font-[100]" />&nbsp;Home
                        </Link>
                        </li>
                        <li className="inline-block mr-12">
                            <Link href="/projects" className="text-black">
                            Projects
                            </Link>
                        </li>
                        <li className="inline-block">
                        <Link href="/talks" className="text-black">
                            Talks
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[5em]">
                
            {posts.map((post) => (
                <div className="text-black p-4" key={post.sys.id}>
                    <h2 className="text-[16px] font-[700] mt-2 font-[family-name:var(--font-geist-poppins)]"><Link href={`/stories/${post.fields.slug}`}>{String(post.fields.title)}</Link></h2>
                    <p className="text-[13px] italic font-[family-name:var(--font-geist-lora)]">{String(post.fields.excerpt)}</p>
                    {/* <div dangerouslySetInnerHTML={{ __html: post.fields.body }} /> */}
                </div>
            ))}
                
            </div>
        </div>
    )

}

export default Page
