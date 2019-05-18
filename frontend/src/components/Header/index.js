import styled from 'styled-components';

const Header = styled.div`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.gray.base};
`;

export default Header;