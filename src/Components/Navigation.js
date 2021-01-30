import React,{useContext} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";
import NavTheme from '../navcolors';

const Navigation = () => {
  const theme = useContext(ThemeContext)[0];
  // const currectTheme = AppTheme[theme];
  const navTheme = NavTheme[theme];
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return ( 
        <div>
<nav style={{backgroundColor: `${navTheme.backgroundColor}`,
        color: `${navTheme.textColor}`}} className="nav justify-content-center ">
  <button style={{border: `${navTheme.border}`}} type="button" class="btn btn-primary" onClick={() => {
          setThemeMode("primary");
        }}>Primary</button>
<button style={{border: `${navTheme.border}`}} type="button" class="btn btn-secondary" onClick={() => {
          setThemeMode("secondary");
        }}>Secondary</button>
<button style={{border: `${navTheme.border}`}} type="button" class="btn btn-success" onClick={() => {
          setThemeMode("success");
        }}>Success</button>
<button style={{border: `${navTheme.border}`}} type="button" class="btn btn-danger" onClick={() => {
          setThemeMode("danger");
        }}>Danger</button>
<button style={{border: `${navTheme.border}`}} type="button" class="btn btn-warning" onClick={() => {
          setThemeMode("warning");
        }}>Warning</button>
<button style={{border: `${navTheme.border}`}} type="button" class="btn btn-info" onClick={() => {
          setThemeMode("info");
        }}>Info</button>
<button style={{border: `${navTheme.border}`}} type="button" class="btn btn-light" onClick={() => {
          setThemeMode("light");
        }}>Light</button>
<button style={{border: `${navTheme.border}`}} type="button" class="btn btn-dark" onClick={() => {
          setThemeMode("dark");
        }}>Dark</button>
  </nav>

        </div>
   );
}
 
export default Navigation;