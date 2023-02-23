import React from "react";
import { Row, Col, Image, Form, Button, FloatingLabel } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link, useHistory } from "react-router-dom";
// img
import avatars1 from "../../../assets/images/avatars/01.png";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useState } from "react";
import { useEffect } from "react";
import {
  getDataCategories,
  getDataColor,
  addDataProduct,
} from "../../../../service/api";
import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../../../firebase";

const ProductAdd = () => {
  const [listCastegories, setListCategories] = useState([]);
  const [listColor, setListColor] = useState([]);
  const [call, setCall] = useState(true);
  const [ckedit, setCkedit] = useState("");
  let history = useHistory()

  const imageListRef = ref(storage, "image/");
  // const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState(
    "https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-trang.jpg"
  );

  const [product, setProduct] = useState({
    categories: "",
    productName: "",
    price: "",
    quantity: "",
    description: "",
    imageProduct: "",
    color: "",
    status: "",
    id: "",
  });

  const createProduct = () => {
    product.description = ckedit.slice(4, ckedit.length - 4);
    addDataProduct({...product,imageProduct: imageUrls});
    setCall(call);
    history.push("/admin/dashboard/product/product-list")
  };

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  const uploadFile = (e) => {
    let imageUpload = e.target.files[0];
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setImageUrls(url);
        product.imageProduct = url;
      });
    });
  };

  useEffect(() => {
    getDataCategories().then((res) => {
      setListCategories(res.data);
    });
  }, []);

  useEffect(() => {
    getDataColor().then((res) => {
      setListColor(res.data);
    });
  }, []);

  return (
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
                      <Image
                        className="theme-color-default-img  profile-pic rounded avatar-100"
                        src={imageUrls}
                        alt="profile-pic"
                      />

                      <div className="upload-icone bg-primary">
                        <Form.Group controlId="formFileLg" className="mb-3">
                          <Form.Label>
                            <svg
                              className="upload-button"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="#ffffff"
                                d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                              />
                            </svg>
                          </Form.Label>
                          <Form.Control
                            className="d-none"
                            type="file"
                            accept="image/*"
                            value={product.imageProduct}
                            name="imageProduct"
                            onChange={uploadFile}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="img-extension mt-3">
                      <div className="d-inline-block align-items-center">
                        <span>Only</span> <Link to="#">.jpg</Link>{" "}
                        <Link to="#">.png</Link> <Link to="#">.jpeg</Link>{" "}
                        <span>allowed</span>
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Categories:</Form.Label>
                    <select
                      className="selectpicker form-control"
                      data-style="py-0"
                      
                      name="categories"
                      onChange={handleChange}
                    >
                      <option>Select</option>
                      {listCastegories.map((cat) => (
                        <option value={cat.id}>{cat.categoriesName}</option>
                      ))}
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
                        <Form.Label htmlFor="lname">Product Name:</Form.Label>
                        <Form.Control
                          value={product.productName}
                          name="productName"
                          onChange={handleChange}
                          type="text"
                          id="lname"
                          placeholder="Product Name"
                        />
                      </Form.Group>
                      <Form.Group className="col-md-6 form-group">
                        <Form.Label htmlFor="add1">Price:</Form.Label>
                        <Form.Control
                          type="text"
                          id="add1"
                          placeholder="Price"
                          value={product.price}
                          name="price"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group className="col-md-6 form-group">
                        <Form.Label htmlFor="add2">Quantity:</Form.Label>
                        <Form.Control
                          type="text"
                          id="add2"
                          placeholder="Quantity"
                          value={product.quantity}
                          name="quantity"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group className="col-md-6 form-group">
                        <Form.Label htmlFor="fname">Status:</Form.Label>
                        <select
                          name="status"
                          className="selectpicker form-control"
                          data-style="py-0"
                          value={product.status}
                          onChange={handleChange}
                        >
                          <option>Select Status</option>
                          <option>Hoạt động</option>
                          <option>Không Hoạt động</option>
                        </select>
                      </Form.Group>
                      <Form.Group className="col-md-12 form-group">
                        <Form.Label htmlFor="cname">Descriptions:</Form.Label>
                        <CKEditor
                          editor={ClassicEditor}
                          onChange={(event, editor) => {
                            setCkedit(editor.getData());
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="col-sm-12 form-group">
                        <Form.Label>Color:</Form.Label>
                        <select
                          name="color"
                          className="selectpicker form-control"
                          data-style="py-0"
                          value={product.color}
                          onChange={handleChange}
                        >
                          <option>Select Color</option>
                          {listColor.map((c) => (
                            <option>{c.colorName}</option>
                          ))}
                        </select>
                      </Form.Group>
                    </div>
                    <hr />
                    <div className="text-center">
                      <Button
                        type="button"
                        variant="btn btn-success"
                        onClick={() => {
                          createProduct();
                        }}
                      >
                        Add New Product
                      </Button>
                    </div>
                  </form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductAdd;
