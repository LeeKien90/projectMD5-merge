import React, {useState}from 'react'
import FsLightbox from 'fslightbox-react';

import {Row,Col,Image,Form,Nav,Dropdown,Tab} from 'react-bootstrap'
import Card from '../../../components/Card'

import {Link} from 'react-router-dom'
// img

import avatars11 from '../../../assets/images/avatars/01.png'
import avatars22 from '../../../assets/images/avatars/avtar_1.png'
import avatars33 from '../../../assets/images/avatars/avtar_2.png'
import avatars44 from '../../../assets/images/avatars/avtar_3.png'
import avatars55 from '../../../assets/images/avatars/avtar_4.png'
import avatars66 from '../../../assets/images/avatars/avtar_5.png'
import avatars2 from '../../../assets/images/avatars/02.png'
import avatars3 from '../../../assets/images/avatars/03.png'
import avatars4 from '../../../assets/images/avatars/04.png'
import avatars5 from '../../../assets/images/avatars/05.png'


import icon1 from '../../../assets/images/icons/01.png'
import icon2 from '../../../assets/images/icons/02.png'
import icon3 from '../../../assets/images/icons/03.png'
import icon4 from '../../../assets/images/icons/04.png'
import icon8 from '../../../assets/images/icons/08.png'
import icon6 from '../../../assets/images/icons/06.png'
import icon7 from '../../../assets/images/icons/07.png'

import icon5 from '../../../assets/images/icons/05.png'
import shap2 from '../../../assets/images/shapes/02.png'
import shap4 from '../../../assets/images/shapes/04.png'
import shap6 from '../../../assets/images/shapes/06.png'
import pages2 from '../../../assets/images/pages/02-page.png'

import ShareOffcanvas from '../../../components/partials/components/shareoffcanvas'

const UserProfile =() =>{
   const [toggler, setToggler] = useState(false);
  return(
      <>
         <FsLightbox
                  toggler={ toggler }
                  sources={ [icon4,shap2,icon8,shap4,icon2,shap6,icon5,shap4,icon1] }
               />
         <Tab.Container  defaultActiveKey="first">
            <Row>
               <Col lg="12">
                  <Card>
                        <Card.Body>
                           <div className="d-flex flex-wrap align-items-center justify-content-between">
                              <div className="d-flex flex-wrap align-items-center">
                                 <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                                    <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic"/>
                                    <Image className="theme-color-purple-img img-fluid rounded-pill avatar-100" src={avatars22} alt="profile-pic"/>
                                    <Image className="theme-color-blue-img img-fluid rounded-pill avatar-100" src={avatars33} alt="profile-pic"/>
                                    <Image className="theme-color-green-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic"/>
                                    <Image className="theme-color-yellow-img img-fluid rounded-pill avatar-100" src={avatars66} alt="profile-pic"/>
                                    <Image className="theme-color-pink-img img-fluid rounded-pill avatar-100" src={avatars44} alt="profile-pic"/>
                                 </div>
                                 <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                                    <h4 className="me-2 h4">Austin Robertson</h4>                                    
                                 </div>
                              </div>
                              <Nav as="ul" className="d-flex nav-pills mb-0 text-center profile-tab" data-toggle="slider-tab" id="profile-pills-tab" role="tablist">
                                 <Nav.Item as="li">
                                    <Nav.Link eventKey="fourth">Profile</Nav.Link>
                                 </Nav.Item>
                              </Nav>
                           </div>
                        </Card.Body>
                  </Card>
               </Col>
               <Col lg="3" className="col-lg-3">

               </Col>
               <Col lg="6">
                  <Tab.Content className="profile-content">                     
                     <Tab.Pane eventKey="fourth" id="profile-profile">
                        <Card>
                           <Card.Header>
                              <div className="header-title">
                                 <h4 className="card-title">Profile</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                              <div className="text-center">
                                 <div className="user-profile">
                                    <Image className="theme-color-default-img  rounded-pill avatar-130 img-fluid" src={avatars11} alt="profile-pic"/>
                                    <Image className="theme-color-purple-img rounded-pill avatar-130 img-fluid" src={avatars22} alt="profile-pic"/>
                                    <Image className="theme-color-blue-img rounded-pill avatar-130 img-fluid" src={avatars33} alt="profile-pic"/>
                                    <Image className="theme-color-green-img rounded-pill avatar-130 img-fluid" src={avatars55} alt="profile-pic"/>
                                    <Image className="theme-color-yellow-img rounded-pill avatar-130 img-fluid" src={avatars66} alt="profile-pic"/>
                                    <Image className="theme-color-pink-img rounded-pill avatar-130 img-fluid" src={avatars44} alt="profile-pic"/>
                                 </div>
                                 <div className="mt-3">
                                    <h3 className="d-inline-block">Austin Robertson</h3>
                                    <p className="d-inline-block pl-3"> - Web developer</p>
                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                 </div>
                              </div>
                           </Card.Body>
                        </Card>
                        <Card>
                           <Card.Header>
                              <div className="header-title">
                                 <h4 className="card-title">About User</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                              <div className="user-bio">
                                 <p>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer.</p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Joined:</h6>
                              <p>Feb 15, 2021</p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Lives:</h6>
                              <p>United States of America</p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Email:</h6>
                              <p><Link to="#" className="text-body"> austin@gmail.com</Link></p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Url:</h6>
                              <p><Link to="#" className="text-body" target="_blank"> www.bootstrap.com </Link></p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Contact:</h6>
                              <p><Link to="#" className="text-body">(001) 4544 565 456</Link></p>
                              </div>
                           </Card.Body>
                        </Card>
                     </Tab.Pane >
                  </Tab.Content>
               </Col>
               <Col lg="3">
                 
               </Col>
            </Row>
         </Tab.Container>
      </>
  )

}

export default UserProfile;