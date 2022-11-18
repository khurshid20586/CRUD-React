import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import { IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CustomDailog from './modal'

class Crud extends Component {
    constructor() {
        super()
        this.state = {
            userList: [
                {
                    name: 'Barique',
                    location: 'Qatar',
                },
                {
                    name: 'Khurshid',
                    location: 'Ranchi',
                },
                {
                    name: 'Ram',
                    location: 'UP',
                },
                {
                    name: 'Sam',
                    location: 'US',
                }
            ],
            modal: false,
            currentUser: {}
        }
    }
    toggalModal = () => {
        const { modal, currentUser } = this.state
        this.setState({ modal: !modal, currentUser: !modal ? {} :  currentUser})
    }
    addUser = (obj) => {
        const { userList } = this.state
        userList.push(obj)
        this.setState({ userList: [...userList] })
    }
    updateUser = (obj, index) => {
        const { userList } = this.state
        userList[index].name = obj.name
        userList[index].location = obj.location
        this.setState({ userList: [...userList] })
    }
    deleteUser = (index) => {
        const { userList } = this.state
        userList.splice(index, 1)
        this.setState({ userList: [...userList] })
    }

    editUser = (obj, index) => {
        this.toggalModal()
        const obj1 = {
            userContext: obj,
            index
        }
        this.setState({ currentUser: obj1})
    }


    render() {
        const { userList, modal, currentUser } = this.state
        return <div style={{ padding: 15 }}><h1>User List <Button type="primary" variant="contained" onClick={() => this.toggalModal()}><AddIcon /> Add new</Button></h1>
            <Grid container spacing={2}>
                <Grid item lg={4}>
                    <b>Name</b>
                </Grid>
                <Grid item lg={4}>
                    <b>Location</b>
                </Grid>
                <Grid item lg={4}>
                    <b>Update</b>
                </Grid>
            </Grid>
            {userList.map((itm, i) => {
                return <Grid container spacing={2} key={i}>
                    <Grid item lg={4}>
                        {itm.name}
                    </Grid>
                    <Grid item lg={4}>
                        {itm.location}
                    </Grid>
                    <Grid item lg={4}>
                        <IconButton color="primary" onClick={() => this.editUser(itm, i)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton color="error" onClick={() => this.deleteUser(i)}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            })}
            <CustomDailog open={modal} handleModal={this.toggalModal} handleAddUser={this.addUser} currentUser={currentUser} updateUser= {this.updateUser} />
        </div>
    }
}

export default Crud