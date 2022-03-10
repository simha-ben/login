import React, { useState, useEffect } from 'react';

import { useLocation,useParams } from "react-router-dom";


  export default  function Hello(props) {
        
        // const location = useLocation();
        const { name } = useParams();


        return (
            <>
            <div className="row d-flex justify-content-center">
               <h3> welcome { name }!!!!</h3>
               </div>
                
            </>
        )
    }