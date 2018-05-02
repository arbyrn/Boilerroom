Steps to use jspm 
    (Not all parts of setup will work as examples have been include for demonstration).
- install jspm globally if you haven't already
- mkdir for new project
- cd into new project
- "npm install jspm --save-dev" to install locally for project 
- "jspm init"
- "git init" 
    - exclude jspm_modules and npm_modules
    - add config.js and package.json to git.
- install dependencies
    - "jspm install jquery"
    - "jspm install npm:bootstrap"
    - "jspm install css" allows for the using, compiling and building of CSS in the link files.
        - use "import './src/main.css!'" in the js files to use them.  "!" signifies a plugin is used.

- Add startup code to index.html or default page.
    <!doctype html>
    <script src="jspm_packages/system.js"></script>
    <script src="config.js"></script>
    <script>
        System.import('src/main.js'); <!-- Starts linking from main  -->
    </script>
- In production use "jspm bundle src/main --inject" to bundle and build.