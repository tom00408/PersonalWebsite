import { Global, css } from '@emotion/react'

const GlobalStyles = () => (
  <Global
    styles={css`
      html, body, #root {
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #1a1a1a;
      }
      *, *::before, *::after {
        box-sizing: inherit;
      }
    `}
  />
)

export default GlobalStyles 