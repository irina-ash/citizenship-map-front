import styles from "./draw.module.scss";

export const drawPoint = (svg, color, transform) => {
        const group = svg.append("g").attr("transform", transform);

        const circle = group.append("circle")
                        .attr("r", 5)
                        .attr("cx", 0)
                        .attr("cy", 0)
                        .attr("class", styles[`point-${color}`]);
        return circle;
}