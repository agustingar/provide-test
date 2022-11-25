import { AppBar, ListItem, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'


export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Provide test</Typography>
                </ Toolbar>
            </ AppBar>
        </ Box>
    )
}
