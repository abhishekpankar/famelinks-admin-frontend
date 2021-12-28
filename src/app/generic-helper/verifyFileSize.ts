export function verifyFileSize(fileSize, requiredSize) {
    console.log(fileSize," === ",requiredSize);
    
    return (fileSize <= requiredSize) ? true : false;
}
