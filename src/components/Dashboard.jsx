import React, { useState,useEffect } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import '../App.css'
import { RiExpandUpDownFill } from "react-icons/ri";
import axios from 'axios'
import { formatDistanceToNow } from 'date-fns';


const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userToken,setUserToken] = useState("")
  const [loading, setLoading] = useState(true); 
  const [selectedOption, setSelectedOption] = useState("ALL");
  const [requests,setUserRequests] = useState([])

  const itemsPerPage = 10;
    const data = [
        { id: 1, title: "Response one", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 2, title: "Response two", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
        { id: 3, title: "Response three", date: "28/08/2023", postedBy: "u3tech", status: "Rejected" },
        { id: 4, title: "Response four", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 5, title: "Response five", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
        { id: 6, title: "Response six", date: "28/08/2023", postedBy: "u3tech", status: "Rejected" },
        { id: 7, title: "Response seven", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 8, title: "Response eight", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
        { id: 9, title: "Response nine", date: "28/08/2023", postedBy: "u3tech", status: "Rejected" },
        { id: 10, title: "Response ten", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 11, title: "Response eleven", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
        { id: 12, title: "Response twelve", date: "28/08/2023", postedBy: "u3tech", status: "Rejected" },
        { id: 13, title: "Response thirteen", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 14, title: "Response fourteen", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
        { id: 15, title: "Response fifteen", date: "28/08/2023", postedBy: "u3tech", status: "Rejected" },
        { id: 16, title: "Response sixteen", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 17, title: "Response seventeen", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
        { id: 18, title: "Response eighteen", date: "28/08/2023", postedBy: "u3tech", status: "Rejected" },
        { id: 19, title: "Response nineteen", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 20, title: "Response twenty", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
      ];

      useEffect(() => {
        const fetchData = async () => {
          try {
            const getToken = localStorage.getItem("token");
            console.log("Token:", getToken); // Log token for debugging
            setUserToken(getToken);
      
            const response = await axios.get("http://localhost:8080/admin/all-requests", {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `${userToken}`
              }
            });
            console.log("Response:", response.data); // Log response data for debugging
      
            if (response.status !== 200) {
              throw new Error('Network response was not ok');
            }
      
            setUserRequests(response.data);
            console.log(requests)
            setLoading(false);
          } catch (err) {
            console.error(err);
          }
        };
      
        fetchData();
      }, [userToken]);


      

 

  const [search,setSearch]=useState('');
  const handleSearch=(e)=>{
    setSearch(e.target.value.toLowerCase());
  }
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const filteredData = requests.filter((item) => {
    return (
      (selectedOption === "ALL" || item.status_review === selectedOption) &&
      item.title?.toLowerCase().includes(search)
    );
  });
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };

 
 
  if (loading) {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
          <div className="">Loading...</div>
        </div>
      </>
    );
  }
  return (
    <>
      <section
        className="dashboard ps-2 mt-3 mx-auto w-100 d-flex flex-column"
        style={{
          width:"97%",
          maxWidth:"1300px",
          height:"87vh",
          overflowY:"scroll"
      }}
      >
        <div className="w-100  d-flex align-items-center py-3" style={{ color: "#006996" }}>
          <AiOutlineDashboard style={{ fontSize: "25px" }} />
          <div className="h4 px-2 pt-2">Dashboard</div>
        </div>
            <div className="dashboard-top w-100 d-flex justify-content-between" style={{overflowX:"scroll",height:"80px"}}>
              <div className="d-flex align-items-center">
                  <div className={`px-3 cursor-pointer ${selectedOption=="ALL"?"tab-active":""}`} onClick={()=>{setSelectedOption("ALL")}} style={{cursor:"pointer"}}>All</div>
                  <div className={`px-3 cursor-pointer ${selectedOption=="Approved"?"tab-active":""}`} onClick={()=>{setSelectedOption("Approved")}} style={{cursor:"pointer"}}>Approved</div>
                  <div className={`px-3 cursor-pointer ${selectedOption=="In Review"?"tab-active":""}`} onClick={()=>{setSelectedOption("In Review")}} style={{cursor:"pointer",minWidth:"110px"}}>In Review</div>
                  <div className={`px-3 cursor-pointer ${selectedOption=="Rejected"?"tab-active":""}`} onClick={()=>{setSelectedOption("Rejected")}} style={{cursor:"pointer"}}>Rejected</div>
              </div>
              <div className="search-bar mx-3">
                <FiSearch style={{ marginRight: "-23px", zIndex: "1" ,position:"sticky"}} />
                <input type="text" placeholder="search" className="py-1 ps-4" value={search} onChange={handleSearch} style={{ borderRadius: "5px", border: "0.3px solid grey" }} />
              </div>
            </div>
        <div className="table-responsive  w-100  mt-4" style={{ height: "87vh", overflow: "scroll" }}>
          <div className="d-flex flex-column mx-auto" style={{width:"100%",minWidth:"350px",overflowX:"scroll"}}>
            <div className="w-100 d-flex align-items-center flex-column   justify-content-center" style={{minWidth:"1000px"}}>
              <div className="d-flex justify-content-around bg-dark text-white align-items-center  mb-2  py-1 shadow" style={{width:"100%",minWidth:"950px",height:"50px"}}>
                <div className="">S.no</div>
                <div className="d-flex align-items-center" style={{minWidth:"200px"}}>
                  <span className="pe-4">Title</span>
                  <RiExpandUpDownFill /> 
                </div>
                <div className="d-flex align-items-center" style={{minWidth:"140px"}}>
                  <span className="pe-4">Date</span>
                  <RiExpandUpDownFill /> 
                </div>
                <div className="d-flex align-items-center" style={{minWidth:"170px"}}>
                  <span className="pe-4">Send to</span>
                  <RiExpandUpDownFill /> 
                </div>
                <div className="d-flex align-items-center" style={{minWidth:"100px"}}>
                  <span className="pe-4">Status</span>
                  <RiExpandUpDownFill /> 
                </div>

              </div>
              {
                filteredData.map((data,index)=> (
                  <div className="d-flex justify-content-around align-items-center hover-effect cursor-pointer border  my-2  py-4 shadow" style={{width:"100%",minWidth:"950px",height:"50px",cursor:"pointer"}}>
                        <div className="">{index+1}</div>
                        <div className="d-flex align-items-center" style={{minWidth:"200px"}}>
                          {data.title}
                        </div>
                        <div className="d-flex align-items-center" style={{minWidth:"140px"}}>
                          {formatDate(data.sended_at)}
                        </div>
                        <div className="d-flex align-items-center" style={{minWidth:"170px"}}>
                          {data.send_to}
                        </div>
                        <div className={`  pe-4 d-flex align-items-center `} style={{minWidth:"100px"}}>
                          <div className={`badge ${getStatusBadgeColor(data.status_review)} ${data.status_review=="Approved"||"approved"?"bg-success":"bg-danger"}`}>{data.status_review}</div>
                        </div>
                  </div>
                ))
              }
              
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

const getStatusBadgeColor = (status) => {
  switch (status) {
    case "Approved":
      return "bg-success";
    case "In Review":
      return "bg-warning";
    case "Rejected":
      return "bg-danger";
    default:
      return "";
  }
};

export default Dashboard;