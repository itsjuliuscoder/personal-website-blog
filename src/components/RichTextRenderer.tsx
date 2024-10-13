import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, Document, Block, Inline } from '@contentful/rich-text-types';
import Image from 'next/image';
import { RichTextContent } from '@/types/contentful';

interface RichTextRendererProps {
  content: RichTextContent;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => <p className="mb-4 font-[family-name:var(--font-geist-poppins)]">{children}</p>,
      [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => <h1 className="text-4xl font-bold mb-4 font-[family-name:var(--font-geist-playfair)]">{children}</h1>,
      [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => <h2 className="text-3xl font-bold mb-3 font-[family-name:var(--font-geist-playfair)]">{children}</h2>,
      [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => <h3 className="text-2xl font-bold mb-2 font-[family-name:var(--font-geist-playfair)]">{children}</h3>,
      [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => <ul className="list-disc pl-5 mb-4 font-[family-name:var(--font-geist-poppins)]">{children}</ul>,
      [BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => <ol className="list-decimal pl-5 mb-4 font-[family-name:var(--font-geist-poppins)]">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node: Block | Inline, children: React.ReactNode) => <li className="mb-1 font-[family-name:var(--font-geist-poppins)]">{children}</li>,
      [BLOCKS.QUOTE]: (node: Block | Inline, children: React.ReactNode) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4 font-[family-name:var(--font-geist-nunito)]">{children}</blockquote>,
      [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => {
        const { uri } = (node as Inline).data;
        return <a href={uri} className="text-blue-500 hover:underline">{children}</a>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
        const { file, height, width, description } = (node as Block).data.target.fields;
        
        return (
          <Image
            src={`https://${file.url}`}
            alt={description || 'Embedded asset'}
            width={width || 500}
            height={height || 300}
            className="mb-4"
          />
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
        const entry = (node as Block).data.target;
        switch (entry.sys.contentType.sys.id) {
          case 'codeBlock':
            return (
              <pre className="bg-gray-100 p-4 rounded">
                <code>{entry.fields.code}</code>
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
      }
    },
    
  };

  return <>{documentToReactComponents(content as Document, options)}</>;
};

export default RichTextRenderer;
