import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
// import theme from "prism-react-renderer/themes/duotoneDark"
import theme from "./src/assets/css/myCustomTheme"
// require("./src/assets/css/prism-one-dark.css")

const components = {
  pre: (props) => {
    console.log(props)
    const className = props.children.props.className || ""
    const code = props.children.props.children.trim()
    const language = className.replace(/language-/, "")
    return (
      <Highlight
        {...defaultProps}
        // theme={undefined}
        theme={theme}
        code={code}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
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
    )
  },
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
