import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./myPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    console.log("myPostsContainer", state);
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost:()=>{
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text)=>{
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;