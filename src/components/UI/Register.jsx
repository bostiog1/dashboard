import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/validationSchema";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema), // Fix: Use registerSchema
  });

  const handleRegister = async (data) => {
    try {
      console.log(data); // Log form data
      // Proceed with registration logic
      navigate("/");
    } catch (errors) {
      console.error("Validation errors:", errors);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white">
      <div className="m-5 w-full max-w-xl">
        {/* Increase max-w-3xl to max-w-4xl or higher */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">CREATE USER</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Create a New User Profile
          </p>
        </div>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div>
            {/* First Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
                {errors.firstName && (
                  <p className="text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="col-span-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                {...register("email")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Contact Number */}
            <div className="col-span-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Contact Number
              </label>
              <input
                {...register("contact")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              {errors.contact && (
                <p className="text-sm text-red-600">{errors.contact.message}</p>
              )}
            </div>

            {/* Address 1 */}
            <div className="col-span-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Address 1
              </label>
              <input
                {...register("address1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              {errors.address1 && (
                <p className="text-sm text-red-600">
                  {errors.address1.message}
                </p>
              )}
            </div>

            {/* Address 2 */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Address 2
              </label>
              <input
                {...register("address2")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              {errors.address2 && (
                <p className="text-sm text-red-600">
                  {errors.address2.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Create New User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

/*

import { useFormik } from "formik";
import * as yup from "yup";

const RegisterComponent = () => {
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      address1: "",
      address2: "",
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().required("Required"),
      lastName: yup.string().required("Required"),
      email: yup.string().email("Invalid email").required("Required"),
      contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
      address1: yup.string().required("Required"),
      address2: yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="m-5">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">CREATE USER</h1>
        <p className="text-gray-600">Create a New User Profile</p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-sm text-red-600">{formik.errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-sm text-red-600">{formik.errors.lastName}</p>
            )}
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-600">{formik.errors.email}</p>
            )}
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              name="contact"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contact}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {formik.touched.contact && formik.errors.contact && (
              <p className="text-sm text-red-600">{formik.errors.contact}</p>
            )}
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Address 1
            </label>
            <input
              type="text"
              name="address1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address1}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {formik.touched.address1 && formik.errors.address1 && (
              <p className="text-sm text-red-600">{formik.errors.address1}</p>
            )}
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Address 2
            </label>
            <input
              type="text"
              name="address2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address2}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {formik.touched.address2 && formik.errors.address2 && (
              <p className="text-sm text-red-600">{formik.errors.address2}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create New User
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
*/
