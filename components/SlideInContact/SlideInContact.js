'use client'
import React from "react";
import { useEffect, useState, useRef } from "react";
import {
Stack
} from "@mui/material";
import './SlideInContact.scss'
import PlaceIcon from '@mui/icons-material/Place';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import SystemSecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SystemSecurityUpdateGoodOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

const SlideIn = () => {
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      });
  
      observer.observe(divRef.current);
  
      return () => {
        observer.disconnect();
      };
    }, []);
    
  return (
    <>
<Stack
          direction={{ xs: "column", sm: "column" }}
          id="reverse-mortgage-utah-home-Container-stack-column"
          sx={{
            marginTop: "50px",
            marginBottom: "50px",
            paddingLeft: "5px",
            paddingRight: "5px",
            backgroundColor: "White"
          }}
          spacing={{ xs: 1, sm: 1, md: 6 }}
        >
          <div
            ref={divRef}
            className={isVisible ? "slide-in" : ""}
            id="slide-in-section"
          >
            <PlaceIcon
              sx={{
                fontSize: "25px",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                backgroundColor: "White"
              }}
            />
            <p id="slide-in-p">Situated in Layton, Utah; however, our services extend anywhere.</p>
          </div>
          <div
            ref={divRef}
            className={isVisible ? "slide-in2" : ""}
            id="slide-in-section"
          >
            <SystemSecurityUpdateGoodOutlinedIcon
              sx={{
                fontSize: "25px",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                backgroundColor: "White"
              }}
            />
            <p id="slide-in-p">Phone: 801-574-1949</p>
          </div>
          <div
            ref={divRef}
            className={isVisible ? "slide-in3" : ""}
            id="slide-in-section"
          >
            <MarkEmailReadIcon
              sx={{
                fontSize: "25px",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                backgroundColor: "White"
              }}
            />
            <p id="slide-in-p">Email: </p>
          </div>
          <div
            ref={divRef}
            className={isVisible ? "slide-in4" : ""}
            id="slide-in-section"
          >
            <QueryBuilderIcon
              sx={{
                fontSize: "25px",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                backgroundColor: "White"
              }}
            />
            <p id="slide-in-p">Hours: 9am-6pm MST Client Emergency: 24/7</p>
          </div>
        </Stack>

</>
)
}

export default SlideIn;