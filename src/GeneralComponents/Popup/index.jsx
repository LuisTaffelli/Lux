import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: #0000;
  z-index: 900;
  padding: 0 1rem;
  transition: all 0.25s;
`;

const Center = styled.div`
  width: 100%;
  max-width: 30rem;
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  overflow: hidden;

  opacity: 0;
  transform: translateY(100%);

  transition: all 0.25s;
`;

// PopUp Generalizado para renderizar componentes, actualmente usado para sesión

function Popup({ children, close }) {
  const ref = useRef(null);

  useEffect(() => {
    document.documentElement.style.maxHeight = `${window.innerHeight}px`;
    document.documentElement.style.overflow = 'hidden';

    if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return () => {
      document.documentElement.style.maxHeight = '100%';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    ref.current.style.backgroundColor = '#000a';
    ref.current.children[0].style.opacity = '1';
    ref.current.children[0].style.transform = 'translateY(0)';
  }, [ref]);

  const onClick = (e) => {
    const name = e.target.attributes.name?.value;
    if (name === 'popup-close') {
      setTimeout(close, 250);

      ref.current.style.backgroundColor = '#0000';
      ref.current.children[0].style.opacity = '0';
      ref.current.children[0].style.transform = 'translateY(100%)';
    }
  };

  return (
    <Container ref={ref} name="popup-close" onClick={onClick}>
      <Center>{children}</Center>
    </Container>
  );
}

export default Popup;
