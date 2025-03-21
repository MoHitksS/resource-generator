const fs = require('fs');
const https = require('https');
const path = require('path');

function downloadAndSaveFile(sourceUrl, destinationPath, mypath) {
    if (!fs.existsSync(mypath)){
        fs.mkdirSync(mypath, { recursive: true });
    }
    const file = fs.createWriteStream(destinationPath,  {flags: 'w'});
    

    https.get(sourceUrl, (response) => {
        if (response.statusCode !== 200) {
            console.error(`Failed to download: ${response.statusCode}`);
            return;
        }
        
        response.pipe(file);

        file.on('finish', () => {
            file.close();
            console.log(`File saved to: ${destinationPath}`);
        });
    }).on('error', (error) => {
        console.error('Error downloading file:', error);
    });
}

// let resourcearray = []

function installDynamicData(resource, game_path){
    resource.forEach((url) =>{
        const sourceUrl = url.static_path;
        let mypath = `${game_path}${url.installPath}`
        let install = url.installPath
        const destinationPath = path.join(mypath, url.filename);
        // console.log({mypath, game_path, install, sourceUrl, destinationPath})
        downloadAndSaveFile(sourceUrl, destinationPath, mypath);
    })
}

// let game_path = 'E:/Bs/Booongo/parsing-game-app/public/Booongo/Buddha_Fortune/static.bng.games/gs/gamerunner/5.9.8/'
// installDynamicData(resourcearray,game_path)

// Read and parse HAR file
function readHarFile(filePath) {
  try {
    // Read file content
    const harContent = fs.readFileSync(filePath, 'utf8');
    const harData = JSON.parse(harContent);

    // Extract entries
    const entries = harData.log.entries;

    let resource = []

    // Use This for making backward \ slash to forward / slash
    // http://mtbink.com/utility/convert-backslash-to-forward-slash.html

    let game_path = 'E:/Bs/Booongo/parsing-game-app/public/Booongo/777_Fruity_Classic/static.bng.games/' // Change game name and drive location accroding to you structure
    entries.forEach((entry, index) => {
      let splitUrl = entry.request.url.split("/")
      if(splitUrl[2] == "static.bng.games"){
        let filename = splitUrl[splitUrl.length - 1].split("?")[0]
        let static_path = entry.request.url
        let excludeParts = ["https://static.bng.games/", splitUrl[splitUrl.length - 1]]
        let installPath = getInstallPath(static_path, excludeParts)
        resource.push({static_path, filename, installPath})
      }
    });

    if(resource.length > 0 && game_path){
        installDynamicData(resource, game_path)
    }

  } catch (error) {
    console.error('Error reading HAR file:', error.message);
  }
}

// Usage
let harLocation = 'E:/Bs/Resource_Downloader/harFile.har' // put your harfile location here
readHarFile(harLocation); 


function getInstallPath(path, excludeParts = []) {
    try {
        // Exclude specified parts from the path
        excludeParts.forEach(part => {
            path = path.replace(part, "");
        });

        return path;
    } catch (error) {
        console.error("Invalid URL", error);
        return null;
    }
}