function getElementWidth(content, padding, border) {
    const contentWith = Number.parseFloat(content);
    const paddingValue = Number.parseFloat(padding);
    const borderValue = Number.parseFloat(border);
    const totalWidth = contentWith + paddingValue * 2 + borderValue * 2;
    return totalWidth;

}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200