import React, { useRef, useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { Button } from '@mui/material';

const Dailog = (props) => {
    const { open = false, handleModal = () => { }, handleAddUser = () => { }, currentUser:ctx, updateUser = () => {} } = props
    const [name, setName] = useState('')
    const [loc, setloc] = useState('')   
    useEffect(() => {
       if(ctx?.userContext?.name) {
        setName(ctx?.userContext?.name)
        setloc(ctx?.userContext?.location) 
       }
    }, [ctx])
    const uName = useRef()
    const uLocation = useRef()
    const handleClick = (i) => {
        const obj = {
            name: name,
            location: loc,
        }
        if(ctx?.userContext?.name){
            updateUser(obj, ctx.index)
        } else {
            handleAddUser(obj)
        }
        handleModal()
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleLoc = (e) => {
        setloc(e.target.value)
    }
    return <Dialog open={open} onClose={handleModal}>
        <DialogTitle style={{ width: 500 }}> Add New</DialogTitle>
        <DialogContent>
            <p>Name: <input ref={uName} value={name} type="text" onChange={handleName} /></p>
            <p>Location: <input ref={uLocation} value={loc} type="text" onChange={handleLoc} /></p>
        </DialogContent>
        <DialogActions>
            <Button type="button" onClick={() => handleClick()}>Ok</Button>
        </DialogActions>
    </Dialog>
}

export default Dailog