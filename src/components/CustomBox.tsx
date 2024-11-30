import styled from "styled-components";

interface CustomBoxProps {
	$width?: string;
	$height?: string;
	$minHeight?: string;
	$gap?: string;
	$display?: string;
	$flexdirection?: string;
	$alignitems?: string;
	$justifycontent?: string;
	$margin?: string;
	$margintop?: string;
	$padding?: string;
	$backgroundcolor?: string;
	$backgroundimage?: string;
	$color?: string;
	$border?: string;
	$borderradius?: string;
	$overflowy?: string;
	$overflowx?: string;
	$zindex?: string;
	$boxshadow?: string;
}

const CustomBox = styled.div<CustomBoxProps>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "5rem"};
  min-height: ${(props) => props.$minHeight || "100vh"};
  gap: ${(props) => props.$gap || "1rem"};
  display: ${(props) => props.$display || "flex"};
  flex-direction: ${(props) => props.$flexdirection || 'column'};
  align-items: ${(props) => props.$alignitems || "center"};
  justify-content: ${(props) => props.$justifycontent || "center"};
  margin: ${(props) => props.$margin || "0"};
  margin-top: ${(props) => props.$margintop || '0'};
  padding: ${(props) => props.$padding || "0"};
  background: ${(props) => props.$backgroundcolor || "#1E1E1E"};
  background-image: ${(props) => (props.$backgroundimage ? `url(${props.$backgroundimage})` : "none")};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${(props) => props.color || "black"};
  border: ${(props) => props.$border || "none"};
  border-radius: ${(props) => props.$borderradius || "0.5rem"};
  overflow-x: ${(props) => props.$overflowx || "auto"};
  overflow-y: ${(props) => props.$overflowy || "auto"};
  z-index: ${(props) => props.$zindex || '3'};
  box-shadow: ${(props) => props.$boxshadow || "none"};


//   /* 스크롤바 스타일 */
//   &::-webkit-scrollbar {
//     width: 10px;
//   }

//   &::-webkit-scrollbar-track {
//     background: transparent;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #D9D9D9;
//     border-radius: 5px;
//     border: none;
//   }

/* 스크롤바 제거 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE */
  scrollbar-width: none; /* Firefox */

`;

export default CustomBox;