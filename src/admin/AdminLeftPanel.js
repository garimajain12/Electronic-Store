import React from 'react'
import { Link } from "react-router-dom";

 const AdminLeftPanel = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-light text-dark">Admin Navigation</h4>
        <Link className="btn btn-primary " to="/admin/dashboard">
          Admin Home
        </Link>
        <ul className="list-group text-center">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-primary">
              Create Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/categories" className="nav-link text-primary">
              Manage Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-primary">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-primary">
              Manage Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-primary">
              Manage Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };

export default AdminLeftPanel
