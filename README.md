# node-red-project-template
This is a template for a Node-RED project meant to be run in local mode.  The idea is to run an instance of Node-RED entirely from within a local directory to make it more portable.  This also makes running multiple instances of Node-RED at the same time easier.

Node-RED will start with a blank canvas and will save the flow file to flows.json the first time a deploy is done.  If you add your own flows.json file it will load that by default.

## Usage

```
git clone https://github.com/natcl/node-red-project-template.git
cd node-red-project-template
npm install
npm start
```

When running multiple instances in parallel, you can specify a port:

```
npm start 1885
```

## Dependencies

You can easily add third party nodes by modifying the package.json file.  For this template we added the node-red-contrib-ui package.
