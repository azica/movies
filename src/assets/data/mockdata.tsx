import { Typography, Rating } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import Image from "components/Image/Image";

export const columns: GridColDef[] = [
    {
        field: "poster",
        headerName: "Poster",
        width: 170,
        sortable: false,
        filterable: false,
        renderCell: (params: any) => (
            <Image imageUrl={params.row.poster} title={params.row.title} />
        ),
    },
    {
        field: "title",
        headerName: "Title",
        width: 250,
        renderCell: (params: any) => (
            <Typography variant="h4" color="primary.light">
                {params.value}
            </Typography>
        ),
    },
    {
        field: "year",
        headerName: "Year",
        width: 100,
        renderCell: (params: any) => (
            <Typography variant="h3" color="text.secondary">
                {params.value}
            </Typography>
        ),
    },
    {
        field: "rating",
        headerName: "Rating",
        width: 150,
        renderCell: (params: any) => <Rating readOnly value={Number(params.value)} />,
    },
    {
        field: "plot",
        headerName: "Plot",
        width: 300,
        renderCell: (params: any) => <Typography color="secondary.contrastText">{params.value}</Typography>,
    },
];
