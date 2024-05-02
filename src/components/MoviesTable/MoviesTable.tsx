import { useState } from 'react';
import { GridCellParams } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

import DataGrid from 'components/DataGrid/DataGrid';
import RowModal from 'components/RowModal/RowModal';
import RowContent from 'components/RowContent/RowContent';

import { columns } from 'assets/data/mockdata';

export const MoviesTable: MoviesTable = ({ movies, loading }) => {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [imageClick, setImageClick] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClick = (params: GridCellParams) => {
        setImageClick(params.field === 'poster');
        setSelectedMovie(params.row);
        setOpen(true);
    };

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid
                rows={movies}
                columns={columns}
                loading={loading}
                onCellClick={handleClick}
            />
            <RowModal
                open={open}
                handleClose={() => setOpen(false)}>
                {
                    selectedMovie ?
                        <RowContent
                            movie={selectedMovie}
                            imageClick={imageClick}
                        /> : <Typography> There is no selected movie</Typography>
                }
            </RowModal>
        </div>
    );
};
