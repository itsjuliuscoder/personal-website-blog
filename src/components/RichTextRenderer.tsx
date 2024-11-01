import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, Document, Block, Inline, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';
import { RichTextContent } from '@/types/contentful';

interface RichTextRendererProps {
  content: RichTextContent;
}

const CUSTOM_MARKS = {
  SUPERSCRIPT: 'superscript',
  SUBSCRIPT: 'subscript',
};

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
  const options: Options = {
    renderMark: {
      [MARKS.CODE]: (text: React.ReactNode) => {
        return (
          <pre className="bg-gray-900 p-6 rounded-lg overflow-x-auto shadow-md">
            <code className="text-white text-sm font-[family-name:var(--font-geist-roboto-mono)]">{text}</code>
          </pre>
        );
      }, 
      [CUSTOM_MARKS.SUPERSCRIPT]: (text: React.ReactNode) => {return(<sup>{text}</sup>)},
      [CUSTOM_MARKS.SUBSCRIPT]: (text: React.ReactNode) => {return(<sub>{text}</sub>)},
      [MARKS.BOLD]: (text: React.ReactNode) => {return(<strong>{text}</strong>)},
      [MARKS.ITALIC]: (text: React.ReactNode) => {return(<em>{text}</em>)},
      [MARKS.UNDERLINE]: (text: React.ReactNode) => {return(<u>{text}</u>)},
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => (
        <p className="p-1 text-md font-[family-name:var(--font-geist-raleway)]">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => <h1 className="text-4xl mt-2 font-bold mb-4 font-[family-name:var(--font-geist-poppins)]">{children}</h1>,
      [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => <h2 className="text-3xl mt-2 font-bold mb-3 font-[family-name:var(--font-geist-poppins)]">{children}</h2>,
      [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => <h3 className="text-2xl mt-[2em] font-bold mb-2 font-[family-name:var(--font-geist-poppins)]">{children}</h3>,
      [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => <h4 className="text-2xl font-bold mb-2 font-[family-name:var(--font-geist-poppins)]">{children}</h4>,
      [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => <ul className="list-disc pl-5 mb-2 font-[family-name:var(--font-geist-poppins)]">{children}</ul>,
      [BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => <ol className="list-decimal pl-5 mb-2 font-[family-name:var(--font-geist-poppins)]">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node: Block | Inline, children: React.ReactNode) => <li className="mb-1 font-[family-name:var(--font-geist-poppins)]">{children}</li>,
      [BLOCKS.QUOTE]: (node: Block | Inline, children: React.ReactNode) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4 font-[family-name:var(--font-geist-nunito)]">{children}</blockquote>,
      [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => {
        const uri = node.data.uri as string;
        return (
          <Link href={uri} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="text-black-500 underline font-bold">
              {children}
            </a>
          </Link>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
        const { file, height, width, description } = (node as Block).data.target.fields;
        
        return (
          <Image
            src={`https:${file.url}`}
            alt={description || 'Embedded asset'}
            width={width || 1000}
            height={height || 500}
            className="mt-4 mb-4"
          />
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
        const entry = (node as Block).data.target;
        const codeContent = (node as Block).data.target.fields.code;
        switch (entry.sys.contentType.sys.id) {
          case 'codeBlock':
            return (
              <pre className="bg-gray-900 p-6 rounded-lg overflow-x-auto shadow-md">
                <code className="text-white text-sm font-mono">{codeContent}</code>
              </pre>
            );
          case 'videoEmbed':
            return (
              <iframe
                width="560"
                height="315"
                src={entry.fields.embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            );
          default:
            return null;
        }
      },
    },
  };

  return <>{documentToReactComponents(content as Document, options)}</>;
};

export default RichTextRenderer;
