import {XMLReader} from "../file/XMLReader";

export const getBenefitsFromFile = (pathname) => {
    const format = pathname.split('.').pop()
    const fileReader = new FileReader()
    let benefits = null
    switch (format) {
        case "csv":
            let xmlReader = XMLReader.constructor(fileReader)
            benefits = xmlReader.getContent(pathname)
            break
        case "json":
            break
        default:
            console.log("unexpected file format")
    }
    return benefits
}