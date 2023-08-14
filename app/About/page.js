import React from "react";
import "./About.scss";
import { Container, Stack } from "@mui/material";
import Image from "next/image";
import ContactForm from "@/components/Contact/ContactForm";
import SlideInHelp from "@/components/SlideInHelp/SlideInHelp";

const About = () => {
  return (
    <div id="About">
      <div id="AboutUsImage">
        <h1 id="web-development-SEO-management-AboutUs">About Us</h1>
      </div>
      <div>
        <Container>
          <p id="web-development-SEO-management-AboutUs-mission">
            At ASAP WebDevs, our mission is to empower businesses and
            individuals with blazing-fast websites and unstoppable online
            visibility. As a dedicated team of web development and SEO experts,
            we are committed to delivering top-notch solutions that accelerate
            growth and leave a lasting digital footprint.
          </p>
        </Container>
        <Stack
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          id="stackLinks"
          sx={{
            // marginTop: "15px",
            // marginBottom: "15px",
            paddingTop: "70px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          {/* logo */}
          <div id="aboutImg">
            <h2 id="web-development-SEO-management-AboutUs-h2">OUR MISSION</h2>
            <Image
              src="/mission.png"
              width={250}
              height={150}
              alt="ASAP WebDevs Logo"
            />
            <ul id="web-development-SEO-management-AboutUs-ul">
              <li id="web-development-SEO-management-AboutUs-li">
                <h3 id="web-development-SEO-management-AboutUs-h3">
                  Rapid Web Development Excellence:
                </h3>{" "}
                We are driven by a passion for crafting high-performance
                websites that not only load in a flash but also captivate users
                with engaging designs and seamless functionality. We believe in
                the power of speed, aesthetics, and user experience, and we aim
                to create websites that make an immediate impact while
                maintaining the highest standards of quality and responsiveness.
              </li>
              <li id="web-development-SEO-management-AboutUs-li">
                <h3 id="web-development-SEO-management-AboutUs-h3">
                  Elevating Digital Presence:
                </h3>{" "}
                We recognize that a website is only as valuable as its
                visibility. Our SEO prowess is dedicated to propelling our
                clients' online presence to the forefront of search engine
                results. By leveraging the latest SEO strategies, meticulous
                keyword research, and dynamic optimization techniques, we ensure
                that our clients' websites not only rank prominently but also
                convert visitors into loyal customers.
              </li>
            </ul>
          </div>
          <div id="aboutImg">
            <h2 id="web-development-SEO-management-AboutUs-h2">OUR VISION</h2>
            <Image
              src="/vision.png"
              width={250}
              height={150}
              alt="ASAP WebDevs Logo"
            />
            <ul id="web-development-SEO-management-AboutUs-ul">
              <li id="web-development-SEO-management-AboutUs-li">
                <h3 id="web-development-SEO-management-AboutUs-h3">
                  Trailblazing Technology Fusion:
                </h3>
                "We lead with cutting-edge technology and creativity, crafting
                instant, immersive websites that amaze with aesthetics and
                functionality, creating an experience that resonates."
              </li>
              <li id="web-development-SEO-management-AboutUs-li">
                <h3 id="web-development-SEO-management-AboutUs-h3">
                  Digital Dominance:
                </h3>
                "We ensure digital dominance through strategic SEO, propelling
                our clients' brands to the zenith of search engine results,
                attracting massive traffic, and thriving in the competitive
                digital arena."
              </li>
              <li id="web-development-SEO-management-AboutUs-li">
                <h3 id="web-development-SEO-management-AboutUs-h3">
                  Global Impact:
                </h3>
                "We extend expertise beyond boundaries, collaborating across
                industries and cultures, enriching digital identities, and
                leaving an indelible mark on the global digital landscape."
              </li>
              <li id="web-development-SEO-management-AboutUs-li">
                <h3 id="web-development-SEO-management-AboutUs-h3">
                  Innovation Ecosystem:
                </h3>
                "Within ASAP WebDevs, we foster an innovation culture,
                empowering our team to push creative boundaries, consistently
                devising solutions that challenge conventions and redefine
                possibilities."
              </li>
            </ul>
          </div>
          <div id="aboutImg">
            <h2 id="web-development-SEO-management-AboutUs-h2">OUR VALUES</h2>
            <Image
              src="/value.png"
              width={250}
              height={150}
              alt="ASAP WebDevs Logo"
            />
            <ul id="web-development-SEO-management-AboutUs-ul">
              <li id="web-development-SEO-management-AboutUs-li">
                <h3 id="web-development-SEO-management-AboutUs-h3">
                  Urgency and Efficiency:
                </h3>
                We are driven by a passion for We thrive on delivering results
                promptly. Our 'ASAP' mindset drives us to work diligently and
                efficiently, ensuring that our clients' projects are completed
                swiftly without compromising on quality.
              </li>
              <li id="web-development-SEO-management-AboutUs-li">
                <h3 id="web-development-SEO-management-AboutUs-h3">
                  Collaborative Synergy:
                </h3>{" "}
                We believe in the synergy of collaboration. By working closely
                with our clients, understanding their objectives, and embracing
                their feedback, we forge partnerships that lead to exceptional
                outcomes.
              </li>
              <li id="web-development-SEO-management-AboutUs-li">
                <h3 id="web-development-SEO-management-AboutUs-h3">
                  Integrity and Transparency:
                </h3>
                Our work is guided by unwavering integrity and transparency. We
                believe in open communication, and our recommendations are
                grounded in honesty and the best interests of our clients.
              </li>
              <li id="web-development-SEO-management-AboutUs-li">
                <h3 id="web-development-SEO-management-AboutUs-h3">
                  Continuous Learning:
                </h3>{" "}
                We are committed to constant growth and evolution. Our team
                stays at the forefront of industry trends, consistently
                expanding our skillset to provide cutting-edge solutions.
              </li>
            </ul>
          </div>
        </Stack>
        <Container>
          <p id="web-development-SEO-management-AboutUs-mission">
            As we pursue our mission, we envision a digital landscape where
            speed, innovation, and impactful presence converge seamlessly. Join
            us at ASAP WebDevs as we embark on a journey to reshape online
            experiences and catapult digital success to new heights.
          </p>
        </Container>
        {/* kenny section */}
        <Container maxWidth="md">
          <h2 id="web-development-SEO-management-AboutUs-Container-h2">
            Kenny Farshchian
          </h2>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            spacing={{ xs: 1, sm: 2, md: 2 }}
          >
            <div>
              <h2 id="web-development-SEO-management-AboutUs-coOwner">
                Co-Founder and Co-Owner
              </h2>
              <p id="web-development-SEO-management-AboutUs-p">
                Kenny Farshchian is an accomplished individual, having earned a
                Bachelor's degree in Business from the prestigious University of
                Utah. His academic journey has endowed him with a solid
                foundation in business principles, equipping him with the
                knowledge and skills to excel in various professional endeavors.
                Alongside his academic pursuits, Kenny is a devoted family man,
                embracing the roles of both a loving husband and a nurturing
                father to five beautiful children.
              </p>
            </div>
            <div>
              <img
                id="web-development-SEO-management-AboutUs-img-kenny"
                src="/kennyf.png"
                alt="reverse mortgage Utah Moving Boxes"
              />
            </div>
          </Stack>
          <p id="web-development-SEO-management-AboutUs-p">
            At the heart of Kenny's values is a deep appreciation for quality
            family time. He understands that amidst life's busy demands,
            creating meaningful moments with loved ones is invaluable. Kenny's
            commitment to his family extends beyond the ordinary; he actively
            seeks opportunities to forge strong connections and foster cherished
            memories. Beyond his role as a family-oriented individual, Kenny
            finds joy in the world of sports. A dedicated golfer, he revels in
            the challenges and rewards of the golf course, channeling his energy
            and enthusiasm into perfecting his swing. Additionally, his passion
            for disc golf showcases his adventurous spirit and willingness to
            explore new avenues of recreation.
          </p>
          <br></br>
          <p id="web-development-SEO-management-AboutUs-p">
            Kenny Farshchian's life is a testament to his multi-faceted nature,
            seamlessly blending his academic accomplishments with his fervent
            dedication to family and athletic pursuits. His academic
            achievements, coupled with his genuine affection for his family and
            his active engagement in sports, portray a dynamic individual whose
            journey is characterized by a harmonious blend of personal and
            professional success.
          </p>
        </Container>
        <Container></Container>
        {/* kameron section */}
        <div id="web-development-SEO-management-AboutUs-kameron">
          <Container id="kameron-container" maxWidth="md">
            <h2 id="web-development-SEO-management-AboutUs-Container-h2-kameron">
              Kameron Farshchian
            </h2>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              id="web-development-SEO-management-AboutUs-Container-stack"
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
              spacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <div>
                <img
                  id="web-development-SEO-management-AboutUs-img-kameron"
                  src="/kam.png"
                  alt="reverse mortgage Utah Moving Boxes"
                />
              </div>
              <div>
                <h2 id="web-development-SEO-management-AboutUs-coOwner-kameron">
                  Co-Founder and Co-Owner
                </h2>

                <p id="web-development-SEO-management-AboutUs-p-kameron">
                  Meet Kameron Farshchian, a dynamic individual who has earned
                  an Associate's degree in Computer Science and holds a
                  prestigious certification in Full Stack Coding from the
                  renowned University of Utah. His academic journey reflects a
                  deep commitment to understanding the intricate nuances of
                  computer science and mastering the art of full stack coding.
                  Kameron's academic pursuits stand as a testament to his
                  dedication to staying on the cutting edge of technological
                  advancements.
                </p>
              </div>
            </Stack>
            <p id="web-development-SEO-management-AboutUs-p-kameron">
              In addition to his impressive academic accomplishments, Kameron
              finds profound joy in his roles as a devoted husband and a doting
              father to a beautiful child. His love for family resonates
              strongly, driving him to prioritize cherished moments with his
              loved ones. Kameron's ability to strike a harmonious balance
              between his professional pursuits and his commitment to family
              underscores his well-rounded and thoughtful approach to life.
            </p>
            <br></br>
            <p id="web-development-SEO-management-AboutUs-p-kameron">
              When not immersed in his technological endeavors, Kameron's
              passions lead him to the captivating realms of gaming and all
              things technology-related. His enthusiasm for gaming reflects a
              spirit of exploration and a knack for strategic thinking, while
              his interest in technology underscores an insatiable curiosity
              about the rapidly evolving digital landscape. Kameron Farshchian's
              multifaceted interests illuminate an individual who thrives in the
              world of innovation, demonstrating an innate ability to seamlessly
              integrate his passions into a rich and fulfilling life journey.
            </p>
          </Container>
        </div>
        {/* contact */}
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
      </div>
    </div>
  );
};

export default About;
