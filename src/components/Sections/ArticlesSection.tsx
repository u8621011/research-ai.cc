import React from 'react';

const articles = [
  {
    image: '/img/research/【資料太多，報告太近？】這套方法讓你用一張圖找出主題、挑對文獻.png',
    tag: '研究方法',
    title: '【資料太多，報告太近？】用一張圖鎖定主題、挑對文獻',
    description: '用主題分佈圖、共現關聯圖與篇章熱力圖，讓質性分析不再盲讀，直攻核心資料。',
    link: 'https://chatgptlanding.substack.com/p/ai-analysis-workflow'
  },
  {
    image: '/img/research/在 AI 時代，為什麼你應該從寫論文開始練「說服力」？.png',
    tag: '思維方法',
    title: '在 AI 時代，為什麼從論文開始練「說服力」？',
    description: '論文不只是畢業門票，更是訓練邏輯、企劃與提案能力的萬用武器。',
    link: 'https://chatgptlanding.substack.com/p/ai-48d'
  },
  {
    image: '/img/research/🚀 AI 時代的文字大躍進！什麼是「精準寫作」？.webp',
    tag: 'AI 應用',
    title: '🚀 AI 時代的文字大躍進：精準寫作是什麼？',
    description: '結合元寫作思維與 AI 技術，打造高度貼合脈絡、可規模化複用的專屬內容生產線。',
    link: 'https://chatgptlanding.substack.com/p/what-is-ai-precision-writing'
  },
  {
    image: '/img/research/從「AI 智慧中心」到「流程代理化」，中小企業的零程式智慧進化之路.webp',
    tag: '企業轉型',
    title: '從 AI 智慧中心到流程代理化，中小企業的零程式進化',
    description: '用零程式工具搭建 AI 智慧中控室，讓流程自動執行、即時回應，推動營運升級。',
    link: 'https://chatgptlanding.substack.com/p/agentic-automation'
  }
];

export default function ArticlesSection(): JSX.Element {
  return (
    <section className="articles" id="articles">
      <div className="container">
        <h2 className="section-title">精選文章 / 觀點分享</h2>
        <p className="section-subtitle">涵蓋 AI 工程、智慧自動化、精準寫作與論文輔助研究的核心方法與實戰洞察</p>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <div className="article-card-image">
                <img src={article.image} alt={article.title} />
              </div>
              <span className="article-tag">{article.tag}</span>
              <div className="article-card-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-link">
                  閱讀更多 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}