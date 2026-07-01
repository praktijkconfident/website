'use client';
import { useEffect } from 'react';

interface Props {
  singles?: string[];
  grids?: string[];
}

// Gebruik: <ScrollReveal singles={['.reveal']} grids={['#mijn-lijst']} />
// Voeg className="reveal" toe aan elementen die je wilt laten infaden.
// Geef een lijst een id en zet hem in grids voor een staggered animatie per item.
export default function ScrollReveal({ singles = [], grids = [] }: Props) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    singles.forEach(sel =>
      document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'))
    );

    grids.forEach(sel =>
      document.querySelectorAll(sel).forEach(grid =>
        grid.querySelectorAll(':scope > *').forEach((el, i) => {
          el.classList.add('reveal');
          (el as HTMLElement).style.transitionDelay = `${i * 0.12}s`;
        })
      )
    );

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [singles, grids]);

  return null;
}
