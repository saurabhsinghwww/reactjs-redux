## Introduction
This codebase contains workshop samples, webpack development and production settings, AJAX calls, routing, JWT Authentication, Dynamic Component Loading, Code Splitting, RxJS & an example shopping cart implementation.

The code base is build from various workshops by Gopalakrishnan, the fine tuning of the code is still in progress. Integration with react-virtualized, websocket work still in progress, expected to be done by end of September. 

## TODO
Below parts is in merging process, expected to be done by end of September. 

  Unit Testing Integration [in progress]
  Web socket [in progress]
  React Virtualized

## Install

We need Node.js 6.x/8.x to be installed. 
Clone this respository, then

> npm install

## Webpack Server

> npm start


## Webpack Production

> npm run build

Bundles are kept in dist folder

## API Server

You should run the server, API Server code with  https://github.com/nodesense/restful-server
 
For login page, use below credential

username: admin, password: admin

username: staff, password: staff

username: user, password: user


/// Redux

Flux is architechture provided by facebook

Redux is actual implementation
Mobex does not completly fit in Flux, close but

CRUD or Forms use MOBEX or Angular
Redux for polling data


reducer should always be aysnchornous and should PureComponent

// use action for wrtiing async logic

class Math {

  var initial = 0;

 // impure function
  sum (value) {
  
    initial = initial + value
    return initial;

  }

}
// pure function 
sum (initial, value) {
  
    initial = initial + value
    return initial;

}





