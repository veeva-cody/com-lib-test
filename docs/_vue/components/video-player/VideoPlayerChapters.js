const VideoPlayerChaptersLight = {
    props: {
        id: {
            type: String,
        }
    },
    /* html */
    template: `
        <!-- Video Player: Chapters, light  -->
        <!-- ID needs to be unique, can remove ':' in front of id  -->
        <section :id="id" class="video-player-chapters video-player-chapters--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="box-sign"></span>Lorem Ipsum</h6>
                    <h3>
                        Video Player Chapters, <br />
                        Light Mode
                    </h3>
                    <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/chapters.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/chapters.html' </a> * </p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span> CTA Text </span>
                        </a>
                    </div>
                </div>

                <div class="video-player-module video-player-module--chapters">
                    <!-- video player module, main video -->
                    <div class="video-player-module__video">
                        <div class="video-player-module__wistia-wrapper">
                            <!-- NOTE: need to add wistia code + aspect ratio -->
                            <!-- adjust video aspect ratio here -->
                            <div class="wistia_responsive_padding" style="padding: 56.25% 0 0 0; position: relative">
                                <div class="wistia_responsive_wrapper" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%">
                                    <!-- add class here : wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_zzk08gne6l" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>

                        <!-- NOTE: Video Info (title + descripition) added automatically -->
                        <!-- <div class="video-player-module__video__info">
                            <h5>Title</h5>
                            <p>Description</p>
                        </div> -->
                    </div>

                    <!-- chapter tool wrapper -->
                    <div class="chapter-tool video-player-module__video-nav">
                        <div class="chapter-tool__title">
                            <h6>Chapters</h6>
                        </div>
                        <div class="chapter-tool__items chapter-tool__items--light">
                            <!-- NOTE: Chapter Items added automatically -->
                            <!-- <div class="chapter-tool__items-content">
                                <a class="chapter-item chapter-item--light" href="#wistia_zzk08gne6l?time=5.52">
                                    <div> <span> 00:00 </span> </div>
                                    <h6>Testing chapter</h6>
                                </a>
                            </div> -->
                        </div>
                    </div>
                </div>

                <!-- sub video nav wrapper, recommended -->
                <!-- link for other video -->
                <div class="sub-video-nav-wrapper sub-video-nav-wrapper--light sub-video-nav-wrapper--recommended">
                    <div class="sub-video-nav-wrapper__title">
                        <h5>Sub Video Nav, Light, Recommended</h5>

                        <a class="button-text-link" href="https://google.com" target="_self">
                            <span class="button-label">View All Videos</span>
                            <span class="underline"></span>
                        </a>
                    </div>

                    <div class="sub-video-nav-wrapper__content">
                        <!-- NOTE: Sub Video Nav added automatically -->
                        <!-- sub video nav, below, light -->
                        <!-- <div class="sub-video-nav sub-video-nav--below sub-video-nav--below--light">
                            <div class="sub-video-nav__thumbnail">
                                <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                            </div>
                            <div class="sub-video-nav__content">
                                <div class="resource-chip resource-chip--light">
                                    <div class="resource-chip__icon">
                                        <span class="icon" data-icon="play-filled-2"></span>
                                    </div>
                                    8:14
                                </div>
                                <h6>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                <p>Lorem Ipsum Area / Sub Copy</p>
                            </div>
                        </div> -->
                    </div>

                    <div class="sub-video-nav-wrapper__bottom">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> View All Videos </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Uncomment to initialize block: place this script after Veeva redesign's 'bundle.min.js' at the bottom of the page  -->
        <!-- <script>
            const videoBlockId = ""; // Enter unique block id
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

            veevaLib.initVideoChapterPlayerBlock(videoBlockId, videoData, showVideoInfo);
        </script> -->
    `,
};

const VideoPlayerChaptersDark = {
    props: {
        id: {
            type: String,
        }
    },
    /* html */
    template: `
        <!-- Video Player: Chapters, dark -->
        <!-- ID needs to be unique, can remove ':' in front of id  -->
        <section :id="id" class="video-player-chapters video-player-chapters--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="box-sign"></span>Lorem Ipsum</h6>
                    <h3>
                        Video Player Chapters, <br />
                        Light Mode
                    </h3>
                    <p>* This block needs to be initialized using js function, view details in <a href="https://github.com/Veeva-com/veeva-component-library/blob/develop/lib/blocks/video-player/chapters.html" target="_blank" class="doc-link d-inline-block"> 'lib/blocks/video-player/chapters.html' </a> * </p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span> CTA Text </span>
                        </a>
                    </div>
                </div>

                <!-- Video Player Module -->
                <div class="video-player-module video-player-module--chapters">
                    <!-- video player module, main video -->
                    <div class="video-player-module__video">
                        <div class="video-player-module__wistia-wrapper">
                            <!-- NOTE: need to add wistia code + aspect ratio -->
                            <!-- adjust video aspect ratio here -->
                            <div class="wistia_responsive_padding" style="padding: 56.25% 0 0 0; position: relative">
                                <div class="wistia_responsive_wrapper" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%">
                                    <!-- add class here : wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_zzk08gne6l" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>

                        <!-- NOTE: Video Info added automatically -->
                        <!-- <div class="video-player-module__video__info">
                            <h5>Title</h5>
                            <p>Description</p>
                        </div> -->
                    </div>

                    <!-- chapter tool wrapper -->
                    <div class="chapter-tool video-player-module__video-nav">
                        <div class="chapter-tool__title">
                            <h6>Chapters</h6>
                        </div>
                        <div class="chapter-tool__items chapter-tool__items--dark">
                            <!-- NOTE: Chapter Items added automatically -->
                            <!-- <div class="chapter-tool__items-content">
                                <a class="chapter-item chapter-item--light" href="#wistia_zzk08gne6l?time=5.52">
                                    <div> <span> 00:00 </span> </div>
                                    <h6>Testing chapter</h6>
                                </a>
                            </div> -->
                        </div>
                    </div>
                </div>

                <!-- sub video nav wrapper, recommended -->
                <div class="sub-video-nav-wrapper sub-video-nav-wrapper--dark sub-video-nav-wrapper--recommended">
                    <div class="sub-video-nav-wrapper__title">
                        <h5>Sub Video Nav, Light, Recommended</h5>

                        <a class="button-text-link" href="[url]" target="[target]">
                            <span class="button-label">View All Videos</span>
                            <span class="underline"></span>
                        </a>
                    </div>

                    <div class="sub-video-nav-wrapper__content">
                        <!-- NOTE: Sub Video Nav added automatically -->
                        <!-- sub video nav, below, dark -->
                        <!-- <div class="sub-video-nav sub-video-nav--below sub-video-nav--below--dark">
                            <div class="sub-video-nav__thumbnail">
                                <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                            </div>
                            <div class="sub-video-nav__content">
                                <div class="resource-chip resource-chip--dark">
                                    <div class="resource-chip__icon">
                                        <span class="icon" data-icon="play-filled-2"></span>
                                    </div>

                                    8:14
                                </div>

                                <h6>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                <p>Lorem Ipsum Area / Sub Copy</p>
                            </div>
                        </div> -->
                    </div>

                    <div class="sub-video-nav-wrapper__bottom">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> View All Videos </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Uncomment to initialize block: place this script after Veeva redesign's 'bundle.min.js' at the bottom of the page  -->
        <!-- <script>
            const videoBlockId = ""; // Enter unique block id
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

            veevaLib.initVideoChapterPlayerBlock(videoBlockId, videoData, showVideoInfo);
        </script> -->
    `,
};


const VideoPlayerChaptersLightWithChapterColumn = {
    props: {
        id: {
            type: String,
        }
    },
    /* html */
    template: `
        <!-- Video Player: Chapters, light  -->
        <!-- ID needs to be unique, can remove ':' in front of id  -->
        <section :id="id" class="video-player-chapters video-player-chapters--light video-player-chapters--always-show-chapters">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="box-sign"></span>Lorem Ipsum</h6>
                    <h3>
                        Video Player Chapters, <br />
                        Light Mode
                    </h3>
                    <p>* This block needs to be initialized using js function, view details in <b class="d-inline-block"> 'lib/blocks/video-player/chapters.html' </b> * </p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span> CTA Text </span>
                        </a>
                    </div>
                </div>

                <div class="video-player-module video-player-module--chapters">
                    <!-- video player module, main video -->
                    <div class="video-player-module__video">
                        <div class="video-player-module__wistia-wrapper">
                            <!-- NOTE: need to add wistia code + aspect ratio -->
                            <!-- adjust video aspect ratio here -->
                            <div class="wistia_responsive_padding" style="padding: 56.25% 0 0 0; position: relative">
                                <div class="wistia_responsive_wrapper" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%">
                                    <!-- add class here : wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_zzk08gne6l resumable=false" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>

                        <!-- NOTE: Video Info (title + descripition) added automatically -->
                        <!-- <div class="video-player-module__video__info">
                            <h5>Title</h5>
                            <p>Description</p>
                        </div> -->
                    </div>

                    <!-- chapter tool wrapper -->
                    <div class="chapter-tool video-player-module__video-nav">
                        <div class="chapter-tool__title">
                            <h6>Chapters</h6>
                        </div>
                        <div class="chapter-tool__items chapter-tool__items--light">
                            <!-- NOTE: Chapter Items added automatically -->
                            <!-- <div class="chapter-tool__items-content">
                                <a class="chapter-item chapter-item--light" href="#wistia_zzk08gne6l?time=5.52">
                                    <div> <span> 00:00 </span> </div>
                                    <h6>Testing chapter</h6>
                                </a>
                            </div> -->
                        </div>
                    </div>
                </div>

                <!-- sub video nav wrapper, recommended -->
                <!-- link for other video -->
                <div class="sub-video-nav-wrapper sub-video-nav-wrapper--light sub-video-nav-wrapper--recommended">
                    <div class="sub-video-nav-wrapper__title">
                        <h5>Sub Video Nav, Light, Recommended</h5>

                        <a class="button-text-link" href="https://google.com" target="_self">
                            <span class="button-label">View All Videos</span>
                            <span class="underline"></span>
                        </a>
                    </div>

                    <div class="sub-video-nav-wrapper__content">
                        <!-- NOTE: Sub Video Nav added automatically -->
                        <!-- sub video nav, below, light -->
                        <!-- <div class="sub-video-nav sub-video-nav--below sub-video-nav--below--light">
                            <div class="sub-video-nav__thumbnail">
                                <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                            </div>
                            <div class="sub-video-nav__content">
                                <div class="resource-chip resource-chip--light">
                                    <div class="resource-chip__icon">
                                        <span class="icon" data-icon="play-filled-2"></span>
                                    </div>
                                    8:14
                                </div>
                                <h6>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                <p>Lorem Ipsum Area / Sub Copy</p>
                            </div>
                        </div> -->
                    </div>

                    <div class="sub-video-nav-wrapper__bottom">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> View All Videos </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Uncomment to initialize block: place this script after Veeva redesign's 'bundle.min.js' at the bottom of the page  -->
        <!-- <script>
            const videoBlockId = ""; // Enter unique block id
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

            veevaLib.initVideoChapterPlayerBlock(videoBlockId, videoData, showVideoInfo);
        </script> -->
    `,
};

const VideoPlayerChaptersDarkWithChapterColumn = {
    props: {
        id: {
            type: String,
        }
    },
    /* html */
    template: `
        <!-- Video Player: Chapters, dark -->
        <!-- ID needs to be unique, can remove ':' in front of id  -->
        <section :id="id" class="video-player-chapters video-player-chapters--dark video-player-chapters--always-show-chapters">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="box-sign"></span>Lorem Ipsum</h6>
                    <h3>
                        Video Player Chapters, <br />
                        Light Mode
                    </h3>
                    <p>* This block needs to be initialized using js function, view details in <b class="d-inline-block"> 'lib/blocks/video-player/chapters.html' </b> * </p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span> CTA Text </span>
                        </a>
                    </div>
                </div>

                <!-- Video Player Module -->
                <div class="video-player-module video-player-module--chapters">
                    <!-- video player module, main video -->
                    <div class="video-player-module__video">
                        <div class="video-player-module__wistia-wrapper">
                            <!-- NOTE: need to add wistia code + aspect ratio -->
                            <!-- adjust video aspect ratio here -->
                            <div class="wistia_responsive_padding" style="padding: 56.25% 0 0 0; position: relative">
                                <div class="wistia_responsive_wrapper" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%">
                                    <!-- add class here : wistia_async_{wistia-id} -->
                                    <div class="wistia_embed wistia_async_zzk08gne6l resumable=false" style="height: 100%; width: 100%"></div>
                                </div>
                            </div>
                        </div>

                        <!-- NOTE: Video Info added automatically -->
                        <!-- <div class="video-player-module__video__info">
                            <h5>Title</h5>
                            <p>Description</p>
                        </div> -->
                    </div>

                    <!-- chapter tool wrapper -->
                    <div class="chapter-tool video-player-module__video-nav">
                        <div class="chapter-tool__title">
                            <h6>Chapters</h6>
                        </div>
                        <div class="chapter-tool__items chapter-tool__items--dark">
                            <!-- NOTE: Chapter Items added automatically -->
                            <!-- <div class="chapter-tool__items-content">
                                <a class="chapter-item chapter-item--light" href="#wistia_zzk08gne6l?time=5.52">
                                    <div> <span> 00:00 </span> </div>
                                    <h6>Testing chapter</h6>
                                </a>
                            </div> -->
                        </div>
                    </div>
                </div>

                <!-- sub video nav wrapper, recommended -->
                <div class="sub-video-nav-wrapper sub-video-nav-wrapper--dark sub-video-nav-wrapper--recommended">
                    <div class="sub-video-nav-wrapper__title">
                        <h5>Sub Video Nav, Light, Recommended</h5>

                        <a class="button-text-link" href="[url]" target="[target]">
                            <span class="button-label">View All Videos</span>
                            <span class="underline"></span>
                        </a>
                    </div>

                    <div class="sub-video-nav-wrapper__content">
                        <!-- NOTE: Sub Video Nav added automatically -->
                        <!-- sub video nav, below, dark -->
                        <!-- <div class="sub-video-nav sub-video-nav--below sub-video-nav--below--dark">
                            <div class="sub-video-nav__thumbnail">
                                <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                            </div>
                            <div class="sub-video-nav__content">
                                <div class="resource-chip resource-chip--dark">
                                    <div class="resource-chip__icon">
                                        <span class="icon" data-icon="play-filled-2"></span>
                                    </div>

                                    8:14
                                </div>

                                <h6>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                <p>Lorem Ipsum Area / Sub Copy</p>
                            </div>
                        </div> -->
                    </div>

                    <div class="sub-video-nav-wrapper__bottom">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> View All Videos </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Uncomment to initialize block: place this script after Veeva redesign's 'bundle.min.js' at the bottom of the page  -->
        <!-- <script>
            const videoBlockId = ""; // Enter unique block id
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

            veevaLib.initVideoChapterPlayerBlock(videoBlockId, videoData, showVideoInfo);
        </script> -->
    `,
};
