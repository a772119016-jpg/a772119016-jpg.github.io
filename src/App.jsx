import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BrainCircuit,
  Layers3,
  Mail,
  Palette,
  PenTool,
} from 'lucide-react'
import BorderGlow from './BorderGlow'

const profile = {
  name: '叶德建',
  roles: ['视觉设计师', 'AI 设计师', '品牌设计师'],
  email: 'a772119016@qq.com',
  phone: '15158838938',
  wechat: 'ooo55667788',
  city: '杭州',
  education: '本科（浙江传媒学院）',
  intro:
    '我叫叶德建，长期服务于品牌视觉、活动主视觉、电商大促与商业物料设计，擅长把品牌识别、3D 视觉、AI 工具与落地执行结合起来。曾参与天猫双 11、618、51 狂欢节、方特动漫展、企业 VI 与包装等项目，覆盖从创意构想到 3D 对接、物料延展、模板沉淀和后期交付的完整流程。',
}

const stats = [
  { value: '10+', label: '大型品牌与活动项目' },
  { value: '4', label: '核心工具能力：PS / AI / C4D / AE' },
  { value: '2014', label: '开始商业设计经历' },
  { value: 'B.A.', label: '本科 · 浙江传媒学院' },
]

const experiences = [
  '2014-2017 杭州憬悦品牌策划：VI、LOGO、画册、海报、包装、门店设计',
  '2017-2019 杭州伍方会议服务：客户沟通、活动 KV、活动物料、H5 海报、可复用模板',
  '2019-2020 杭州博彦科技有限公司：天猫大促、商家模板、鲁班 / 鹿班、外包调配',
  '2020-2021 杭州天猫养车：大促、模板、数据分析、模块测试与内容沉淀',
]

const resumeItems = [
  {
    time: '2014 - 2017',
    title: '杭州憬悦品牌策划',
    role: '品牌视觉设计',
    details: ['VI / LOGO 设计', '画册、海报与包装设计', '门店视觉与物料延展', '吉利汽车长期合作设计支持'],
  },
  {
    time: '2017 - 2019',
    title: '杭州伍方会议服务',
    role: '活动视觉设计',
    details: ['客户沟通与内部协作', '活动 KV 与主视觉设计', '活动物料、H5 海报与可复用模板', '会议、发布会与大型活动视觉落地'],
  },
  {
    time: '2019 - 2020',
    title: '杭州博彦科技有限公司',
    role: '电商大促视觉设计',
    details: ['天猫大促与商家模板设计', '鲁班 / 鹿班相关视觉生产', '外包调配与素材审核', '活动页面与模块化模板沉淀'],
  },
  {
    time: '2020 - 2021',
    title: '杭州天猫养车车站',
    role: '运营视觉设计',
    details: ['大促活动与运营模板', '数据分析与模块测试', '内容沉淀与设计复用', '电商活动页面视觉优化'],
  },
]

const resumeSummary = [
  { label: '教育背景', value: '本科 · 浙江传媒学院' },
  { label: '设计方向', value: '品牌视觉 / 活动 KV / 电商大促 / 包装与 VI' },
  { label: '工具能力', value: 'PS / AI / C4D / AE / AI 设计工具' },
  { label: '协作经验', value: '客户沟通、3D 对接、外包调配、模板沉淀、后期交付' },
]

const workInfoByMedia = {
  '/assets/featured/featured-aoxin-kv.mp4': { eventName: '澳新 KV 动态视觉', theme: '活动主视觉动态版' },
  '/assets/featured/featured-refrigeration-expo.png': { eventName: '2025 制冷展', theme: '领慧 AI 未来' },
  '/assets/featured/featured-roundtable.jpg': { eventName: '圆桌派', theme: '探索 AI 圆桌派' },
  '/assets/featured/featured-summary.jpg': { eventName: '2024 年度总结大会', theme: '钻研拼搏' },
  '/assets/featured/featured-dinner-01.png': { eventName: '晚宴主视觉', theme: '约境迹' },
  '/assets/featured/featured-dinner-02.png': { eventName: '晚宴主视觉', theme: '约境迹' },
  '/assets/featured/featured-main-bg.jpg': { eventName: '家电生服新链路发布会', theme: '推出经销新生意' },
  '/assets/featured/featured-kv-01.jpg': { eventName: '浙江省安全应急宣传教育主题交流会', theme: '初心如虹 奋楫前行' },
  '/assets/featured/featured-kv-02.jpg': { eventName: '浙江-阜西亚运年', theme: '浙江-阜西亚运年' },
  '/assets/featured/featured-kv-03.jpg': { eventName: '顾家家居 2024 新品发布会', theme: '智在享受 舒适新生' },
  '/assets/featured/featured-kv-04.jpg': { eventName: '顾家家居 2024 新品发布会', theme: '智在享受 舒适新生' },
  '/assets/featured/featured-kv-05.jpg': { eventName: 'MCN 行业 618 活动', theme: '飞跃 City 闪耀当时' },
  '/assets/featured/featured-kv-06.png': { eventName: 'NETSPRING 2024', theme: '天生要强' },
  '/assets/featured/featured-kv-07.jpg': { eventName: '抖音电商服务商增长会', theme: '全域提效 解码服饰新势能' },
  '/assets/featured/featured-kv-main.jpg': { eventName: '家电生服新链路发布会', theme: '推出经销新生意' },
  '/assets/featured/featured-haers.png': { eventName: '哈尔斯品牌视觉', theme: '德国风尚 入冬视觉' },
  '/assets/featured/featured-final.jpg': { eventName: '文化主题活动', theme: '运河古韵 千年新辉' },
  '/assets/featured/featured-project-01.jpg': { eventName: 'NETSPRING 品牌活动', theme: '不读既无极限 奔赴向上' },

  '/assets/supplement/supp-planet-kv.jpg': { eventName: 'AI 主题峰会', theme: 'AI Transformation Era' },
  '/assets/supplement/supp-final-01.jpg': { eventName: '2023 世界珍珠大会', theme: '2023 世界珍珠大会' },
  '/assets/supplement/supp-org-wide.jpg': { eventName: '2025 新质人工智能产业赋能大会', theme: '新质赋能 共创未来' },
  '/assets/supplement/supp-tongcheng-kv.jpg': { eventName: '同程旅行活动', theme: '多维赋能 创变共生' },
  '/assets/supplement/supp-main-k-final.jpg': { eventName: 'CEO 议题局', theme: '剧有门 国剧 CEO 议题局' },
  '/assets/supplement/supp-final-png.png': { eventName: '智慧物联大会', theme: '智慧物联 直播未来' },
  '/assets/supplement/supp-jiande-congress.jpg': { eventName: '建德人大会', theme: '建德人大会' },
  '/assets/supplement/supp-visual-plan.jpg': { eventName: '学勺节', theme: '学勺节' },
  '/assets/supplement/supp-april-event.jpg': { eventName: 'OSM 欧诗漫精准美白峰会', theme: '因智囿人 精准美白峰会' },
  '/assets/supplement/supp-kv-16x9-01.png': { eventName: '映映肤白皮书发布会', theme: '2024 映映肤白皮书发布会' },
  '/assets/supplement/supp-main-visual-03.jpg': { eventName: '品牌未来发布会', theme: '向未来 赋新生' },
  '/assets/supplement/supp-main-visual-04.jpg': { eventName: '品牌山川主题活动', theme: '自然并蒂 山川共生' },
  '/assets/supplement/supp-dinner-visual.jpg': { eventName: '晚宴主视觉', theme: '主视觉-晚宴' },
  '/assets/supplement/supp-untitled-01.png': { eventName: '行业增长活动', theme: '紧势共振 促冲新峰' },
  '/assets/supplement/supp-kv-05.png': { eventName: '2020 天猫电商大会', theme: '向阳而生 未来可期' },
  '/assets/supplement/supp-kv-07.jpg': { eventName: '品牌活动', theme: '时光纪' },
  '/assets/supplement/supp-kv-08.jpg': { eventName: '鲁光盛宴年味新章', theme: '鲁光盛宴 年味新章' },
  '/assets/supplement/supp-kv-09.jpg': { eventName: '品牌活动', theme: '共倚时光里' },
  '/assets/supplement/supp-kv-10.jpg': { eventName: '品牌发布会', theme: '星之所向 耀启未来' },
  '/assets/supplement/supp-kv-01.png': { eventName: '燃烧主题活动', theme: '燃烧吧' },

  '/assets/supplement2/more-kv-16x9.png': { eventName: '巨量引擎行业活动', theme: '引擎聚能 货品同行' },
  '/assets/supplement2/more-kv-shanghai.jpg': { eventName: '巨量广告代理商风控能力提升·上海站', theme: '创意风控助力' },
  '/assets/supplement2/more-kv-green.jpg': { eventName: '品牌活动', theme: '消费倾向 铺前冲' },
  '/assets/supplement2/more-kv-signage-15.png': { eventName: '品牌活动水牌', theme: '消费倾向 铺前冲' },
  '/assets/supplement2/more-kv-side-screen-02.jpg': { eventName: '品牌活动', theme: '美力觉醒 促启新篇' },
  '/assets/supplement2/more-2kv.jpg': { eventName: '品牌活动', theme: '狂欢派对 FUN 肆精彩' },
  '/assets/supplement2/more-2kv-01.png': { eventName: '夏日零食活动', theme: '食梦零武 来“拼”一夏' },
  '/assets/supplement2/more-2kv-1.jpg': { eventName: '品牌活动', theme: '春润巅峰 旅启新章' },
  '/assets/supplement2/more-3kv.jpg': { eventName: '品牌增长活动', theme: '星品共振 全域增长' },
  '/assets/supplement2/more-kv7.jpg': { eventName: '巨量引擎活动', theme: '引擎聚能 货品同行' },
  '/assets/supplement2/more-kv-04.jpg': { eventName: '2022 Ocean Engine 生态大会', theme: '巨量生意 经营提效' },
  '/assets/supplement2/more-kv-05-jpg.jpg': { eventName: '巨量引擎活动', theme: '驱动增长 智造未来' },
  '/assets/supplement2/more-main-kv2.jpg': { eventName: '2026 山东港世界珍珠大会', theme: '2026 山东港世界珍珠大会' },
  '/assets/supplement2/more-12kv-45x8.jpg': { eventName: '品牌护理活动', theme: '角鲨润护 舒颈前行' },
  '/assets/supplement2/more-kv3.jpg': { eventName: '2024 诗翼发展大会', theme: '2024 诗翼发展大会' },
  '/assets/supplement2/more-main-kv1-1.jpg': { eventName: '2024 食品健康趋势大会', theme: '与食俱进 抢占鲜机' },

  '/assets/supplement3/batch3-kv-04.png': { eventName: '大健康分享会', theme: '满座' },
  '/assets/supplement3/batch3-kv-06.jpg': { eventName: '巨量引擎购物行业双 11 活动', theme: '巨力前行 饰如破竹' },
  '/assets/supplement3/batch3-kv2.jpg': { eventName: '全球家居发展论坛', theme: '数智新生' },
  '/assets/supplement3/batch3-kv2-1.jpg': { eventName: '1024 职场创新日', theme: '1024 职场创新日' },
  '/assets/supplement3/batch3-kv-01-jpg.jpg': { eventName: 'Beauty Industry 38 好物节', theme: '38 女王节' },
  '/assets/supplement3/batch3-kv-final-02.jpg': { eventName: '品牌运营活动', theme: '只角科星 高能运营' },
  '/assets/supplement3/batch3-kv-01-1.jpg': { eventName: '服饰行业 38 好物节', theme: '服饰行业 38 好物节' },
  '/assets/supplement3/batch3-kv-02-jpg.jpg': { eventName: '行业峰会', theme: '数智新生' },
  '/assets/supplement3/batch3-kv-01-png.png': { eventName: '春季焕新活动', theme: '盲享焕新 轻食季省档' },
  '/assets/supplement3/batch3-kv-02-png.png': { eventName: 'Lecco 活动', theme: '不燃怎 YOUNG' },
  '/assets/supplement3/batch3-kv-main-side-02.jpg': { eventName: '品牌服务活动', theme: '服务无界 卓域领航' },
  '/assets/supplement3/batch3-kv1.png': { eventName: '投资大会', theme: '全局经营 洞见未来' },
  '/assets/supplement3/batch3-kv1-1.png': { eventName: 'Nascent 活动', theme: '赋新一步' },

  '/assets/works/work-11.jpg': { eventName: '51 狂欢节', theme: '宅家嗨' },
  '/assets/works/work-20.jpg': { eventName: '方特动漫大新品盛大发布会', theme: 'Fantawild Animation Expo 2018' },
  '/assets/works/work-24.jpg': { eventName: '叶氏哥窑品牌视觉', theme: '叶氏哥窑' },
  '/assets/works/work-25.jpg': { eventName: '叶氏哥窑品牌延展', theme: '延伸' },
  '/assets/works/work-26.jpg': { eventName: '叶氏哥窑品牌延展', theme: '延伸' },
  '/assets/works/work-33.jpg': { eventName: '年度商户峰会', theme: '倒计时海报' },
}

const makeWork = (title, category, media, layout, type) => ({
  title: workInfoByMedia[media]?.theme || title,
  category: workInfoByMedia[media]?.eventName || category,
  desc: '按原始比例完整展示作品，不裁切画面；宽幅和超宽作品会自动占据更多网格列。',
  media,
  ...(layout ? { layout } : {}),
  ...(type ? { type } : {}),
})

const archiveWork = (number, category = '归档作品 / 商业视觉') =>
  makeWork(`作品 ${number}`, category, `/assets/works/work-${number}.jpg`)

const projectGroups = [
  {
    id: 'ecommerce-design',
    title: '电商设计',
    intro: '聚焦大促活动、信息流、运营物料和电商传播视觉，强调信息效率、促销氛围和画面吸引力。',
    items: [
      archiveWork('06', '电商设计 / 活动页面'),
      archiveWork('07', '电商设计 / 活动页面'),
      archiveWork('08', '电商设计 / 活动页面'),
      archiveWork('09', '电商设计 / 活动页面'),
      archiveWork('10', '电商设计 / 活动页面'),
      archiveWork('11', '电商设计 / 51 狂欢节'),
      archiveWork('12', '电商设计 / 活动延展'),
      archiveWork('13', '电商设计 / 信息流'),
      archiveWork('14', '电商设计 / 信息流'),
      archiveWork('15', '电商设计 / 信息流'),
      archiveWork('16', '电商设计 / 运营物料'),
      archiveWork('17', '电商设计 / 运营图标'),
      archiveWork('18', '电商设计 / 长图物料'),
    ],
  },
  {
    id: 'exhibition-design',
    title: '会展设计',
    intro: '整合会议、展会、发布会、论坛、晚宴、主副屏与现场 KV 等视觉，突出舞台感、空间感和主题传播。',
    items: [
      makeWork('7 月 30 日动态视觉', '会展设计 / 竖版动态视觉', '/assets/supplement4/new-exhibition-16.mp4', 'tall', 'video'),
      makeWork('澳新 KV 动态视觉', '会展设计 / 动态 KV', '/assets/featured/featured-aoxin-kv.mp4', null, 'video'),
      makeWork('KV1 方案 01', '会展设计 / 宽幅 KV', '/assets/supplement3/batch3-kv1-1.png', 'wide'),
      makeWork('KV1 宽幅', '会展设计 / 宽幅 KV', '/assets/supplement3/batch3-kv1.png', 'wide'),
      makeWork('品牌项目视觉', '会展设计 / 活动主视觉', '/assets/featured/featured-project-01.jpg'),
      archiveWork('20', '会展设计 / 动漫展会'),
      makeWork('未标题主视觉', '会展设计 / 宽幅 KV', '/assets/supplement/supp-untitled-01.png', 'wide'),
      makeWork('晚宴主视觉', '会展设计 / 超宽晚宴 KV', '/assets/supplement/supp-dinner-visual.jpg', 'ultra'),
      makeWork('主视觉 04', '会展设计 / 超宽主视觉', '/assets/supplement/supp-main-visual-04.jpg', 'ultra'),
      makeWork('视觉规划 02', '会展设计 / 视觉规划', '/assets/supplement/supp-visual-plan.jpg'),
      makeWork('20x4 组织架构宽幅视觉', '会展设计 / 超宽主视觉', '/assets/supplement/supp-org-wide.jpg', 'ultra'),
      makeWork('云梦守护 全撑好眠', '会展设计 / 家居新品发布会 KV', '/assets/supplement4/new-exhibition-15.jpg', 'wide'),
      makeWork('KV 08', '会展设计 / 宽幅 KV', '/assets/supplement/supp-kv-08.jpg', 'wide'),
      makeWork('顾家家居全球发布会', '会展设计 / 家居发布会 KV', '/assets/supplement4/new-exhibition-14.jpg', 'wide'),
      makeWork('抢 2000 元免单', '会展设计 / 活动海报', '/assets/supplement4/new-exhibition-09.jpg'),
      makeWork('Redmi 144FPS 稳定高帧', '会展设计 / 产品活动海报', '/assets/supplement4/new-exhibition-10.webp'),
      makeWork('KELISHOW Connect The Future', '会展设计 / 科技峰会视觉', '/assets/supplement4/new-exhibition-11.png'),
      makeWork('2026 Music Festival', '会展设计 / 音乐节视觉', '/assets/supplement4/new-exhibition-12.png'),
      makeWork('Art Design', '会展设计 / 几何视觉海报', '/assets/supplement4/new-exhibition-13.png'),
      makeWork('夏日多巴胺', '会展设计 / AI 活动 KV', '/assets/supplement4/new-exhibition-08.png', 'wide'),
      makeWork('首届户外野小节', '会展设计 / 活动 KV', '/assets/supplement4/new-exhibition-05.png', 'wide'),
      makeWork('Flash Party 三周年', '会展设计 / 活动 KV', '/assets/supplement4/new-exhibition-06.jpg', 'wide'),
      makeWork('爱的飞行日记', '会展设计 / AI 活动 KV', '/assets/supplement4/new-exhibition-07.png', 'wide'),
      makeWork('KV 定稿 02', '会展设计 / 宽幅定稿', '/assets/supplement3/batch3-kv-final-02.jpg', 'wide'),
      makeWork('项目定稿视觉', '会展设计 / 活动定稿视觉', '/assets/featured/featured-final.jpg'),
      makeWork('KV 01 JPG', '会展设计 / 主视觉', '/assets/supplement3/batch3-kv-01-jpg.jpg'),
      makeWork('KV 02 PNG', '会展设计 / 宽幅主视觉', '/assets/supplement3/batch3-kv-02-png.png', 'wide'),
      makeWork('KV2 方案 01', '会展设计 / 活动 KV', '/assets/supplement3/batch3-kv2-1.jpg'),
      makeWork('KV 02 JPG', '会展设计 / 活动 KV', '/assets/supplement3/batch3-kv-02-jpg.jpg'),
      makeWork('KV 01 方案', '会展设计 / 主视觉', '/assets/supplement3/batch3-kv-01-1.jpg'),
      makeWork('定稿主视觉 01', '会展设计 / 宽幅 KV', '/assets/supplement/supp-final-01.jpg', 'wide'),
      makeWork('星球版主视觉', '会展设计 / 科技主视觉', '/assets/supplement/supp-planet-kv.jpg'),
      makeWork('主背景视觉', '会展设计 / 大屏背景', '/assets/featured/featured-main-bg.jpg'),
      makeWork('总结大会主视觉', '会展设计 / 企业会议', '/assets/featured/featured-summary.jpg'),
      archiveWork('21', '会展设计 / 活动视觉延展'),
      makeWork('KV 主副屏 02', '会展设计 / 主副屏视觉', '/assets/supplement3/batch3-kv-main-side-02.jpg', 'wide'),
      makeWork('哈尔斯品牌视觉', '会展设计 / 产品发布视觉', '/assets/featured/featured-haers.png'),
      makeWork('4 月线下大会', '会展设计 / 线下大会', '/assets/supplement/supp-april-event.jpg'),
      makeWork('超宽定稿视觉', '会展设计 / 超宽 KV', '/assets/supplement/supp-final-png.png', 'ultra'),
      makeWork('电商 KV 01', '会展设计 / 活动主视觉', '/assets/featured/featured-kv-01.jpg'),
      makeWork('电商 KV 02', '会展设计 / 活动主视觉', '/assets/featured/featured-kv-02.jpg'),
      makeWork('电商 KV 03', '会展设计 / 活动主视觉', '/assets/featured/featured-kv-03.jpg'),
      makeWork('电商 KV 04', '会展设计 / 活动主视觉', '/assets/featured/featured-kv-04.jpg'),
      makeWork('16:9 主 KV', '会展设计 / 活动主视觉', '/assets/featured/featured-kv-main.jpg'),
      makeWork('16:9 KV 延展', '会展设计 / 活动主视觉延展', '/assets/featured/featured-kv-05.jpg'),
      makeWork('16:9 PNG 视觉', '会展设计 / 活动传播物料', '/assets/featured/featured-kv-06.png'),
      makeWork('16:9 KV 备用方案', '会展设计 / 活动主视觉方案', '/assets/featured/featured-kv-07.jpg'),
      makeWork('2025 制冷展主视觉', '会展设计 / 展会主视觉', '/assets/featured/featured-refrigeration-expo.png'),
      makeWork('圆桌派主视觉', '会展设计 / 论坛主视觉', '/assets/featured/featured-roundtable.jpg'),
      makeWork('晚宴主 KV 01', '会展设计 / 晚宴主视觉', '/assets/featured/featured-dinner-01.png'),
      makeWork('晚宴主 KV 02', '会展设计 / 晚宴主视觉', '/assets/featured/featured-dinner-02.png'),
      makeWork('同程 KV 定稿', '会展设计 / 品牌活动 KV', '/assets/supplement/supp-tongcheng-kv.jpg', 'wide'),
      makeWork('主 K 定稿', '会展设计 / 主视觉定稿', '/assets/supplement/supp-main-k-final.jpg'),
      makeWork('建德人大会主视觉', '会展设计 / 大会主视觉', '/assets/supplement/supp-jiande-congress.jpg', 'wide'),
      makeWork('KV 16:9 方案', '会展设计 / 活动 KV', '/assets/supplement/supp-kv-16x9-01.png'),
      makeWork('主视觉 03', '会展设计 / 宽幅主视觉', '/assets/supplement/supp-main-visual-03.jpg', 'wide'),
      makeWork('KV 05', '会展设计 / 宽幅 KV', '/assets/supplement/supp-kv-05.png', 'wide'),
      makeWork('KV 07', '会展设计 / 宽幅 KV', '/assets/supplement/supp-kv-07.jpg', 'wide'),
      makeWork('KV 09', '会展设计 / 宽幅 KV', '/assets/supplement/supp-kv-09.jpg', 'wide'),
      makeWork('KV 10', '会展设计 / 宽幅 KV', '/assets/supplement/supp-kv-10.jpg', 'wide'),
      makeWork('KV 01', '会展设计 / 宽幅 KV', '/assets/supplement/supp-kv-01.png', 'wide'),
      makeWork('KV 16:9', '会展设计 / 活动 KV', '/assets/supplement2/more-kv-16x9.png'),
      makeWork('上海 KV', '会展设计 / 城市主题 KV', '/assets/supplement2/more-kv-shanghai.jpg', 'wide'),
      makeWork('绿色超宽 KV', '会展设计 / 超宽主视觉', '/assets/supplement2/more-kv-green.jpg', 'ultra'),
      makeWork('KV 水牌 15', '会展设计 / 水牌设计', '/assets/supplement2/more-kv-signage-15.png'),
      makeWork('KV + 副屏 02', '会展设计 / 主副屏视觉', '/assets/supplement2/more-kv-side-screen-02.jpg', 'wide'),
      makeWork('2KV', '会展设计 / 活动 KV', '/assets/supplement2/more-2kv.jpg'),
      makeWork('2KV 01', '会展设计 / 活动 KV', '/assets/supplement2/more-2kv-01.png'),
      makeWork('2KV 方案 01', '会展设计 / 活动 KV', '/assets/supplement2/more-2kv-1.jpg'),
      makeWork('3KV', '会展设计 / 活动 KV', '/assets/supplement2/more-3kv.jpg'),
      makeWork('KV 7', '会展设计 / 超宽 KV', '/assets/supplement2/more-kv7.jpg', 'ultra'),
      makeWork('KV 04', '会展设计 / 活动 KV', '/assets/supplement2/more-kv-04.jpg'),
      makeWork('KV 05 JPG', '会展设计 / 活动 KV', '/assets/supplement2/more-kv-05-jpg.jpg'),
      makeWork('主 KV 2', '会展设计 / 主视觉', '/assets/supplement2/more-main-kv2.jpg'),
      makeWork('12KV 45x8', '会展设计 / 超宽长屏视觉', '/assets/supplement2/more-12kv-45x8.jpg', 'ultra'),
      makeWork('KV 3', '会展设计 / 宽幅 KV', '/assets/supplement2/more-kv3.jpg', 'wide'),
      makeWork('主 KV 1.1', '会展设计 / 主视觉', '/assets/supplement2/more-main-kv1-1.jpg'),
      makeWork('KV 04 PNG', '会展设计 / 活动 KV', '/assets/supplement3/batch3-kv-04.png'),
      makeWork('KV 06', '会展设计 / 活动 KV', '/assets/supplement3/batch3-kv-06.jpg'),
      makeWork('KV2 超宽', '会展设计 / 超宽屏幕视觉', '/assets/supplement3/batch3-kv2.jpg', 'ultra'),
      makeWork('KV 01 PNG', '会展设计 / 主视觉', '/assets/supplement3/batch3-kv-01-png.png'),
      archiveWork('22', '会展设计 / 屏幕视觉系统'),
      archiveWork('23', '会展设计 / 屏幕视觉系统'),
    
    ],
  },
  {
    id: 'brand-design',
    title: '品牌设计',
    intro: '包含品牌识别、产品视觉、VI、包装和商业物料，强调系统化视觉表达与长期可延展性。',
    items: [
      archiveWork('24', '品牌设计 / VI 设计'),
      archiveWork('25', '品牌设计 / 品牌延展'),
      archiveWork('26', '品牌设计 / 品牌物料'),
    ],
  },
]
const strengths = [
  {
    icon: Palette,
    title: '商业视觉与风格控制',
    text: '熟悉活动主视觉、电商物料、品牌 VI 与包装设计，能在识别度和商业转化之间建立平衡。',
  },
  {
    icon: BrainCircuit,
    title: 'AI 与 3D 创意扩展',
    text: '具备 PS、AI、C4D、AE 等工具基础，可结合 AI 工具进行概念探索、视觉推演和效率提升。',
  },
  {
    icon: Layers3,
    title: '大型项目协作经验',
    text: '服务过天猫大促、方特、吉利、苏宁、华为、苏泊尔等项目场景，理解多角色协作与落地节奏。',
  },
  {
    icon: PenTool,
    title: '模板沉淀与交付能力',
    text: '关注视觉规范、模块复用、数据反馈与内容沉淀，让设计成果可持续迭代。',
  },
]

function App() {
  return (
    <main>
      <Hero />
      <Experience />
      <Resume />
      <Projects />
      <Strengths />
      <Contact />
    </main>
  )
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="ambient-video" aria-hidden="true">
        <video autoPlay muted loop playsInline poster="">
          <source src="/hero-ambient.mp4" type="video/mp4" />
        </video>
        <div className="video-fallback" />
      </div>

      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark">JHS</span>
          <span>YEDEJIAN Portfolio</span>
        </a>
        <div className="nav-links">
          <a href="#experience">经历</a>
          <a href="#resume">简历</a>
          <a href="#projects">项目</a>
          <a href="#strengths">优势</a>
        </div>
        <a className="nav-contact" href={`mailto:${profile.email}`}>
          联系我
        </a>
      </nav>

      <div className="hero-content shell">
        <p className="eyebrow">
          {profile.roles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </p>
        <h1>作品集 / Portfolio</h1>
        <div className="hero-bottom">
          <p>
            叶德建，视觉设计师 / AI 设计师 / 品牌设计师。以品牌系统、活动主视觉、电商大促和 3D 视觉为核心，建立有记忆点且可落地的商业视觉表达。
          </p>
          <a className="primary-link" href="#projects">
            查看精选项目 <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <div className="scroll-hint">Scroll</div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="shell split-grid">
        <div className="portrait-card">
          <div className="portrait-glow" />
          <div className="portrait">
            <img src="/assets/portrait-yedejian.jpg" alt="叶德建人物插画头像" />
          </div>
        </div>

        <div className="content-block">
          <p className="section-kicker">Profile</p>
          <h2>个人信息</h2>
          <p className="lead">{profile.intro}</p>

          <div className="info-grid">
            <div>
              <span>姓名</span>
              <strong>{profile.name}</strong>
            </div>
            <div>
              <span>所在地</span>
              <strong>{profile.city}</strong>
            </div>
            <div>
              <span>电话</span>
              <strong>{profile.phone}</strong>
            </div>
            <div>
              <span>微信</span>
              <strong>{profile.wechat}</strong>
            </div>
          </div>

        </div>
      </div>

      <div className="shell stats-grid">
        {stats.map((item) => (
          <div className="stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Resume() {
  return (
    <section className="section resume" id="resume">
      <div className="shell section-head">
        <p className="section-kicker">Resume</p>
      </div>

      <div className="shell resume-layout">
        <div className="resume-panel">
          <h3>基础信息</h3>
          <div className="resume-summary">
            {resumeSummary.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline">
          {resumeItems.map((item) => (
            <article className="timeline-item" key={item.time}>
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-card">
                <span>{item.role}</span>
                <h3>{item.title}</h3>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [previewProject, setPreviewProject] = useState(null)

  useEffect(() => {
    if (!previewProject) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPreviewProject(null)
      }
    }

    document.body.classList.add('is-preview-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('is-preview-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [previewProject])

  return (
    <section className="section projects" id="projects">
      <div className="shell section-head">
        <p className="section-kicker">Selected Works</p>
      </div>
      {projectGroups.map((group, groupIndex) => (
        <div className="project-group shell" key={group.id}>
          <div className="group-head">
            <span>0{groupIndex + 1}</span>
            <div>
              <h3>{group.title}</h3>
              <p>{group.intro}</p>
            </div>
          </div>
          <div className="project-grid">
            {group.items.map((project, index) => (
              <WorkCard
                key={`${group.id}-${project.title}`}
                project={project}
                index={`${groupIndex + 1}.${index + 1}`}
                onOpen={() => setPreviewProject({ ...project, index: `${groupIndex + 1}.${index + 1}` })}
              />
            ))}
          </div>
        </div>
      ))}
      {previewProject && (
        <WorkPreview project={previewProject} onClose={() => setPreviewProject(null)} />
      )}
    </section>
  )
}

function WorkCard({ project, index, onOpen }) {
  const layoutClass = project.layout ? ` is-${project.layout}` : ''

  return (
    <BorderGlow
      className={`project-glow${layoutClass}`}
      edgeSensitivity={24}
      glowColor="198 88 72"
      backgroundColor="#070a12"
      borderRadius={34}
      glowRadius={34}
      glowIntensity={0.75}
      coneSpread={22}
      fillOpacity={0.22}
      colors={['#c084fc', '#38bdf8', '#c7ff6b']}
    >
      <article className="project-card">
        <div
          className="project-image"
          role="button"
          tabIndex={0}
          aria-label={`放大查看 ${project.title}`}
          onClick={onOpen}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              onOpen()
            }
          }}
        >
          {project.type === 'video' ? (
            <video src={project.media} autoPlay muted loop playsInline controls />
          ) : (
            <img src={project.media} alt={project.title} />
          )}
          <div className="project-index">{index}</div>
          <div className="project-zoom">点击放大</div>
        </div>
      </article>
    </BorderGlow>
  )
}

function WorkPreview({ project, onClose }) {
  return (
    <div className="work-preview" role="dialog" aria-modal="true" aria-label="作品放大预览" onClick={onClose}>
      <button className="work-preview-close" type="button" onClick={onClose} aria-label="关闭预览">
        ×
      </button>
      <div className="work-preview-inner" onClick={(event) => event.stopPropagation()}>
        <div className="work-preview-meta">
          <span>{project.index}</span>
          <strong>{project.title}</strong>
        </div>
        <div className="work-preview-media">
          {project.type === 'video' ? (
            <video src={project.media} autoPlay loop playsInline controls />
          ) : (
            <img src={project.media} alt={project.title} />
          )}
        </div>
      </div>
    </div>
  )
}

function Strengths() {
  return (
    <section className="section strengths" id="strengths">
      <div className="shell section-head compact">
        <p className="section-kicker">Capabilities</p>
        <h2>个人优势围绕商业视觉判断、工具复合能力、品牌系统和执行交付展开。</h2>
      </div>

      <div className="shell strength-grid">
        {strengths.map(({ icon: Icon, title, text }) => (
          <article className="strength-card" key={title}>
            <Icon size={28} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="shell contact-inner">
        <p>
          如果需要品牌视觉、活动 KV、电商大促、包装或 AI 辅助视觉探索，可以通过电话、微信或邮箱联系我。
        </p>
        <div className="contact-actions">
          <a className="primary-link large" href={`mailto:${profile.email}`}>
            <Mail size={20} /> {profile.email}
          </a>
          <a className="ghost-link" href={`tel:${profile.phone}`}>
            {profile.phone}
          </a>
          <a className="ghost-link" href="#top">
            回到顶部
          </a>
        </div>
      </div>
    </section>
  )
}

export default App
