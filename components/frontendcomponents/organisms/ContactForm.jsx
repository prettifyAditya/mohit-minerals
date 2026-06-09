"use client";
import { useState } from "react";
import Image from "next/image";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import Button from "../atoms/Button";
import "@/uploads/styles/component/component.css";

export default function ContactForm({ heading }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="contact_form_sec sec-pad-all">
      <div className="container">
        <div className="heading">
          <div className="icon">
            <Image
              src="/assets/logo-vector-white.svg"
              width={140}
              height={70}
              alt="logo vector"
            ></Image>
          </div>
          <h2>{heading}</h2>
        </div>
        <form className="form white">
          <div className="form-grid">
            <Input
              label="Name *"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              error="Please enter the details"
            />
            <Input
              label="Email *"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              error="Please enter the details"
              required
            />
            <Input
              label="Phone *"
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              error="Please enter the details"
              required
            />
            <Input
              label="Subject *"
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              error="Please enter the details"
              required
            />
            <Textarea
              classname="full"
              label="Message"
              name="message"
              id="message"
              error="Please enter the details"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="btn_wrap">
            <Button
              classname="white"
              buttonText="SUBMIT"
              type="submit"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
