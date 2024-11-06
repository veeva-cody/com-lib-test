const VideoPlayerTabs = {
    /* html */
    template: `
        <!-- Video Player Multiple With Tabs  -->
        <section class="tab-block tab-block-customer video-player-tabs tab-block--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Demo Center
                    </h6>
                    <h3>
                        Veeva Drives Change and Impact
                    </h3>
                    <p>Checkout the featured demo center videos</p>
                    <div class="copy-container__buttons">
                        <a class="button-primary button-primary--gradient button-primary--arrow-downward" href="#demo-center-filter" target="_self"> View All Videos </a>
                    </div>
                </div>
            </div>

            <!-- content -->
            <div class="tab-block__content">
                <!-- tablist: text -->
                <div class="tablist tablist-text tablist--light">
                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Development Cloud</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Vault Quality</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Medical Suite</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link" aria-selected="true">Commerical Cloud</button>
                        </li>
                    </ul>
                </div>

                <!-- tablist content -->
                <div class="container tab-content">
                    <!-- tablist content item 1 -->
                    <div class="tab-pane">
                        <!-- video player block -->
                        <!-- ** unique id on block ** -->
                        <section id="video-demo-block-1" class="video-player-demos video-player-demos--light my-0">
                            <div class="video-player-module video-player-module--multiple">
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
                                </div>

                                <!-- sub video nav wrapper, light -->
                                <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--light">
                                    <div class="sub-video-nav-wrapper__title">
                                        <h5>Recommended Videos</h5>
                                    </div>
                                    <div class="sub-video-nav-wrapper__content">
                                        <!-- NOTE: Sub Video Nav added automatically -->
                                    </div>
                                    <div class="sub-video-nav-wrapper__bottom">
                                        <a class="button-outline" href="https://google.com" target="_self"> View All </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <!-- tablist content item 2 -->
                    <div class="tab-pane">
                        <!-- video player block -->
                        <section id="video-demo-block-2" class="video-player-demos video-player-demos--light my-0">
                            <div class="video-player-module video-player-module--multiple">
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
                                </div>

                                <!-- sub video nav wrapper, light -->
                                <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--light">
                                    <div class="sub-video-nav-wrapper__title">
                                        <h5>Recommended Videos</h5>
                                    </div>
                                    <div class="sub-video-nav-wrapper__content">
                                        <!-- NOTE: Sub Video Nav added automatically -->
                                    </div>
                                    <div class="sub-video-nav-wrapper__bottom">
                                        <a class="button-outline" href="https://google.com" target="_self"> View All </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <!-- tablist content item 3 -->
                    <div class="tab-pane">
                        <!-- video player block -->
                        <section id="video-demo-block-3" class="video-player-demos video-player-demos--light my-0">
                            <div class="video-player-module video-player-module--multiple">
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
                                </div>

                                <!-- sub video nav wrapper, light -->
                                <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--light">
                                    <div class="sub-video-nav-wrapper__title">
                                        <h5>Recommended Videos</h5>
                                    </div>
                                    <div class="sub-video-nav-wrapper__content">
                                        <!-- NOTE: Sub Video Nav added automatically -->
                                    </div>
                                    <div class="sub-video-nav-wrapper__bottom">
                                        <a class="button-outline" href="https://google.com" target="_self"> View All </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <!-- tablist content item 4 -->
                    <div class="tab-pane">
                        <!-- video player block -->
                        <section id="video-demo-block-4" class="video-player-demos video-player-demos--light my-0">
                            <div class="video-player-module video-player-module--multiple">
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
                                </div>

                                <!-- sub video nav wrapper, light -->
                                <div class="video-player-module__video-nav sub-video-nav-wrapper sub-video-nav-wrapper--light">
                                    <div class="sub-video-nav-wrapper__title">
                                        <h5>Recommended Videos</h5>
                                    </div>
                                    <div class="sub-video-nav-wrapper__content">
                                        <!-- NOTE: Sub Video Nav added automatically -->
                                    </div>
                                    <div class="sub-video-nav-wrapper__bottom">
                                        <a class="button-outline" href="https://google.com" target="_self"> View All </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>

        <!-- Uncomment to initialize block: place this script after Veeva redesign's 'bundle.min.js' at the bottom of the page  -->
        <!-- <script>
            const videoBlockIdList = [
                "video-demo-block-1",
                "video-demo-block-2",
                "video-demo-block-3",
                "video-demo-block-4"
            ]; // unique block ids
            const showVideoInfo = true;

            // example data list
            const videoData1 = [
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

            // include your video block data here
            const videoDataList = [
                videoData1, videoData1, videoData1, videoData1
            ];

            // initialize vidoe block data altogether
            videoBlockIdList.forEach((blockId, index) => {
                veevaLib.initVideoMultiplePlayerBlock(blockId, videoDataList[index], showVideoInfo);
            });
        </script> -->
    `
};