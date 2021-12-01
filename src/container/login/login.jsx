import * as React from "react";
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

//Developed using Hooks
const Login = () => {
    const [userName, setUserName] = React.useState(null);
    const [userList, setUserList] = React.useState([]);
    React.useEffect(() => {
        //get the list of users
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUserList(res.data);
            })
    }, [])
    //set the username state on change
    const setValue = (value) => {
        setUserName(value);
    }
    //render dialog footer
    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Login" onClick={() => login()} autoFocus />
            </div>
        );
    }
    //if valid login route the user to home component
    const login = () => {
        const user = userList.filter(x => x.username === userName);
        if (user[0] != null) {
            window.location.href = `/home/${user[0].id}`
        }
    }
    return (
        <>
            <Dialog header="Login" visible={true} style={{ width: '50vw' }}
                footer={renderFooter('displayBasic')} >
                <span>
                    <label htmlhtmlFor="in">Username</label>
                    <InputText id="in" value={userName} onChange={(e) => setValue(e.target.value)} />    
                </span>
            </Dialog>

        </>
    )

}
export default Login;