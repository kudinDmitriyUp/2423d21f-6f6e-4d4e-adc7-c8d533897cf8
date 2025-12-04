"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MediaSplitTabsAbout from '@/components/sections/about/MediaSplitTabsAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardEighteen from '@/components/sections/feature/FeatureCardEighteen';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSizeExtraLargeSpacing"
      background="animatedGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Lucas Dahl"
          navItems={[
            { name: "About", id: "about" },
            { name: "Properties", id: "properties" },
            { name: "Why Lucas", id: "comparison" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="LUCAS DAHL"
          description="Premier real estate agent specializing in luxury homes and investment properties"
          buttons={[
            { text: "View Properties", href: "properties" },
            { text: "Schedule Consultation", href: "contact" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764882916251-ayuooq6s.jpg",
              imageAlt: "Modern luxury home exterior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764882916976-og81sowg.jpg",
              imageAlt: "Contemporary residential house"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764882917685-gswxxart.jpg",
              imageAlt: "Beautiful property real estate"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitTabsAbout
          title="About Lucas Dahl"
          description="Discover what sets Lucas apart in the real estate market"
          tabs={[
            {
              id: "expertise",
              label: "Experience",
              description: "With over 8 years of experience in real estate, Lucas has successfully closed over 150 transactions worth millions. His deep knowledge of local market trends and neighborhoods ensures his clients always get the best value."
            },
            {
              id: "approach",
              label: "My Approach",
              description: "Lucas believes in building long-term relationships with clients. He combines cutting-edge technology with personal attention, ensuring each transaction is handled with care and professionalism."
            },
            {
              id: "market",
              label: "Market Knowledge",
              description: "Understanding the local market is crucial. Lucas stays ahead with current data, neighborhood insights, and investment opportunities to guide clients toward their best decisions."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764882918235-5bloeus8.jpg"
          imageAlt="Lucas Dahl professional portrait"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="properties" data-section="properties">
        <ProductCardOne
          title="Featured Properties"
          description="Explore our current selection of premium listings"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          gridVariant="three-columns-all-equal-width"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "1",
              name: "Modern Downtown Loft",
              price: "$850,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764882919208-xs7mmqjl.jpg",
              imageAlt: "Modern home interior"
            },
            {
              id: "2",
              name: "Luxury Estate Home",
              price: "$2,450,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764882919990-bk4m9roa.jpg",
              imageAlt: "Luxury residential property"
            },
            {
              id: "3",
              name: "Contemporary Residence",
              price: "$1,250,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764882920847-cor8rz6y.jpg",
              imageAlt: "Contemporary home exterior"
            }
          ]}
        />
      </div>

      <div id="comparison" data-section="comparison">
        <FeatureCardEighteen
          title="Why Choose Lucas?"
          description="See how Lucas's personalized approach outperforms traditional real estate methods"
          textboxLayout="default"
          animationType="slide-up"
          negativeCard={{
            title: "Traditional Approach",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764882921548-389pxbe0.jpg",
            imageAlt: "Traditional real estate office",
            items: [
              "One-size-fits-all strategies",
              "Limited market exposure",
              "Slow transaction process",
              "Minimal personal communication"
            ]
          }}
          positiveCard={{
            title: "Lucas's Method",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764882922235-l62k81vj.jpg",
            imageAlt: "Modern real estate technology",
            items: [
              "Customized marketing strategies",
              "Maximum property visibility",
              "Efficient closing timeline",
              "Dedicated personal service"
            ]
          }}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Client Testimonials"
          description="What our satisfied clients are saying about working with Lucas"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahmhomes",
              testimonial: "Lucas made our home selling process seamless. He understood our needs perfectly and secured us an offer above asking price. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764882922785-3a73uqjz.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Rodriguez",
              handle: "@jamesrodrealty",
              testimonial: "As a first-time buyer, I was nervous. Lucas walked me through every step with patience and expertise. Found my dream home at the right price.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764882923701-9xjq2u0m.jpg",
              imageAlt: "James Rodriguez"
            },
            {
              id: "3",
              name: "Emily Chen",
              handle: "@emilychen_home",
              testimonial: "Lucas's market knowledge is unmatched. He helped us invest in properties that have appreciated significantly. True professional!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764882924327-7ytkfc1j.jpg",
              imageAlt: "Emily Chen"
            },
            {
              id: "4",
              name: "Michael Thompson",
              handle: "@mikethompson_",
              testimonial: "Quick, efficient, professional. Lucas closed our deal 2 weeks ahead of schedule. Best agent we've worked with.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764882925041-03mizy05.jpg",
              imageAlt: "Michael Thompson"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Get Started?"
          ctaDescription="Schedule a consultation with Lucas today and discover how we can help you achieve your real estate goals."
          ctaButton={{
            text: "Schedule Consultation",
            href: "#contact"
          }}
          ctaIcon={Phone}
          faqs={[
            {
              id: "1",
              title: "How long does the selling process take?",
              content: "Typically, the home selling process takes 30-60 days from listing to closing. However, with Lucas's proactive marketing strategy and network, we often accelerate this timeline significantly."
            },
            {
              id: "2",
              title: "What areas do you serve?",
              content: "Lucas specializes in residential properties throughout the metro area and surrounding suburbs. We have expertise in urban, suburban, and rural markets."
            },
            {
              id: "3",
              title: "Do you offer buyer's representation?",
              content: "Absolutely! Lucas works with both buyers and sellers. As a buyer's agent, we represent your interests and help you find the perfect property at the best price."
            },
            {
              id: "4",
              title: "What is your commission structure?",
              content: "Commission rates are negotiable and typically range from 2-3% per side. We're happy to discuss rates based on your specific situation."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Lucas Dahl"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Properties", href: "properties" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Market Insights", href: "#" },
                { label: "Buyer's Guide", href: "#" },
                { label: "FAQ", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" }
          ]}
          copyrightText="© Lucas Dahl Real Estate, 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}