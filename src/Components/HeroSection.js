import React, { useContext } from "react";
// import ThemeContext from "../Context/ThemeContext";
import ParaContext from "../Context/paraContext";
import AppTheme from "../Colors";

const HeroSection = ({message,classname}) => {
  const theme = useContext(ParaContext)[0];
  const currectTheme = AppTheme[theme];
  const [paraTheme, setParaTheme] = useContext(ParaContext);
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: "center",
      }}
      className={classname}
    >
      <h1> {message} </h1>
      {/* <p>Hey I love this App</p> */}
      
      <button style={{border: `${currectTheme.border}`}} type="button" class="btn btn-primary" onClick={() => {
          setParaTheme("primary");
        }}>Primary</button>
<button style={{border: `${currectTheme.border}`}} type="button" class="btn btn-secondary" onClick={() => {
          setParaTheme("secondary");
        }}>Secondary</button>
<button style={{border: `${currectTheme.border}`}} type="button" class="btn btn-success" onClick={() => {
          setParaTheme("success");
        }}>Success</button>
<button style={{border: `${currectTheme.border}`}} type="button" class="btn btn-danger" onClick={() => {
          setParaTheme("danger");
        }}>Danger</button>
<button style={{border: `${currectTheme.border}`}} type="button" class="btn btn-warning" onClick={() => {
          setParaTheme("warning");
        }}>Warning</button>
<button style={{border: `${currectTheme.border}`}} type="button" class="btn btn-info" onClick={() => {
          setParaTheme("info");
        }}>Info</button>
<button style={{border: `${currectTheme.border}`}} type="button" class="btn btn-light" onClick={() => {
          setParaTheme("light");
        }}>Light</button>
<button style={{border: `${currectTheme.border}`}} type="button" class="btn btn-dark" onClick={() => {
          setParaTheme("dark");
        }}>Dark</button>
    </div>
  );
};

export default HeroSection;
