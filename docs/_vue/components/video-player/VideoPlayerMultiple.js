const VideoPlayerMultipleLight = {
    /* html */
    template: `
        <!-- Video Player: Multiple, Light  -->
        <!-- NOTE: need id on block -->
        <section id="video-multiple-block-1" class="video-player-multiple video-player-multiple--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="box-sign"></span>Lorem Ipsum</h6>
                    <h3>Video Player Multiple, Light Mode</h3>
                    <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/multiple.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/multiple.html' </a> * </p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span> CTA Text </span>
                        </a>
                    </div>
                </div>

                <!-- video player module -->
                <div class="video-player-module video-player-module--multiple">
                    <!-- video player module, main video -->
                    <div class="video-player-module__video">
                        <div class="video-player-module__wistia-wrapper">
                            <!-- NOTE: need to add wistia code + aspect ratio -->
                            <!-- adjust video aspect ratio here -->
                            <div class="wistia_responsive_padding" style="padding: 56.25% 0 0 0; position: relative">
                                <div class="wistia_responsive_wrapper" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%">
                                    <!-- add class here: wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>

                        <!-- NOTE: Video Info added automatically -->
                        <!-- <div class="video-player-module__video__info">
                            <h5>Title</h5>
                            <p>Description</p>
                        </div> -->
                    </div>

                    <!-- sub video nav wrapper, light -->
                    <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--light">
                        <div class="sub-video-nav-wrapper__title">
                            <h5>Sub Video Nav, Light</h5>
                        </div>
                        <div class="sub-video-nav-wrapper__content">
                            <!-- NOTE: Sub Video Nav added automatically -->
                            <!-- sub video nav, stacked, light -->
                            <!-- <div class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--light active">
                                <div class="sub-video-nav__thumbnail">
                                    <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                    <p>Lorem Ipsum Area / Sub Copy</p>
                                </div>
                            </div> -->
                        </div>
                        <div class="sub-video-nav-wrapper__bottom">
                            <a class="button-outline" href="https://google.com" target="_self"> View All Videos </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Uncomment to initialize block: place this script after Veeva redesign's 'bundle.min.js' at the bottom of the page  -->
        <!-- <script>
            const videoBlockId = "video-multiple-block-1"; // unique block id
            const videoData = [
                {
                    wistiaID: "zzk08gne6l", // Required.
                    title: "Custom video title here", // Optional
                    description: "Custom video description here", // Optional
                    image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg", // Optional
                },
                {
                    wistiaID: "nzu1lv6b2h", // Required.
                },
                {
                    wistiaID: "31zfr7kuum", // Required.
                },
                {
                    wistiaID: "i5n0o1mryj", // Required.
                },
            ];
            const showVideoInfo = true;

            veevaLib.initVideoMultiplePlayerBlock(videoBlockId, videoData, showVideoInfo);
        </script> -->
    `,
};

const VideoPlayerMultipleDark = {
    /* html */
    template: `
        <!-- Video Player: Multiple, Dark  -->
        <!-- NOTE: need id on block -->
        <section id="video-multiple-block-2" class="video-player-multiple video-player-multiple--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="box-sign"></span>Lorem Ipsum</h6>
                    <h3>Video Player Multiple, Dark Mode</h3>
                    <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/multiple.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/multiple.html' </a> * </p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span> CTA Text </span>
                        </a>
                    </div>
                </div>

                <!-- video player module -->
                <div class="video-player-module video-player-module--multiple">
                    <!-- video player module, main video -->
                    <div class="video-player-module__video">
                        <div class="video-player-module__wistia-wrapper">
                            <!-- NOTE: need to add wistia code + aspect ratio -->
                            <!-- adjust video aspect ratio here -->
                            <div class="wistia_responsive_padding" style="padding: 56.25% 0 0 0; position: relative">
                                <div class="wistia_responsive_wrapper" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%">
                                    <!-- add class here: wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>

                        <!-- NOTE: Video Info added automatically -->
                        <!-- <div class="video-player-module__video__info">
                            <h5>Title</h5>
                            <p>Description</p>
                        </div> -->
                    </div>

                    <!-- sub video nav wrapper, dark -->
                    <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--dark">
                        <div class="sub-video-nav-wrapper__title">
                            <h5>Sub Video Nav, Dark</h5>
                        </div>
                        <div class="sub-video-nav-wrapper__content">
                            <!-- NOTE: Sub Video Nav added automatically -->
                            <!-- sub video nav, stacked, dark -->
                            <!-- <div class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--dark">
                                <div class="sub-video-nav__thumbnail">
                                    <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                    <p>Lorem Ipsum Area / Sub Copy</p>
                                </div>
                            </div> -->
                        </div>
                        <div class="sub-video-nav-wrapper__bottom">
                            <a class="button-outline" href="https://google.com" target="_self"> View All Videos </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Uncomment to initialize block: place this script after Veeva redesign's 'bundle.min.js' at the bottom of the page  -->
        <!-- <script>
            const videoBlockId = "video-multiple-block-2"; // unique block id
            const videoData = [
                {
                    wistiaID: "zzk08gne6l", // Required.
                    title: "Custom video title here", // Optional
                    description: "Custom video description here", // Optional
                    image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg", // Optional
                },
                {
                    wistiaID: "nzu1lv6b2h", // Required.
                },
                {
                    wistiaID: "31zfr7kuum", // Required.
                },
                {
                    wistiaID: "i5n0o1mryj", // Required.
                },
            ];
            const showVideoInfo = true;

            veevaLib.initVideoMultiplePlayerBlock(videoBlockId, videoData, showVideoInfo);
        </script> -->
    `,
};

const VideoPlayerMultipleLightVideoIcon = {
    /* html */
    template: `
        <!-- Video Player: Multiple, Light  -->
        <!-- NOTE: need id on block -->
        <section id="video-multiple-block-3" class="video-player-multiple video-player-multiple--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="box-sign"></span>Lorem Ipsum</h6>
                    <h3>Video Player Multiple, Light Mode</h3>
                    <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/multiple.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/multiple.html' </a> * </p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span> CTA Text </span>
                        </a>
                    </div>
                </div>

                <!-- video player module -->
                <div class="video-player-module video-player-module--multiple">
                    <!-- video player module, main video -->
                    <div class="video-player-module__video">
                        <div class="video-player-module__wistia-wrapper">
                            <!-- NOTE: need to add wistia code + aspect ratio -->
                            <!-- adjust video aspect ratio here -->
                            <div class="wistia_responsive_padding" style="padding: 56.25% 0 0 0; position: relative">
                                <div class="wistia_responsive_wrapper" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%">
                                    <!-- add class here: wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>

                        <!-- NOTE: Video Info added automatically -->
                        <!-- <div class="video-player-module__video__info">
                            <h5>Title</h5>
                            <p>Description</p>
                        </div> -->
                    </div>

                    <!-- sub video nav wrapper, light -->
                    <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--light sub-video-nav-wrapper--video-icon">
                        <div class="sub-video-nav-wrapper__title">
                            <h5>Sub Video Nav, Light</h5>
                        </div>
                        <div class="sub-video-nav-wrapper__content">
                            <!-- NOTE: Sub Video Nav added automatically -->
                            <!-- sub video nav, stacked, light -->
                            <!-- <div class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--light active">
                                <div class="sub-video-nav__thumbnail">
                                    <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                    <p>Lorem Ipsum Area / Sub Copy</p>
                                </div>
                            </div> -->
                        </div>
                        <div class="sub-video-nav-wrapper__bottom">
                            <a class="button-outline" href="https://google.com" target="_self"> View All Videos </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Uncomment to initialize block: place this script after Veeva redesign's 'bundle.min.js' at the bottom of the page  -->
        <!-- <script>
            const videoBlockId = "video-multiple-block-3"; // unique block id
            const videoData = [
                {
                    wistiaID: "zzk08gne6l", // Required.
                    title: "Custom video title here", // Optional
                },
                {
                    wistiaID: "nzu1lv6b2h", // Required.
                },
                {
                    wistiaID: "31zfr7kuum", // Required.
                },
                {
                    wistiaID: "i5n0o1mryj", // Required.
                },
            ];
            const showVideoInfo = true;

            veevaLib.initVideoMultiplePlayerBlock(videoBlockId, videoData, showVideoInfo);
        </script> -->
    `,
};

const VideoPlayerMultipleDarkVideoIcon = {
    /* html */
    template: `
        <!-- Video Player: Multiple, Dark  -->
        <!-- NOTE: need id on block -->
        <section id="video-multiple-block-4" class="video-player-multiple video-player-multiple--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="box-sign"></span>Lorem Ipsum</h6>
                    <h3>Video Player Multiple, Dark Mode</h3>
                    <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/multiple.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/multiple.html' </a> * </p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span> CTA Text </span>
                        </a>
                    </div>
                </div>

                <!-- video player module -->
                <div class="video-player-module video-player-module--multiple">
                    <!-- video player module, main video -->
                    <div class="video-player-module__video">
                        <div class="video-player-module__wistia-wrapper">
                            <!-- NOTE: need to add wistia code + aspect ratio -->
                            <!-- adjust video aspect ratio here -->
                            <div class="wistia_responsive_padding" style="padding: 56.25% 0 0 0; position: relative">
                                <div class="wistia_responsive_wrapper" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%">
                                    <!-- add class here: wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>

                        <!-- NOTE: Video Info added automatically -->
                        <!-- <div class="video-player-module__video__info">
                            <h5>Title</h5>
                            <p>Description</p>
                        </div> -->
                    </div>

                    <!-- sub video nav wrapper, dark -->
                    <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--dark sub-video-nav-wrapper--video-icon">
                        <div class="sub-video-nav-wrapper__title">
                            <h5>Sub Video Nav, Dark</h5>
                        </div>
                        <div class="sub-video-nav-wrapper__content">
                            <!-- NOTE: Sub Video Nav added automatically -->
                            <!-- sub video nav, stacked, dark -->
                            <!-- <div class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--dark">
                                <div class="sub-video-nav__thumbnail">
                                    <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                    <p>Lorem Ipsum Area / Sub Copy</p>
                                </div>
                            </div> -->
                        </div>
                        <div class="sub-video-nav-wrapper__bottom">
                            <a class="button-outline" href="https://google.com" target="_self"> View All Videos </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Uncomment to initialize block: place this script after Veeva redesign's 'bundle.min.js' at the bottom of the page  -->
        <!-- <script>
            const videoBlockId = "video-multiple-block-4"; // unique block id
            const videoData = [
                {
                    wistiaID: "zzk08gne6l", // Required.
                    title: "Custom video title here", // Optional
                },
                {
                    wistiaID: "nzu1lv6b2h", // Required.
                },
                {
                    wistiaID: "31zfr7kuum", // Required.
                },
                {
                    wistiaID: "i5n0o1mryj", // Required.
                },
            ];
            const showVideoInfo = true;

            veevaLib.initVideoMultiplePlayerBlock(videoBlockId, videoData, showVideoInfo);
        </script> -->
    `,
};

const VideoPlayerMultipleLightLinks = {
    /* html */
    template: `
        <!-- Video Player: Multiple, Light, With Links  -->
        <!-- NOTE: need id on block -->
        <section id="video-multiple-block-5" class="video-player-multiple video-player-multiple--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="box-sign"></span>Lorem Ipsum</h6>
                    <h3>Video Player Multiple, Light Mode</h3>
                    <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/multiple.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/multiple.html' </a> * </p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span> CTA Text </span>
                        </a>
                    </div>
                </div>

                <!-- video player module -->
                <div class="video-player-module video-player-module--multiple">
                    <!-- video player module, main video -->
                    <div class="video-player-module__video">
                        <div class="video-player-module__wistia-wrapper">
                            <!-- NOTE: need to add wistia code + aspect ratio -->
                            <!-- adjust video aspect ratio here -->
                            <div class="wistia_responsive_padding" style="padding: 56.25% 0 0 0; position: relative">
                                <div class="wistia_responsive_wrapper" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%">
                                    <!-- add class here: wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- sub video nav wrapper, light -->
                    <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--light sub-video-nav-wrapper--link-only">
                        <div class="sub-video-nav-wrapper__content">
                            <a href="https://www.veeva.com/eu/resources/advanz-pharma-partners-with-veeva-to-set-unified-digital-first-commercial-foundation/" target="_self" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--light">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="news-paper"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>ADVANZ PHARMA: Speeding Commercial Execution with Veeva Commercial Cloud</h6>
                                    <p>View Press Release</p>
                                </div>
                            </a>
                            <a href="https://www.veeva.com/eu/blog/enhancing-the-crm-user-experience-at-bausch-health/" target="_self" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--light">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="news-paper"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Bausch Health: Enhancing the CRM User Experience</h6>
                                    <p>Read the Article</p>
                                </div>
                            </a>
                            <a href="https://www.veeva.com/eu/customer-stories/indivior-speeds-addiction-treatment-information-to-more-healthcare-professionals-globally/" target="_self" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--light">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="news-paper"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Indivior: Speeding Addiction Treatment Information to More Healthcare Professionals Globally</h6>
                                    <p>Read the Story</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};

const VideoPlayerMultipleDarkLinks = {
    /* html */
    template: `
        <!-- Video Player: Multiple, Light, With Links  -->
        <!-- NOTE: need id on block -->
        <section id="video-multiple-block-6" class="video-player-multiple video-player-multiple--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="box-sign"></span>Lorem Ipsum</h6>
                    <h3>Video Player Multiple, Light Mode</h3>
                    <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/multiple.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/multiple.html' </a> * </p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span> CTA Text </span>
                        </a>
                    </div>
                </div>

                <!-- video player module -->
                <div class="video-player-module video-player-module--multiple">
                    <!-- video player module, main video -->
                    <div class="video-player-module__video">
                        <div class="video-player-module__wistia-wrapper">
                            <!-- NOTE: need to add wistia code + aspect ratio -->
                            <!-- adjust video aspect ratio here -->
                            <div class="wistia_responsive_padding" style="padding: 56.25% 0 0 0; position: relative">
                                <div class="wistia_responsive_wrapper" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%">
                                    <!-- add class here: wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- sub video nav wrapper, dark -->
                    <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--dark sub-video-nav-wrapper--link-only">
                        <div class="sub-video-nav-wrapper__content">
                            <a href="https://www.veeva.com/eu/resources/advanz-pharma-partners-with-veeva-to-set-unified-digital-first-commercial-foundation/" target="_self" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--dark">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="news-paper"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>ADVANZ PHARMA: Speeding Commercial Execution with Veeva Commercial Cloud</h6>
                                    <p>View Press Release</p>
                                </div>
                            </a>
                            <a href="https://www.veeva.com/eu/blog/enhancing-the-crm-user-experience-at-bausch-health/" target="_self" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--dark">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="news-paper"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Bausch Health: Enhancing the CRM User Experience</h6>
                                    <p>Read the Article</p>
                                </div>
                            </a>
                            <a href="https://www.veeva.com/eu/customer-stories/indivior-speeds-addiction-treatment-information-to-more-healthcare-professionals-globally/" target="_self" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--dark">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="news-paper"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Indivior: Speeding Addiction Treatment Information to More Healthcare Professionals Globally</h6>
                                    <p>Read the Story</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};

const VideoPlayerLightHideActiveSubVideoNav = {
    /* html */
    template: `
        <!-- Video Player: Multiple, Light  -->
        <!-- NOTE: need id on block -->
        <section id="video-multiple-block-7" class="video-player-multiple video-player-multiple--light video-player-multiple--hide-active-sub-video-nav">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="box-sign"></span>Lorem Ipsum</h6>
                    <h3>Video Player Multiple, Light Mode, <br/> Hide Active Control </h3>
                    <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/multiple.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/multiple.html' </a> * </p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span> CTA Text </span>
                        </a>
                    </div>
                </div>

                <!-- video player module -->
                <div class="video-player-module video-player-module--multiple">
                    <!-- video player module, main video -->
                    <div class="video-player-module__video">
                        <div class="video-player-module__wistia-wrapper">
                            <!-- NOTE: need to add wistia code + aspect ratio -->
                            <!-- adjust video aspect ratio here -->
                            <div class="wistia_responsive_padding" style="padding: 56.25% 0 0 0; position: relative">
                                <div class="wistia_responsive_wrapper" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%">
                                    <!-- add class here: wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>

                        <!-- NOTE: Video Info added automatically -->
                        <!-- <div class="video-player-module__video__info">
                            <h5>Title</h5>
                            <p>Description</p>
                        </div> -->
                    </div>

                    <!-- sub video nav wrapper, light -->
                    <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--light sub-video-nav-wrapper--video-icon">
                        <div class="sub-video-nav-wrapper__title">
                            <h5>Sub Video Nav, Light</h5>
                        </div>
                        <div class="sub-video-nav-wrapper__content">
                            <!-- NOTE: Sub Video Nav added automatically -->
                            <!-- sub video nav, stacked, light -->
                            <!-- <div class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--light active">
                                <div class="sub-video-nav__thumbnail">
                                    <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                    <p>Lorem Ipsum Area / Sub Copy</p>
                                </div>
                            </div> -->
                        </div>
                        <div class="sub-video-nav-wrapper__bottom">
                            <a class="button-outline" href="https://google.com" target="_self"> View All Videos </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Uncomment to initialize block: place this script after Veeva redesign's 'bundle.min.js' at the bottom of the page  -->
        <!-- <script>
            const videoBlockId = "video-multiple-block-7"; // unique block id
            const videoData = [
                {
                    wistiaID: "zzk08gne6l", // Required.
                    title: "Custom video title here", // Optional
                },
                {
                    wistiaID: "nzu1lv6b2h", // Required.
                },
                {
                    wistiaID: "31zfr7kuum", // Required.
                },
                {
                    wistiaID: "i5n0o1mryj", // Required.
                },
            ];
            const showVideoInfo = false;

            veevaLib.initVideoMultiplePlayerBlock(videoBlockId, videoData, showVideoInfo);
        </script> -->
    `,
};

const VideoPlayerDarkHideActiveSubVideoNav = {
    /* html */
    template: `
        <!-- Video Player: Multiple, Dark  -->
        <!-- NOTE: need id on block -->
        <section id="video-multiple-block-8" class="video-player-multiple video-player-multiple--dark video-player-multiple--hide-active-sub-video-nav">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="box-sign"></span>Lorem Ipsum</h6>
                    <h3>Video Player Multiple, Dark Mode, <br/> Hide Active Control</h3>
                    <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/multiple.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/multiple.html' </a> * </p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span> CTA Text </span>
                        </a>
                    </div>
                </div>

                <!-- video player module -->
                <div class="video-player-module video-player-module--multiple">
                    <!-- video player module, main video -->
                    <div class="video-player-module__video">
                        <div class="video-player-module__wistia-wrapper">
                            <!-- NOTE: need to add wistia code + aspect ratio -->
                            <!-- adjust video aspect ratio here -->
                            <div class="wistia_responsive_padding" style="padding: 56.25% 0 0 0; position: relative">
                                <div class="wistia_responsive_wrapper" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%">
                                    <!-- add class here: wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>

                        <!-- NOTE: Video Info added automatically -->
                        <!-- <div class="video-player-module__video__info">
                            <h5>Title</h5>
                            <p>Description</p>
                        </div> -->
                    </div>

                    <!-- sub video nav wrapper, dark -->
                    <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--dark sub-video-nav-wrapper--video-icon">
                        <div class="sub-video-nav-wrapper__title">
                            <h5>Sub Video Nav, Dark</h5>
                        </div>
                        <div class="sub-video-nav-wrapper__content">
                            <!-- NOTE: Sub Video Nav added automatically -->
                            <!-- sub video nav, stacked, dark -->
                            <!-- <div class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--dark">
                                <div class="sub-video-nav__thumbnail">
                                    <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                    <p>Lorem Ipsum Area / Sub Copy</p>
                                </div>
                            </div> -->
                        </div>
                        <div class="sub-video-nav-wrapper__bottom">
                            <a class="button-outline" href="https://google.com" target="_self"> View All Videos </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Uncomment to initialize block: place this script after Veeva redesign's 'bundle.min.js' at the bottom of the page  -->
        <!-- <script>
            const videoBlockId = "video-multiple-block-8"; // unique block id
            const videoData = [
                {
                    wistiaID: "zzk08gne6l", // Required.
                    title: "Custom video title here", // Optional
                },
                {
                    wistiaID: "nzu1lv6b2h", // Required.
                },
                {
                    wistiaID: "31zfr7kuum", // Required.
                },
                {
                    wistiaID: "i5n0o1mryj", // Required.
                },
            ];
            const showVideoInfo = false;

            veevaLib.initVideoMultiplePlayerBlock(videoBlockId, videoData, showVideoInfo);
        </script> -->
    `,
};