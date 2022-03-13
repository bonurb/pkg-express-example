# pkg-express-example
This is the express example from https://github.com/vercel/pkg.git, slightly modified and extended to do a socket.io call from client in browser 
to the server and from server back to the client.

To run with node:
* npm init
* node index.js

Result:
in broswer:
```` console 
response from server: Hello Bob
````

To run with pkg:
* make sure to delete the browser cache before running the exe!
* pkg .
* express-example.exe

Result:
* in browser: 
```` console 
Hello, world!
```
* in dev-tools of the browser:
```` console 
Failed to load resource: net::ERR_EMPTY_RESPONSE socket.io.js
(index):11 Uncaught ReferenceError: io is not defined
    at (index):11:20
````
