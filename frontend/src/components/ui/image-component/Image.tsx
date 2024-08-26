import React from "react";

interface Props {
	src: string;
	width?: number;
	height?: number;
	alt?: string;
}

const Image: React.FC<Props> = ({ src, alt, width = 30, height = 30 }) => {
	return <img src={src} width={width} height={height} alt={alt} />;
};

export default Image;
