import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const onLinkHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.tagName.toLowerCase() === 'a' || 
                    target.tagName.toLowerCase() === 'button' ||
                    target.closest('a') || 
                    target.closest('button');
      setLinkHovered(!!isLink);
    };

    const onLinkHoverEnd = () => {
      setLinkHovered(false);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onLinkHoverStart);
    document.addEventListener('mouseout', onLinkHoverEnd);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onLinkHoverStart);
      document.removeEventListener('mouseout', onLinkHoverEnd);
    };
  }, [visible]);

  // Hide custom cursor on touch devices
  useEffect(() => {
    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

    if (isTouchDevice()) {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  return (
    <>
      <div 
        className="custom-cursor-outer fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference transition-transform duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: linkHovered ? '40px' : '20px',
          height: linkHovered ? '40px' : '20px',
          backgroundColor: 'white',
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
          opacity: 0.5
        }}
      ></div>
      <div 
        className="custom-cursor-inner fixed pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '5px',
          height: '5px',
          backgroundColor: 'white',
          transform: 'translate(-50%, -50%)',
          opacity: linkHovered ? 0 : 1,
          transition: 'opacity 300ms ease'
        }}
      ></div>
    </>
  );
};

export default CustomCursor;