import fs from "fs";
import path from "path";

class Renamer{
    replace (filePath) {
        const oFile = path.parse(filePath);

        const oStats = fs.statSync(filePath);

        let sMonth = oStats.birthtime.getMonth() + 1;
        sMonth = sMonth.toString().padStart(2,'0');

        const sDay = oStats.birthtime.getDate().toString().padStart(2,'0');

        const sRand = Math.round(Math.random()*1000000);

        const sNewName = 'IMG_' + oStats.birthtime.getFullYear() + sMonth + sDay + '_' + sRand + oFile.ext

        return path.join(oFile.dir, sNewName)
    }
}

export default Renamer;