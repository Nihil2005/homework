import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Notes() {
  const [pdfs, setPdfs] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch PDF documents from the Django backend
  const fetchPdfs = async () => {
    try {
      const response = await axios.get('http://api/pdf-documents/');
      setPdfs(response.data);
    } catch (error) {
      console.error('Error fetching PDFs:', error);
    }
  };

  // Handle file selection for upload
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Upload PDF document to the Django backend
  const uploadPdf = async () => {
    try {
      const formData = new FormData();
      formData.append('pdf_file', selectedFile);
      const response = await axios.post('http://192.168.223.1:800/api/pdf-documents/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('PDF uploaded successfully:', response.data);
      // Refresh the list of PDFs
      fetchPdfs();
    } catch (error) {
      console.error('Error uploading PDF:', error);
    }
  };

  // Download PDF document from the Django backend
  const downloadPdf = async (pdfId) => {
    try {
      const response = await axios.get(`http://192.168.223.1:800/api/download-pdf/${pdfId}/`, {
        responseType: 'blob', // Important for binary response
      });
      // Create a temporary URL for downloading the file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `document_${pdfId}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  // Fetch PDFs when the component mounts
  useEffect(() => {
    fetchPdfs();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">PDF Documents</h1>
      <div className="mb-4">
        <input type="file" onChange={handleFileChange} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={uploadPdf}>
          Upload PDF
        </button>
      </div>
      <div>
        {pdfs.map((pdf) => (
          <div key={pdf.id} className="mb-4">
            <p className="font-bold">{pdf.title}</p>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => downloadPdf(pdf.id)}
            >
              Download PDF
            </button>
            {/* Render a link to view the PDF in a new tab */}
            <a href={pdf.pdf_file} target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-500">View PDF</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
