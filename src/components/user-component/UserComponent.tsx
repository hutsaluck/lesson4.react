import React, {Component} from 'react'
import {IUser} from "../../models/IUser"
import './user-component.css'
import {userService} from "../../services/api.service";

type UserState = {
    user: IUser|null
    getPosts: (id:number|undefined) => void
}

class UserComponent extends Component<{ id: number, getPosts: (id:number|undefined) => void }, UserState> {

    state: UserState = {
        user: null,
        getPosts: (id:number|undefined) => {}
    }

    componentDidMount() {
        userService.getUserById(this.props.id).then((user: IUser) => this.setState({...this.state, user: user}))
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
