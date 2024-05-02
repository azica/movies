import { Box } from "@mui/material";
import styled from "styled-components";

interface ImageProps {
	$isThumbImage?: boolean;
}

export const ImageWrapper = styled(Box) <ImageProps>`
	position: relative;
	cursor: pointer;
	width: ${({ $isThumbImage }) => ($isThumbImage ? "90px" : "100%")};
	height: ${({ $isThumbImage }) => ($isThumbImage ? "120px" : "100%")};

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
