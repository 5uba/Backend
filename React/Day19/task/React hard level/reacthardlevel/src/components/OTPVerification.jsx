import { useState, useEffect } from "react";
function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [time, setTime] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);
  const generateOTP = () => {
    return String(Math.floor(100000 + Math.random() * 900000));
  };
  const sendOTP = () => {
    setOtp(generateOTP());
    setTime(60);
    setAttempts(0);
    setEnteredOtp("");
    setMessage("New OTP generated");

    console.log("Practice OTP:", generateOTP());
  };
  useEffect(() => {
    sendOTP();
  }, []);
  useEffect(() => {
    if (time <= 0 || verified || attempts >= 3) {
      return;
    }
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time, verified, attempts]);
  const verifyOTP = () => {
    if (time <= 0) {
      setMessage("OTP expired. Please resend.");
      return;
    }
    if (attempts >= 3) {
      setMessage("Maximum attempts reached. Resend OTP.");
      return;
    }
    if (enteredOtp === otp) {
      setVerified(true);
      setMessage("OTP verified successfully!");
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 3) {
        setMessage("Maximum attempts reached. Resend OTP.");
      } else {
        setMessage("Incorrect OTP. Try again.");
      }
    }
  };

  const resendOTP = () => {
    setVerified(false);
    sendOTP();
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <p>Time remaining: {time} seconds</p>
      <p>Attempts: {attempts}/3</p>
      <input type="text" maxLength={6} placeholder="Enter 6-digit OTP" value={enteredOtp} onChange={(e) => setEnteredOtp(e.target.value)} disabled={verified || attempts >= 3 || time <= 0}/>
      <button
        onClick={verifyOTP}
        disabled={verified || attempts >= 3 || time <= 0}>
        Verify OTP
      </button>
      {(time <= 0 || attempts >= 3) && !verified && (
        <button onClick={resendOTP}>
          Resend OTP
        </button>
      )}
      <p>{message}</p>
    </div>
  );
}
export default OTPVerification;