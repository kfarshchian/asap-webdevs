import React from "react";
import "./home.scss";
import {
  Container,
  Stack,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";
import Link from "next/link";
import ZoomImage from "../components/ZoomImage/ZoomImage";
import ContactForm from "@/components/Contact/ContactForm";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ConstructionIcon from "@mui/icons-material/Construction";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";

const Home = () => {
  return (
    <main>
      <div id="Home">
        <Container>
          <h1 id="web-development-SEO-management">
            Web Development and SEO management
          </h1>
          <p id="web-development-SEO-management-p">
            Welcome to ASAP WebDevs, your one-stop destination for comprehensive
            web development and SEO management services. We understand that a
            strong online presence is crucial for businesses to thrive in
            today's digital landscape. That's why our team of talented web
            developers and SEO experts work collaboratively to create tailored
            solutions that elevate your brand and drive results. From designing
            stunning and user-friendly websites to optimizing them for search
            engines, we've got you covered.
          </p>
          <p id="web-development-SEO-management-p">
            At ASAP WebDevs, our web development services focus on building
            modern and responsive websites that captivate your audience and
            convert visitors into loyal customers. Our experienced developers
            leverage the latest technologies and industry best practices to
            deliver cutting-edge solutions that align with your unique business
            goals. Whether you need a brand-new website from scratch or want to
            revamp your existing one, we're here to deliver a seamless online
            experience that leaves a lasting impression. Additionally, our SEO
            management services ensure your website gains maximum visibility on
            search engines, driving organic traffic and boosting your online
            rankings. With our expert analysis, keyword research, and content
            optimization, we help you stay ahead of the competition and attract
            a steady stream of potential customers to your website. Partner with
            ASAP WebDevs today and take your online presence to new heights!
          </p>
        </Container>
        <ZoomImage
          src="/webdevelopment-1.jpg"
          alt="Web Development and SEO management"
        />
        {/* icons with info */}
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            id="reverse-mortgage-utah-home-Container-stack-card"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            spacing={{ xs: 1, sm: 2, md: 2 }}
          >
            {/* card 1 */}
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                id="cardImage"
                sx={{ height: 140 }}
                // image="/reverse-mortgage-texas-painting-house-buying.jpg"
                title="SEO search icon"
              >
                <IntegrationInstructionsIcon id="cardIcon" />
              </CardMedia>
              <CardContent>
                <Typography
                  id="cardTitle"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Web Development
                </Typography>
                <Typography
                  id="cardBody"
                  variant="body2"
                  color="text.secondary"
                >
                  A great website is user-friendly, visually appealing,
                  informative, responsive, and optimized for seamless navigation
                  and functionality.
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
            {/* card 2 */}
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                id="cardImage"
                sx={{ height: 140 }}
                // image="/reverse-mortgage-texas-painting-house-buying.jpg"
                title="SEO search icon"
              >
                <ScreenSearchDesktopIcon id="cardIcon" />
              </CardMedia>
              <CardContent>
                <Typography
                  id="cardTitle"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  SEO Management
                </Typography>
                <Typography
                  id="cardBody"
                  variant="body2"
                  color="text.secondary"
                >
                  SEO boosts online visibility by optimizing content and
                  structure, enhancing search engine rankings and organic
                  traffic.
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
            {/* card 3 */}
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                id="cardImage"
                sx={{ height: 140 }}
                // image="/reverse-mortgage-texas-painting-house-buying.jpg"
                title="SEO search icon"
              >
                <ConstructionIcon id="cardIcon" />
              </CardMedia>
              <CardContent>
                <Typography
                  id="cardTitle"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  100% Customizable
                </Typography>
                <Typography
                  id="cardBody"
                  variant="body2"
                  color="text.secondary"
                >
                  A customized website is tailor-made, reflecting unique
                  branding, design, and functionality to cater to specific
                  needs.
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
            {/* card 4 */}
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                id="cardImage"
                sx={{ height: 140 }}
                // image="/reverse-mortgage-texas-painting-house-buying.jpg"
                title="SEO search icon"
              >
                <NetworkCheckIcon id="cardIcon" />
              </CardMedia>
              <CardContent>
                <Typography
                  id="cardTitle"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Speed and Reliability
                </Typography>
                <Typography
                  id="cardBody"
                  variant="body2"
                  color="text.secondary"
                >
                  A reliable website loads swiftly, ensuring smooth user
                  experience, reducing bounce rates, and fostering visitor
                  trust.
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Stack>
        </Container>
        <Container>
          <h2 id="web-development-SEO-management-h2">
            Cutting-Edge Web Development, Top-Tier SEO Management, and Much
            Beyond
          </h2>
          <p id="web-development-SEO-management-p">
            Unlock your online potential with our unparalleled digital
            expertise. Our adept team specializes in advanced web development,
            crafting visually alluring and highly functional websites that
            resonate with your audience. Whether it's a captivating new site or
            a revamp of your existing platform, we fuse creativity with
            technology to deliver results that leave a lasting impact.
          </p>
          <p id="web-development-SEO-management-p">
            Harness the power of organic discovery through our meticulous SEO
            management. Our seasoned professionals conduct in-depth keyword
            analysis, optimize your content, and enhance your website's
            architecture to skyrocket its visibility on search engines. Be it
            local or global reach you seek, we tailor strategies to suit your
            unique goals. Elevate your brand, boost traffic, and surpass
            competitors with our comprehensive digital services.
          </p>
          <Link id="thisPageLink" href="/Services">
            Services
          </Link>
        </Container>
        <div id="web-development-SEO-management-section-2">
          <Container id="web-development-SEO-management-section-2-container">
            <h2 id="web-development-SEO-management-section-2-h2">
              The trust of incredible clients has enabled us to create work that
              fills us with pride
            </h2>
            <p id="web-development-SEO-management-p-2">
              We derive deep satisfaction from our work due to the exciting
              blend of creativity and technicality that defines both SEO
              management and web development. The synergy of crafting visually
              appealing websites while optimizing them for search engines is a
              challenge we relish. This dynamic combination keeps us engaged, as
              we witness our efforts translate into enhanced online visibility
              and seamless user experiences. The satisfaction of driving
              tangible results for our clients, both in terms of website
              performance and improved search rankings, adds a sense of purpose
              to our daily tasks. This fusion of creativity and strategy is what
              fuels our enthusiasm for SEO management and web development,
              making every project a gratifying opportunity to make a lasting
              impact.
            </p>
            <Link id="thisPageLink-bg-black" href="/Services">
              Our Work
            </Link>
          </Container>

          <div id="web-development-SEO-management-section-3">
            <h2 id="web-development-SEO-management-section-3-h2">
              Most Recent Client
            </h2>
            <Container>
              <ZoomImage src="/1.jpg" alt="Zoomable Image client work" />
              <p id="web-development-SEO-management-p">
                A well-optimized webpage with effective SEO can greatly benefit
                a loan officer by enhancing their online visibility and
                attracting targeted traffic searching for loan-related services.
                Through higher search engine rankings, the webpage establishes
                credibility and trust, leading to increased lead generation and
                client conversions. Local SEO strategies can also ensure
                visibility among potential clients in specific geographic areas.
                By offering valuable content and clear calls-to-action, the
                webpage becomes a powerful tool for educating visitors and
                collecting valuable data on user behavior. Overall, this
                strategic online presence gives the loan officer a competitive
                edge, fosters client engagement, and supports business growth.
              </p>
              <Link
                target="_blank"
                id="thisPageLink"
                href="https://www.mortgagekenny.com/"
              >
                Check It Out
              </Link>
            </Container>
          </div>
          <div id="Contactform">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
