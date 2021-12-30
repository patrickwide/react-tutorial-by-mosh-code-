import React, { Component } from 'react';
// stateless finctional componet (sfc)
const NavBar = ({totalCounters}) => {

        return (
            <div style={{ backgroundColor:"#EFEFEF",padding:10 }}>
                <h3>App name</h3>
                <p>Total : { totalCounters }</p>
            </div>
        );

};
 
export default NavBar;