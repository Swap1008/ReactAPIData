import React, { Component } from 'react'
import Axios from 'axios';

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state={
            comments:[]
        }
    }

    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response => {
            this.setState({
                comments:response.data
            });
        })
        .catch((err) => {
            console.log(err); 
        });
    }

    render() {
        const {comments}=this.state;
        return (
            <div>
                {
                    comments.map(comment=>{
                        const{id,name,email,body}=comment;
                        return(
                            <div key={id}>
                                <p>{name}</p>
                                <p>{email}</p>
                                <p>{body}</p>

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
