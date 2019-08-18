import React, { Component } from 'react';
import Header from './components/header/Header'
import MyForm from './components/myForm/MyForm'
import Post from './components/posts/Post'
import uuid from 'uuid/v4'
import Search from './components/search/Search'
import Image1 from './images/image1.jpg'
import Footer from './components/footer/Footer'

class App extends Component {
  state = {
    posts: [
      { id: "1", postText: "Taking the day off of work", userName: "Jackie Smith" },
      { id: "2", postText: "Off to the gym!", postImage: Image1, userName: "Julie Brown" },
      { id: "3", postText: "Man school can be hard sometimes", userName: "John Smith" },

    ],
    search: "",

    filteredPosts: []

  }

  onSearchChange = (e) => {
    //console.log(e.target.value);
    this.setState({ search: e.target.value })
    
  }

  getPosts = () => {
    console.log(this.state);
    // if search exists, return filter posts
    // otherwise return original posts 
    if (this.state.filteredPosts.length > 0) {
      return this.state.filteredPosts
    }
    return this.state.posts


  }

  render() {
    return (
      <div style={styles.container}>

        <Header pgTitle="Neutron Gram" />

        <Search searchMe={(e) => {
          e.preventDefault()
          //console.log(this.state.search);
          if(this.state.search == ""){
            alert("Please fill this field out before you continue")
            return
          }
          
          let filteredPosts = this.state.posts.filter((post) => {
            return post.postText.indexOf(this.state.search) >= 0

          })

          this.setState({ filteredPosts })
          
          
        }} onSearchChange={this.onSearchChange} search={this.state.search} />
        
        <MyForm onSubmit={(text, name) => {

          let posts = this.state.posts;
          posts.unshift({ postText: text, userName: name, id: uuid() })
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
              this.setState({ posts: filteredPosts })
            }} />
            
          )
        })}

        <Footer />

      </div>
    )
  }


}


export default App;

const styles = {
  container: {
    display: 'block',
    backgroundColor: 'white',
    
    
  },
  

}