import React, { useState, useEffect } from 'react';

export interface NavigationItem {
  id: string;
  label: string;
  number?: string;
}

interface SidebarNavigationProps {
  items: NavigationItem[];
  title?: string;
  titleHighlight?: string;
  className?: string;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  items,
  title,
  titleHighlight,
  className = '',
}) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header

      // Find the current section
      let currentActive = '';
      
      for (let i = 0; i < items.length; i++) {
        const element = document.getElementById(items[i].id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop - 100 && scrollPosition < elementBottom - 100) {
            currentActive = items[i].id;
            break;
          }
        }
      }

      // If scrolled past all sections, set the last one as active
      if (!currentActive && scrollPosition >= document.documentElement.scrollHeight - window.innerHeight - 200) {
        currentActive = items[items.length - 1]?.id || '';
      }

      // If at the top, set first item as active
      if (!currentActive && scrollPosition < 200) {
        currentActive = items[0]?.id || '';
      }

      if (currentActive) {
        setActiveId(currentActive);
      }
    };

    // Set initial active item
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Offset for header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
      
      // Update active state immediately for better UX
      setActiveId(id);
    }
  };

  return (
    <div
      className={`w-full lg:w-2/5 p-0 mb-8 lg:mb-0 lg:sticky lg:top-24 self-start ${className}`}
      style={{ maxHeight: 'calc(100vh - 8rem)' }}
    >
      <div className="rounded-[24px] bg-white/10 backdrop-blur-[13px] border border-[#757575]/30 p-6 lg:p-8 shadow-lg h-full flex flex-col">
        {(title || titleHighlight) && (
          <div className="mb-6 flex-shrink-0">
            {title && (
              <span className="text-[32px] lg:text-[48px] font-medium text-[#7E7E7E] uppercase -mb-3 block">
                {title}
              </span>
            )}
            {titleHighlight && (
              <span className="text-[32px] lg:text-[48px] font-semibold text-[#08C2C1] uppercase mb-4 block">
                {titleHighlight}
              </span>
            )}
          </div>
        )}

        <nav className="flex flex-col gap-3 overflow-y-auto flex-1 min-h-0 pr-2 lg:pr-1 custom-scrollbar">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(item.id, e)}
                className={`
                  group relative flex items-center gap-3 px-4 py-3 rounded-xl flex-shrink-0
                  transition-all duration-300 ease-in-out
                  ${
                    isActive
                      ? 'bg-[#08C2C1]/10 border-l-4 border-[#08C2C1] text-[#08C2C1] font-semibold'
                      : 'text-[#7E7E7E] hover:bg-[#08C2C1]/5 hover:text-[#08C2C1] hover:border-l-4 hover:border-[#08C2C1]/50'
                  }
                `}
              >
                {item.number && (
                  <span
                    className={`
                      text-sm font-medium transition-colors duration-300 flex-shrink-0
                      ${isActive ? 'text-[#08C2C1]' : 'text-[#7E7E7E] group-hover:text-[#08C2C1]'}
                    `}
                  >
                    {item.number}
                  </span>
                )}
                <span
                  className={`
                    text-base lg:text-lg font-medium transition-colors duration-300 capitalize
                    ${isActive ? 'text-[#08C2C1]' : 'text-[#0E1423] group-hover:text-[#08C2C1]'}
                  `}
                >
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute right-4 w-2 h-2 bg-[#08C2C1] rounded-full animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SidebarNavigation;

