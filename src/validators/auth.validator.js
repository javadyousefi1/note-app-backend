const Yup = require("yup");

const registerSchema = Yup.object({
  body: Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string().email("Invalid email").required("Contact is required"),
    password: Yup.string()
      .min(6, "At least should be at least 6 characters")
      .required("Password is required"),
  }),
});

const loginSchema = Yup.object({
  body: Yup.object({
    email: Yup.string().email("Invalid email").required("Contact is required"),
    password: Yup.string()
      .min(6, "At least should be at least 6 characters")
      .required("Password is required"),
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
};
