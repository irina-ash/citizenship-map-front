import styles from "./draw.module.scss";

export const drawPin = (svg, groupName, onClick, transform, text, dx = 14) => {
    const group = svg.append("g")
        .attr("id", groupName)
        .attr("class", styles.pin)
        .attr("transform", transform)
        .on("click", onClick);
    group.append("path")
        .attr("d", "M0 15.5549C0 25.3567 11.0308 35.9229 15.0546 39.4517C15.8884 40.1828 17.1138 40.1828 17.9476 39.4517C21.9692 35.9229 33 25.3567 33 15.5549C33 6.96415 25.6124 0 16.5 0C7.3876 0 0 6.96415 0 15.5549V15.5549Z")
    group.append("circle")
        .attr("r", 14)
        .attr("cx", 16.5)
        .attr("cy", 16.5)
    group.append("text")
        .attr("dx", dx)
        .attr("dy", 20)
        .text(text);

    return group;
}