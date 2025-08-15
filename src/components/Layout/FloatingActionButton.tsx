import React from 'react';

export default function FloatingActionButton(): JSX.Element {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fab" onClick={scrollToTop}>
      ↑
    </div>
  );
}