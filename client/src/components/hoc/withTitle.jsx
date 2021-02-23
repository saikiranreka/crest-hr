import * as React from "react";

export function withTitle(title, WrappedComponent) {
  return class extends React.Component {
    componentWillMount() {
      document.title = `${title} | CREST HR`;
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}
