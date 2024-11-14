import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { getAllKnowledgeStacks } from "@/lib/api";
import { Knowledge } from "@/types/contentful";
import { Metadata } from "next";


// Update to use a function for metadata generation
export const generateMetadata = (): Metadata => { // Fixed syntax
    return {
        title: "Knowledge Stack | Julius Olajumoke", 
        description: "My Knowledge Repository by Julius Olajumoke",
    }
};

const  Page = async () => {

    // const knowledge = 
    const knowledge: Knowledge[] = await getAllKnowledgeStacks();
    
    return (
        <>
            <div className="p-4 md:p-[7em]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mb-4">
                    <div className="md:mt-[2em] mt-[1em] w-full md:w-3/5"> 
                        <h2 className="text-left text-lg font-[800] font-[family-name:var(--font-geist-playfair)] text-[38px] md:text-[38px]">Knowledge Stack</h2>
                        <p className="text-left color-[#000] text-md text-[15px] md:text-[17px] font-[400] font-[family-name:(--font-geist-lora)] mt-[1em]">...my repository of useful information on the internet.</p>
                    </div>
                    <div className="md:w-3/5 mt-[3em]">
                        <ul className="flex list-none font-[family-name:var(--font-geist-nunito)]">
                            <li className="inline-block mr-12">
                            <Link href="/" className="text-black flex">
                            <FaArrowLeft className="mt-1 font-[100]" />&nbsp;Home
                            </Link>
                            </li>
                            <li className="inline-block mr-12">
                                <Link href="/stories" className="text-black">
                                Stories
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
                <div className="grid md:w-1/2 gap-4 mt-[5em]">
                {knowledge.map((post) => (
                    <ul key={post.sys.id} className="list-disc pl-5 space-y-2">
                        <li className="text-black-500 xt-[16px] font-[family-name:var(--font-geist-poppins)]">
                            {post.type == "link" ? <Link href={`${post.url}`} className="underline" legacyBehavior><a target="_blank" className="underline" rel="noopener noreferrer">{post.title}</a></Link> : <h4 className="text-[16px] font-[family-name:var(--font-geist-poppins)]"> {post.title}</h4> }
                        </li>
                    </ul>
                ))}
                </div>
            </div>
        </>
    );
}

export default Page