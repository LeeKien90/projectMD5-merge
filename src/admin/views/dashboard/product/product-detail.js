import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import { Row, Col, Image, Form, Nav, Dropdown, Tab } from "react-bootstrap";
import Card from "../../../components/Card";

import { Link, useLocation } from "react-router-dom";
// img

import icon1 from "../../../assets/images/icons/01.png";
import icon2 from "../../../assets/images/icons/02.png";

import icon4 from "../../../assets/images/icons/04.png";
import icon8 from "../../../assets/images/icons/08.png";

import icon5 from "../../../assets/images/icons/05.png";
import shap2 from "../../../assets/images/shapes/02.png";
import shap4 from "../../../assets/images/shapes/04.png";
import shap6 from "../../../assets/images/shapes/06.png";
import pages2 from "../../../assets/images/pages/02-page.png";

import ShareOffcanvas from "../../../components/partials/components/shareoffcanvas";

const ProductDetail = () => {
  const [toggler, setToggler] = useState(false);
  let product = useLocation().state;
  console.log(product);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          icon4,
          shap2,
          icon8,
          shap4,
          icon2,
          shap6,
          icon5,
          shap4,
          icon1,
        ]}
      />
      <Tab.Container defaultActiveKey="first">
        <Row>
          <Col lg="12">
            <Card>
              <Card.Body>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex flex-wrap align-items-center">
                    <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                      <h4 className="me-2 h4">Product Name</h4>
                    </div>
                  </div>
                  <Nav
                    as="ul"
                    className="d-flex nav-pills mb-0 text-center profile-tab"
                    data-toggle="slider-tab"
                    id="profile-pills-tab"
                    role="tablist"
                  >
                    <Nav.Item as="li">
                      <Nav.Link eventKey="first">Image</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="second">Information</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="1"></Col>
          <Col lg="10">
            <Tab.Content className="profile-content">
              <Tab.Pane eventKey="first" id="profile-feed">
                <Card>
                  <Card.Body className="p-0">
                    <div className="user-post text-center mt-5">
                      <Link to="#">
                        <Image
                          src={product.imageProduct}
                          alt="post-image"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="comment-area p-3">
                      <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <div className="d-flex align-items-center"></div>
                        <div className="share-block d-flex align-items-center feather-icon">
                          <ShareOffcanvas />
                        </div>
                      </div>
                      <hr />
                      {product.description}
                      <hr />
                    </div>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="second" id="profile-activity">
                <Card>
                  <Card.Header className="d-flex justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title">Information</h4>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className="iq-timeline0 m-0 d-flex align-items-center justify-content-between position-relative">
                      <ul className="list-inline p-0 m-0">
                        <li>
                          <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>

                          <h6 className="float-left mb-1"> Categories</h6>

                          <div className="d-inline-block w-100">
                            <p>{product.categories}</p>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-dots timeline-dot1 border-success text-success"></div>
                          <h6 className="float-left mb-1">ProductName</h6>
                          <div className="d-inline-block w-100">
                            <p>{product.productName}</p>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-dots timeline-dot1 border-danger text-danger"></div>
                          <h6 className="float-left mb-1">Price</h6>
                          <div className="d-inline-block w-100">
                            <p>{product.price}</p>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                          <h6 className="float-left mb-1">Quantity</h6>
                          <div className="d-inline-block w-100">
                            <p>{product.quantity}</p>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-dots timeline-dot1 border-warning text-warning"></div>
                          <h6 className="float-left mb-1">Color</h6>

                          <div className="d-inline-block w-100">
                            <p>{product.color}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col lg="1"></Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default ProductDetail;
