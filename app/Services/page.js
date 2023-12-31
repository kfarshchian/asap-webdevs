import React from "react";
import "./Services.scss";
import { Container, Stack } from "@mui/material";
import SlideIn from "@/components/SlideIn";
import ContactForm from "@/components/Contact/ContactForm";
import SlideInHelp from "@/components/SlideInHelp/SlideInHelp";

const Services = () => {
  return (
    <>
      <div id="Pricing">
        <h1 id="web-development-SEO-management-services">Our Services</h1>
      </div>
      <Container>
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
        <p id="web-development-SEO-management-services-P">
          Our comprehensive suite of services encompasses a diverse range of
          essential elements, designed to elevate your online presence and drive
          sustainable growth. With a meticulous approach to Web Development, we
          craft tailored digital experiences that seamlessly merge aesthetic
          appeal with exceptional functionality. Our team's proficiency in
          leveraging cutting-edge technologies ensures that your website not
          only captivates visitors but also provides an intuitive user journey,
          converting leads into loyal customers.
        </p>
        <p id="web-development-SEO-management-services-P">
          In the realm of Search Engine Optimization (SEO), we employ a
          strategic approach to enhance your website's visibility in search
          engine results. Our adept SEO specialists meticulously analyze your
          digital footprint, strategically implement keywords, optimize meta
          tags, and curate engaging content to catapult your website to the
          forefront of relevant search queries. Additionally, our SEO Site
          Audits provide a comprehensive assessment of your website's
          performance, identifying areas for improvement and tailoring
          actionable recommendations to enhance its overall SEO efficacy.
        </p>
        </div>
        <div>
            <img
              id="web-development-SEO-management-ourServices-img1"
              src='/web-development-services.jpg'
              alt="Web Development and SEO management coding laptop"
            />
          </div>
        </Stack>
        
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
              id="web-development-SEO-management-ourServices-img2"
              src='/SEO-Management.png'
              alt="Web Development and SEO management coding laptop"
            />
          </div>
          <div>
          <p id="web-development-SEO-management-services-P">
          At the heart of our offerings lies Branding and Design, where we
          conceptualize, refine, and revitalize brands to communicate their core
          essence cohesively across various touchpoints. Our creative team
          meticulously crafts visual identities that resonate with your target
          audience, establishing a lasting imprint that fosters brand
          recognition and loyalty.
        </p>
        <p id="web-development-SEO-management-services-P">
          Our adept Social Media content strategy bridges the gap between your
          brand and its audience, effectively leveraging platforms to
          disseminate compelling narratives, engage followers, and foster
          meaningful connections. Simultaneously, our Content Creation services
          breathe life into your digital presence, crafting captivating
          narratives, informative articles, and visually striking assets that
          resonate with your audience and position you as an industry authority.
        </p>
        <p id="web-development-SEO-management-services-P">
          In essence, our comprehensive array of services synergistically
          collaborates to forge a robust and captivating online identity,
          enabling you to leave an indelible mark on your industry while
          fostering meaningful customer engagement and lasting success.
        </p>
        </div>
        </Stack>
      </Container>
      <Container >
        <SlideIn />
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
        <SlideInHelp/>
      </Stack>
    </>
  );
};

export default Services;
