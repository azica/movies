import { Box, Link, Rating, Typography } from "@mui/material"
import Image from "components/Image/Image";

const RowContent = ({ movie, imageClick }: { movie: Movie; imageClick: boolean }) => {
    return (
        <Box
            my={4}
            display="flex"
            gap={4}
            p={2}
            justifyContent={imageClick ? "center" : "space-between"}
        >
            {
                !imageClick &&
                <Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={1}
                        marginBottom={3}
                    >
                        <Typography
                            variant='h3'
                            component='h3'
                            align="center"
                        >{movie.title}

                        </Typography>
                        <Rating value={Number(movie.rating)} />
                    </Box>
                    <Typography
                        gutterBottom
                    >{movie.plot}
                    </Typography>
                    <Link href={movie.website}>
                        {movie.website}
                    </Link>
                </Box>
            }
            <Box width={350}>
                <Image
                    imageUrl={movie.poster}
                    title={movie.title}
                    isThumbImage={false}
                />
            </Box>
        </Box>
    )
}

export default RowContent