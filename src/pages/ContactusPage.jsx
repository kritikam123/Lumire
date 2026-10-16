import { useState } from "react";
import Button from "../components/elements/Button";
import Textarea from "../components/elements/Textarea";
import Input from "../components/elements/Input";

const ContactusPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || form.email || form.message) {
      toast.message("Error in sending message", {
        description: `Please fill all inputs!`,
        duration: 4000,
        type: "error",
      });
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("contactData")) || [];

    const updatedData = [...existingData, form];

    localStorage.setItem("contactData", JSON.stringify(updatedData));

    console.log("Saved Data:", updatedData);

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    toast.message("Send successful!", {
      description: `Message saved successfully!`,
      duration: 4000,
      type: "success",
    });
  };
  return (
    <div className="px-4 md:px-28 w-full">
      <div className="max-w-151 space-y-10">
        <div>
          <h2 className="font-serif text-4xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
            Contact Us
          </h2>
          <p className="font-[Cormorant_Garamond] mt-2 mb-6 text-m text-center opacity-70">
            Feel free to reach out to us. Please fill out this form to continue.
          </p>
        </div>
        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <Input
              placeholder="First Name"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="px-2 py-2"
            />
            <Input
              placeholder="Last Name"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="px-2 py-2"
            />
          </div>
          <div>
            <Input
              placeholder="Email Address"
              type="text"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="px-2 py-2 mb-4"
            />

            <Input
              placeholder="Phone Number"
              type="text"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="px-2 py-2 mb-4"
            />

            <Textarea
              placeholder="Enter your message"
              rows={10}
              disabled={false}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="mb-4"
            />

            <Button
              type="submit"
              className="text-[#5B4636] text-[16px] border border-[#5B4636] -mt-1 py-4"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactusPage;
