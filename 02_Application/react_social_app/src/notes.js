// render() {
//     return(
//       <div style={styles.container}>

//         <Header pgTitle='My Application' />
//         <p> This is the main app</p>
//         <Footer />

//         <p>
//           <img src={logo} alt="Logo" />
//         </p>
//         <MyForm addName={this.addName} />
//         <Search searchMe={this.searchMe} />

//         {/* <MyModal /> */}
//         {/* <ResponsiveModal /> */}

//       </div>

//     )
//   }
// }


// databinding
// class App extends Component {
//   state = {
//     myInput: ''
//   }

//   changeMeMan = e => {
//     this.setState({myInput: e.target.value})
//   }

//   render() {
//     return (
//       <div style={styles.container}>
//         <Header pgTitle='My Application' />
//         <MyForm
//           changeMeMan={this.changeMeMan}
//           myInput={this.state.myInput}
//         />
//         <Footer />
//       </div>
//     )
//   }

// }

/**
 Form Validation in JS
 
 */

function validate() {
    if (document.myForm.Name.value == "") {
        alert("please provide your name!")
        document.myForm.Name.focus()
        return false //prevents the default action and stops the bubbling 
    }
    //rinse wash and repeat for all form fields requiring text

    if (document.myForm.Zip.value == "" || isNaN(document.myForm.Zip.value) || document.myForm.Zip.value.length != 5) {
        alert("Please provide a zip in the format #####")
        document.myForm.Zip.focus()
        return false;
    }
}