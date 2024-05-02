import { Backdrop, Box, Button, DialogActions, Fade, Modal } from '@mui/material'
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    maxWidth: "800px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: "15px",
};

const RowModal: Modal = ({ handleClose, open, children }) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    {children}
                    <DialogActions>
                        <Button onClick={handleClose} variant="contained">Close</Button>
                    </DialogActions>
                </Box>
            </Fade>
        </Modal>
    )
}

export default RowModal