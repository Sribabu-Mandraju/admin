import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../App.css'

const Documentation = () => {
  const navigate = useNavigate();
  const [fileData, setFileData] = useState(null);
  const [resourceData, setResourceData] = useState({
    title:'',
    author:'',
    file: null,
    likes: 0,
    categiry:'',
  });

  const handleForm = (e) => {
    const newData = { ...resourceData };
    if (e.target.name === 'file') {
      newData[e.target.name] = e.target.files[0];
    } else {
      newData[e.target.name] = e.target.value;
    }
    setResourceData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', resourceData.file);
    console.log(resourceData)

   
  };

 

  return (
    <section className="resource-form w-100 mt-3" style={{ width: '97%', maxWidth: '1100px', height: '87vh' }}>
      <div className="text-center h3 bold-2 py-3" style={{ color: '#006996' }}>
        Upload Documents!
      </div>
      <p className="text-center tag-line">Lorem ipsum dolor sit amet consectetur adipi</p>
      <form
        className="resource-form d-flex flex-column shadow ps-3 py-3 mx-auto"
        onSubmit={handleSubmit}
        encType="multipart/form-data" 
        style={{
          width: '97%',
          maxWidth: '450px',
          height: 'auto',
          backgroundColor: '#F7FFFF',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <span className="mt-3">
          <label htmlFor="bTitle" className="ps-2">
            Title
          </label>
          <input type="text" name="title" placeholder="Title of the book" value={resourceData.title} onChange={handleForm} required />
        </span>

        <span className="mt-3">
          <label htmlFor="bAuthor" className="ps-2">
            Send by
          </label>
          <input type="text" name="author" placeholder="Author of the book" value={resourceData.author} onChange={handleForm} required />
        </span>

        <span className="mt-3">
          <label htmlFor="bCategiry" className="ps-2">
            Document Type
          </label>
          <select name="categiry" id="categiry" className="form-select" value={resourceData.categiry} onChange={handleForm} required>
            <option value="">-- Select --</option>
            <option value="ALL">ALL</option>
          </select>
        </span>

        <span className="mt-3">
          <label htmlFor="bFile" className="ps-2">
            Upload File
          </label>
          <input type="file" name="file" placeholder="Upload file" style={{ border: 'none' }} onChange={handleForm} required />
        </span>

        <span className="mt-5 w-100">
          <input type="submit" value="Submit" className="w-100" style={{ backgroundColor: '#006996', color: 'white' }} />
        </span>
      </form>
    

    </section>
  );
}
export default Documentation
