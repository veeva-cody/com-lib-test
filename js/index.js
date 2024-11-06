import "../styles/index.scss";

// Common JS.
import { renderIcons, renderIconsInBlock } from "./common/icon";

import { initSecondaryNav } from "./common/navigation/secondary-nav";
import { initAccordions } from "./common/accordion";
import { initFilterDropdowns } from "./common/filter/filter";
import { initTablist, initTabBlocks } from "./common/tabs";
import { initCarousels } from "./common/carousel";
import { initFeatureCards } from "./common/cards/expanding-card";
import { initResourceCards } from "./common/cards/resource-card";
import { initVideoBlocks, initVideoChapterPlayerBlock, initVideoMultiplePlayerBlock } from "./common/video/video";
import { initZpattern } from "./common/z-pattern";
import { initHeroCenterStack } from "./common/hero/hero-center-stack";
import { initHeroHighlights } from "./common/hero/hero-highlights";
import { initHeroLeftAlignedCarousels } from "./common/hero/hero-carousel";
import { initHeroCustomer } from "./common/hero/hero-customer";
import { initAlertBanner } from "./common/alerts/alert-banner";
import { initDynamicNav } from "./pages/summit-common";
import { initModalIntegrationFix } from "./integration-fix/modal";
import { duplicateLogoWallAnimatedLogos } from "./common/logo-wall";
import { initTableOfContentInResourcePage } from "./common/toc";
import { styleStatisticToolForSupElement } from "./common/statistic";
import { initSidebar } from "./common/sidebar";
import { initResourceContent } from "./pages/resource-detail";
import { initGenericUI } from "./common/ui";
import { initSummitAgendaLoadingAnimation } from "./pages/summit-agenda";
import { initGateway } from "./pages/gateway";

renderIcons();

initSecondaryNav();
initFilterDropdowns();
initAccordions();
initFeatureCards();
initResourceCards();
initTablist();
initTabBlocks();
initCarousels();
initVideoBlocks();
initZpattern();
initHeroCenterStack();
initHeroLeftAlignedCarousels();
initHeroHighlights();
initHeroCustomer();
initAlertBanner();
initModalIntegrationFix();
initTableOfContentInResourcePage();
styleStatisticToolForSupElement();
duplicateLogoWallAnimatedLogos();
initSidebar();
initGenericUI();

// pages
initDynamicNav();
initResourceContent();
initSummitAgendaLoadingAnimation();
initGateway();

export {
    initVideoChapterPlayerBlock,
    initVideoMultiplePlayerBlock,
    renderIconsInBlock
};
