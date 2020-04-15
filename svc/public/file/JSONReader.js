import { fileReader } from './FileReader'

export class JSONReader {
    constructor(fileReader) {
        this.fileReader = fileReader
    }

    getContent(filepath) {
        const rawdata = this.fileReader.getContent(filepath)
        const content = JSON.parse(rawdata)
        return content
    }
}

export const jsonReader = new JSONReader(fileReader)