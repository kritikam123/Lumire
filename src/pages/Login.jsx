import { MdOutlineMail } from "react-icons/md";
import InputWithIcon from "../widget/InputWithIcon";
import { SlLock } from "react-icons/sl";
import { useContext, useState } from "react";
import Button from "../components/elements/Button";
import { AuthContext } from "../context/AuthContext";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate;
  
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    const email = form.email.toLowerCase().trim();

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
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

    const user = login(form);

    if (!user) {
      setErrors({
        email: "Invalid email or password",
        password: "Invalid email or password",
      });
      return;
    }
    toast.message("Login successful!", {
      description: `Welcome back, ${user.firstName}!`,
      duration: 4000,
      type: "success",
    });
    localStorage.setItem("currentUser", JSON.stringify(user));
    Navigate("/");
  };
  return (
    <form>
      <h1 className="font-serif text-6xl leading-snug pb-3">LOGIN</h1>
      <InputWithIcon
        icon={MdOutlineMail}
        placeholder="enter your email"
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />

      <InputWithIcon
        icon={SlLock}
        placeholder="password"
        type="password"
        id="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
      />
      <div className="text-right text-s text-gray-500 py-2">
        Forgot Password
      </div>
      <Button type="submit">Login</Button>
      <p className="text-xs text-start text-gray-500 py-2">
        Don't have an account yet?{" "}
        <Link to="/register" className="text-[#8A6A45] cursor-pointer">
          Signup
        </Link>
      </p>
    </form>
  );
};

export default Login;
