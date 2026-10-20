import { useState } from "react";
function LoanApplication() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    salary: "",
    loanAmount: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleNext = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        alert("Please fill all personal details");
        return;
      }
    }
    if (step === 2) {
      if (!formData.company || !formData.salary) {
        alert("Please fill employment details");
        return;
      }
    }
    if (step === 3) {
      if (!formData.loanAmount || Number(formData.loanAmount) <= 0) {
        alert("Please enter a valid loan amount");
        return;
      }
    }
    setStep(step + 1);
  };
  const handleSubmit = () => {
    console.log("Loan Application:", formData);
    alert("Application submitted successfully!");
  };
  return (
    <div>
      <h2>Loan Application</h2>
      <h3>Step {step} of 4</h3>
      {step === 1 && (
        <div>
          <h3>Personal Details</h3>
          <input
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Enter phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <h3>Employment Details</h3>
          <input
            name="company"
            placeholder="Enter company name"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            name="salary"
            type="number"
            placeholder="Enter monthly salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <h3>Loan Details</h3>
          <input
            name="loanAmount"
            type="number"
            placeholder="Enter loan amount"
            value={formData.loanAmount}
            onChange={handleChange}
          />
        </div>
      )}
      {step === 4 && (
        <div>
          <h3>Review Details</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <p>Company: {formData.company}</p>
          <p>Monthly Salary: {formData.salary}</p>
          <p>Loan Amount: {formData.loanAmount}</p>
          <button onClick={handleSubmit}>
            Submit Application
          </button>
        </div>
      )}
      {step > 1 && (
        <button onClick={() => setStep(step - 1)}>
          Previous
        </button>
      )}
      {step < 4 && (
        <button onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
}
export default LoanApplication;