import fs from "fs";
import path from "path";

class Renamer{
    replace (filePath) {
        const oFile = path.parse(filePath);
        const sNewName = oFile.name + ' [DONE]' + oFile.ext
        return path.join(oFile.dir, sNewName)
    }
}

export default Renamer;