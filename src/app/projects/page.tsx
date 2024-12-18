import Link from "next/link";
import { getAllProjects } from "@/lib/api";
import { FaArrowLeft } from "react-icons/fa";
import { Metadata } from "next";


// Update to use a function for metadata generation
export const generateMetadata = (): Metadata => { // Fixed syntax
    return {
        title: "Projects | Julius Olajumoke", 
        description: "Projects by Julius Olajumoke",
    }
};

export const revalidate = 360; // Revalidate every 360 seconds

const Page = async () => {
    const projects = await getAllProjects();
    // console.log(`Posts goes here ${JSON.stringify(posts)}`)
    return(
        <div className="p-4 md:p-[7em]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full mb-4">
                <div className="lg:mt-[2em] mt-[1em] w-full lg:w-3/5"> 
                    <h2 className="text-left font-[800] font-[family-name:var(--font-geist-playfair)] text-[38px] md:text-[42px]">Projects</h2>
                </div>
                <div className="w-full lg:w-3/5 mt-[4em]">
                    <ul className="flex list-none font-[family-name:var(--font-geist-nunito)]">
                        <li className="inline-block mr-5">
                            <Link href="/" className="text-black flex">
                            <FaArrowLeft className="mt-1 font-[100]" />&nbsp;Home
                            </Link>
                        </li>
                        <li className="inline-block mr-5">
                            <Link href="/knowledge-stack" className="text-black">
                                Knowledge Stack
                            </Link>
                        </li>
                        <li className="inline-block mr-5">
                            <Link href="/stories" className="text-black">
                                Stories
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
                
            {projects.map((project) => (
                <div className="text-black p-4" key={project.slug}>
                    <h2 className="text-[16px] font-[700] mt-2 font-[family-name:var(--font-geist-poppins)]">{String(project.title)}</h2>
                    <p className="text-[13px] italic font-[family-name:var(--font-geist-lora)]">{String(project.excerpt)}</p>
                    <h6 className="text-[13px] font-[600] font-[family-name:var(--font-geist-lora)]"><Link href={`${project.source}`} legacyBehavior><a target="_blank" rel="noopener noreferrer">Link or Source</a></Link></h6>
                    {/* <div dangerouslySetInnerHTML={{ __html: post.fields.body }} /> */}
                </div>
            ))}
                
            </div>
        </div>
    )

}

export default Page
