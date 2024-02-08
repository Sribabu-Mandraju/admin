import React, { useState ,useEffect} from "react";
import { MdOutlineGroups } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import CustomModal from "./Modal";
import { GoOrganization } from "react-icons/go";
import { GoFileSubmodule } from "react-icons/go";
import { IoMdPersonAdd } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import CustomModal2 from "./Modal2";
import '../App.css'
import c from '../assets/b party.png'
import {Link} from 'react-router-dom'

const Clients = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [width,setWidth] = useState(window.innerWidth)
  const itemsPerPage = 10;
  const handleWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',handleWidth)
  },[])


  const data = [
    { id: 1, title: "Response one", email: "user1@example.com", postedBy: "u3tech", status: "approved" },
    { id: 2, title: "Response two", email: "user2@example.com", postedBy: "u3tech", status: "pending" },
    { id: 3, title: "Response three", email: "user3@example.com", postedBy: "u3tech", status: "rejected" },
    { id: 4, title: "Response four", email: "user4@example.com", postedBy: "u3tech", status: "approved" },
    { id: 5, title: "Response five", email: "user5@example.com", postedBy: "u3tech", status: "pending" },
    { id: 6, title: "Response six", email: "user6@example.com", postedBy: "u3tech", status: "rejected" },
    { id: 7, title: "Response seven", email: "user7@example.com", postedBy: "u3tech", status: "approved" },
    { id: 8, title: "Response eight", email: "user8@example.com", postedBy: "u3tech", status: "pending" },
    { id: 9, title: "Response nine", email: "user9@example.com", postedBy: "u3tech", status: "rejected" },
    { id: 10, title: "Response ten", email: "user10@example.com", postedBy: "u3tech", status: "approved" },
    { id: 11, title: "Response eleven", email: "user11@example.com", postedBy: "u3tech", status: "pending" },
    { id: 12, title: "Response twelve", email: "user12@example.com", postedBy: "u3tech", status: "rejected" },
    { id: 13, title: "Response thirteen", email: "user13@example.com", postedBy: "u3tech", status: "approved" },
    { id: 14, title: "Response fourteen", email: "user14@example.com", postedBy: "u3tech", status: "pending" },
    { id: 15, title: "Response fifteen", email: "user15@example.com", postedBy: "u3tech", status: "rejected" },
    { id: 16, title: "Response sixteen", email: "user16@example.com", postedBy: "u3tech", status: "approved" },
    { id: 17, title: "Response seventeen", email: "user17@example.com", postedBy: "u3tech", status: "pending" },
    { id: 18, title: "Response eighteen", email: "user18@example.com", postedBy: "u3tech", status: "rejected" },
    { id: 19, title: "Response nineteen", email: "user19@example.com", postedBy: "u3tech", status: "approved" },
    { id: 20, title: "Response twenty", email: "user20@example.com", postedBy: "u3tech", status: "pending" },
  ];
  
      
      

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const [showModal, setShowModal] = useState(false);
  const [showModal2,setShowModal2] = useState(false)

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal2 = () => {
    setShowModal2(true);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };

  return (
    <>
      <section
        className="dashboard ps-2 mx-auto w-100 d-flex flex-column"
        style={{
          overflow: "scroll",
          width: "99%",
        }}
      >
        <div className="w-100  d-flex align-items-center py-3" style={{ color: "#006996" }}>
          <MdOutlineGroups style={{ fontSize: "20px" }} />
          <div className="h4 px-2">Clients</div>
        </div>
        <div className="table-responsive table-striped w-100  mt-4" style={{ height: "auto", overflow: "" }}>
          <div className="d-flex align-items-center justify-content-between mb-3 " style={{position:"sticky",left:"0"}}>
            <div className="mx-2 d-flex align-items-center">
              <FiSearch style={{ marginRight: "-20px", zIndex: "1" }} />
              <input type="text" placeholder="search......." className="py-1 ps-4" style={{ borderRadius: "5px", border: "0.3px solid grey" }} />
            </div>
            <button className="btn btn-primary mx-2  " onClick={openModal2} style={{marginRight:""}}><IoMdPersonAdd/><span className="px-1">{width>600?"Add":""}</span></button>
            <CustomModal2 showModal2={showModal2} closeModal2={closeModal2}>
              <form action="">
                <label htmlFor="name" className="form-label">Name<sup className="red">*</sup></label>
                <input type="text" className="form-control" placeholder="enter client name" />
                <label htmlFor="name" className="form-label">Company<sup className="red">*</sup></label>
                <input type="text" className="form-control" placeholder="enter client Company" />
                <label htmlFor="name" className="form-label">Password<sup className="red">*</sup></label>
                <input type="text" className="form-control" placeholder="enter client Password" />
                <label htmlFor="name" className="form-label">Email<sup className="red">*</sup></label>
                <input type="text" className="form-control" placeholder="enter client Email" />
                <label htmlFor="name" className="form-label">Number<sup className="red">*</sup></label>
                <input type="text" className="form-control" placeholder="enter client phone" />
                <div className="w-100 d-flex align-items-center  my-3 justify-content-center">
                  <button className="btn btn-success"><GoFileSubmodule /><span className="px-2">Submit</span></button>
                </div>
              </form>
            </CustomModal2>
          </div>
          <div className={`w-100 d-flex ${width>700?"justify-content-between":"justify-content-around"} align-items-center flex-wrap`}>
            {
              currentItems.map((i)=> (
                <div className="card d-flex flex-column my-2 mx-2" style={{
                  width:"99%",
                  maxWidth:"300px",
                  
                }}>
                  <img src={c} alt="" style={{
                    width:"100%",
                    height:"250px"
                  }} />
                  <div className="w-100 text-center pt-2" style={{fontWeight:"700",fontSize:"25px"}}>{i.title}</div>
                  <div className="w-100 text-center" style={{color:"grey"}}>sribabumandraju@gmail.com</div>
                  <w className="w-100 d-flex justify-content-center">
                    <Link style={{
                      textDecoration:"none"
                    }} to={`/clients/${i.title}`}>
                      <button className="btn btn-secondary mx-auto my-3 px-5 d-flex align-items-center">
                        <span className="px-2">View info</span>
                        <span><FaCircleInfo /></span>
                      </button>
                    </Link>
                  </w>
                </div>
              ))
            }
          </div>
          <div className="pagination d-flex justify-content-center" style={{position:"sticky",left:"0"}}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={`${currentPage === index + 1 ? "active mx-2 p-2 " : "mx-2 p-2"} ${currentPage == index +1?"bg-primary":"bg-white"}`} style={{borderRadius:"7px"}}>
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const getStatusBadgeColor = (status) => {
  switch (status) {
    case "approved":
      return "bg-success";
    case "pending":
      return "bg-warning";
    case "rejected":
      return "bg-danger";
    default:
      return "";
  }
};

export default Clients;