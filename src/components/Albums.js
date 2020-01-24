import React, { Component } from 'react'
import Axios from 'axios';

export default class Albums extends Component {
    constructor(props) {
        super(props);
        this.state={
            albums:[]
        }
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/albums")
        .then((response) => {
            this.setState({

                albums:response.data
            })
        }).catch((err) => {
            console.log(err);                        
        });
    }
    
    
    render() {
        const {albums}=this.state;
        return (
            albums.map(album=>{
                const{userId,title,id}=album;
               return(

               <tr key={id}>
                    <td>{userId}</td>
                    <td>{title}</td>
                    
                </tr>
               )
            })
        )
    }
}
