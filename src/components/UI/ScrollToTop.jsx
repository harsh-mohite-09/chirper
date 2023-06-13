import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

const ScrollToTop = ({ myRef }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    myRef.current.scrollTo(0, 0);
  }, [myRef, pathname]);

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 100, // Adjust the duration to control speed (in milliseconds)
      smooth: true,
    });
  }, [pathname]);

  return null;
};

export { ScrollToTop };
