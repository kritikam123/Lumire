import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
};

return (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-full max-w-md px-6">
      <div className="text-center mb-8">
        <Logo background="transparent" size="2xl" />
      </div>
      <div className="text-center mb-8">
        <h1>Welcome Back</h1>

        <p className="text-sm mt-2">Login to your account</p>
      </div>

      <form>
        <div>
          <FormLabel htmlFor="email" label="Email Address" required />

          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 px-4 py-3"
          />
        </div>

        <div>
          <FormLabel htmlFor="password" label="Password" required />

          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 px-4 py-3"
          />
        </div>

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?
        <button className="">Create Account</button>
      </p>
    </div>
  </div>
);

export default Login;
