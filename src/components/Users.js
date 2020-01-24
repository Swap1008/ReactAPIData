import React, { Component } from 'react'
import Axios from 'axios'

export default class Users extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            users:[]
        }
    }
    
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => 
             this.setState({
                 users:response.data
             })
        )
        .catch((err) => {
            console.log(err);
            
        });
    }
    
    render() {
        const {users}=this.state;
        return (
            <div>
                <h2>Users</h2>
                {
                    users.map(user=>{
                        const{id,name,email,username}=user;
                        return(

                        <div key={id}>
                            <h4>{name}</h4>
                            <p>{email}</p>
                            <p>{username}</p>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}
