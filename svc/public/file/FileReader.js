const fs = require('fs')

export class FileReader {
    getContent(filepath){
        return fs.readFileSync(filepath)
    }
}

export const fileReader = new FileReader