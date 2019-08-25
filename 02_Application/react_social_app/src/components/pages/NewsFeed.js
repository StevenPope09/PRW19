import React, { Component } from 'react';
import MyForm from '../myForm/MyForm'
import Post from '../posts/Post'
import uuid from 'uuid/v4'
import Search from '../search/Search'
import Image1 from '../../images/image1.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NewsFeed extends Component {
  state = {
    posts: [
      { id: "1", postText: "Taking the day off of work", userName: "Jackie Smith" },
      { id: "2", postText: "Off to the gym!", postImage: Image1, userName: "Julie Brown" },
      { id: "3", postText: "Man school can be hard sometimes", userName: "John Smith" },

    ],
    search: "",

    filteredPosts: []

  }

  componentDidMount() {
    if (localStorage.getItem('pList')) {
      let pList = JSON.parse(localStorage.getItem('pList'))
      this.setState({ posts: pList })
    }
  }

  onSearchChange = (e) => {
    //console.log(e.target.value);
    this.setState({ search: e.target.value })

  }

  getPosts = () => {
    // console.log(this.state);

    // if search exists, return filter posts
    // otherwise return original posts 
    if (this.state.filteredPosts.length > 0) {
      return this.state.filteredPosts

    }
    return this.state.posts


  }

  //Local Storage 
  // let pList = [...runInThisContext.state.posts]
  //             pList.push({ pList: this.state.post })
  //             this.setState({ pList })
  //             localStorage.setItem('pList', JSON.stringify(pList))

  render() {
    return (


      <div>


        <Search searchMe={(e) => {
          e.preventDefault()
          //console.log(this.state.search);
          if (this.state.search == "") {
            alert("Please fill this field out before you continue")
            return
          }

          let filteredPosts = this.state.posts.filter((post) => {
            return post.userName.indexOf(this.state.search) >= 0

          })

          this.setState({ filteredPosts })


        }} onSearchChange={this.onSearchChange} search={this.state.search} />
        <div style={styles.container}>

          <MyForm onSubmit={(text, name) => {
            
            let newPost = { postText: text, userName: name, id: uuid() };
            let posts = this.state.posts;
            posts.unshift(newPost);
            localStorage.setItem("pList", JSON.stringify(posts));
            this.setState({ posts })
          }} />
          {this.getPosts().map((post) => {
            return (
              <Post key={post.id} {...post} onDelete={(id) => {
                //console.log(id);
                let posts = this.state.posts
                let filteredPosts = posts.filter((post) => {
                  return post.id !== id

                })
                //console.log(filteredPosts);
                this.setState({ posts: filteredPosts }, () => {
                  localStorage.setItem('pList', JSON.stringify(filteredPosts))
                })

              }} />

            )
          })}
        </div>
      </div>

    )
  }
}

const styles = {
  container: {
    display: 'block',
    alignContent: 'center',  
    width: '65%',
    backgroundColor: '#CFC7D2',
    marginLeft: '17%',
    padding: '3%'
  },
 
}

export default NewsFeed;