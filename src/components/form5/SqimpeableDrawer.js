import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Drawer } from '@mui/material';
import { MenuItem } from '@mui/material';
import Form3 from '../form3/Form3';
import Zone from '../../containers/zone/Zone'
import Thanks from './Thanks';
import './theme.css'

const drawerBleeding = 90;

const Root = styled('div')(({ theme }) => ({
    height: '10%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[200] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? 'white' : grey[800], //test
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 50,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 5,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 25px)',
}));

function SwipeableEdgeDrawer(props) {
    const { window } = props;
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: '75%',
                        overflow: 'visible',
                    },
                }}
            />

            {/* TODO REMOVE */}
            {/* <Box sx={{ textAlign: 'center', pt: 1 }}>
                <Button onClick={toggleDrawer(true)}>Open</Button>
            </Box>  */}

            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'relative',
                        top: '-20%',
                        borderTopLeftRadius: 45,
                        borderTopRightRadius: 45,
                        visibility: 'visible',
                        right: 0,
                        left: 0,

                    }}
                >
                    <Puller />t
                    <div class="thanksc">
                        <Typography sx={{ p: 5, color: 'black', fontFamily: 'circular', textAlign: 'center', fontSize: '30px' }}>Tack för att du valde Mobill!</Typography>
                    </div>
                    



                    <Thanks>

                    </Thanks>

                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}

SwipeableEdgeDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
