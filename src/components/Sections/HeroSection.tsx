import React from 'react';

export default function HeroSection(): JSX.Element {
  return (
    <section className="hero">
      <div className="hero-content fade-in">
        <h1>用 AI，讓你的研究分析<strong>快轉 3 倍速</strong></h1>
        <p>從學術到商業，以<strong>流程化方法 + 生成式 AI</strong>，<br/>把洞察與決策<strong>做快、做穩</strong></p>
        <div className="cta-buttons">
          <a href="https://forms.gle/Ky8f5r2ALsy4fHVVA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            註冊搶先通知 →
          </a>
          <a href="https://www.facebook.com/ted.aigc" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            追蹤粉專
          </a>
        </div>
        <p className="micro-text">搶先掌握最新 AI 研究輔助服務，填寫通知表</p>
      </div>
    </section>
  );
}