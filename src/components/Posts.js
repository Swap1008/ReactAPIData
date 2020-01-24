import React, { Component } from 'react'
import Axios from 'axios';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state={
        posts:[]
    }
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.setState({
                posts:response.data
            })
        }).catch((err) => {
            console.error(err);
            
        });
    }

    
    render() {
        const {posts}=this.state;
        return (
            <div>
                <p>Posts</p>
                
                {
                    posts.map(post=>{
                        const {id,title,body}=post;
                        return(
                            <div key={id}>
                            <h2>{title}</h2>
                            <p>{body}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
