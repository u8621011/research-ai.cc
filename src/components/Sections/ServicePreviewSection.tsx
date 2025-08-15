import React from 'react';

export default function ServicePreviewSection(): JSX.Element {
  return (
    <section className="service-preview" id="service">
      <div className="service-content">
        <span className="service-tag">新服務預告</span>
        <h2>AI 論文診斷｜正式限時限量試用</h2>
        <p className="service-highlight">2 週內完成診斷報告｜名額僅 5 位</p>
        <p className="service-description">
          以生成式 AI 輔助結構化分析你的研究邏輯，<br/>
          提供具體可行的修改建議。
        </p>
        <a href="https://forms.gle/Ky8f5r2ALsy4fHVVA" target="_blank" rel="noopener noreferrer" className="service-cta">
          註冊搶先通知
        </a>
        <p className="service-note">公佈時，第一時間收到消息</p>
      </div>
    </section>
  );
}