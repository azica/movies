import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { theme } from "styles/theme";

import { LayoutContent } from "./LayoutContent";
import ModeSwitcher from "components/ModeSwitcher/ModeSwitcher";

import { layoutStyles } from "./styles";
import { CssBaseline } from '@mui/material';
const { Container, Wrapper } = layoutStyles;

export const Layout = () => {
	return (
		<CssVarsProvider theme={theme}>
			<CssBaseline />
			<ModeSwitcher />
			<Wrapper>
				<Container>
					<LayoutContent />
				</Container>
			</Wrapper>
		</CssVarsProvider>
	);
};
