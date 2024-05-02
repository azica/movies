import { useColorScheme, Button } from "@mui/material";
import { useState, useEffect } from "react";

const ModeSwitcher = () => {
    const { colorScheme, setColorScheme } = useColorScheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Button
            color="primary"
            variant="contained"
            onClick={() => {
                setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
            }}
        >
            {colorScheme === 'light' ? 'Dark' : 'Light'}
        </Button>
    );
};

export default ModeSwitcher;