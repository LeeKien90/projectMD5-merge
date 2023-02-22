import React from 'react'
import {Row,Col,Image,Form,Button} from 'react-bootstrap'
import Card from '../../../components/Card'

import {Link} from 'react-router-dom'
// img
import avatars1 from '../../../assets/images/avatars/01.png'
import avatars2 from '../../../assets/images/avatars/avtar_1.png'
import avatars3 from '../../../assets/images/avatars/avtar_2.png'
import avatars4 from '../../../assets/images/avatars/avtar_3.png'
import avatars5 from '../../../assets/images/avatars/avtar_4.png'
import avatars6 from '../../../assets/images/avatars/avtar_5.png'

const UserAdd =() =>{
  return(
      <>
        <div>
            <Row>
               <Col xl="3" lg="4" className="">
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="header-title">
                           <h4 className="card-title">Add New User</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <Form>
                           <Form.Group className="form-group">
                              <div className="profile-img-edit position-relative">
                                 <Image className="theme-color-default-img  profile-pic rounded avatar-100" src={avatars1} alt="profile-pic"/>
                                 <Image className="theme-color-purple-img profile-pic rounded avatar-100" src={avatars2} alt="profile-pic"/>
                                 <Image className="theme-color-blue-img profile-pic rounded avatar-100" src={avatars3} alt="profile-pic"/>
                                 <Image className="theme-color-green-img profile-pic rounded avatar-100" src={avatars5} alt="profile-pic"/>
                                 <Image className="theme-color-yellow-img profile-pic rounded avatar-100" src={avatars6} alt="profile-pic"/>
                                 <Image className="theme-color-pink-img profile-pic rounded avatar-100" src={avatars4} alt="profile-pic"/>
                                 <div className="upload-icone bg-primary">
                                    <svg className="upload-button" width="14" height="14" viewBox="0 0 24 24">
                                       <path fill="#ffffff" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                                    </svg>
                                    <Form.Control className="file-upload" type="file" accept="image/*"/>
                                 </div>
                              </div>
                              <div className="img-extension mt-3">
                                 <div className="d-inline-block align-items-center">
                                    <span>Only</span>{' '}
                                    <Link to="#">.jpg</Link>{' '}
                                    <Link to="#">.png</Link>{' '}
                                    <Link to="#">.jpeg</Link>{' '}
                                    <span>allowed</span>
                                 </div>
                              </div>
                           </Form.Group>                          
                        </Form>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl="9" lg="8">
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="header-title">
                           <h4 className="card-title">New User Information</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="new-user-info">
                           <form>
                              <div className="row">
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="fname">Full Name:</Form.Label>
                                    <Form.Control type="text"  id="fname" placeholder="Full Name"/>
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="lname">User Name:</Form.Label>
                                    <Form.Control type="text"  id="lname" placeholder="User Name"/>
                                 </Form.Group>
                                 
                                 <Form.Group className="col-md-6  form-group">
                                    <Form.Label htmlFor="mobno">Mobile Number:</Form.Label>
                                    <Form.Control type="text"  id="mobno" placeholder="Mobile Number"/>
                                 </Form.Group>                                 
                                 <Form.Group className="col-md-6  form-group">
                                    <Form.Label htmlFor="email">Email:</Form.Label>
                                    <Form.Control type="email"  id="email" placeholder="Email"/>
                                 </Form.Group>                                 
                              </div>
                              <hr/>
                              <h5 className="mb-3">Security</h5>
                              <div className="row">                                 
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="pass">Password:</Form.Label>
                                    <Form.Control type="password"  id="pass" placeholder="Password"/>
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="rpass">Repeat Password:</Form.Label>
                                    <Form.Control type="password"  id="rpass" placeholder="Repeat Password "/>
                                 </Form.Group>
                              </div>
                              <div className="checkbox">
                                 <label className="form-label"><input type="checkbox" className="me-2 form-check-input"  value="" id="flexCheckChecked"/>Enable Two-Factor-Authentication</label>
                              </div>
                              <Button type="button" variant="btn btn-primary">Add New User</Button>
                           </form>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </div>
      </>
  )

}

export default UserAdd;