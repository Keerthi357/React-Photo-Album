import * as React from "react";
import axios from 'axios';
import { Card } from 'primereact/card';

export class Album extends React.Component {
    state = {
        albums: [],
        album: null,
        showPhotos: false
    }
    //fetching the list of albums of logged user
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.userId}/albums`)
            .then(res => {
                this.setState({ albums: res.data });
            })
    }
    //routing to the photos component
    showPhoto(item) {
        window.location.href = `/photos/${item.id}`;
    }
    render() {
        return (
            <>
                <div>
                   <h2> Click an album in the list below to view the Photos.</h2>
                </div>
                {this.state.albums?.map(item => (
                    <div onClick={() => this.showPhoto(item)}>
                        <Card className='card'>
                            <h4>Album Name:</h4> {item.title}
                        </Card>
                    </div>

                ))}
            </>
        );
    }


}

export default Album;