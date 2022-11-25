import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Item({item}) {
 
    return (
        <div>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: '2rem'}} color="text.secondary" gutterBottom>
                {item} 
                </Typography>
            </CardContent>

        </Card>
        </div>
    );
}
