import React from 'react'
import AdminServices from '../services/AdminServices';


class SubscriptionplanComponents extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            center:[]
        }
     
     
    }

   

    componentDidMount(){

        AdminServices.getCenters().then((response) => {
            this.setState({center:response.data})
        })
       
    }

   

    render(){
        return(
            <div>
                <h1 style={{textAlign:'center', color:'green'}}>Center's List</h1>
                <div>
                    
                    <br/>
                    <br/>
                </div>
                <table className = "table  table-striped" style={{border:'2px solid black'}}>

                    <thead>
                        <tr>

                            <th>CENTER-Id</th>
                            <th>CENTER-NAME</th>
                            <th>CONTACT</th>
                            <th>ADDRESS</th>
                            <th>DESCRIPTION</th>
                            <th>LOCALITY</th>
                            <th>OWNER-ID</th>
                            <th>CREATED_AT</th>
                            <th>UPDATED_AT</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.center.map(
                                center =>
                                <tr key = {center.id}>
                                    <td>{center.id}</td>
                                    <td>{center.name}</td>
                                    <td>{center.contact}</td>
                                    <td>{center.address}</td>
                                    <td>{center.description}</td>
                                    <td>{center.locality}</td>
                                    <td>{center.owner_id}</td>
                                    <td>{center.created_at}</td>
                                    <td>{center.updated_at}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SubscriptionplanComponents
