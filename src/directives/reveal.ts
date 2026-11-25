import type { Directive } from 'vue';

let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === 'undefined') {
    return null;
  }
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );
  }
  return sharedObserver;
}

/** empasy.io 의 fade-in-up 요소를 스크롤 진입 시 노출한다. */
export const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    el.classList.add('fade-in-up');
    const observer = getObserver();
    if (!observer) {
      el.classList.add('visible');
      return;
    }
    observer.observe(el);
  },
  unmounted(el) {
    sharedObserver?.unobserve(el);
  },
};
