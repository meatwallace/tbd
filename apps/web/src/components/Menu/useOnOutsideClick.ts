import React from 'react';

export function useOnOutsideClick(
  el: React.RefObject<HTMLElement>,
  isActive: boolean,
  handleOutsideClick: () => void,
) {
  React.useEffect(() => {
    const handleClickEvent = (e: MouseEvent) => {
      if (
        e.target instanceof Element &&
        el.current !== null &&
        !el.current.contains(e.target)
      ) {
        handleOutsideClick();
      }
    };

    if (isActive) {
      window.addEventListener('click', handleClickEvent);
    }

    return () => {
      window.removeEventListener('click', handleClickEvent);
    };
  }, [isActive, el, handleOutsideClick]);
}
