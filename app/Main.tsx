import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image'
import SimpleChatWidget from '@/components/SimpleChatWidget'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="relative mb-10 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-px shadow-lg">
        <div className="relative flex flex-col items-center justify-center space-y-6 rounded-xl bg-white px-8 py-12 dark:bg-gray-900">
          <div className="absolute top-0 left-0 h-full w-full bg-white/20 dark:bg-black/20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white dark:border-gray-800">
                <Image
                  src={`${process.env.BASE_PATH || ''}/static/images/avatar.jpg`}
                  alt="avatar"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <h1 className="mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
              你好，我是 Billy
            </h1>
            <p className="mt-4 max-w-2xl text-center text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              我是一名热爱技术和创新的开发者，喜欢探索前沿技术并分享我的发现和心得。
              这个博客记录了我的技术旅程和生活点滴。
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:from-indigo-600 hover:to-purple-600 focus:ring-4 focus:ring-purple-200 focus:outline-none dark:focus:ring-purple-800"
              >
                了解更多
              </Link>
              <Link
                href="/blog"
                className="inline-block rounded-lg bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 transition-all hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 focus:outline-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                浏览博客
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            最新文章
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && '暂无文章。'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">发布于</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`阅读更多: "${title}"`}
                        >
                          阅读更多 &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="所有文章"
          >
            所有文章 &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
      <SimpleChatWidget />
    </>
  )
}
