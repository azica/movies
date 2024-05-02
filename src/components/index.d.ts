import { FC, ReactNode } from 'react'
import { GridSortItem, GridSortModel, GridRowSelectionModel, GridEventListener } from '@mui/x-data-grid';

declare global {
    type DataGrid = FC<{
        rows: Movie[];
        columns: GridColDef[];
        loading: boolean;
        // handleRowClick: (newRowSelectionModel: GridEventListener) => void
        onCellClick: (newCellSelectionMode: GridEventListener) => void;
    }>

    type MoviesTable = FC<{
        movies: Movie[];
        loading: boolean;
    }>

    type Modal = FC<{
        open: boolean;
        handleClose: () => void;
        children: ReactNode;
    }>

    type CustomImage = FC<{
        imageUrl: string;
        title: string;
        isThumbImage?: boolean;
        imageClickHandle?: () => void;
    }>
}