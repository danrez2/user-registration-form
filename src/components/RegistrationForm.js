import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const fields = [
  {
    label: "First Name",
    type: "text",
    placeholder: "Jose",
    required: true,
    gridCols: 1,
  },
  {
    label: "Last Name",
    type: "text",
    placeholder: "",
    required: true,
    gridCols: 1,
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Jose@example.com",
    required: true,
    gridCols: 2,
  },
  {
    label: "Phone",
    type: "tel",
    placeholder: "+254 123-456-7890",
    required: true,
    gridCols: 2,
  },
  {
    label: "Address",
    type: "text",
    placeholder: "Tom Mboya street, Nairobi",
    required: true,
    gridCols: 2,
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    gridCols: 1,
  },
  {
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
    required: true,
    gridCols: 1,
  },
];

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can perform further actions with the form data here
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="lg:w-7/12 pb-10 pt-5 w-full p-4 flex flex-wrap justify-center shadow-2xl my-20 rounded-md mx-auto bg-gray-100">
          {/* Update background color and container padding */}
          <div className="pb-5 w-full">
            <h1 className="text-3xl font-bold text-blue-700">Register Form</h1>
            {/* Change heading color */}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-start items-center w-full m-auto"
          >
            <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
              {fields.map((field, index) => (
                <div
                  key={index}
                  className={`text-left flex flex-col gap-2 w-full ${
                    field.gridCols === 2 ? "md:col-span-2" : ""
                  }`}
                >
                  <label className="font-semibold text-blue-700">
                    {field.label}
                    {/* Change label color */}
                  </label>
                  <input
                    {...register(field.label.toLowerCase(), {
                      required: field.required,
                    })}
                    className={`border border-gray-400 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-700`}
                    // Update border and focus color
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                  {errors[field.label.toLowerCase()] && (
                    <span className="text-red-500">
                      This field is required
                      {/* Change error message color */}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full text-left">
              <button
                type="submit"
                className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-blue-700 text-white text-md font-bold border border-blue-700 rounded-md ease-in-out duration-150 hover:bg-white hover:text-blue-700 lg:m-0 md:px-6"
                // Update button colors
                title="Confirm Order"
              >
                <span>Register</span>
                <HiOutlineArrowCircleRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}