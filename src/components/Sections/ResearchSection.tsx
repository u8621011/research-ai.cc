import React from 'react';

const researchCases = [
  {
    image: '/img/research/AI 論文診斷流程.png',
    title: 'AI 論文診斷流程',
    description: '以結構化流程定位論文斷點與缺口，快速找出邏輯問題',
    link: '#'
  },
  {
    image: '/img/research/分類可視圖.png',
    title: '分類可視圖',
    description: '把訪談/文獻自動分類總覽，讓主題脈絡一目了然',
    link: '#'
  },
  {
    image: '/img/research/主題分佈圖.png',
    title: '主題分佈圖',
    description: '量化出現頻率，快速抓重點，辨識研究焦點',
    link: '#'
  },
  {
    image: '/img/research/主題共現圖.png',
    title: '主題共現圖',
    description: '看見主題關係，發掘隱性脈絡，找出隱藏的研究線索',
    link: '#'
  },
  {
    image: '/img/research/篇章熱力圖.png',
    title: '篇章熱力圖',
    description: '以篇章為單位掌握主題分佈，支援深度內容分析',
    link: '#'
  },
  {
    image: '/img/research/GAITA 確認助手.png',
    title: 'GAITA 確認助手',
    description: '人工快速覆核 AI 主題草稿，確保分析品質',
    link: '#'
  }
];

export default function ResearchSection(): JSX.Element {
  return (
    <section className="research" id="research">
      <div className="container">
        <h2 className="section-title">AI 輔助研究 · 精選案例</h2>
        <p className="section-subtitle">從數據整理到洞察生成，AI 實戰案例全公開</p>
        <div className="research-grid">
          {researchCases.map((item, index) => (
            <div key={index} className="research-card">
              <div className="research-card-image">
                <img src={item.image} alt={item.title} className="research-card-screenshot" />
              </div>
              <div className="research-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} className="research-card-link">
                  {item.title === 'GAITA 確認助手' ? '觀看影片' : '閱讀更多'} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}