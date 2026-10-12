import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/layout";

// Import pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

// Solutions pages
import ArtificialIntelligence from "./pages/Solutions/ArtificialIntelligence";
import AnimationSolutions from "./pages/Solutions/AnimationSolutions";
import ArVr from "./pages/Solutions/ArVr";
import AssetTracking from "./pages/Solutions/AssetTracking";
import Autodesk from "./pages/Solutions/Autodesk";
import Biometric from "./pages/Solutions/Biometric";
import Blockchain from "./pages/Solutions/Blockchain";
import BusinessIntelligenceAnalytics from "./pages/Solutions/BusinessIntelligenceAnalytics";
import CloudComputing from "./pages/Solutions/CloudComputing";
import Cms from "./pages/Solutions/Cms";
import Crm from "./pages/Solutions/Crm";
import Database from "./pages/Solutions/Database";
import DigitalAsset from "./pages/Solutions/DigitalAsset";
import DigitalMarketing from "./pages/Solutions/DigitalMarketing";
import DigitalSignage from "./pages/Solutions/DigitalSignage";
import DocumentManagement from "./pages/Solutions/DocumentManagement";
import EmbeddedSoftware from "./pages/Solutions/EmbeddedSoftware";
import Erp from "./pages/Solutions/Erp";
import FacilitiesManagement from "./pages/Solutions/FacilitiesManagement";
import FieldService from "./pages/Solutions/FieldService";
import FirmwareSolutions from "./pages/Solutions/FirmwareSolutions";
import FranchiseManagement from "./pages/Solutions/FranchiseManagement";
import FraudProtection from "./pages/Solutions/FraudProtection";
import Gis from "./pages/Solutions/Gis";
import IotM2m from "./pages/Solutions/IotM2m";
import ITService from "./pages/Solutions/ITService";
import Kiosk from "./pages/Solutions/Kiosk";
import LocationBasedServices from "./pages/Solutions/LocationBasedServices";
import Netsuite from "./pages/Solutions/Netsuite";
import POSPayment from "./pages/Solutions/POSPayment";
import Salesforce from "./pages/Solutions/Salesforce";
import SalesManagement from "./pages/Solutions/SalesManagement";
import Sap from "./pages/Solutions/Sap";
import Telephony from "./pages/Solutions/Telephony";
import Ticketing from "./pages/Solutions/Ticketing";
import UiPath from "./pages/Solutions/UiPath";
import UiUx from "./pages/Solutions/UiUx";
import Wearable from "./pages/Solutions/Wearable";

// Industries pages
import AgriTech from "./pages/Industries/AgriTech";
import Aviation from "./pages/Industries/Aviation";
import BankingFintech from "./pages/Industries/Banking&Fintech";
import CasinoGames from "./pages/Industries/CasinoGames";
import ELearning from "./pages/Industries/E-Learning";
import EnergyUtilities from "./pages/Industries/Energy&Utilities";
import EnvironmentalManagement from "./pages/Industries/EnvironmentalManagement";
import Gaming from "./pages/Industries/Gaming";
import HCM from "./pages/Industries/HCM";
import Healthcare from "./pages/Industries/Healthcare";
import Hospitality from "./pages/Industries/Hospitality";
import MediaEntertainment from "./pages/Industries/Media&Entertainment";
import MeetingsEvents from "./pages/Industries/Meetings&Events";
import MortageLending from "./pages/Industries/Mortage&Lending";
import Nonprofit from "./pages/Industries/Nonprofit";
import OilGas from "./pages/Industries/Oil&Gas";
import PoliticalCampaigns from "./pages/Industries/PoliticalCampaigns";
import RealEstate from "./pages/Industries/RealEstate";
import Retail from "./pages/Industries/Retail";
import Sports from "./pages/Industries/Sports";
import SupplyChain from "./pages/Industries/SupplyChain";
import Telecommunications from "./pages/Industries/Telecommunications";
import Transportation from "./pages/Industries/Transportation";
import AcademyTraining from "./pages/Services/AcademyTraining";
import AndroidiOSDevelopment from "./pages/Services/AndroidiOSDevelopment";
import BlockchainDevelopment from "./pages/Services/BlockchainDevelopment";
import CustomSoftwareDevelopment from "./pages/Services/CustomSoftwareDevelopment";
import DevelopmentTeam from "./pages/Services/DevelopmentTeam";
import DigitalTransformation from "./pages/Services/DigitalTransformation";
import GameDevelopment from "./pages/Services/GameDevelopment";
import PlatformDevelopment from "./pages/Services/PlatformDevelopment";
import SoftwareQuality from "./pages/Services/SoftwareQuality";
import Design from "./pages/Services/UI&UXDesign";
import MRDevelopment from "./pages/Services/VR,AR,MRDevelopment";
import CaseStudy from "./pages/Case Study/CaseStudy";
import Contact from "./pages/Contact/Contact";
import Careers from "./pages/Careers/Careers";
import ScrollToTop from "./components/ScrollToTop.jsx"; // import the ScrollToTop component

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Routes */}

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/casestudy" element={<CaseStudy />} />

          {/* Solutions Routes */}
          <Route
            path="/artificial-intelligence"
            element={<ArtificialIntelligence />}
          />
          <Route path="/animation-solution" element={<AnimationSolutions />} />
          <Route path="/ar-vr" element={<ArVr />} />
          <Route path="/asset-tracking" element={<AssetTracking />} />
          <Route path="/autodesk" element={<Autodesk />} />
          <Route path="/biometric" element={<Biometric />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route
            path="/business-intelligence-analytics"
            element={<BusinessIntelligenceAnalytics />}
          />
          <Route path="/cloud-computing" element={<CloudComputing />} />
          <Route path="/cms" element={<Cms />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/database" element={<Database />} />
          <Route path="/digital-asset" element={<DigitalAsset />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/digital-signage" element={<DigitalSignage />} />
          <Route path="/document-management" element={<DocumentManagement />} />
          <Route path="/embedded-software" element={<EmbeddedSoftware />} />
          <Route path="/erp" element={<Erp />} />
          <Route
            path="/facilities-management"
            element={<FacilitiesManagement />}
          />
          <Route path="/field-service" element={<FieldService />} />
          <Route path="/firmware-solutions" element={<FirmwareSolutions />} />
          <Route
            path="/franchise-management"
            element={<FranchiseManagement />}
          />
          <Route path="/fraud-protection" element={<FraudProtection />} />
          <Route path="/gis" element={<Gis />} />
          <Route path="/iot-m2m" element={<IotM2m />} />
          <Route path="/it-service" element={<ITService />} />
          <Route path="/kiosk" element={<Kiosk />} />
          <Route
            path="/location-based-services"
            element={<LocationBasedServices />}
          />
          <Route path="/netsuite" element={<Netsuite />} />
          <Route path="/pos-payment" element={<POSPayment />} />
          <Route path="/salesforce" element={<Salesforce />} />
          <Route path="/sales-management" element={<SalesManagement />} />
          <Route path="/sap" element={<Sap />} />
          <Route path="/telephony" element={<Telephony />} />
          <Route path="/ticketing" element={<Ticketing />} />
          <Route path="/uipath" element={<UiPath />} />
          <Route path="/ui-ux" element={<UiUx />} />
          <Route path="/wearable" element={<Wearable />} />

          {/* Industries Routes */}
          <Route path="/agritech" element={<AgriTech />} />
          <Route path="/aviation" element={<Aviation />} />
          <Route path="/banking-fintech" element={<BankingFintech />} />
          <Route path="/casino-games" element={<CasinoGames />} />
          <Route path="/e-learning" element={<ELearning />} />
          <Route path="/energy-utilities" element={<EnergyUtilities />} />
          <Route
            path="/environmental-management"
            element={<EnvironmentalManagement />}
          />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/hcm" element={<HCM />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/media-entertainment" element={<MediaEntertainment />} />
          <Route path="/meetings-events" element={<MeetingsEvents />} />
          <Route path="/mortgage-lending" element={<MortageLending />} />
          <Route path="/nonprofit" element={<Nonprofit />} />
          <Route path="/oil-gas" element={<OilGas />} />
          <Route path="/political-campaigns" element={<PoliticalCampaigns />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/telecommunications" element={<Telecommunications />} />
          <Route path="/transportation" element={<Transportation />} />

          <Route path="/recruiting-training" element={<AcademyTraining />} />
          <Route
            path="/android-ios-development"
            element={<AndroidiOSDevelopment />}
          />
          <Route
            path="/nft-blockchain-development"
            element={<BlockchainDevelopment />}
          />
          <Route
            path="/custom-software-development"
            element={<CustomSoftwareDevelopment />}
          />
          <Route path="/Development-Team" element={<DevelopmentTeam />} />
          <Route
            path="/digital-transformation"
            element={<DigitalTransformation />}
          />
          <Route path="/game-development" element={<GameDevelopment />} />
          <Route
            path="/web-saas-platform-development"
            element={<PlatformDevelopment />}
          />
          <Route
            path="/software-quality-assurance"
            element={<SoftwareQuality />}
          />
          <Route path="/ui-ux-design" element={<Design />} />
          <Route path="/vr-ar-mr-development" element={<MRDevelopment />} />
          <Route path="/careers" element={<Careers />} />

          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
