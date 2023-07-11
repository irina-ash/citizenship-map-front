export const computeDimensions = (selection) => {
    var dimensions = null;
    var node = selection.node();
    
    if (node instanceof SVGGraphicsElement) {
        dimensions = node.getBBox();
    } else {
        dimensions = node.getBoundingClientRect();
    }
    return dimensions;
};