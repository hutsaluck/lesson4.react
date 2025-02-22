import React, {Component} from 'react'
import UserComponent from "../user-component/UserComponent";
import {IUser} from "../../models/IUser";
import {userService} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import PostsComponent from "../posts-component/PostsComponent";
import './users-component.css'

type UserState = {
    users: IUser[]
    posts: IPost[]
    getPosts: (id:number|undefined) => void
}

class UsersComponent extends Component<{}, UserState> {

    state: UserState = {
        users: [],
        posts: [],
        getPosts: (id: number|undefined): void => {
            if (id != null) {
                userService.getPostsOfUserById(id).then((posts: IPost[]) => this.setState({...this.state, posts: [...posts]}))
            }
        }
    }

    componentDidMount() {
        userService.getAllUsers().then((value: IUser[]) => this.setState({...this.state, users: [...value]}))
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <div className="wrap-users">
                    {
                        this.state?.users.map((user) => (
                            <UserComponent
                                key={user.id}
                                id={user.id}
                                getPosts={this.state.getPosts}
                            />))
                    }
                </div>
                {this.state?.posts.length ? <h2>Posts</h2> : null}
                <div>
                    <PostsComponent posts={this.state?.posts}/>
                </div>
            </div>
    );
    }
}

export default UsersComponent;
