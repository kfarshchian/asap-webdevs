import React from "react";
import "./Footer.scss";
import Map from "@/components/Map";
import { Container, Stack, Divider } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div id="footer">

      <Container>
      <Stack
          direction={{ xs: "column", sm: "row" }}
          id="stackLinks"
          sx={{
            // marginTop: "15px",
            marginBottom: "15px",
            paddingTop: "150px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          {/* logo */}
          <Stack
            direction={{ xs: "column", sm: "column" }}
            id="stackLinksFooter"
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            spacing={{ xs: 1, sm: 1, md: 1 }}
          >
            
            <Link
              id="PagesFooter"
              href="/About"
              sx={{
                color: "White",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              <Image
                    src="/asaplogo (2).png"
                    width={250}
                    height={150}
                    alt="ASAP WebDevs Logo"
                  />
            </Link>
          </Stack>
          {/* pages */}
          <Stack
            direction={{ xs: "column", sm: "column" }}
            id="stackLinksFooter"
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            spacing={{ xs: 1, sm: 1, md: 1 }}
          >
            
            <Link
              id="PagesFooter"
              href="/About"
              sx={{
                color: "White",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              About Us
            </Link>
            <Link
              id="PagesFooter"
              href="/Our-Work"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Our Work
            </Link>
            <Link
              id="PagesFooter"
              href="/Services"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Services
            </Link>
            <Link
              id="PagesFooter"
              href="/Contact"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
            
          </Stack>
          {/* map */}
          <Map/>
          {/* Social Media */}
          <Stack
            direction={{ xs: "column", sm: "column" }}
            id="stackLinksFooter"
            sx={{
              marginTop: "1px",
              marginBottom: "15px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            spacing={{ xs: 1, sm: 1, md: 1 }}
          >
            
            <Link
              id="PagesFooterImg"
              href="/About"
              sx={{
                color: "White",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              <Image
                    src="/Facebook.png"
                    width={48}
                    height={48}
                    alt="Facebook Logo"
                    id="logoFooter"
                  />
            </Link>
            <Link
              id="PagesFooterImg"
              href="/About"
              sx={{
                color: "White",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              <Image
                    src="/Instagram.png"
                    width={48}
                    height={48}
                    alt="Facebook Logo"
                    id="logoFooter"
                  />
            </Link>
            <Link
              id="PagesFooterImg"
              href="/About"
              sx={{
                color: "White",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              <Image
                    src="/Linkedin.png"
                    width={48}
                    height={48}
                    alt="Facebook Logo"
                    id="logoFooter"
                  />
            </Link>
            <Link
              id="PagesFooterImg"
              href="/About"
              sx={{
                color: "White",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              <Image
                    src="/Twitter.png"
                    width={48}
                    height={48}
                    alt="Facebook Logo"
                    id="logoFooter"
                  />
            </Link>
          </Stack>
          </Stack>
      </Container>
      <h2 id="footer-h2">© ASAP WebDevs | All Rights Reserved  <Link href="/Privacy-Policy-and-Data-Usage" alt="Privacy Policy">Privacy Policy</Link></h2>
    </div>
  );
};

export default Footer;
