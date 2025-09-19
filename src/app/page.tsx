"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
          logoSrc="/images/logo.svg"
          buttonText="Join the Memeverse"
          onButtonClick={() => {}}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to the Memeverse"
          subtitle="Dive into the world of futuristic memes"
          primaryButtonText="Explore Now"
          secondaryButtonText="Join Us"
          onPrimaryButtonClick={() => {}}
          onSecondaryButtonClick={() => {}}
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About the Memeverse"
          descriptions={["Experience the blur between memes and innovation. Join today!"]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Playful tokenomics aligning with meme culture."
          cardItems={[
            { id: 1, title: "Supply", description: "999,999 tokens" },
            { id: 2, title: "Liquidity", description: "25% Liquidity Pool" },
            { id: 3, title: "Ownership", description: "Decentralized ownership model" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={80}
          logoHeight={30}
          columns={[
            { title: "Resources", items: [{ label: "Home", onClick: () => {} }, { label: "Contact", onClick: () => {} }] },
            { title: "Legal", items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] },
            { title: "Socials", items: [{ label: "Twitter", onClick: () => {} }, { label: "Instagram", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 NeonRetro. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}