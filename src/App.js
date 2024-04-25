import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

export default function App() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div>
        <h1 className="Headings">Registration Form</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control w-50"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only letters are allowed",
              },
              minLength: {
                value: 4,
                message: "Username must be minimum 4 characters",
              },
              maxLength: {
                value: 8,
                message: "Username is maximum up to 8 characters",
              },
            })}
          />
          <p className="errors">{errors.username?.message}</p>
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className=" w-75 form-control"
            {...register("gmail", {
              required: { value: true, message: "This field is required" },
            })}
          />
          <p className="errors">{errors.gmail?.message}</p>
        </div>
        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className=" w-50 form-control"
            {...register("password", {
              required: { value: true, message: "This field is required" },
              minLength: {
                value: 8,
                message: "Password must be minimum 8 characters",
              },
              maxLength: {
                value: 20,
                message: "Password is maximum up to 20 characters",
              },
            })}
          />
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="showPassword"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label className="form-check-label" htmlFor="showPassword">
              Show Password
            </label>
          </div>
          <p className="errors">{errors.password?.message}</p>
        </div>
        <div className="col-md-6">
          <label className=" w-50 form-label">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className=" w-50 form-control"
            {...register("confirmPassword", {
              required: { value: true, message: "This field is required" },
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          <p className="errors">{errors.confirmPassword?.message}</p>
        </div>
        <div className="col-12">
          <label className="form-label">Address</label>
          <input
            type="text"
            className=" w-75 form-control"
            placeholder="1234 Main St"
            {...register("address", {
              required: { value: true, message: "This field is required" },
            })}
          />
          <p className="errors">{errors.address?.message}</p>
        </div>
        <div className="col-12">
          <label className="form-label">Address 2</label>
          <input
            type="text"
            className=" w-75 form-control"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">City</label>
          <input
            type="text"
            className=" w-25 form-control"
            {...register("city", {
              required: { value: true, message: "This field is required" },
            })}
          />
          <p className="errors">{errors.city?.message}</p>
        </div>
        <div className="col-md-4">
          <label className="form-label">State</label>
          <select className=" w-50 form-select">
            <option selected>Choose...</option>
            <option>Punjab</option>
            <option>Sindh</option>
            <option>Balochistan</option>
            <option>Khayber_Pakthunkhan</option>
          </select>
        </div>
        <div className=" w-25 col-md-2">
          <label className="form-label">Zip Code</label>
          <input
            type="text"
            className="form-control"
            {...register("zip", {
              required: { value: true, message: "This field is required" },
            })}
          />
          <p className="errors">{errors.zip?.message}</p>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Remember Me</label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}
