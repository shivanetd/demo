import React, { Component, useContext } from 'react'
import { ThemeContex } from '../contexts/ThemeContex'
import { AuthContext } from '../contexts/AuthContext'

// export default class NavBar extends Component {

//     static contextType = AuthContext;
//     render() {
//         return (
//             <ThemeContex.Consumer>{(themeContext) => {

//                 const {isLightTheme, light, dark} = themeContext;
//                 const theme = isLightTheme ? light : dark;

//                 const {isAuthenticated, toggleAuth} = this.context;

//                 return(
//                     <nav style={{ background: theme.ui, color: theme.syntax }}>
//                         <h1>Context App</h1>
//                         <div onClick={toggleAuth}>
//                             {isAuthenticated? "Logged In" : "Logged Out"}
//                         </div>
//                         <ul>
//                             <li>Home</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                         </ul>
//                     </nav>
//                 )}
//                 }

//             </ThemeContex.Consumer>
                    
                
           
            
//         )
//     }
// }

const NavBar = () => {

    const {isLightTheme, light, dark} = useContext(ThemeContex);
    const theme = isLightTheme ? light : dark;

    const {isAuthenticated, toggleAuth} = useContext(AuthContext);

    return(
        <nav style={{ background: theme.ui, color: theme.syntax }}>
                        <h1>Context App</h1>
                        <div onClick={toggleAuth}>
                            {isAuthenticated? "Logged In" : "Logged Out"}
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
    )
}

export default NavBar;