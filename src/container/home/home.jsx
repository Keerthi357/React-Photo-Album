import * as React from "react";
import axios from 'axios';
import { Card } from 'primereact/card';
import classes from './home.module.css';
import { Button } from 'primereact/button';

export class Home extends React.Component {
    state = {
        users: null,
        showAlbum: false,
        user: null,
        matchedUserCount: null,
        listedusers : null
    }
    componentDidMount() {
        //get the users list and filter the logged in user details
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const user = res.data.filter(x => x.id === parseInt(this.props.match.params.userId, 10))[0];
                this.setState({ users: res.data, user });
            })
    }
    //show list of albums to respective user
    showAlbum() {
        window.location.href = `/admin/${this.state.user.id}`
    }

    //show list of albums to respective user
    showSelectedUsersAlbum(item) {
        window.location.href = `/admin/`+item.id
    }


    //to find any near by users
    findUsers() {
        const matchedUsers = this.state.users.filter(x => x.address.city === this.state.user.address.city && x.address.city != this.state.user.address.city);
        this.setState({ matchedUserCount: matchedUsers.length })
    }
    //to list users
    listUsers() {
        const listuser = this.state.users.filter(x => x.name != this.state.user.name);
        this.setState({ listedusers: listuser })
    }
    render() {
        return (
            <>
                <div>
                   <h2> Welcome {this.state.user?.name}</h2>
                </div>
                <div className='card' >
                    <Card title='User Details' >
                        <div className={classes.userCard}>
                            <div>Name: {this.state.user?.name}  </div>
                            <div>City: {this.state.user?.address.city} </div>
                            <div>Email: {this.state.user?.email} </div>
                            <div>Phone: {this.state.user?.phone} </div>
                            <div>Website: {this.state.user?.website}</div>
                        </div>
                    </Card>
                </div>
                <div>
                    <Button variant="outline-primary" className={classes.button} label="Click me to view albums" onClick={() => this.showAlbum()}/>
                    <Button className={classes.button} label="Find users near me" onClick={() => this.findUsers()}/>
                    <Button className={classes.button} label="List other users" onClick={() => this.listUsers()} />
                </div>
                { this.state.matchedUserCount != null && <div>
                    {`${this.state.matchedUserCount} number of nearby user(s) found.`}
                </div>}

                {this.state.listedusers?.map(item => ( 
                    <li className={classes.userList} onClick={()=>this.showSelectedUsersAlbum(item)}>{item.name}</li>
                ))}          
            </>
        );
    }
}
export default Home;