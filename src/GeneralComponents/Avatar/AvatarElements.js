import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  & > .avatar-info {
    display: flex;
    gap: 1rem;
    align-items: center;
    min-width: max-content;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 1.75rem;
  height: 1.75rem;

  display: block;
  background: #fff;
  border-radius: 9999px;
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column;

  ${({ left }) =>
    left
      ? css`
          align-items: flex-end;
        `
      : css``}

  span {
    text-align: left;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 0.7rem;
    text-transform: capitalize;
    color: #888;
  }
`;

export const Username = styled.h1`
  font-size: 0.75rem;
`;

export const Options = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 0.75rem;
  min-width: 13rem;

  position: absolute;
  width: 100%;
  top: 150%;
  right: 0;
  z-index: 9999;
  padding: 1rem;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 0.35rem 0.5rem -0.45rem #000a;

  ${({ theme }) =>
    theme === 'dark'
      ? css`
          background: #fff;
        `
      : css`
          background: #fff;
        `}

  .link,
  .logout {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.85rem;
    text-decoration: none;
    text-align: left;
  }

  .link {
  }
  .logout {
  }
`;

export default '';
