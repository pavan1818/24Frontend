import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";
import {useHistory} from 'react-router-dom'

import AdminNavbar from '../NavbarComponent/AdminNavbar';
import AdminProfileComponents from './AdminProfile';

import CreateAdminUserComponent from './AddAdminTrainerForm';
import CreateCenterComponent from './AddSubscriptionPlanForm';
import CenterplanComponent from './MembershipSubscriptionPlans';
import GymMemberComponent from './GymmembersList';

import UserComponents from './UserList'


 const Admin =() =>{

    const history = useHistory();

    const logout = () => {
        
        localStorage.removeItem('admin_name')
        localStorage.removeItem('admin_email')
        localStorage.removeItem('admin_contact')
        localStorage.removeItem('admin_address')
        localStorage.removeItem('admin_password')
        localStorage.removeItem('admin_role')
        history.push('/login')
        
    }

        return (
            <div>
                <Router>
                <AdminNavbar/>
                <div className="container">
                <h1 style={{textAlign:'center'}}> Hello OWNER, {localStorage.getItem('admin_name')}</h1>
                </div> 

                
                <Switch>

              
                <Route  path="/adminprofile" component={AdminProfileComponents}/>
                <Route  path="/userlist" component={UserComponents}/> 
                <Route  path="/addUsers" component={CreateAdminUserComponent}/>
                <Route  path="/centerlist" component={CenterplanComponent}/> 
                <Route  path="/addcenter" component={CreateCenterComponent}/>

                <Route  path="/gymmemberlist" component={GymMemberComponent}/>
                <Route  path="/usercomponent" component={UserComponents}/>
                
                </Switch>
                </Router>
              
                <button className="btn btn-success" onClick={logout}>Sign Out</button>
                <br/>
                <br/>
               
            </div>
        )
    
}

export default Admin