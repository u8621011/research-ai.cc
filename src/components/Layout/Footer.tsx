import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="mailto:ted@iyuyan.net">Email</a>
          <a href="https://lin.ee/Da2vS9D" target="_blank" rel="noopener noreferrer">Line</a>
          <a href="https://www.facebook.com/ted.aigc" target="_blank" rel="noopener noreferrer">Facebook 粉專</a>
          <a href="https://www.facebook.com/groups/631614079045059" target="_blank" rel="noopener noreferrer">臉書社團</a>
          <a href="https://www.youtube.com/@ted_aigc" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
        <p className="copyright">© 2025 愛語言科技. All rights reserved.</p>
      </div>
    </footer>
  );
}