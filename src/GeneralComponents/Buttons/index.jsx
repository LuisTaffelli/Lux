import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const baseStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 2;
  padding: 1em 1.5em;
  margin: 0 4px;

  font-family: Raleway;
  font-size: 0.75em;

  letter-spacing: 0.15em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  border-radius: 9999px;
  background-color: var(--light-blue);
  color: #fff;

  transition: all 0.45s;

  &:hover {
    background-color: var(--blue);
    color: #fff;
  }
`;

const themes = {


  light: css`
    background-color: var(--primary);
    color: #000;
  `,

  white: css`
    background-color: #fff;
    color: var(--secondary-black);

  `,
  
  transparent: css`
    background-color: transparent;
    color: var(--primary);
    &:hover{
      background-color: transparent !important;
      color: var(--primary) !important;
    }
  
  `,
  transparentBlack: css`
    background-color: transparent;
    color: #000;
    &:hover{
      background-color: transparent !important;
      color: #000 !important;
    }
  
  `,
  transparentBorder: css`
    background-color: #fff;
    color: var(--light-blue);
    border: var(--light-blue) 1px solid;
  
  `,

  Black: css`
    background-color: #000 !important;
    color: #fff !important;
  
  `,
  DarkBlue: css`
    background-color: var(--blue);
    color: #fff;

    &:hover{
      background-color: var(--light-blue);
    }
  
  `,
  DarkLanding: css`
    background-color: var(--blue);
    color: #000;

    &:hover{
      background-color: var(--secondary-dark);
    }
  
  `,
};

export function PrimaryButton({ as, children, theme, ...props }) {
  const [Btn, setBtn] = useState(null);
  const themeStyles = themes[theme] || '';

  useEffect(() => {
    if (!as) {
      const Component = styled.button`
        ${baseStyles}
        ${themeStyles}
      `;

      return setBtn(Component);
    }

    if (typeof as === 'string') {
      const Component = styled[as]`
        ${baseStyles}
        ${themeStyles}
      `;
      return setBtn(Component);
    }

    const Component = styled(as)`
      ${baseStyles}
      ${themeStyles}
    `;

    return setBtn(Component);
  }, [as]);

  return (Btn ? <Btn {...props}>{children}</Btn> : null);
}
