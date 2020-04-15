export class XMLReader {
    constructor(fileReader) {
        this.fileReader = fileReader
    }

    getContent(filepath) {
        const content = this.fileReader.getContent(filepath)
        const parseString = require('xml2js').parseString
        const xml = "<benefits>" + content + "</benefits>"
        parseString(xml, function (err, result) {
            return result
        })
    }
}