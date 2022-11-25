import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert, Badge, Grid, Paper, Snackbar } from '@mui/material';
import { Box } from '@mui/system';
import Item from './Item';
import ListAltIcon from '@mui/icons-material/ListAlt';

export default function ButtonItem() {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState(0);
    const [itemsView, setItemsView] = useState([]);

    const handleClick = () => {
        const abc = [...itemsView,[]]
        setItem(count => count + 1);
        setOpen(true);
        setItemsView(abc) 
    };
    const handleReset = () => {
        setItem(0)
        setItemsView([])
    }
    const handleClose = (reason) => {

        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };



    return (
        <>
            <Box
                sx={{
                    p: 2,
                    bgcolor: 'background.default',
                    display: 'grid',
                    justifyContent: 'center'
                }}
            >
                <Paper elevation={3} sx={{ p: 2, width: 450 }} >
                    <Badge badgeContent={item} color="success" sx={{pb:2}}>
                        <ListAltIcon fontSize="large" color="action" />
                    </Badge>
                    <Grid >

                        <Button
                            variant="outlined"
                            startIcon={<AddIcon />}
                            onClick={handleClick}
                        >
                            Add Item
                        </Button>
                        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Item added successfully
                            </Alert>
                        </Snackbar>
                        <Button variant="outlined"
                            startIcon={<DeleteIcon />}
                            onClick={handleReset}>
                            Reset
                        </Button>
                    </Grid>
                </Paper>
                <Paper elevation={3} sx={{ p: 2, width: 450 }} >
                {item ?  itemsView.map((data,i) => {
                    return(
                    <Item item={i + 1} value={data} key={i} />
                        )
                    })
                    : ''}
                    </Paper>
            </Box>


        </>
    )

}


