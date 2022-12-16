import styled from 'styled-components';





export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-align: left;
  line-height: 1rem;
  font-size: 1rem;
  text-transform: capitalize;
  width: max-content;
  margin-left: 8px;
  .right {
    display: flex;
    flex-flow: column;
    gap: 0.25rem;
    h5 {
      font-size: 0.8rem;
    }
  }
  .instructor-badge {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    .icon {
      background-color: #777;
      display: grid;
      place-items: center;
      height: 1.25rem;
      width: 1.25rem;
      border-radius: 100%;
    }
  }
`;