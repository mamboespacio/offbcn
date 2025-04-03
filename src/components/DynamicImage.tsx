import Image from 'next/image'

// import { cn } from '@/lib/utils'
import { getImage } from '@/lib/getImages'

export default async function DynamicImage({
  url,
  alt,
  // containerClass
}: {
  url: string
  alt?: string
  // containerClass?: string
}) {
  const { base64, img } = await getImage(url)

  return (
    <div className='relative'>
      <Image
        {...img}
        alt={alt || ''}
        placeholder='blur'
        blurDataURL={base64}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
    </div>
  )
}