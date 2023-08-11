import React from "react";
import "./Contact.scss";
import { Container } from "@mui/material";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
  return (
    <div id="Contact">
      <div id="ContactImage">
        <h1 id="web-development-SEO-management-contact">Contact Us</h1>
      </div>
      <Container id="serviceHeader">
        <h2 id="web-development-SEO-management-contact-h2">Welcome to ASAP WebDevs: Your Partner in Digital Excellence</h2>

        <p id="web-development-SEO-management-contact-p">
          At ASAP WebDevs, we're not just a web development and SEO company;
          we're your dedicated partners in achieving digital excellence. Our
          mission is to transform your online presence into a powerful asset
          that drives growth, engagement, and success. With a passion for
          innovation and a commitment to delivering outstanding results, we are
          here to guide you through the dynamic world of web development and
          SEO.
        </p>
        <h3 id="web-development-SEO-management-contact-h3">Why Choose ASAP WebDevs?</h3>
        <ul id="web-development-SEO-management-contact-ul">
          <li id="web-development-SEO-management-contact-li">
          <span id="web-development-SEO-management-contact-li-span">Expertise That Matters:</span> Our team of seasoned web developers and SEO
            experts bring a wealth of knowledge and experience to the table.
            From crafting visually stunning websites to optimizing them for
            maximum visibility, we have the skills to elevate your digital
            strategy.
          </li>
          <li id="web-development-SEO-management-contact-li">
            <span id="web-development-SEO-management-contact-li-span">Tailored Solutions:</span> We understand that every business is unique.
            That's why we take a personalized approach to each project, crafting
            solutions that align with your goals, industry, and target audience.
          </li>
          <li id="web-development-SEO-management-contact-li">
          <span id="web-development-SEO-management-contact-li-span">Innovation at Heart:</span> The digital landscape is constantly evolving,
            and we thrive on staying ahead of the curve. Our innovative mindset
            drives us to explore new technologies, trends, and strategies to
            keep your online presence fresh and relevant.
          </li>
          <li id="web-development-SEO-management-contact-li">
          <span id="web-development-SEO-management-contact-li-span">Results-Driven Approach:</span> At ASAP WebDevs, we measure our success by
            the success of our clients. We are driven by tangible outcomes and
            take pride in helping you achieve and exceed your digital
            objectives.
          </li>
          <li id="web-development-SEO-management-contact-li">
          <span id="web-development-SEO-management-contact-li-span">Transparent Collaboration:</span> Communication is at the core of
            everything we do. We believe in fostering transparent and
            collaborative relationships with our clients, ensuring you're always
            in the loop and empowered to make informed decisions.
          </li>
        </ul>
        <h3 id="web-development-SEO-management-contact-h3">Let's Build Something Extraordinary Together</h3>
        <p id="web-development-SEO-management-contact-p">
          Whether you're a startup looking to establish a compelling online
          identity, an established business aiming to revamp your website, or a
          new venture seeking to dominate search engine rankings, we have
          the tools and expertise to make it happen. Our team is excited to
          embark on this journey with you, creating digital solutions that not
          only meet but exceed your expectations
        </p>

        <p id="web-development-SEO-management-contact-p">
          Explore our comprehensive web development and SEO services, and let's
          take your digital presence to new heights. Contact us today to begin
          your transformational journey with ASAP WebDevs. Your success is our
          priority, and we can't wait to help you shine in the digital realm.
        </p>
      </Container>
      <div id="Contactform">
            <ContactForm />
          </div>
    </div>
  );
};

export default Contact;
