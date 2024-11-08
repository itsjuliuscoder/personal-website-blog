import Link from "next/link";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import { Metadata } from "next";
import { createClient, Asset, Entry, EntrySkeletonType } from "contentful";

interface PresentationFields {
    title: string;
    description: string;
    file: Asset; // Assuming the file is an Asset type in Contentful
    slug: string; // Added slug field
    location: string;
}

interface Presentation extends EntrySkeletonType {
    contentTypeId: 'talks';
    fields: PresentationFields;
}


// Update to use a function for metadata generation
export const generateMetadata = (): Metadata => { // Fixed syntax
    return {
        title: "Talks | Julius Olajumoke", 
        description: "Tech Talks by Julius Olajumoke",
    }
};

const Page = async () => {

    // Create Contentful client
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    // Fetch all presentations from Contentful
    const presentations = await client.getEntries<Presentation>({
        content_type: 'talks', // Changed from 'talks' to 'presentation'
    });

    // console.log(`This is the location ${JSON.stringify(presentations.items[0].fields.location)}`)
    
    return(
        <div className="p-4 md:p-[7em]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full mb-4">
                <div className="lg:mt-[2em] mt-[1em] w-full lg:w-3/5">  
                    <h2 className="text-left text-lg font-[800] font-[family-name:var(--font-geist-playfair)] text-[38px] md:text-[38px]">Talks</h2>
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
                            <Link href="/projects" className="text-black">
                            Projects
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[5em]">
                
            {presentations.items.map((presentation) => {
                const pres = presentation as Entry<Presentation>; // Type assertion
                return (
                    <div className="text-black" key={pres.sys.id}>
                        <div className="text-[13px] font-[family-name:var(--font-geist-lora)]"></div>
                        <span className="flex items-center gap-1 w-full">
                            <div className="text-[14px]"><FaMapMarkerAlt /> </div>
                            <div className="text-[13px] font-[family-name:var(--font-geist-lora)]">{String(pres.fields.location)}</div>
                        </span>
                        <h2 className="text-[16px] font-[700] mt-2 font-[family-name:var(--font-geist-poppins)]">
                            <Link href={`/talks/${pres.fields.slug}`}>{String(pres.fields.title)}</Link>
                        </h2>
                        <p className="text-[13px] font-[family-name:var(--font-geist-lora)]">{String(pres.fields.description)}</p>
                    </div>
                );
            })}
                
            </div>
        </div>
    )

}

export default Page
