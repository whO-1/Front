"use client"
import React,{  useRef, useState } from "react";

export default function DynamicPropsGenerator({ children }) {
    const [modifiedProps, setModifiedProps] = useState({});
    const [refreshKey, setRefreshKey] = useState(0); 

    const handleUpdate = (newProps) => {
        setModifiedProps(prevProps => ({
            ...prevProps,
            ...newProps
        }));
        setRefreshKey(prevKey => !prevKey); 
    };


    return React.cloneElement(children, { ...modifiedProps, handleUpdate, key: refreshKey });
}