import React from "react";
import "./Contact.scss";
import { Container, Stack } from "@mui/material";
import ContactForm from "@/components/Contact/ContactForm";
import SlideInContact from "@/components/SlideInContact/SlideInContact";

const Contact = () => {
  return (
    <div id="Contact">
      <div id="ContactImage">
        <h1 id="web-development-SEO-management-contact">Contact Us</h1>
      </div>
      <Container id="serviceHeader" maxWidth="md">
        <h2 id="web-development-SEO-management-contact-h2">
          Welcome to ASAP WebDevs: Your Partner in Digital Excellence
        </h2>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black"
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
        <p id="web-development-SEO-management-contact-p">
          At ASAP WebDevs, we're not just a web development and SEO company;
          we're your dedicated partners in achieving digital excellence. Our
          mission is to transform your online presence into a powerful asset
          that drives growth, engagement, and success. With a passion for
          innovation and a commitment to delivering outstanding results, we are
          here to guide you through the dynamic world of web development and
          SEO.
        </p>
        <div>
            <img
              id="web-development-SEO-management-contact-img1"
              src='/Web-Development-SEO-mangment-build.jpg'
              alt="Web Development and SEO management coding laptop"
            />
          </div>
        </Stack>
        <h3 id="web-development-SEO-management-contact-h3">
          Why Choose ASAP WebDevs?
        </h3>
        <ul id="web-development-SEO-management-contact-ul">
          <li id="web-development-SEO-management-contact-li">
            <h4 id="web-development-SEO-management-contact-li-h4">
              Expertise That Matters:
            </h4>{" "}
            Our team of seasoned web developers and SEO experts bring a wealth
            of knowledge and experience to the table. From crafting visually
            stunning websites to optimizing them for maximum visibility, we have
            the skills to elevate your digital strategy.
          </li>
          <li id="web-development-SEO-management-contact-li">
            <h4 id="web-development-SEO-management-contact-li-h4">
              Tailored Solutions:
            </h4>{" "}
            We understand that every business is unique. That's why we take a
            personalized approach to each project, crafting solutions that align
            with your goals, industry, and target audience.
          </li>
          <li id="web-development-SEO-management-contact-li">
            <h4 id="web-development-SEO-management-contact-li-h4">
              Innovation at Heart:
            </h4>{" "}
            The digital landscape is constantly evolving, and we thrive on
            staying ahead of the curve. Our innovative mindset drives us to
            explore new technologies, trends, and strategies to keep your online
            presence fresh and relevant.
          </li>
          <li id="web-development-SEO-management-contact-li">
            <h4 id="web-development-SEO-management-contact-li-h4">
              Results-Driven Approach:
            </h4>{" "}
            At ASAP WebDevs, we measure our success by the success of our
            clients. We are driven by tangible outcomes and take pride in
            helping you achieve and exceed your digital objectives.
          </li>
          <li id="web-development-SEO-management-contact-li">
            <h4 id="web-development-SEO-management-contact-li-h4">
              Transparent Collaboration:
            </h4>{" "}
            Communication is at the core of everything we do. We believe in
            fostering transparent and collaborative relationships with our
            clients, ensuring you're always in the loop and empowered to make
            informed decisions.
          </li>
        </ul>
        <h3 id="web-development-SEO-management-contact-h3">
          Let's Build Something Extraordinary Together
        </h3>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black"
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <div>
            <img
              id="web-development-SEO-management-contact-img2"
              src='/Web-Develoment-build.jpg'
              alt="Web Development and SEO management coding laptop"
            />
          </div>
          <div>
        <p id="web-development-SEO-management-contact-p">
          Whether you're a startup looking to establish a compelling online
          identity, an established business aiming to revamp your website, or a
          new venture seeking to dominate search engine rankings, we have the
          tools and expertise to make it happen. Our team is excited to embark
          on this journey with you, creating digital solutions that not only
          meet but exceed your expectations
        </p>

        <p id="web-development-SEO-management-contact-p">
          Explore our comprehensive web development and SEO services, and let's
          take your digital presence to new heights. Contact us today to begin
          your transformational journey with ASAP WebDevs. Your success is our
          priority, and we can't wait to help you shine in the digital realm.
        </p>
        </div>
        </Stack>
      </Container>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        id="reverse-mortgage-utah-home-Container-stack"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "White",
        }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        <div id="Contactform">
          <ContactForm />
        </div>
        <SlideInContact />
      </Stack>
      <Container>
        <h3 id="web-development-SEO-management-contact-h3">
          Take the First Step Towards Digital Excellence
        </h3>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black"
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <div>
        <p id="web-development-SEO-management-contact-p">
          Are you ready to unlock the full potential of your online presence?
          Let's collaborate to create a digital strategy that drives results and
          leaves a lasting impact. Whether you're looking to build a stunning
          website, enhance your search engine visibility, or elevate your
          brand's digital performance, ASAP WebDevs is here to make it happen.
        </p>
        <p id="web-development-SEO-management-contact-p">
          Reach out to us today for a consultation tailored to your unique
          needs. Our experts are eager to listen, strategize, and guide you
          towards digital success. Don't wait – your journey towards digital
          excellence starts now!
        </p>
        <p id="web-development-SEO-management-contact-p">
          Fill in the contact form or call today to get in touch and let's
          embark on this exciting digital adventure together. Your success is
          our priority, and we're committed to making it ASAP.
        </p>
        </div>
        <div>
            <img
              id="web-development-SEO-management-contact-img2"
              src='/success.jpg'
              alt="Web Development and SEO management coding laptop"
            />
          </div>
        </Stack>
       
      </Container>
    </div>
  );
};

export default Contact;
