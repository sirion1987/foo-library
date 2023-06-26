import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const addApp = ({
  message,
  mountOn
}) => {
  document.addEventListener("DOMContentLoaded", () => {
    const rootNode = document.getElementById(mountOn);
    const root = ReactDOM.createRoot(rootNode);

    root.render(
      <App
        message={message}
      />
    )
  })
}

export class FooLibrary {
  constructor(attributes) {
    this.attributes = attributes
  }

  render() {
    addApp(this.attributes)
  }
}
