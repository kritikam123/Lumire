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
  const navigate = useNavigate(); // fixed

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
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

    toast.success("Login successful!", {
      description: `Welcome back, ${user.firstName}!`,
      duration: 4000,
    });

    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto px-6 sm:px-8 py-8"
    >
      <div className="text-center mb-8">
        <h1 className="font-serif text-3xl tracking-[0.2em] text-gray-800">
          LOGIN
        </h1>

        <p className="text-xs text-gray-400 mt-3 tracking-wide">
          Welcome back to Lumire
        </p>
      </div>

      <div className="space-y-5">
        <InputWithIcon
          icon={MdOutlineMail}
          placeholder="Enter your email"
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
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
        />
      </div>

      <div className="flex justify-end mt-3 mb-7">
        <button
          type="button"
          className="text-xs text-gray-500 hover:text-[#8A6A45] transition-colors"
        >
          Forgot Password?
        </button>
      </div>

      <Button type="submit" className="w-full">
        Login{" "}
      </Button>

      <p className="text-s text-start text-gray-500 py-2">
        Don't have an account yet?{" "}
        <Link
          to="/register"
          className="text-[#8A6A45] font-medium hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default Login;
