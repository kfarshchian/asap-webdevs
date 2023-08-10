"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { Stack } from "@mui/material";
import "./SlideIn.scss";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import PageviewIcon from "@mui/icons-material/Pageview";

const SlideIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const slideInDiv = document.querySelector('.slide-in');
      const slideInDivPosition = slideInDiv.getBoundingClientRect();

      if (slideInDivPosition.top <= window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "column" }}
        id="web-development-SEO-management-stack-column"
        sx={{
          marginTop: "50px",
          marginBottom: "50px",
          paddingLeft: "5px",
          paddingRight: "5px",
        }}
        spacing={{ xs: 1, sm: 1, md: 6 }}
      >
        <div
          className={`slide-in ${isVisible ? 'visible' : ''}`}
          id="web-development-SEO-management-stack-column-box"
        >
          <WebIcon
            sx={{
              fontSize: "200px",
              justifyContent: "center",
              alignItems: "center",
              color: "Black",
              backgroundColor: "white",
              backgroundColor: "transparent",
            }}
          />
          <div id="web-development-SEO-management-H2-P">
            <h2 id="web-development-SEO-management-slideInH2">React Website</h2>
            <p id="web-development-SEO-management-slideInP">
              A React website is a web application developed using the React
              JavaScript library, employing a component-based approach for
              building reusable UI elements. Its dynamic nature and efficient
              rendering make it a favored choice for creating interactive and
              responsive web interfaces.
            </p>

            <p id="web-development-SEO-management-slideInP">
              React itself doesn't inherently hinder SEO, but it requires
              careful consideration and implementation to ensure good SEO
              performance. Traditional search engine crawlers might struggle
              with fully indexing single-page applications (SPAs) built with
              React due to their dynamic nature, which can affect SEO if not
              addressed properly. It is generally better to go with another
              library if you need optimum SEO performance.
            </p>
            <p id="web-development-SEO-management-slideInP">
              1375.00 landing page and 5 additional pages.
            </p>
            <p id="web-development-SEO-management-slideInP">
              Domain and hosting fee 29.99/ monthly
            </p>
          </div>
        </div>
        <div
          // ref={divRef}
          className={isVisible ? "slide-in2" : ""}
          id="web-development-SEO-management-stack-column-box"
        >
          <div id="web-development-SEO-management-H2-P">
            <h2 id="web-development-SEO-management-slideInH2">
              Next.js Website
            </h2>
            <p id="web-development-SEO-management-slideInP">
              Next.js is a popular open-source framework for building React
              applications with a focus on server-side rendering (SSR) and
              static site generation (SSG), which improves performance and SEO.
              It provides a structured approach to creating dynamic and
              SEO-friendly web applications, integrating features like automatic
              code splitting, routing, and server-side rendering out of the box.
              Because of the server running Next.js the monthly hosting fee
              costs a little extra to host.
            </p>
            <p id="web-development-SEO-management-slideInP">
              With us Next.js offers the advantage of waiving the SEO starting
              fee, providing an incentive for businesses seeking improved
              visibility and search engine rankings.
            </p>
            <p id="web-development-SEO-management-slideInP">
              1550.00 landing page and 5 additional pages.
            </p>
            <p id="web-development-SEO-management-slideInP">
              Domain and hosting fee 49.99
            </p>
          </div>
          <StorageIcon
            sx={{
              fontSize: "200px",
              justifyContent: "center",
              alignItems: "center",
              color: "Black",
              backgroundColor: "white",
              backgroundColor: "transparent",
            }}
          />
        </div>
        <div
          // ref={divRef}
          className={isVisible ? "slide-in3" : ""}
          id="web-development-SEO-management-stack-column-box"
        >
          <PageviewIcon
            sx={{
              fontSize: "200px",
              justifyContent: "center",
              alignItems: "center",
              color: "Black",
              backgroundColor: "transparent",
            }}
          />
          <div id="web-development-SEO-management-H2-P">
            <h2 id="web-development-SEO-management-slideInH2">
              SEO (Search Engine Optimization)
            </h2>
            <p id="web-development-SEO-management-slideInP">
              SEO, or Search Engine Optimization, is the practice of optimizing
              a website's content, structure, and technical elements to improve
              its visibility and ranking in search engine results, ultimately
              driving organic (non-paid) traffic and enhancing online presence.
            </p>
            <p id="web-development-SEO-management-slideInP">
              SEO efforts require ongoing monthly management to maintain
              and improve a website's search engine visibility. This involves
              monitoring keyword rankings, analyzing website traffic and user
              behavior, adjusting content, building backlinks, and making
              technical optimizations to adapt to search engine algorithm
              changes and stay competitive in search results.
            </p>
            <p id="web-development-SEO-management-slideInP">
             SEO audit price $500.00 to $2500.00, contingent upon the scale and complexity of the website in question. 
            </p>
            <p id="web-development-SEO-management-slideInP">
            The monthly management price for SEO services ranges from $500.00 to $1500.00, contingent upon the scale and complexity of the website in question.
            </p>
          </div>
        </div>
      </Stack>
    </>
  );
};

export default SlideIn;
