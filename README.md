

list of plugins:
1. renamerImgRand.mjs -> rename files imported in Mac's Photos app; replace the auto-geneated name with IMG_[fullDate]_[randomNumb].[ext]
2. renamerImgKeepId.mjs -> rename adding [fullDate] but retaining the rest. original IMG_2321.CR2 - renamed IMG_20221231_2321.CR2
3. renamerPodcast.mjs -> rename *.mp3 files imported into Apple Podcast using SQLite DB to retrieve podcast title and use it to rename file.

## How to use plugins

install dependencies (required by testRenamerPodcast.mjs)

`npm install`

navigate to folder where files need to be renamed:

``npx renamer --chain [path/to/plugin.js] *``

example:

``npx renamer --chain ~/Projects/Personal/file_renamer/testRenamerPodcast.mjs *``

@see [renamer](https://www.npmjs.com/package/renamer)