import path from "path";
import sqlite3 from 'better-sqlite3';

class Renamer{
    replace (filePath) {
        const oFile = path.parse(filePath);


        const db = new sqlite3('./testFiles/MTLibrary.sqlite');

        let sName;

        const row = db.prepare('SELECT ZTITLE FROM ZMTEPISODE WHERE ZASSETURL LIKE ?;').get(`%${oFile.name}%`);
        
        // console.log('XXX')

        // console.log(row['ZTITLE']);
        sName = row['ZTITLE'];

        sName = sName.replace(/\//g,'');
        sName = sName.replace(/ - /g,'_');
        sName = sName.replace(/ /g,'_');
        sName = sName.replace(/:/g,'');

        const sNewName = sName + oFile.ext

        return path.join(oFile.dir, sNewName)

    }
}

export default Renamer;