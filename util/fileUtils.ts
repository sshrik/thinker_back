export function setFileType(fileExtension: string) : string {
    switch(fileExtension) {
        case "jpg":
        case "png":
        case "jpeg":
            return "image";
        case "gif":
            return "gif";
        case "mp4":
        case "avi":
            return "movie";
        case "mp4":
            return "music";
        case "txt":
            return "text";
        default:
            return "unknown";
    }
}

export function getFullPath(fileName: string) : string {
    return process.env.BASE_URL + "\\" + fileName;
}