import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, RiYoutubeLine, RiGithubLine } from "react-icons/ri";
const SubContact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f41a9d28-a1af-4501-a4ad-39eb8aff43ac");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    
    <>
      <section id="contact_Mini">
        <div className="super_container">
        <div className="container_1">
          <h3>Let's connect</h3>
          <div>
            <p>Phone</p>
            <span>+001 1234 999</span>
          </div>
          <div>
            <p>Email</p>
            <span>abc@gmail.com</span>
          </div>
          <div>
            <p>Address</p>
            <span>House No.123 Sector A-1</span>
          </div>
          <ul>
          <Link to={"/facebook"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/facebook"} target="_blank"><RiYoutubeLine/></Link>
          <Link to={"/facebook"} target="_blank"><RiGithubLine/></Link>
        </ul>
        </div>
        
        <div className="container_2">
          <h3>We'd love to hear from you</h3>
          <form onClick={onSubmit}>
            <div>
              <input type="text" placeholder="Your Name" required name="name"/>
              <input type="email" placeholder="Email" required name="email"/>
            </div>
            <textarea rows="4" placeholder="Your Message..."/>
            <button type="submit" >SEND</button>
          </form>
          
        </div>
        </div>
      </section>
    </>
  );
};

export default SubContact