<title>Project Notes</title>

######## npm install & yarn install

--save-dev/--dev/-S-D: For pachages that are only used by developers
--save/"nothing"/-S: For packages that are also used by users (users' browser).

--save is the default setting if nothing is added for installation.

######## yarn.lock file (what is this file?)

1. The lock file for yarn. (gnerated when using yarn to manage npm dependencies.)
2. It locks down the versions for the dependencies specified in the package.json file

######## importing

Importing ADDRESS:
Use relative address if importing from your own file
Use library name if importing from third-party library.

importing default export:
import GIVEN_NAME from ADDRESS

importing named values:
import {PARA_NAME} from ADDRESS

importing a combination:
import GIVEN_NAME, {PARA_NAME, ...} from ADDRESS

################# React Class this

Method 1:
define a function with format: x = () => {}

constructor(props){
super(props);
this.state = {
n: 1
};
}
...
x = () => {
this.setState({
n: 2
})
}

It is a simplified way of definining this.x in the consturctor. Therefore, this method has a problem of taking too much memory. Every case ran requies it's own definition of this.x.

Method 2:
Mannually bind this in jsx

<button onClick={this.x.bind(this)}>button</button>

Method 3:
Mannually bind this in the consturctor.

constructor(props){
super(props);
this.state = {
n: 1
};
this.y = this.x.bind(this)
}
...
<button onClick={this.x.bind(this)}>button</button>

Method 1 is the simplified version of method 3.

############## Axios trick with useEffect hook

The empty second variable of useEffect hook makes it runs only once when mounted.
Perfect chance to use axios.get information here.

useEffect(() => {
axios.get('')
}, [])

############### static importing and dynamic importing

static: suitable for tree-shaking optimization but not as convinent for importing many items
dynamic: scalable

############### style loader, css loader, sass loader

sass loader translates scss doc into css doc as strings.
css laoder converts the css doc into an object with strings inside.
style loader converts the object into a style tag enclosing the css. general process as follows:

style_tag = document.createElement("style tag")
style_tag.innerHTML = "css"
document.head.appendChild(style_tag)

############# highlights

webpack: used awesome-typescript-loader and html-webpack-plugin
circle ci
test coverage
auto test, auto bundle, and auto npm publish after push!
react router
used scss attribute selector to avoid interference
used react protal to prevent context stacking

Dialog:
onClose={() => {
ReactDOM.render(
React.cloneElement(component, { visible: false }),
div
);
ReactDOM.unmountComponentAtNode(div);
div.remove();
}}
re-render the component to change the attribute: visible. Cloned the component and then overwrite the property.
there was an extra div to remove: remove the events attached onto the div first with "ReactDOM.unmountComponentAtNode()". And then remove the div.

########## npm version

major.minor.patch

commands:
(comes with auto git commit)
npm version major >>>> 0.0.1 -> 1.0.0 for major change in API, affects cuurent code
npm version minor >>>> 0.0.1 -> 0.1.0 for minor change in API, doesn't affect current code
npm version patch >>>> 0.0.1 -> 0.0.2 for bug fixes, no API changes
