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
