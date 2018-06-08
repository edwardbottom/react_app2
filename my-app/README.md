##running this application 

In order to run this application, you will need to setup NodeJS and NPM. This can be done through the node js website found [here](https://nodejs.org/en/download/). 

Generally for setting up React, you will need to use node packet manager(NPM) to install a variety of packages including React, React-Dom, React, Redux, etc. If you are using this repository specificially then all the the packages needed should be contained within the node_modules folder. 

To run the application, you will need to fork the GitHub repo to your own repository if you do not already have access to it and download the repo to your desktop. 

Once on your desktop, open command line and make sure you are using the C drive. If you are, then a C:// should appear when command line is opened. If this is not the case, then type in 'C:' and then press enter to change the drive to the C drive. A C:// should appear in the command line. 

Next, you will need to enter the directory that the React App is stored in. To do this type in the command 'cd Users'. The command line should show C://Users. Then type ' cd your-username', 'cd Documents', 'cd GitHub', 'cd react_app2', and  then 'cd my_app'. 

The file path should look like this: "C://Users/'your-username'/Documents/GitHub/react_app2/my_app". If it does type in the command "npm start" which should run the react application on your local host server from port 3000 and make it accessible on the link "localhost:3000" in any browser. 


##Running the proxy REST API
In order to run the sample REST API in this project, you will be using the json-server package for node.js. The documentation for the server can be found [here](https://github.com/typicode/json-server) . If you forked this repo, then you most likely should already have it in your repository in the node_modules folder. If it is not in your node modules folder, you will need to install it using npm install json-server. 

To run the server, begin by entering the directory of server.js. Instructions for this are detailed above, but instead of using 'cd my_app', you should use 'cd SampleServer'. You should then be in the correct directory. Then type in json-server basic.json --port 3004. The server should then start and be accessible from [localhost:3004](localhost:3004) . 