interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Why My Wife Yelling at me',
    description: `一款利用人工智能技术创建的幽默AI应用，用户只需输入你做了什么，AI老婆就会痛骂你并且给出原因`,
    imgSrc: '/static/images/wmwfy.png',
    href: 'https://www.whymywifeyell.com/',
  },
  {
    title: 'Credit Card Generator',
    description: `一款工具类网站，用来生成测试使用的信用卡账号及相关信息`,
    imgSrc: '/static/images/credit.png',
    href: 'https://www.creditscardgenerator.com/',
  },
  {
    title: 'Waste Time Game',
    description: `一款游戏网站，主要功能是提供一些非常无聊的小游戏`,
    imgSrc: '/static/images/wastetimegame.png',
    href: 'https://wastetimegame.com/',
  },
]

export default projectsData
