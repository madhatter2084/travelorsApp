import React,{useState} from "react";
import API from "../utils/API"
import {useHistory} from 'react-router-dom'

const Country =() =>{
  const [formState, setFormState] = useState({email: "", password: ""});

  const history = useHistory()
  const handleChange =(event) =>{
    // console.log(event.target, "TEST");
    const {name,value}=event.target;
    setFormState ({
      ...formState, 
      [name]: value
    })

  }
  const  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event, "COOL")
    
    API.postSignup(
      {email: formState.email,
         password: formState.password
      }
    ).then(res => {
      console.log(res);
      history.push("/Selection")
      
    })
  }

  return (
    <div className="container">
      {/* <div className="row">
        <div className="col-xs-3"></div>
        <div className="col-xs-6">
          <h2 className="white">Sign Up</h2>
          <form className="login" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="white" htmlFor ="exampleInputEmail1">Email Address</label>
              <input name="email"  onChange={handleChange} className="form-control"  value={formState.email} placeholder="Email"/>
            </div>
            <div className="form-group">
              <label className="white" htmlFor ="exampleInputPassword1">Password</label>
              <input name="password"  onChange={handleChange} className="form-control"  value={formState.password} placeholder="Password"/>
            </div>
            <button type="submit"   className="btn btn-info white">Sign Up</button>
          </form>
          <p className="white">Or Login <a href="/LoginInfo">here</a></p>
        </div>
      </div> */}
      Some text
    </div>


  );
}

export default Country;
