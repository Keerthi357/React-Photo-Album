import * as React from "react";
import axios from 'axios';
import Thumbnail from '../thumbnail/thumbnail';

export class Photos extends React.Component {
    state = {
        photos: []
    }
    //to display the photos of corresponding album
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/albums/${parseInt(this.props.match.params.albumId, 10)}/photos`)
            .then(res => {
                this.setState({ photos: res.data });
            })
    }
    render() {
        return (
            <>
                <div>
                   <h2> Click a Photo to zoom it.</h2>
                </div>
                {this.state.photos?.map(item => (
                    //looping throug list of photos and calling thumbnail component by sending image details as props
                    <Thumbnail image={item} />
                ))}
            </>
        );
    }


}

export default Photos;