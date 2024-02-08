import {useState} from 'react'
import '../App.css'


const SendRequest = () => {
    const [notice,setNotice] = useState(
        {
            title:"",
            date:null,
            shortDiscription:"",
            fullDiscription:"", 
            postedBy:"",
            link:"",
            postedAt:new Date()
        }
    )
    const handleChange = (e) => { qq
        const newData = {...notice}
        newData[e.target.name] = e.target.value
        setNotice(newData);
    }
    
    return (
        <>
            <section className="resource-form w-100"
                    style={{
                    width:"97%",
                    maxWidth:"",
                    height:"87vh",
                    overflowY:"scroll"
                }}
                >
                    <div className="text-center h3 bold-2" style={{color:"#006996"}}>Send Request</div>
                    <form className="resource-form shadow  d-flex flex-column ps-3 py-3 mx-auto "  
                    style={{
                    width:"97%",
                    maxWidth:"450px",
                    backgroundColor:"#F7FFFF",
                    
                    }}
                    >
                        <span className="mt-3">
                            <label htmlFor="title" className=" ps-2">Title</label>
                            <input type="text" name="title" placeholder="" value={notice.title}  onChange={handleChange}  required/>
                        </span>


                        <span className="mt-3">
                            <label htmlFor="shortDiscription" className=" ps-2">Subject</label>
                            <input type="text" name="shortDiscription" placeholder="Short discription about Feedback" value={notice.shortDiscription} onChange={handleChange} required/>
                        </span>
                                
                        <span className="mt-3">
                            <label htmlFor="longDiscription" className=" ps-2">Suggestions & Requirements</label>
                            <textarea name="fullDiscription" id="" cols="30" rows="5"  placeholder="Full discription" value={notice.fullDiscription} onChange={handleChange}></textarea>
                        </span>

                        <span className="mt-3">
                            <label htmlFor="date" className=" ps-2">Date</label>
                            <input type="date" name="date"  onChange={handleChange} value={notice.date} required/>
                        </span>

                        <span className="mt-3">
                            <label htmlFor="links" className=" ps-2">Link (optional)</label>
                            <input type="text" name="link" placeholder="post link" onChange={handleChange} value={notice.link} />
                        </span>
                        
                        
                        <span className="mt-3 w-100">
                            <input type="submit"  value="submit" className="w-100" style={{backgroundColor:"#006996",color:"white"}} />
                        </span>
                    </form>
            </section>
        </>
    )
}
export default SendRequest