In order to make our project Production ready

first we need to setup SSH for authenticatino and communication with github 
set up *git init* and push the code into github.

to add node pacakge manager to our project we do npm init, following all the instructions in this command it will
create a package.json file in project

# Package.json => is a configuration for our npm. It keeps track of what versin of package is installed in our project (It keeps approx version which can be update)
# Package-lock.json => Keeps track of exact version of packages / Dependencies  installed (It keeps exact version of package )

Install dependencies into the project
the most important package in our project is a Bundler

# Bundler is used to minifiy our whole code cleane our whole code, or when it needs to be cached, needs to be clean at that time bundler is used.  Eg: Webpack, Parcel, Veet etc.

# Bundler basically bundles our code or project properly so that it can be ship to production.

# create-react-app uses webpack , babel behind the scenes to build things up.

We our using Parcel since it is easy to configure.

*npm i -D parcel* : There are 2 types of dependency : Dev Dependency and Normal Dependency
This -D represent Dev Dependency
*Dev Dependency* : Required during our devlopement phase
*Normal Dependency* : Are used in production also

Transtive Dependency : One Dependency have another dependencies these dependencies can have their own dependencies mentioned in their own package.json file and so on this whole chain/tree is called Transitive Dependency.

*There are multiple package.json, All the dependencies have their own package.json*
always push package.json and package-lock.json to github 

When you want to execure any pacakge after installing it via npm we use *npx* 

# To start our project use : npx parcel index.html

to install react we do *npm i react*

Thing Parcel does for us
# Parcel - Read this package
-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm - written in C++
-Caching - Faster Builds (inside parcel-cache to keeps cache so that builds run fast)
-Image Optimization
-Minification
-Bundling
-Compress
-Consistent Hashing
-Code Splitting
-Differential Bundling - support older browsers
-Diagnostic
-Error Handling
-HTTPs
-Tree Shaking - remove unused code
-Different dev and prod bundles

Why Parcel is fast because it uses parcel-cache

When you execute Parcel it generates dev build or even prod build of project and put it into dist folder and HMR is used along with parcel-cache to load it fast
after build it generated 3 files html, css and js and compress whole project code into these files.

for Prod build hit : *npx parcel build index.html*

To tell my project what all browsers my app will be supported in By using *browsersList* in package.json
# Explore BroswersList package