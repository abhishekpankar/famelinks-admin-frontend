export function verifyImageFile(fileType) {
    return (fileType === "image/jpeg" || fileType === 'image/png' || fileType === "image/gif") ? true : false;
}

