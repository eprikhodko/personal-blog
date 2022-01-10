import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
// import theme from "prism-react-renderer/themes/duotoneDark"
// import theme from "./src/assets/css/myCustomTheme"
require("./src/assets/css/prism-one-dark.css")

const components = {
  pre: (props) => {
    console.log(props)
    const className = props.children.props.className || ""
    const code = props.children.props.children.trim()
    const language = className.replace(/language-/, "")
    const file = props.children.props.file
    return (
      <div
        style={{
          background: "hsl(220, 13%, 18%)",
          borderRadius: "0.5rem",
          marginTop: "2rem",
          marginBottom: "2rem",
          paddingLeft: "1.5rem",
        }}
      >
        <div style={{ display: "flex", position: "relative" }}>
          <div
            style={{
              background: "#ffffff",
              marginRight: "1rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              textTransform: "uppercase",
              borderBottomLeftRadius: "0.5rem",
              borderBottomRightRadius: "0.5rem",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >{`${language}`}</div>
          <div
            style={{
              color: "#9d9d9d",
              fontFamily: "Montserrat",
              fontStyle: "italic",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {file && `${file}`}
          </div>
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
              <pre className={className} style={style}>
                {/* <div>{`Language: ${language}`}</div> */}
                {/* <div>{file && `File: ${file}`}</div> */}
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    )
  },
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
