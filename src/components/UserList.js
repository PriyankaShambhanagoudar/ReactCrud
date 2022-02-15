import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from "reactstrap"

export const UserList = () => {
  return (
    <ListGroup className='mt-4'>
      <ListGroupItem className='d-flex'>
        <strong>User One</strong>
        <div className="m1-auto">
          <Link className='btn btn-warning ' to="/edit/1" >Edit</Link>
          <Button color='btn btn-danger' >Delete</Button>
        </div>
      </ListGroupItem>

      <ListGroupItem className='d-flex mt-4'>
        <strong>User One</strong>
        <div className="m1-auto ">
          <Link className='btn btn-warning' to="/edit/1">Edit</Link>
          <Button color='btn btn-danger' >Delete</Button>
        </div>
      </ListGroupItem>

    </ListGroup>
  )
}


export default UserList;