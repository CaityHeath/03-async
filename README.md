![CF](http://i.imgur.com/7v5ASc8.png) LAB 3: ASYNC
=================================================

## Async Callbacks
This lab utilizes the fs module of Node to read and write to files. 

### Author: Caity Heath

### Links and Resources
* [Repo](https://github.com/CaityHeath/03-async)
* [Travis](https://www.travis-ci.com)

### Modules
* index.js
* reader-fixed.js
* reader-callbacks-array.js
* reader-promises.js
* reader-promises-all.js

### Requirements for reader-fixed.js module

* Accepting file names as parameters from the command line. The reader function is then invoked with a callback to read in the 3 files.
* The reader returns an array of the contents from those files in the order that they were written into the command line. 
* All jest tests must pass the tests in the reader.test.js file. 
 
### Requirements for reader-callbacks-array.js

* Accepts any number of files.
* Reader returns an array of all of the contents of the file fed into the command line. 
* All jest tests must pass the tests in the reader-callbacks-array.test.js file

### Requirements for reader-promises.js module

* Use promises to read in 3 files instead of callbacks.
* All jest tests must pass reader-promises.test.js

### Requirements for reader-promise-all.js module

* Use a array promises to read in any number of files from the command line.
* All jest tests muss pass reader-promise-all.test.js


### Setup
In order to run tests on these modules you will need to clone my repository by running the following  command: <br>
`git clone https://github.com/CaityHeath/03-async.git`

These modules use the following dependencies: 
<ul>
  <li>eslint
  <li>jest
</ul>
Then install Node modules by running: <br>

`npm i `

#### Running the tests
* `npm test <test filename > ` this command will run the tests associated with the file alternatively you can run 
* `npm test` to run all of the tests in the repository 

### Test file names
* reader.test.js
* reader-callbacks-array.test.js
* reader-promises.test.js
* reader-promise-all.test.js

#### Running the app 
* `node index.js ./files/1.txt ./files/2.txt ./files/3.txt`
