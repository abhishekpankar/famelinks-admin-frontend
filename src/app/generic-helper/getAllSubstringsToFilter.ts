export function getAllSubstringsToFilter(str: String) {
    let i, j, result = [];
    let newStr = str.toLowerCase();
    for (i = 0; i < newStr.length; i++) {
        for (j = i + 1; j < newStr.length + 1; j++) {
            result.push(newStr.slice(i, j));
        }
    }
    return result;
}
