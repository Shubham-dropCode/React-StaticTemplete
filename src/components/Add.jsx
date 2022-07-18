import { Box, Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

const Add = () => {
    return (
        <Box>
            <Tooltip title="Add" sx={{ position: 'fixed', bottom: 20, left: { xs: "calc(50%)", sm: 20 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
        </Box>
    )
}

export default Add