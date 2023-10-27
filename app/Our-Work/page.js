
import React from "react";
import "./OurWork.scss";
import {
  Container
} from "@mui/material";
import ZoomImage from "../../components/ZoomImage/ZoomImage";
import Link from "next/link";

const OurWork = () => {
  return (
    <div id="OurWork">
      <div id="ourWorkImage">
        <h1 id="web-development-SEO-management-OurWork">
        Our Work
        </h1>
      </div>
     <Container>
      {/* one */}
      <div id="client-img">
     <ZoomImage  src="/Lowtility.png" alt="Zoomable Image client work" />
     <div id="client-link">
     <Link
                target="_blank"
                id="thisPageLink"
                href="https://solarcalculator.lowtility.com/"
              >
                Check It Out
              </Link>
              </div>
     </div>
      {/* two */}
      <div id="client-img">
     <ZoomImage  src="/1.jpg" alt="Zoomable Image client work" />
     <div id="client-link">
     <Link
                target="_blank"
                id="thisPageLink"
                href="https://www.mortgagekenny.com/"
              >
                Check It Out
              </Link>
              </div>
     </div>
      </Container>
    </div>
  )
}

export default OurWork