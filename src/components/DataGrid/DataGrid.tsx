import { GridSortModel, DataGrid as MuiDataGrid, gridClasses } from '@mui/x-data-grid';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type NewSort = "desc" | "asc";

const DataGrid: DataGrid = ({ rows, columns, loading, onCellClick }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortModel, setSortModel] = useState<GridSortModel>([
        {
            field: searchParams.get("sort") || "title",
            sort: searchParams.get("order") as NewSort || 'desc',
        },
    ]);

    const handleSortChange = (sortModel: GridSortModel) => {
        sortModel.forEach((el) => {
            setSearchParams(searchParams => {
                searchParams.set("sort", el.field);
                el.sort && searchParams.set("order", el.sort)
                return searchParams;
            })
        })
        setSortModel(sortModel);
    };

    return (
        <MuiDataGrid
            sortingOrder={['desc', 'asc']}
            autoHeight
            rows={rows}
            columns={columns}
            sortModel={sortModel}
            sortingMode="server"
            filterMode="server"
            onSortModelChange={handleSortChange}
            pagination
            getRowHeight={() => 'auto'}
            getEstimatedRowHeight={() => 150}
            loading={loading}
            onCellClick={onCellClick}
            sx={{
                bgcolor: "background.paper",
                [`& .${gridClasses.cell}`]: {
                    py: 1,
                },
            }}
        />
    )
}

export default DataGrid