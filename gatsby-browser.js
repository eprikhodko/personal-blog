import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import styled from "styled-components"
// import theme from "prism-react-renderer/themes/duotoneDark"
// import theme from "./src/assets/css/myCustomTheme"
require("./src/assets/css/prism-one-light.css")

const CodeBlockContainer = styled.div`
  background: hsl(220, 13%, 18%);
  border-radius: 4px;
  margin-top: 2em;
  margin-bottom: 2em;
`

const CodeTitle = styled.div`
  color: #9d9d9d;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;

  padding: 1.25em 1.5em;

  border-bottom: 1px solid #faede5;
  /* border-bottom: 1px solid var(--theme-ui-colors-code-border,#faede5); */
  /* display: flex;
  justifycontent: center;
  alignitems: center; */
`

const CodeLabel = styled.div`
  background: rgb(247, 223, 30);
  margin-right: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-transform: uppercase;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Pre = styled.pre`
  /* border: 5px solid green; */

  &:before {
    content: "${({ language }) => language}";
    width: 100px;
    height: 100px;
    background: #d9d7e0;
    border-radius: 0px 0px 4px 4px;
    color: #232129;
    color: ${({ color }) => color};
    /* font-size: 0.75rem; */
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    letter-spacing: 0.075em;
    line-height: 1;
    padding: 0.25rem 0.5rem;
    /* position: absolute; */
    left: 1.5rem;
    text-align: right;
    text-transform: uppercase;
    top: 0px;

    /* border: 5px solid ${({ color }) => color}; */
  }
`

const components = {
  pre: (props) => {
    console.log(props)
    const className = props.children.props.className || ""
    const code = props.children.props.children.trim()
    const language = className.replace(/language-/, "")
    const file = props.children.props.file
    return (
      <CodeBlockContainer>
        <CodeTitle>{file && `${file}`}</CodeTitle>
        <div style={{ display: "flex", position: "relative" }}>
          <CodeLabel>{`${language}`}</CodeLabel>
        </div>
        <div
          style={{
            overflow: "auto",
            background: "#011627",
            borderRadius: "0.5rem",
          }}
        >
          <Highlight
            {...defaultProps}
            theme={undefined}
            // theme={theme}
            code={code}
            language={language}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Pre
                className={className}
                style={style}
                language={language}
                color="green"
              >
                {/* <div>{`Language: ${language}`}</div> */}
                {/* <div>{file && `File: ${file}`}</div> */}
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </Pre>
            )}
          </Highlight>
        </div>
      </CodeBlockContainer>
    )
  },
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
