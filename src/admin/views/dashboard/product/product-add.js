import React from 'react'
import {Row,Col,Image,Form,Button} from 'react-bootstrap'
import Card from '../../../components/Card'

import {Link} from 'react-router-dom'
// img
import avatars1 from '../../../assets/images/avatars/01.png'


const ProductAdd =() =>{
  return(
      <>
        <div>
            <Row>
               <Col xl="3" lg="4" className="">
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="header-title">
                           <h4 className="card-title">Add New Product</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <Form>
                           <Form.Group className="form-group">
                              <div className="profile-img-edit position-relative">
                                 <Image className="theme-color-default-img  profile-pic rounded avatar-100" src={avatars1} alt="profile-pic"/>
                                
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
                           <Form.Group className="form-group">
                              <Form.Label>Categories:</Form.Label>
                              <select name="type" className="selectpicker form-control" data-style="py-0">
                                 <option>Select</option>
                                 <option>Web Designer</option>
                                 <option>Web Developer</option>
                                 <option>Tester</option>
                                 <option>Php Developer</option>
                                 <option>Ios Developer </option>
                              </select>
                           </Form.Group>
                        </Form>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xl="9" lg="8">
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="header-title">
                           <h4 className="card-title">New Product Information</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="new-user-info">
                           <form>
                              <div className="row">
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="fname">Product ID:</Form.Label>
                                    <Form.Control type="text"  id="fname" placeholder="Product ID"/>
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="lname">Product Name:</Form.Label>
                                    <Form.Control type="text"  id="lname" placeholder="Product Name"/>
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="add1">Price:</Form.Label>
                                    <Form.Control type="text"  id="add1" placeholder="Price"/>
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group">
                                    <Form.Label htmlFor="add2">Quantity:</Form.Label>
                                    <Form.Control type="text"  id="add2" placeholder="Quantity"/>
                                 </Form.Group>
                                 <Form.Group className="col-md-12 form-group">
                                    <Form.Label htmlFor="cname">Descriptions:</Form.Label>
                                    <Form.Control type="text"  id="cname" placeholder="Descriptions">
                                    {/* <textarea type="text" id="descriptions" name="descriptions" defaultValue={""}/> */}
                                    </Form.Control>
                                 </Form.Group>
                                 <Form.Group className="col-sm-12 form-group">
                                    <Form.Label>Size:</Form.Label>
                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                       <option>Select Size</option>
                                       <option>Caneda</option>
                                       <option>Noida</option>
                                       <option >USA</option>
                                       <option>India</option>
                                       <option>Africa</option>
                                    </select>
                                 </Form.Group>
                              </div>
                              <hr/>
                              <div className="text-center">
                                 <Button type="button" variant="btn btn-primary">Add New Product</Button>
                              </div>   
                              
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

export default ProductAdd;