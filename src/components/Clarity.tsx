import { useEffect } from 'react';

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

export function Clarity() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const clarityId = import.meta.env.VITE_CLARITY_ID;
    if (!clarityId) return;

    // Verifica se já foi carregado
    if (window.clarity) return;

    // Verifica se já existe o script
    if (document.querySelector(`script[data-clarity-id="${clarityId}"]`)) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('data-clarity-id', clarityId);
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${clarityId}");
    `;
    document.head.appendChild(script);
  }, []);

  return null;
}
