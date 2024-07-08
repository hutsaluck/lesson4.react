import React, {Component} from 'react'
import UserComponent from "../user-component/UserComponent";
import {IUser} from "../../models/IUser";
import {getAllUsers, getPostsOfUserById} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import PostsComponent from "../posts-component/PostsComponent";
import './users-component.css'

type UserState = {
    users: IUser[]
    posts: IPost[]
    getPosts: (id:number) => void
}

class UsersComponent extends Component<any> {

    state: UserState = {
        users: [{
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
        }],
        posts: [],
        getPosts: (id: number) => {
            getPostsOfUserById(id).then(posts => this.setState({...this.state, posts: [...posts]}));
        }
    }

    componentDidMount() {
        getAllUsers().then((value: IUser[]) => {
            this.setState({...this.state, users: [...value]});
        });
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
                                getPosts={this.state?.getPosts}
                            />))
                    }
                </div>
                <h2>{this.state?.posts.length ? `Posts` : ``}</h2>
                <div>
                    <PostsComponent posts={this.state?.posts}/>
                </div>
            </div>
    );
    }
}

export default UsersComponent;
