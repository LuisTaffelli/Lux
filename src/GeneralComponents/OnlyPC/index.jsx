import styled from 'styled-components';
import { breakpoints } from '../../Utils/breakpoints';

const Container = styled.div`
  display: none;

  @media screen and (${breakpoints.pc}) {
    display: block;
  }
  
  @media screen and (${breakpoints.ipad}) {
    position: relative;
    left: -8%;
  }

`;

function OnlyPC({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

export default OnlyPC;
