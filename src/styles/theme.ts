
import { amber, blue, deepOrange, grey } from '@mui/material/colors';
import {
	experimental_extendTheme as extendTheme
} from '@mui/material/styles';
import { robotoRegular, robotoMedium } from "styles/fonts";

export const theme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					light: '#757ce8',
					main: '#3f50b5',
					dark: '#002884',
					contrastText: '#fff',
				},
				secondary: {
					light: '#ff7961',
					main: '#f44336',
					dark: '#ba000d',
					contrastText: '#000',
				},
			},
		},
		dark: {
			palette: {
				primary: {
					light: '#ba9ffb',
					main: '#7a5af5',
					dark: '#382bf0',
					contrastText: '#000',
				},
				secondary: {
					light: '#908d96',
					main: '#5e5a66',
					dark: '#1a1625',
					contrastText: '#ffffffb0',
				},

				divider: "#fff",
				background: {
					default: "#121212",
					paper: "#282828",
				},
				text: {
					primary: '#fff',
					secondary: '#8b8b8b',
				},
			},
		},
	},
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: `${robotoMedium} !important`,
					fontWeight: 500,
				},
				h1: {
					fontSize: "34px !important",
					lineHeight: "40px !important",
				},
				h2: {
					fontSize: "24px !important",
					lineHeight: "28px !important",
				},
				h3: {
					fontSize: "20px !important",
					lineHeight: "24px !important",
				},
				h4: {
					fontSize: "18px !important",
					lineHeight: "23px !important",
				},
				h5: {
					fontSize: "15px !important",
					lineHeight: "19px !important",
				},
				h6: {
					fontSize: "15px !important",
					lineHeight: "19px !important",
				},
				body1: {
					fontFamily: `${robotoRegular} !important`,
					fontWeight: 400,
				},
			},
		},
	},
});

