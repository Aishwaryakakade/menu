import axios, { AxiosError } from "axios";
import React from "react";
import { Form, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    const err = error as AxiosError<{ msg: string }>;
    toast.error(err?.response?.data?.msg);
    return error;
  }
};

const NewsLetter: React.FC = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form
      method="POST"
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border-2 border-myteal"
    >
      <h4 className="text-2xl font-bold text-myteal-700 mb-6 text-center">
        Newsletter
      </h4>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="lastname"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Last name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastname"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-myteal text-white py-2 px-4 rounded-md hover:bg-myteal transition duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </Form>
  );
};

export default NewsLetter;
