import { memo } from "react";
import { IGradeImageProps } from "./types";
import useGradeImage from "./useGradeImage";
import Tooltip from "@mui/material/Tooltip";

const GradeImage = ({ className, fileName, alt }: IGradeImageProps) => {
    const { error, image } = useGradeImage({fileName});

    if (!image || error) return null;

    return (
        <Tooltip arrow followCursor title={alt} placement="top">
            <img className={className} src={image} alt={alt} />
        </Tooltip>
    );
}

export default memo(GradeImage);