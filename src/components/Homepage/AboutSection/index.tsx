import React from 'react';
import styles from './styles.module.css';

export default function AboutSection(): JSX.Element {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContent}>
        <h2><strong>Ted Chen</strong>｜AI 論文輔助研究 & 智慧流程顧問</h2>
        <p className={styles.aboutDescription}>
          以<strong>研究方法 × 生成式 AI × 流程設計</strong>，<br/>
          協助在職碩士生、研究團隊與企業<strong>更快產生可靠洞察</strong>。
        </p>
        <a href="https://github.com/u8621011" target="_blank" rel="noopener noreferrer" className={styles.aboutLink}>
          更多關於我 →
        </a>
      </div>
    </section>
  );
}