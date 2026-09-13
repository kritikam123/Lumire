import { useState } from "react";

import InputWithIcon from "../widget/InputWithIcon";
import Input from "../components/elements/Input";
import Button from "../components/elements/Button";

import { MdOutlineMail } from "react-icons/md";
import { SlLock } from "react-icons/sl";


import { useNavigate, Link } from "react-router-dom";
import { getData, setData } from "../services/storage";


const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {
      name,
      value,
    } = (e) => {
      setForm({
        ...form,
        [name]: value,
      });
      setErrors({
        ...errors,
        [name]: "",
      });
    };
  };

  const validate = () => {
    const newErrors = {};
    const email = form.email.toLowerCase().trim();

    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email";
    }

    const users = getData("users");
    const exists = users.find((u) => u.email === email);
    if (exists) newErrors.email = "Email already exists";

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newUser = {
      id: crypto.randomUUID(),
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email.toLowerCase().trim(),
      password: form.password,
      address: null,
    };

    const users = getData("users");
    users.push(newUser);
    setData("users", users);
    toast.message("Register successful!", {
      description: `Hello, ${newUser.firstName}. You are successfully registered!`,
      duration: 4000,
      type: "success",
    });
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/login");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto px-6 sm:px-8 py-8"
    >
      <div className="text-center mb-8">
        <h1 className="font-serif text-2xl tracking-[0.2em] text-gray-800">
          CREATE ACCOUNT
        </h1>

        <p className="text-xs text-gray-400 mt-3 tracking-wide">
          Welcome, please create your account here.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <Input
          placeholder="First Name"
          type="text"
          id="firstName"
          name="firstName"
          className="px-2 py-2"
          value={form.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />

        <Input
          placeholder="Last Name"
          type="text"
          id="lastName"
          name="lastName"
          className="px-2 py-2"
          value={form.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
      </div>

      <InputWithIcon
        icon={MdOutlineMail}
        placeholder="Enter your email"
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
        className="mb-4"
      />

      <InputWithIcon
        icon={SlLock}
        placeholder="Enter your password"
        type="password"
        id="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
        className="mb-4"
      />

      <InputWithIcon
        icon={SlLock}
        placeholder="Confirm password"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        className="mb-4"
      />

      <Button type="submit" className="w-full">Create Account</Button>

      <p className="text-s text-start text-gray-500 py-2">
        Already have an account?{" "}
        <Link to="/login" className="text-[#8A6A45] cursor-pointer">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
