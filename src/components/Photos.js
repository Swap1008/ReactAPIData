import React, { Component } from 'react'
import Axios from 'axios';

export default class Photos extends Component {
    constructor(props) {
        super(props);
        this.state={
            photos:[]
        }
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((response) => {
            this.setState({
                photos:response.data
            })
        }).catch((err) => {
            console.log(err);
                        
        });
    }
    
    
    render() {
        const {photos}=this.state;
        return (
            photos.map(photo=>{
                const{id,title,url,thumbnailUrl}=photo;
                return(
                    <tr key={id}>
                        <td>{title}</td>
                        <td>{url}</td>
                        <td><img src={thumbnailUrl} className="img-thumbnail" /></td>
                    </tr>
                )
            })
            
        )
    }
}
