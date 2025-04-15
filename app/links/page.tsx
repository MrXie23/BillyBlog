import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: '链接' })

type LinkItemProps = {
  title: string
  description: string
  website: string
  image?: string
}

const LinkCard = ({ title, description, website, image }: LinkItemProps) => (
  <div className="group relative">
    <div className="transition-all duration-300 hover:scale-105">
      <div className="absolute h-full w-full rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-1 opacity-70 blur-xl filter group-hover:opacity-100"></div>
      <Link
        href={website}
        aria-label={`Link to ${title}`}
        className="relative flex h-full flex-col justify-between rounded-xl bg-white p-6 dark:bg-gray-800"
      >
        <div className="space-y-2">
          <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="prose max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        <div className="text-base leading-6 font-medium">
          <span className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            访问网站 &rarr;
          </span>
        </div>
      </Link>
    </div>
  </div>
)

const links: LinkItemProps[] = [
  {
    title: '个人网站',
    description: '我的个人主页',
    website: 'https://example.com',
    image: '/static/images/links/website.jpg',
  },
  {
    title: 'GitHub',
    description: '我的开源项目',
    website: 'https://github.com',
    image: '/static/images/links/github.jpg',
  },
  {
    title: '掘金',
    description: '技术文章分享',
    website: 'https://juejin.cn',
    image: '/static/images/links/juejin.jpg',
  },
  {
    title: '知乎',
    description: '我的知乎主页',
    website: 'https://zhihu.com',
    image: '/static/images/links/zhihu.jpg',
  },
]

export default function LinksPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            链接
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            我的各种网站和社交媒体链接
          </p>
        </div>
        <div className="container py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {links.map((link) => (
              <LinkCard key={link.title} {...link} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
