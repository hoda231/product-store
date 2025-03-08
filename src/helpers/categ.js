import React from "react"; 
   
  import "../styles/contactu.css"
    export default function Contact() {
      const [result, setResult] = React.useState("");
    
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    
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
        <div className="contact">
          <form onSubmit={onSubmit}>
            <h1>Get in touch </h1>
            <div className="form">
              <div className="left">
               <div className="text">

            <h1>Contact Us</h1>
            <p>send us your thoughts about our brand</p>
            
            <div class="vl"></div></div>
            </div>
            <div className="right">
            <input  className="input" 
                    placeholder="Name"
                    type="text" 
                    name="name"
                    required/>
            <input  className="input" 
                    placeholder="Company"
                    type="text" 
                    name="text"
                    required/>
                     <input  className="input" 
                    placeholder="Email"
                    type="email" 
                    name="email"
                    required/>
            <textarea name="message" className="mass"    
            placeholder="Your massage"required></textarea>
    
            <button className="button" type="submit">Submit Form</button>
            <div className="text">
              </div>
              </div>
            </div>

          </form>
          <span>{result}</span>
    
        </div>
      );
    }