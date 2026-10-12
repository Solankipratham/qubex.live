import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // Import useForm for form handling
import img2 from "/Images/PlatformDevloper.png";
import { FiFileText, FiFolder, FiCloud, FiLock } from 'react-icons/fi';

import { Link } from "react-router-dom";

const DocumentManagement = () => {
  const [documents, setDocuments] = useState([]);
  const { register, handleSubmit, reset, setValue } = useForm(); // Include reset and setValue for clearing form

  // Handle form submission to add a new document
  const onSubmit = (data) => {
    const fileName = data.file[0]?.name || ""; // Extract file name
    setDocuments([...documents, { ...data, id: Date.now(), file: fileName }]); // Add id and file name
    reset(); // Clear form after submission
  };

  // Handle document deletion
  const handleDelete = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  // Handle document edit (pre-fill form)
  const handleEdit = (doc) => {
    setValue("file", doc.file); // Set file name in form (if editable as text or placeholder)
    setValue("title", doc.title);
    setValue("description", doc.description);
  };

  return (
    <div className="font-sans  min-h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="bg-cover bg-center w-full h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${img2})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col text-white items-start pt-10 sm:pt-20 px-10">
          <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
          Advanced Document Management Solutions
          </h1>
          <p className="text-xl sm:text-2xl pt-5 w-[90%] sm:w-[80%]">
            
          Qubex delivers custom document management solutions that streamline document storage, retrieval, and collaboration, ensuring efficient handling of digital and physical files.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 py-12 space-y-12">

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="/Images/DocumentManagement.jpg"
            alt="Document Management Dashboard"
            className="w-full max-w-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="flex items-center gap-4">
            <FiFileText className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Digital Document Storage</h2>
              <p className="text-gray-700">
                Implement secure and centralized storage systems to manage digital documents, reducing reliance on physical files and saving storage space.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4">
            <FiFolder className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Efficient File Organization</h2>
              <p className="text-gray-700">
                Categorize and organize documents into user-friendly file structures, enabling faster retrieval and smoother collaboration among team members.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4">
            <FiCloud className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Cloud Integration</h2>
              <p className="text-gray-700">
                Leverage cloud-based solutions to access and manage documents from anywhere, improving flexibility and supporting remote work environments.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center gap-4">
            <FiLock className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Enhanced Document Security</h2>
              <p className="text-gray-700">
                Protect sensitive information with robust encryption, role-based access control, and secure file-sharing capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <button className="px-8 py-3 bg-black text-white font-semibold rounded-full">
        Develop Document Management Solutions
      </button>
    </div>

      {/* Document Management Section */}
      <div className="container mx-auto bg-gray-100 px-4 py-10">
        <h1 className="text-2xl font-bold mb-6  text-center">Document Management System</h1>

        {/* Form for uploading documents */}
        <form onSubmit={handleSubmit(onSubmit)} className="mb-8 mx-auto text-black p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Upload File</label>
            <input
              type="file"
              {...register("file", { required: true })}
              className="block w-full text-sm text-gray-300 bg-gray-700 rounded border border-gray-600 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Document Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Document Title"
              className="block w-full p-2 text-sm bg-gray-700 rounded border border-gray-600 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <input
              type="text"
              {...register("description")}
              placeholder="Document Description"
              className="block w-full p-2 text-sm bg-gray-700 rounded border border-gray-600 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded transition"
          >
            Upload Document
          </button>
        </form>

        {/* List of uploaded documents */}
        <div className="mx-auto  p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Uploaded Documents</h2>
          <ul className="divide-y divide-gray-700">
            {documents.map((doc) => (
              <li key={doc.id} className="py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">{doc.title}</h3>
                  <p className="text-sm text-gray-400">{doc.description}</p>
                  <p className="text-sm text-gray-500 italic">{doc.file}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(doc)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(doc.id)}
                    className="bg-black text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {documents.length === 0 && (
            <p className="text-sm text-gray-400 italic text-center">No documents uploaded yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentManagement;
