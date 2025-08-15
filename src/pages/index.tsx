import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Custom components based on original HTML structure
import Navigation from '@site/src/components/Layout/Navigation';
import HeroSection from '@site/src/components/Sections/HeroSection';
import ResearchSection from '@site/src/components/Sections/ResearchSection';
import ArticlesSection from '@site/src/components/Sections/ArticlesSection';
import AboutSection from '@site/src/components/Sections/AboutSection';
import ServicePreviewSection from '@site/src/components/Sections/ServicePreviewSection';
import Footer from '@site/src/components/Layout/Footer';
import FloatingActionButton from '@site/src/components/Layout/FloatingActionButton';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  // Add scroll effects and other JavaScript from original
  useEffect(() => {
    // Navigation scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleAnchorClick);

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '0';
          target.style.transform = 'translateY(20px)';
          setTimeout(() => {
            target.style.transition = 'all 0.8s ease';
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          }, 100);
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.research-card, .article-card').forEach(el => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.tagline} />
      </Head>
      
      <Navigation />
      
      <main>
        <HeroSection />
        <ResearchSection />
        <ArticlesSection />
        <AboutSection />
        <ServicePreviewSection />
      </main>
      
      <Footer />
      <FloatingActionButton />
    </>
  );
}