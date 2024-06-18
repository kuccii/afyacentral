import Layout from "@layout/Layout";
import FaqOne from "@components/faq/FaqOne";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import PriceTwo from "@components/pricing/PriceTwo";
import FeatureOne from "@components/features/FeatureOne";
import SupportOne from "@components/support/SupportOne";
import IntegrationOne from "@components/integration/IntegrationOne";
import TestimonialOne from "@components/testimonial/TestimonialOne";
import WorkProcessOne from "@components/workprocess/WorkProcessOne";
import HeroSectionOne from "@components/hero-section/HeroSectionOne";
import HeroThirteen from "@components/hero-section/HeroThirteen";
import PaymentCustomer from "@components/customer/PaymentCustomer";
import PaymentFeature from "@components/feature-img-content/PaymentFeature";
import EventAbout from '@components/events/EventAbout';
import WorkProcessFive from "@components/workprocess/WorkProcessFive";
import HeroSeventeen from "@components/hero-section/HeroSeventeen";
import MarketingBusiness from "@components/business/MarketingBusiness";
import MarketingPlatform from "@components/sass-platform/MarketingPlatform";
import MarketingAbout from "@components/about/MarketingAbout";
import GameFeatures from "@components/features/GameFeaures";
import GameCounter from "@components/counter/GameCounter";
import QuickSupport from "@components/support/QuickSupport";
import LatestBlog from "@components/blogs/LatestBlog";
import FeatureFour from "@components/features/FeatureFour";
import TabOne from "@components/tabs/TabOne";
import InsuranceGallery from "@components/gallery/InsuranceGallery";
import ServiceOne from "@components/services/ServiceOne";
import FeatureImgContentTwo from "@components/feature-img-content/FeatureImgContentTwo";
import SingleServiceFeature from "@components/services/SingleServiceFeature";
import HeroSectionNine from "@components/hero-section/HeroSectionNine";

import FeatureImgContentOne from "@components/feature-img-content/FeatureImgContentOne";



export default function Home() {
  return (
    <Layout>
      <Navbar navDark />
      <HeroThirteen/>     
      <TabOne />  
      <ServiceOne bgDark />

      <FeatureFour />

      {/* <MarketingAbout /> */}
      <MarketingBusiness />

      <HeroSeventeen />
      
     
      <InsuranceGallery />

      <HeroSectionNine />


      

      {/* <PaymentFeature /> */}

      {/* <SingleServiceFeature /> */}

      <QuickSupport />
      {/* <GameCounter /> */}

      
      {/* <WorkProcessFive /> */}

      {/* <FeatureOne /> */}
      {/* <FeatureImgContentOne /> */}
      {/* <TestimonialOne darkBg /> */}
      {/* <WorkProcessOne darkBg/> */}
      {/* <PriceTwo  header="true" /> */}
      {/* <FaqOne />
      <IntegrationOne /> */}
      {/* <LatestBlog /> */}
      <SupportOne />

      <Footer footerGradient />
    </Layout>
  );
}
