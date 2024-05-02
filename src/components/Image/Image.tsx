import { ImageWrapper } from './styles';

const Image: CustomImage = ({ imageUrl, title, isThumbImage, imageClickHandle }) => {
    const thumbValue = isThumbImage === undefined ? true : isThumbImage;

    return (
        <ImageWrapper
            $isThumbImage={thumbValue}
            onClick={() => {
                imageClickHandle && imageClickHandle()
            }}>
            <img
                src={imageUrl}
                alt={title}
                loading="lazy"

            />
        </ImageWrapper>
    )
}

export default Image