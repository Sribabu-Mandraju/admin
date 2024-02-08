import { useState ,useEffect} from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const formData = { ...values };
    formData[e.target.name] = e.target.value;
    setValues(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values)

    try {
      const response = await axios.post("http://localhost:8080/admin/login", values);

      if (response.status == 200) {
        const token = response.data.token
        localStorage.setItem("token",token)
        navigate("/home")
      } else {
        alert("Login failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section
        className="resource-form w-100 mt-5"
        style={{
          width: "100%",
        }}
      >
        <div className="text-center h3 bold-2" style={{ color: "#006996" }}>
          Login !
        </div>
        <p className="text-center tag-line">
          Lorem ipsum dolor sit amet consectetur adipi
        </p>
        <form
          className="resource-form shadow flex-column ps-3 py-3 mx-auto"
          onSubmit={handleSubmit}
          method="POST" 
          style={{
            width: "97%",
            maxWidth: "450px",
            height: "auto",
            backgroundColor: "#F7FFFF",
            display: "flex",
          }}
        >
          <span className="mt-3">
            <label htmlFor="" className="ps-2">
              User Email
            </label>
            <input
              type="email"
              name="Email"
              placeholder="Enter your Name"
              onChange={handleChange}
              required
            />
          </span>

          <span className="mt-3">
            <label htmlFor="password" className="ps-2">
              Password
            </label>
            <input
              type="password"
              name="Password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </span>

          <span className="mt-3 w-100">
            <input
              type="submit"
              value="submit"
              className="w-100"
              style={{ backgroundColor: "#006996", color: "white" }}
            />
          </span>
        </form>
      </section>
    </>
  );
};

export default Login;
