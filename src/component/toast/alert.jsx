import React, {useEffect} from 'react'
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

 const CustomAlert = ({severity, onClose, children})=>{
useEffect(()=>{
    const timeout = setTimeout(()=>{
        onClose()
    }, 4000)

    return ()=> clearTimeout(timeout)
}, [onClose])

    return (
      <Alert severity={severity} onClose= {onClose}>
        <AlertTitle>{severity.toUpperCase()}</AlertTitle>
        {children}
      </Alert>
    );
    };

    export default CustomAlert