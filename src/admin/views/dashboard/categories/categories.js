import React, { useState } from "react";
import { Row, Col, Modal, Form, Button } from "react-bootstrap";
import Card from "../../../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  addDataCategories,
  deleteDataCategories,
  updateDataCategories,
} from "../../../../service/api";
import ListCategories from "./listCategories";

const Categories = () => {
  const [newCategories, setNewCategories] = useState({
    id: "",
    categoriesName: "",
    categoriesStatus: "true",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [catagoryUpdate, setcategoryUpdate] = useState({
    id: "",
    categoriesName: "",
    categoriesStatus: "",
  });
  
  function createCategories() {
    addDataCategories(newCategories);
    setShow3(!show3);
    setNewCategories({
      id: "",
      categoriesName: "",
      categoriesStatus: "true",
    });
  }
  const categoriesDeleted = (id) => {
    deleteDataCategories(id).then(() => {
      setShow4(!show4);
    });
  };
  const categoriesUpdate = () => {
    updateDataCategories(catagoryUpdate.id, catagoryUpdate).then(() => {
      setShow2(!show2);
      setShow4(!show4);
    });
  };
  function editCategories(cat) {
    setcategoryUpdate(cat);
    setShow2(!show2);
  }

  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between flex-wrap">
              <div className="header-title">
                <h4 className="card-title mb-0">Categories</h4>
              </div>
              <div>
                <Button
                  className="text-center btn-primary btn-icon me-2 mt-lg-0 mt-md-0 mt-3"
                  onClick={handleShow}
                >
                  <i className="btn-inner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </i>
                  <span>New Categories</span>
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add new Categories</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Categories Name</Form.Label>
                      <Form.Control
                        value={newCategories.categoriesName}
                        type="text"
                        name="categoriesName"
                        onChange={(e) =>
                          setNewCategories({
                            ...newCategories,
                            [e.target.name]: e.target.value,
                          })
                        }
                        placeholder="Categories Name"
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Status</Form.Label>
                    </Form.Group>
                    <Form.Check>
                      <Form.Check.Input
                        value="true"
                        type="radio"
                        name="categoriesStatus"
                        id="automatically"
                        checked={newCategories.categoriesStatus === "true"}
                        onChange={(e) =>
                          setNewCategories({
                            ...newCategories,
                            [e.target.name]: "true",
                          })
                        }
                      />{" "}
                      <Form.Check.Label
                        htmlFor="automatically"
                        className="pl-2"
                      >
                        Action
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check className="mb-3">
                      <Form.Check.Input
                        value="false"
                        type="radio"
                        name="categoriesStatus"
                        id="automatically"
                        checked={newCategories.categoriesStatus !== "true"}
                        onChange={(e) =>
                          setNewCategories({
                            ...newCategories,
                            [e.target.name]: "false",
                          })
                        }
                      />{" "}
                      <Form.Check.Label
                        htmlFor="automatically"
                        className="pl-2"
                      >
                        Block
                      </Form.Check.Label>
                    </Form.Check>
                    <Button
                      variant="primary"
                      onClick={() => {
                        createCategories();
                        handleClose();
                      }}
                    >
                      Save
                    </Button>{" "}
                    <Button variant="danger" onClick={handleClose}>
                      Cancel
                    </Button>
                  </Modal.Body>
                </Modal>
                <Modal show={show2} onHide={handleClose2}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Categories</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Categories Name</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={catagoryUpdate.categoriesName}
                        onChange={(e) =>
                          setcategoryUpdate({
                            ...catagoryUpdate,
                            [e.target.name]: e.target.value,
                          })
                        }
                        placeholder="Categories Name"
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Status</Form.Label>
                    </Form.Group>
                    <Form.Check>
                      <Form.Check.Input
                        value="true"
                        type="radio"
                        name="categoriesStatus"
                        id="automatically"
                        checked={catagoryUpdate.categoriesStatus === "true"}
                        onChange={(e) =>
                          setcategoryUpdate({
                            ...catagoryUpdate,
                            [e.target.name]: "true",
                          })
                        }
                      />{" "}
                      <Form.Check.Label
                        htmlFor="automatically"
                        className="pl-2"
                      >
                        Action
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check className="mb-3">
                      <Form.Check.Input
                        value="false"
                        type="radio"
                        name="categoriesStatus"
                        id="automatically"
                        checked={catagoryUpdate.categoriesStatus !== "true"}
                        onChange={(e) =>
                          setcategoryUpdate({
                            ...catagoryUpdate,
                            [e.target.name]: "false",
                          })
                        }
                      />{" "}
                      <Form.Check.Label
                        htmlFor="automatically"
                        className="pl-2"
                      >
                        Block
                      </Form.Check.Label>
                    </Form.Check>
                    <div>
                      <div className="text-start mt-2 me-2">
                        <Button onClick={categoriesUpdate}>Update</Button>{" "}
                        <Button variant="danger" onClick={handleClose2}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </Card.Header>
            <ListCategories
              show4={show4}
              show3={show3}
              categoriesDeleted={categoriesDeleted}
              editCategories={editCategories}
            ></ListCategories>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Categories;
