import fs from "fs";
import path from "path";

/**
 * renamer plugin created to rename files imported in Mac's Photos app
 *
 * Rename files as follows:
 * - entirely replace the current name
 * - starts with IMG_
 * - creation date in the form: 20221231
 * - 6 digits random number
 * */
class renamerImgRand {
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

export default renamerImgRand;