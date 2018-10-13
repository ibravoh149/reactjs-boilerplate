import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAccessToken } from "../../actions/fetchApi";


class HomePage extends Component{
    constructor(props){
        super(props)
        this.state= {
            title:"welcome to hello world"
        }

    //    this.getAccessToken = this.getAccessToken.bind(this)
        
    }



    componentDidMount(){
            const result=  getAccessToken();
            console.log(result);
    }

    render(){
        return(
            <div>
               <h1>{this.state.title}</h1>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//       loggedIn: state.auth.loggedIn,
//       error: state.auth.error,
//       user:state.auth.user,
//       userInfo:state.auth.userInfo,
//       userId : state.auth.user.userId
//     };
//   }

//   const mapDispatchToProps = (dispatch) => {
//      return bindActionCreators({ getAccessToken }, dispatch);
//   }
  
//   export default connect(null, mapDispatchToProps)(HomePage);



 export default HomePage;