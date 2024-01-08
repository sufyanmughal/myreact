function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute("target", reactElement.props.target);
    // container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type)
    document.innerHTML = reactElement.children
    for(prop == children) continue;
    domElement.setAttribute(prop, reactElement.props[prop])
}


const reactElement = {
    type: "a",
    props: {
        href: "https://google.co",
        target: "_blank"
    },
    children: "click me to visit"
};


const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)