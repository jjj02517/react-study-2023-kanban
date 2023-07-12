import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import Drag from "./Drag";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body { 
    font-family: 'Source Sans 3', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  a { 
    text-decoration: none;
    color: inherit;
  }
  select {
    -webkit-appearance:none; /* for chrome */
    -moz-appearance:none; /*for firefox*/
    appearance:none;
    cursor: pointer;
  }
  select::-ms-expand{
    display:none;/*for IE10,11*/
  }
`;

// TODO: 추후 todo 입력하는 form 만들고 kanban이랑 합치기

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Drag />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
