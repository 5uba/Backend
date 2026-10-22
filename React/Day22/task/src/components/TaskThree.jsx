import { useRef } from "react";
const TaskThree = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <div>
      <h2>Single Page Navigation</h2>
      <button onClick={() => scrollToSection(homeRef)}>Home</button>
      <button onClick={() => scrollToSection(aboutRef)}>About</button>
      <button onClick={() => scrollToSection(servicesRef)}>Services</button>
      <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      <section ref={homeRef} style={{ height: "400px" }}>
        <h2>Home</h2>
        <p>Welcome to Home Section</p>
      </section>
      <section ref={aboutRef} style={{ height: "400px" }}>
        <h2>About</h2>
        <p>About Our Website</p>
      </section>
      <section ref={servicesRef} style={{ height: "400px" }}>
        <h2>Services</h2>
        <p>Our Services</p>
      </section>
      <section ref={contactRef} style={{ height: "400px" }}>
        <h2>Contact</h2>
        <p>Contact Us</p>
      </section>
    </div>
  );
};
export default TaskThree;
