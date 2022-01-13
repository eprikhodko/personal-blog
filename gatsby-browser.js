import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import styled from "styled-components"
// import theme from "prism-react-renderer/themes/duotoneDark"
import theme from "./src/assets/css/myCustomTheme"
// require("./src/assets/css/prism-one-light.css")
// require("./src/assets/css/prism-one-dark.css")

const CodeBlockContainer = styled.div`
  background: hsl(220, 13%, 18%);
  border-radius: 4px;
  margin-top: 2em;
  margin-bottom: 2em;
`

const CodeTitle = styled.div`
  color: rgb(171, 178, 191);
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  padding: 1.25em 1.5em 1em;
  border-bottom: 1px solid rgb(171, 178, 191);
  border-radius: 4px 4px 0 0;
`

const CodeLabel = styled.div`
  background: rgb(247, 223, 30);
  padding: 0.25rem 0.5rem;
  margin-left: 1.5em;

  font-size: 1.2rem;
  letter-spacing: 0.075em;
  line-height: 1;
  text-transform: uppercase;
  color: rgb(35, 33, 41);

  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  text-align: center;
  /* display: flex; */
  justify-content: center;
  align-items: center;
`

const Pre = styled.pre`
  margin: 0;
  padding: 2em 1.5em;
  position: relative;

  &:before {
    content: "${({ language }) => language}";
    background: #d9d7e0;
    background: #f7df1e;
    border-radius: 0px 0px 4px 4px;
    color: #232129;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    letter-spacing: 0.075em;
    line-height: 1;
    padding: 0.4rem 0.8rem;
    position: absolute;
    text-align: right;
    text-transform: uppercase;
    top: 0px;
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
        {/* <div style={{ display: "flex", position: "relative" }}>
          <CodeLabel>{`${language}`}</CodeLabel>
        </div> */}
        <div
          style={{
            overflow: "auto",
            // background: "#011627",
            borderRadius: "0 0 4px 4px",
          }}
        >
          <Highlight
            {...defaultProps}
            // theme={undefined}
            theme={theme}
            code={code}
            language={language}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Pre className={className} style={style} language={language}>
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
