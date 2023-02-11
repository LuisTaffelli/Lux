import styled, { css } from 'styled-components';


const directions = {
    top: css`
      top: -0.25rem;
      left: 50%;
      transform: translate(-50%, 0) rotate(45deg);
    `,
    bottom: css`
      top: 100%;
      left: 50%;
      transform: translate(-50%, -0.3rem) rotate(45deg);
    `,
    left: css`
      top: 50%;
      left: 0%;
      transform: translate(-50%, -50%) rotate(45deg);
    `,
    right: css`
      top: 50%;
      left: 100%;
      transform: translate(-0.3rem, -50%) rotate(45deg);
    `,
  };
  
  const ToastContainer = styled.span`
    position: absolute;
    top: ${(props)=>props.position};
    left: 24%;
    transform: translate(-50%, -36px);
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    z-index: 100;
    cursor: default;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 3px;
    opacity: 1;

    border: 1px solid;
    border-color: ${(props)=>props.status ? '#3a3' : '#d77'};
  
    background-color: #fff;
    color: #000;
    width: 20%;
  
    transition: all 0.25s;
  
    ::before {
      content: '';
      position: absolute;
      width: 0.6rem;
      height: 0.6rem;
  
      background-color: ${(props)=>props.status ? '#3a3' : '#d77'};
      z-index: -1;
      border-radius: 3px;
  
      ${({ direction }) => (direction ? directions[direction] : '')}
    }
  `;
  
export default function Toast({ children, direction, ...props }) {
    return (
      <ToastContainer direction={direction} {...props}>
        {children}
      </ToastContainer>
    );
}