import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { getPresentationSlug } from "@/lib/api";
// import { BlogPost } from "@/types/contentful";

// Update to use a function for metadata generation
export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
    const presentation = await getPresentationSlug(params.slug);

    return {
        title: presentation ? String(presentation.title) : "Default Title", // Use post title or a default
        description: presentation ? String(presentation.description) : "Default description", // Use post description or a default
    };
};

export default async function Talks({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const presentation = await getPresentationSlug(slug);

    if (!presentation) {
        return <h1>Presentation not found</h1>;
    }

    const { title, document } = presentation; // Adjusted destructuring

    // console.log(`This is my presentation ${JSON.stringify(presentation)}`)


    if (!document) {
        return <h1>File not found</h1>; // Handle case where file is undefined
    }

    const fileUrl = document.fields.file.url; // Now safe to access url

    return (
        // ... existing code ...
        <div className="md:w-full h-screen mt-0"> {/* Adjusted to cover full height */}
            <div className="flex h-full"> {/* Added full height to the flex container */}
                <div className="prose max-w-none w-full h-full"> {/* Set width and height to full */}
                    <iframe
                        src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(`https:${fileUrl}`)}`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title={title}
                    />
                    <Link href="/talks" className="absolute top-4 left-4 z-10 flex items-center bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">
                        <FaArrowLeft className="mr-2" /> {/* Added arrow back icon */}
                        Back to Talks
                    </Link> {/* Positioned link */}
                </div>
            </div>
        </div>
    );
}
