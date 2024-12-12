import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, Block, Inline, MARKS, INLINES } from '@contentful/rich-text-types';
import { RichTextContent } from '@/types/contentful';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from "next/image";
import Link from 'next/link';

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
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto whitespace-pre-wrap sm:whitespace-pre max-w-full">
            <code className="p-3 text-sm leading-5 block">{text}</code>
          </pre>
        );
      },
      [CUSTOM_MARKS.SUPERSCRIPT]: (text: React.ReactNode) => <sup>{text}</sup>,
      [CUSTOM_MARKS.SUBSCRIPT]: (text: React.ReactNode) => <sub>{text}</sub>,
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => (
        <p className="pt-2 mt-1 text-md font-[family-name:var(--font-geist-poppins)]">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => (
        <h1 className="text-4xl mt-2 font-bold mb-4 font-[family-name:var(--font-geist-poppins)] break-words">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => (
        <h2 className="text-3xl mt-[3em] font-bold mb-3 font-[family-name:var(--font-geist-poppins)] break-words">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => (
        <h3 className="text-2xl mt-[2em] font-bold mb-2 font-[family-name:var(--font-geist-poppins)] break-words">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => (
        <h4 className="text-2xl font-bold mb-2 mt-2 font-[family-name:var(--font-geist-poppins)] break-words">{children}</h4>
      ),
      [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
        <ul className="list-disc pl-5 mb-2 font-[family-name:var(--font-geist-poppins)] break-words">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
        <ol className="list-decimal pl-5 mb-2 pt-[2em] font-[family-name:var(--font-geist-poppins)] break-words">{children}</ol>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
        const { file, title } = node.data.target.fields;
        return (
          <div className="my-4">
            <Image
              src={`https:${file.url}`}
              alt={title}
              width={file.details.image.width}
              height={file.details.image.height}
              className="w-full h-auto"
            />
          </div>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
        const entry = (node as Block).data.target;
        const codeContent = (node as Block).data.target.fields.code;
        switch (entry.sys.contentType.sys.id) {
          case 'codeBlock':
            return (
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto max-w-full">
                <code className="text-xs md:text-sm leading-5 whitespace-pre">
                  {codeContent}
                </code>
              </pre>
            );
          case 'videoEmbed':
            return (
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={entry.fields.embedUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            );
          default:
            return null;
        }
      },
      [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => (
        <Link href={node.data.uri} legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="text-gray-800 underline">
            {children}
          </a>
        </Link>
      )
    },
  };

  return <div className="prose max-w-none">{documentToReactComponents(content as Document, options)}</div>;
};

export default RichTextRenderer;