Importance of the files and folder structure after creating react app

package.json---- it contains the dependency and the scripts required for the project

package-lock.json---- it makes sures the consistency of the packages.

node-modules---- it contains all the dependency which are installed and get generated once we
                 give npm install or create-react-app

manifest.json---- for progessive web apps.

index.html---- only file to serve in order tp create SPA, it has id ="root"

index.js--- starting of the application
            It contains app component and also the DOM element controlled by react.

App.js ---- responsible for the view in the browser

Flow of the appliction

Once we run npm start index.html will be served in the browser, it contains the 
root DOM node and control enter index.js and react DOM renders the root which containes app 
component and display in the browser.