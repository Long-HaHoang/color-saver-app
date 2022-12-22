import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --primary-color: rgb(255, 102, 0);
  --secondary-color: rgb(214, 222, 228);
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
`;
