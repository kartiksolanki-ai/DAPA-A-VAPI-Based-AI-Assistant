"use client";
import React, { useState } from "react";
import UploadedFileDetails from "../../../../components/platform/files/uploadedFileDetail"; // Import the new component
import FileUpload from "../../../../components/platform/files/uploadSingleFile";

interface UploadedFile {
  name: string;
  size: string;
  type: string;
  createdAt: string;
}

const Files: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);

  const handleFileUpload = (file: any) => {
    setUploadedFile({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      type: file.type,
      createdAt: new Date().toLocaleString()
    });
  };

  const handleDelete = () => {
    setUploadedFile(null);
  };

  return (
    <div className="flex flex-col sm:flex-row flex-1 h-full">
      {uploadedFile ? (
        <UploadedFileDetails file={uploadedFile} onDelete={handleDelete} />
      ) : (
        <FileUpload onFileUpload={handleFileUpload} />
      )}
    </div>
  );
};

export default Files;
