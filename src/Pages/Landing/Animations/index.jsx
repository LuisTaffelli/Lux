import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ top }) =>
    top &&
    css`
      transform: translate(0, -100%);
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      transform: translate(0, 100%);
    `}

  ${({ left }) =>
    left &&
    css`
      transform: translate(-100%, 0);
    `}

  ${({ right }) =>
    right &&
    css`
      transform: translate(100%, 0);
    `}

  ${({ ms }) =>
    ms &&
    css`
      transition: all ${ms}ms;
    `}

  opacity: 0;
`;

function FadeIn({
  start = true,
  ms = 250,
  children,
  top,
  bottom,
  left,
  right,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref || !start) return null;

    ref.current.style.transform = 'translate(0, 0)';
    ref.current.style.opacity = '1';

    return null;
  }, [ref, start]);

  return (
    <Container
      ref={ref}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      ms={ms}
      {...props}
    >
      {children}
    </Container>
  );
}

export default FadeIn;
