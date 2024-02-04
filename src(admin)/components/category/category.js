import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './category.css';
import SideBar from "../nav/sidbar";
import DashNavbar from "../nav/nav";

function Category() {
  const [categoryName, setCategoryName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [pointOfContact, setPointOfContact] = useState('');
  const [subCategoryName, setSubCategoryName] = useState('');
  const [createdCategories, setCreatedCategories] = useState([]);
  const [createdSubCategories, setCreatedSubCategories] = useState([]);

  const containerStyle = {
  
    minHeight: '200vh',
    padding: '20px',
  };

  const handleCreateCategory = () => {
    const newCategory = {
      categoryName,
      selectedCategory,
      pointOfContact,
    };

    setCreatedCategories((prevCategories) => [...prevCategories, newCategory]);
    clearCategoryInputFields();
  };

  const handleCreateSubCategory = () => {
    const newSubCategory = {
      subCategoryName,
    };

    setCreatedSubCategories((prevSubCategories) => [...prevSubCategories, newSubCategory]);
    clearSubCategoryInputField();
  };

  const clearCategoryInputFields = () => {
    setCategoryName('');
    setSelectedCategory('1');
    setPointOfContact('');
  };

  const clearSubCategoryInputField = () => {
    setSubCategoryName('');
  };

  return (
   
   
    <div className="d-flex cat_overall">
    <div className="container-fluid-category col-lg-10 ms-5" >
      <div className="card mt-5 ms-4 me-3">
        <div className="card-body  p-1">
          <div className="d-flex justify-content-between bg-light text-center mt-2 ">
            <h5 className="text-secondary">Category</h5>
            <div className="dropdown">
              <button className="btn text-secondary dropdown-toggle me-5" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                <li><a className="dropdown-item" href="#">Save as CSV</a></li>
                <li><a className="dropdown-item" href="#">Save as Excel</a></li>
                <li><a className="dropdown-item" href="#">Customize</a></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="table-responsive ">
            <table className="table cat_table-container ">
              <thead>
                <tr>

                  <th>Category Name</th>
                  <th>Sub Category</th>
                  <th>Point of contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <td><input type="text" className="form-category" aria-label="Text input with serial number" placeholder="Category Name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} /></td>
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="1">Category 1</option>
                      <option value="2">Category 2</option>
                      <option value="3">Category 3</option>
                    </select>
                  </td>
                  <td><input type="text" className="form-category" aria-label="Text input with serial number" placeholder="Point of contact" value={pointOfContact} onChange={(e) => setPointOfContact(e.target.value)} /></td>
                  <td> <button className="btn custom-button custom-category" onClick={handleCreateCategory}>CREATE NEW CATEGORY</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container ms-3">
        <h3 className="text-secondary">Created Categories</h3>
        <div className="cat_table-container p-1">
          <table className="table ">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Category Name</th>
                <th>Sub Category</th>
                <th>Point of contact</th>
              </tr>
            </thead>
            <tbody>
              {createdCategories.map((category, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{category.categoryName}</td>
                  <td>{category.selectedCategory}</td>
                  <td>{category.pointOfContact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card mt-2  ms-4 me-3">
        <div className="card-body p-1">
          <div className="d-flex justify-content-between bg-light text-center mt-3 ">
            <h5 className="text-secondary">Sub Category</h5>
            <button className="btn custom-button custom-category" onClick={handleCreateSubCategory}>CREATE NEW SUB CATEGORY</button>
          </div>
          <hr />
          <div className="table-responsive p-1">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Sub Category Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><input type="text" className="form-category" aria-label="Text input with serial number" placeholder="Type Here" value={subCategoryName} onChange={(e) => setSubCategoryName(e.target.value)} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div className=" mt-1 mb-5">
        <h3 className="text-secondary">Created Sub Categories</h3>
        <div className="subcat_table-container table-responsive p-1">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Sub Category Name</th>
              </tr>
            </thead>
            <tbody>
              {createdSubCategories.map((subCategory, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{subCategory.subCategoryName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Category;