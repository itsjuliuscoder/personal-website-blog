// app/page.tsx
import Link from "next/link";
import moment from 'moment';
import { getAllPosts, getAllPresentation, getAllProjects } from '../lib/api'; // Your data-fetching function
import { BlogPost, Presentation, Projects } from '../types/contentful';
import SocialMediaIcons from '@/components/SocialMediaIcons';
import { FaMapMarkerAlt } from "react-icons/fa";

export default async function Home() {
  const posts: BlogPost[] = await getAllPosts(); // Fetch data directly
  const presentations: Presentation[] = await getAllPresentation();
  const projects: Projects[] = await getAllProjects();
  // console.log(`Posts here ${JSON.stringify(presentations)}`)

  return (
    <div className="p-4 md:p-[7em]">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mb-4">   */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full mb-4">
            <div className="lg:mt-[2em] mt-[1em] w-full lg:w-3/5"> 
                <h2 className="text-left font-[800] font-[family-name:var(--font-geist-playfair)] text-[38px] md:text-[42px]">Julius Olajumoke</h2>
                <p className="text-left color-[#000] text-md text-[15px] md:text-[17px] font-[400] font-[family-name:(--font-geist-lora)] mt-[12px]">...intersection between technology and humanity.</p>  
            </div>
            <div className="w-full lg:w-3/5 mt-[4em]"> 
              <ul className="list-none font-[family-name:var(--font-geist-nunito)]">
                <li className="inline-block mr-8">
                  <Link href="/knowledge-stack" className="text-black">
                    Knowledge Stack
                  </Link>
                </li>
                <li className="inline-block mr-8">
                  <Link href="/stories" className="text-black">
                    Writing
                  </Link>
                </li>
                <li className="inline-block mr-8">
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
        <div className="mt-6 mb-3">
            <h5 className="font-[family-name:var(--font-geist-lora)] text-[14px]">About Me</h5>
            <p className="text-[18px] lg:text-[22px] font-[family-name:var(--font-geist-lora)] font-[500] w-full lg:w-2/5">
              I’m a Software Engineer based in Lagos, Nigeria, with a passion for writing software, crafting compelling stories, exploring new places, and honing my French-speaking skills.
            </p>
            <SocialMediaIcons />
        </div>
        <hr className="block lg:hidden border-t-2 border-gray-300 my-4 mt-[2em]" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-[5em]">
            <div className="text-left">
              <h4 className="text-[22px] md:text-[25px] font-[900] font-[family-name:var(--font-geist-raleway)]">Stories</h4>
              {posts.map((post) => (
                <div key={post.sys.id} className="mt-[1em]">
                  <h5 className="text-[16px] font-[700] mt-2 font-[family-name:var(--font-geist-poppins)]">
                    <Link href={`/stories/${post.slug}`}>{String(post.title)}</Link>
                  </h5>
                  <h6 className="text-[13px] italic font-[family-name:var(--font-geist-lora)]">
                    {String(moment(post.sys.createdAt).format('MMMM Do, YYYY'))}
                  </h6>
                </div>
              ))}
              
              <div className="mt-[1em] text-[14px] font-[family-name:var(--font-geist-lora)]"><Link href="/stories">...view all {`${posts.length}`} stories.</Link></div>
              
            </div>
            
            
            {/* Column 2 */}
            <div className="text-[24px]">
              <h4 className="text-[22px] md:text-[25px] font-[900] font-[family-name:var(--font-geist-raleway)]">Projects</h4>
              {projects.map((project) => (
              <div key={project.slug} className="mt-1">
                <h5 className="text-[16px] font-[900] mt-2 font-[family-name:var(--font-geist-poppins)]"><Link href="/">{project.title}</Link></h5>
                <p className="text-[13px] font-[family-name:var(--font-geist-lora)] w-64">{String(project.excerpt)}</p>
                <h6 className="text-[13px] font-[600] font-[family-name:var(--font-geist-lora)]"><Link href={`${project.source}`} legacyBehavior><a target="_blank" rel="noopener noreferrer">Link or Source</a></Link></h6>
              </div>
              ))}
            </div>
            
            {/* Column 3 */}
            <div className="text-[24px]">
              <h4 className="text-[22px] md:text-[25px] font-[900] font-[family-name:var(--font-geist-raleway)]">Talks</h4>
              {presentations.map((pres) => {
                // const pres = presentation as Entry<Presentation>; // Type assertion
                return (
                    <div className="text-black" key={pres.document.sys.id}>
                        <div className="text-[13px] font-[family-name:var(--font-geist-lora)]"></div>
                        <span className="flex items-center gap-1 w-full">
                            <div className="text-[14px]"><FaMapMarkerAlt /> </div>
                            <div className="text-[13px] font-[family-name:var(--font-geist-lora)]">{String(pres.location)}</div>
                        </span>
                        <h2 className="text-[16px] font-[700] mt-2 font-[family-name:var(--font-geist-poppins)]">
                            <Link href={`/talks/${pres.slug}`}>{String(pres.title)}</Link>
                        </h2>
                        <p className="text-[13px] font-[family-name:var(--font-geist-lora)]">{String(pres.description)}</p>
                        <p className="text-[12px] font-[800] font-[family-name:var(--font-geist-lora)]">{String(moment(pres.eventDate).format('MMMM Do, YYYY'))}</p>
                    </div>
                );
            })}
              
            </div>
        </div>
    </div>
  );
}
