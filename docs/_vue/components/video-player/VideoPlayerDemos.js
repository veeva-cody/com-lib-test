const VideoPlayerDemosLight = {
    /* html */
    template: `
        <!-- Video Player: Demos, light  -->
        <!-- NOTE: need id on block -->
        <section id="video-demo-block-1" class="video-player-demos video-player-demos--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container">
                    <div class="copy-container__title-section">
                        <h3>
                            Video Player Demos, <br />
                            Light Mode
                        </h3>
                        <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/demos.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/demos.html' </a> * </p>
                    </div>
                    <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
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
                                    <!-- add class here : wistia_async_{wistia-id} -->
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
            const videoBlockId = "video-demo-block-1"; // unique block id
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

const VideoPlayerDemosDark = {
    /* html */
    template: `
        <!-- Video Player: Demos, Dark  -->
        <section id="video-demo-block-2" class="video-player-demos video-player-demos--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container">
                    <div class="copy-container__title-section">
                        <h3>
                            Video Player Demos, <br />
                            Light Mode
                        </h3>
                        <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/demos.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/demos.html' </a> * </p>
                    </div>
                    <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
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
                                    <!-- add class here : wistia_async_{wistia-id} -->
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
            const videoBlockId = "video-demo-block-2"; // unique block id
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

const VideoPlayerDemosLightAsLinks = {
    /* html */
    template: `
        <!-- Video Player: Demos, light  -->
        <!-- NOTE: need id on block -->
        <section id="video-demo-block-3" class="video-player-demos video-player-demos--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container">
                    <div class="copy-container__title-section">
                        <h3>
                            Video Player Demos, <br />
                            Light Mode
                        </h3>
                        <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/demos.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/demos.html' </a> * </p>
                    </div>
                    <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
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
                                    <!-- add class here : wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>

                        <div class="video-player-module__video-info">
                            <h5>Video Title here</h5>
                            <p>Video Description here Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div> 
                    </div>

                    <!-- sub video nav wrapper, light -->
                    <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--light sub-video-nav-wrapper--link-only">
                        <div class="sub-video-nav-wrapper__title">
                            <h5>Sub Video Nav, Light</h5>
                        </div>
                        <div class="sub-video-nav-wrapper__content">
                            <a href="https://www.veeva.com/eu/resources/advanz-pharma-partners-with-veeva-to-set-unified-digital-first-commercial-foundation/" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--light">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="button-play-circle"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>PromoMats-Medical Connection Demo</h6>
                                    <p>Watch Demo</p>
                                </div>
                            </a>
                            <a href="https://www.veeva.com/resources/veeva-cdb-2023-release-highlights-demo/" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--light">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="button-play-circle"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Veeva CDB Release Highlights | Demo</h6>
                                    <p>Watch Demo</p>
                                </div>
                            </a>
                            <a href="https://www.veeva.com/resources/quality-clinical-operations-connection-demo/" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--light">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="news-paper"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Quality-Clinical Operations Connection Demo</h6>
                                    <p>Read Article</p>
                                </div>
                            </a>
                            <a href="https://www.veeva.com/resources/veeva-cdb-2023-release-highlights-demo/" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--light">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="news-paper"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Veeva CDB Release Highlights | Demo</h6>
                                    <p>Read Article</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};

const VideoPlayerDemosDarkAsLinks = {
    /* html */
    template: `
        <!-- Video Player: Demos, Dark  -->
        <section id="video-demo-block-4" class="video-player-demos video-player-demos--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container">
                    <div class="copy-container__title-section">
                        <h3>
                            Video Player Demos, <br />
                            Light Mode
                        </h3>
                        <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/demos.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/demos.html' </a> * </p>
                    </div>
                    <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
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
                                    <!-- add class here : wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>

                        <div class="video-player-module__video-info">
                            <h5>Video Title here</h5>
                            <p>Video Description here Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div> 
                    </div>

                    <!-- sub video nav wrapper, dark -->
                    <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--dark sub-video-nav-wrapper--link-only">
                        <div class="sub-video-nav-wrapper__title">
                            <h5>Sub Video Nav, Dark</h5>
                        </div>
                        <div class="sub-video-nav-wrapper__content">
                            <a href="https://www.veeva.com/eu/resources/advanz-pharma-partners-with-veeva-to-set-unified-digital-first-commercial-foundation/" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--dark">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="button-play-circle"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>PromoMats-Medical Connection Demo</h6>
                                    <p>Watch Demo</p>
                                </div>
                            </a>
                            <a href="https://www.veeva.com/resources/veeva-cdb-2023-release-highlights-demo/" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--dark">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="button-play-circle"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Veeva CDB Release Highlights | Demo</h6>
                                    <p>Watch Demo</p>
                                </div>
                            </a>
                            <a href="https://www.veeva.com/resources/quality-clinical-operations-connection-demo/" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--dark">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="news-paper"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Quality-Clinical Operations Connection Demo</h6>
                                    <p>Watch Demo</p>
                                </div>
                            </a>
                            <a href="https://www.veeva.com/resources/veeva-cdb-2023-release-highlights-demo/" class="sub-video-nav sub-video-nav--stacked sub-video-nav--stacked--dark">
                                <div class="sub-video-nav__thumbnail">
                                    <span class="icon" data-icon="news-paper"></span>
                                </div>
                                <div class="sub-video-nav__content">
                                    <h6>Veeva CDB Release Highlights | Demo</h6>
                                    <p>Read Article</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};

const VideoPlayerDemosLightWithVideoIcon = {
    /* html */
    template: `
        <!-- Video Player: Demos, light  -->
        <!-- NOTE: need id on block -->
        <section id="video-demo-block-5" class="video-player-demos video-player-demos--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container">
                    <div class="copy-container__title-section">
                        <h3>
                            Video Player Demos, <br />
                            Light Mode
                        </h3>
                        <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/demos.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/demos.html' </a> * </p>
                    </div>
                    <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
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
                                    <!-- add class here : wistia_async_{wistia-id} -->
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
            const videoBlockId = "video-demo-block-1"; // unique block id
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

const VideoPlayerDemosDarkWithVideoIcon = {
    /* html */
    template: `
        <!-- Video Player: Demos, Dark  -->
        <section id="video-demo-block-6" class="video-player-demos video-player-demos--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container">
                    <div class="copy-container__title-section">
                        <h3>
                            Video Player Demos, <br />
                            Light Mode
                        </h3>
                        <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/demos.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/demos.html' </a> * </p>
                    </div>
                    <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
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
                                    <!-- add class here : wistia_async_{wistia-id} -->
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
            const videoBlockId = "video-demo-block-2"; // unique block id
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