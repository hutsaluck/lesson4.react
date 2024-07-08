import React, {Component} from 'react'
import {IUser} from "../../models/IUser"
import './user-component.css'
import {getUserById} from "../../services/api.service";

type UserState = {
    user: IUser
    getPosts: (id:number) => void
}

class UserComponent extends Component<{ id: number, getPosts?: any }, UserState> {

    state: UserState = {
        user: {
            id: 1,
            name: '',
            username: '',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: {
                    lat: '',
                    lng: '',
                }
            },
            phone: '',
            website: '',
            company: {
                name: '',
                catchPhrase: '',
                bs: '',
            },
        },
        getPosts: (id:number) => {}
    }

    componentDidMount() {
        getUserById(this.props.id).then((value: IUser) => {
            this.setState({...this.state, user: value});
        });
        this.setState({...this.state, getPosts: this.props.getPosts});
    }

    render() {
        return (
            <div>
                <div className="user-item">
                    <h3>{this.state?.user?.id}. {this.state?.user?.name}</h3>
                    <button onClick={() => this.state?.getPosts(this.state?.user?.id)}>show posts of this user</button>
                </div>
            </div>
        );
    }
}

export default UserComponent;
