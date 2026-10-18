import { useState, useEffect } from "react";

function WelcomeTimer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Welcome Timer</h2>

      {show && <h3>Welcome to React!</h3>}
    </div>
  );
}

export default WelcomeTimer;