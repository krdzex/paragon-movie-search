import { Box, Button, Modal, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovie } from '../Actions';
import { createMovie, updateMovie } from '../ApiServices/movies-api';

const DetailModal = () => {
    const dispatch = useDispatch()
    const modalInfo = useSelector(state => state.selectedMovie)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [mode, setMode] = useState("watch")
    const [values, setValues] = useState({})

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    useEffect(() => {
        setValues(modalInfo)

    }, [modalInfo])
    const handleClose = () => {
        dispatch(selectMovie(false))
    }

    const onClickHandle = () => {
        if (mode === "watch") {
            setMode("edit")
        }
        // if (mode === "edit") {
        //     if (modalInfo._id === undefined) {
        //         createMovie(values).then(res => console.log(res)).catch(err => console.log(err))
        //     } else {
        //         updateMovie(modalInfo._id, values).then(res => console.log(res)).catch(err => console.log(err))
        //     }
        //     dispatch(selectMovie(false))
        // }
    }

    return (
        <Modal
            open={modalInfo !== false}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <img src={modalInfo.i?.imageUrl} style={{ width: "100%", maxHeight: "300px" }} xs={{}} alt='movie cover' />
                <TextField id="filled-basic" disabled={mode !== "edit"} label="Title" value={values.l} variant="filled" onChange={handleChange("l")} sx={{ width: "100%" }} margin='normal' />
                <TextField id="filled-basic" type={"number"} disabled={mode !== "edit"} label="Year" value={values.y} onChange={handleChange("y")} variant="filled" sx={{ width: "100%" }} margin='normal' />
                <TextField id="filled-basic" type={"number"} disabled={mode !== "edit"} label="Rank" value={values.rank} onChange={handleChange("rank")} variant="filled" sx={{ width: "100%" }} margin='normal' />
                <TextField id="filled-basic" disabled={mode !== "edit"} label="Type" value={values.q} variant="filled" sx={{ width: "100%" }} onChange={handleChange("q")} margin='normal' />
                {mode === "edit" && (<TextField id="filled-basic" disabled={mode !== "edit"} label="Image Url" value={values.i.imageUrl} onChange={handleChange("i.imageUrl")} variant="filled" sx={{ width: "100%" }} margin='normal' />)}
                <Button color="primary" variant="contained" onClick={onClickHandle}>
                    {mode === "edit" ? "Save" : "Edit"}
                </Button>
            </Box>
        </Modal>
    );
};

export default DetailModal;