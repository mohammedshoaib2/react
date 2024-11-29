const rootElement = document.querySelector("#root");
const reactElement = {
  type: "a",
  props: {
    href: "www.google.com",
    targer: "_blank",
  },

  children: "Click to visit google",
};

function customRender(rootElement, reactElement) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  rootElement.appendChild(domElement);
}

customRender(rootElement, reactElement);
