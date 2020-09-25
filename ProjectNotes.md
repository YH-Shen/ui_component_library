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
