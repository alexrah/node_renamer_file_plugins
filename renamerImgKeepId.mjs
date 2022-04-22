import fs from "fs";
import path from "path";

class Renamer{
    replace (filePath) {
        const oFile = path.parse(filePath);

        const oStats = fs.statSync(filePath);

        let sMonth = oStats.birthtime.getMonth() + 1;
        sMonth = sMonth.toString().padStart(2,'0');

        const sDay = oStats.birthtime.getDate().toString().padStart(2,'0');

        let sRand;

        const regExpId = new RegExp(/IMG_(\d+)/,'i');
        console.log(oFile.name);
        const aMatched = regExpId.exec(oFile.name);
        console.log(typeof aMatched);
        console.log(typeof aMatched[1]);

        if(aMatched[1] !== 'undefined'){

            sRand = aMatched[1];

        } else {

            sRand = Math.round(Math.random()*1000000);

        }


        console.log(aMatched);

        const sNewName = 'IMG_' + oStats.birthtime.getFullYear() + sMonth + sDay + '_' + sRand + oFile.ext

        return path.join(oFile.dir, sNewName)
    }
}

export default Renamer;