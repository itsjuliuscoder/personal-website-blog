import Image from 'next/image'

const contentfulLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = props => {
 
  return <Image 
                loader={contentfulLoader} 
                alt={props.alt || 'Default alt text'} 
                src={props.src || 'default-image-url.jpg'}
                {...props}
                width={400}
                height={200}
                />
}

export default ContentfulImage
