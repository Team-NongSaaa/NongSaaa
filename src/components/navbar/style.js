import styled from 'styled-components';

export const NavBarWrapper = styled.div `
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #252631;
  position: fixed;
  &:first-child {
    /* padding-top: 5px; */
  }
`;

export const MenuItem = styled.div `
  border: 1px solid black;
  padding: 15px;
  cursor: pointer;
  margin: 2px 10px;
  border-radius: 5px;
  border-color: #252631;
  display: flex;
  align-items: center;
  & > i {
    color: white;
    margin-right: 10px;
  }
  &:hover {
    background: hsla(0, 0%, 100%, 0.23);
  }
`;

export const MenuTitle = styled.span `
  margin: 0;
  line-height: 30px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
  position: relative;
  color: #fff;
  transform: translateZ(0);
  height: auto;
  opacity: 1;
`;

export const Line = styled.div `
  width: 90%;
  margin: 0 auto;
  border: 1px solid gray;
`;