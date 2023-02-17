import React from "react";

export default function Cart() {
  return (
    <>
      <tr>
        <td className="align-middle">
          <img src="img/product-1.jpg" alt="" style={{ width: 50 }} /> Product
          Name
        </td>
        <td className="align-middle">$150</td>
        <td className="align-middle">
          <div className="input-group quantity mx-auto" style={{ width: 100 }}>
            <div className="input-group-btn">
              <button className="btn btn-sm btn-success btn-minus">
                <i className="fa fa-minus" />
              </button>
            </div>
            <input
              type="text"
              className="form-control form-control-sm border-0 text-center"
              defaultValue={1}
            />
            <div className="input-group-btn">
              <button className="btn btn-sm btn-success btn-plus">
                <i className="fa fa-plus" />
              </button>
            </div>
          </div>
        </td>
        <td className="align-middle">$150</td>
        <td className="align-middle">
          <button className="btn btn-sm btn-danger">
            <i className="fa fa-times" />
          </button>
        </td>
      </tr>
    </>
  );
}
