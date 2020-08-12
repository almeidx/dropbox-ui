import React, { useEffect, useState } from 'react';

import { Container } from './styles';

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined;
  }
}

const scrollThreshold = 300;

const SideMenu: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      setIsActive(false);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollY]);

  const classes = [
    isActive ? 'open' : '',
    scrollY <= scrollThreshold ? 'scrollOpen' : '',
  ];
  const className = classes.join(' ').trim();

  window.toggleActiveMenu = () => setIsActive((p) => !p);

  return (
    <Container className={className}>
      {children}
    </Container>
  );
}

export default SideMenu;
