import { createGlobalStyle } from "styled-components"

const GlobalTheme = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.25s linear;
    }
`
export const lightTheme = {
    body: "#f3f4f6",
    text: "#1e293b"
}

export const darkTheme = {
    body: "#000",
    text: "#f3f4f6"
}
export default GlobalTheme