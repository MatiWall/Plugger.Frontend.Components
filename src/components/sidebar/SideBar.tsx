import React, { ReactElement } from "react";

import {
    Box,
    CssBaseline,
    Toolbar,
    Divider,
    Typography,
    useTheme,
    List
} from "@mui/material";


interface SideBarProps {
    title?: React.FC;
    links?: React.FC[];
    tools?: React.FC[];
}

const SideBar: React.FC<SideBarProps> = ({
    title,
    links,
    tools
}) => {

    const Title = title;

    const theme = useTheme();
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
            }}
        >
            <CssBaseline />
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Title Section */}
                <Toolbar>
                    {Title ? <Title /> : <Typography variant="h6">Add a title</Typography>}
                </Toolbar>
                <Divider />

                {/* Links Section (Floats to the Top) */}
                <Box sx={{ flexGrow: 1, p: 1 }}>
                    <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        {links?.map((LinkComponent, idx) => (
                            <LinkComponent key={idx} />
                        )) || <Typography variant="body2">Navbar</Typography>}
                    </List>
                </Box>

                {/* Tools Section (Floated to the Bottom) */}
                {tools &&
                    <>
                        <Divider></Divider>
                        <Box sx={{ p: 1 }}>
                            <Toolbar>
                                {tools?.map((ToolComponent, idx) => (
                                    <ToolComponent key={idx} />
                                ))}
                            </Toolbar>
                        </Box>
                    </>
                }
            </Box>
            <Divider orientation="vertical" />
        </Box>
    );
};

export default SideBar;