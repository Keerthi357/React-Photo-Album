import * as React from "react";
import { Card } from 'primereact/card';

export class Thumbnail extends React.Component {
    //open image in a new tab
    openImage(url) {
        window.open(url, "_blank");
    }
    render() {
        return (
            // accessing the image prop details sent to thumbnail component 
            <div onClick={() => this.openImage(this.props.image.url)}>
                <Card title={this.props.image.title} className='card'>
                    <img src={this.props.image.thumbnailUrl} />

                </Card>
            </div>
        )
    }
}

export default Thumbnail;
