'use client'
import React from "react";
import { useEffect, useState, useRef } from "react";
import {
Stack
} from "@mui/material";
import './SlideInHelp.scss'
import ShieldIcon from '@mui/icons-material/Shield';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const SlideInHelp = () => {
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
            id="slide-in-help-section"
          >
            <ShieldIcon
              sx={{
                fontSize: "35px",
                justifyContent: "center",
                alignItems: "center",
                color: "#7DF9FF",
                backgroundColor: "black",
                marginRight: "4px"
              }}
            />
            <p id="slide-in-help-p">Prevent client loss to competitors.</p>
          </div>
          <div
            ref={divRef}
            className={isVisible ? "slide-in2" : ""}
            id="slide-in-help-section"
          >
            <ThumbDownOffAltIcon
              sx={{
                fontSize: "35px",
                justifyContent: "center",
                alignItems: "center",
                color: "#7DF9FF",
                backgroundColor: "black",
                marginRight: "4px"
              }}
            />
            <p id="slide-in-help-p">Revenue decline hampers operations, causing frustration.</p>
          </div>
          <div
            ref={divRef}
            className={isVisible ? "slide-in3" : ""}
            id="slide-in-help-section"
          >
            <EngineeringIcon
              sx={{
                fontSize: "35px",
                justifyContent: "center",
                alignItems: "center",
                color: "#7DF9FF",
                backgroundColor: "black",
                marginRight: "4px"
              }}
            />
            <p id="slide-in-help-p">Tailored solutions to regain market strength.</p>
          </div>
          <div
            ref={divRef}
            className={isVisible ? "slide-in4" : ""}
            id="slide-in-help-section"
          >
            <TrendingUpIcon
              sx={{
                fontSize: "35px",
                justifyContent: "center",
                alignItems: "center",
                color: "#7DF9FF",
                backgroundColor: "black",
                marginRight: "4px"
              }}
            />
            <p id="slide-in-help-p">Elevate online presence with our web development & SEO management.</p>
          </div>
        </Stack>

</>
)
}

export default SlideInHelp;