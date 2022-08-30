import styled from "styled-components";

const Header = styled.div`
  border-bottom: 1px solid lightgray;
  max-width: 100%;
  padding: 20px;
  display: flex;
`;
const HeaderLeft = styled.div`
  flex: 1;
  display: flex;
  & > h4 {
    margin: 0px;
    padding-right: 5px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  & > .MuiSvgIcon-root {
    font-size: 18px;
  }
`;
const ChatInputContainer = styled.div`
  position: fixed;
  bottom: 5px;
  padding: 20px;
  width: 100%;
  padding-bottom: 0px;
  & > form > button {
    display: none;
  }
  & > form > .MuiFormControl-root {
    width: 75%;
  }
`;
export { Header, HeaderLeft, HeaderRight, ChatInputContainer };
