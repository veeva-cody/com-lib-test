const ResourceFeaturedLight = {
    /* html */
    template: `
        <!-- Resource - Featured, Light -->
        <section class="resource-block-featured resource-block-featured--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum
                    </h6>
                    <h3>
                        Resource Block - Featured <br />
                        Light Mode
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="[url]" target="[target]"> Register Now </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>

                <div class="resource-block__cards resource-block__cards--featured">
                    <!-- resource card, bg gradient orange -->
                    <a id="resource-card--summit" class="resource-card resource-card--with-bg-gradient-orange" href="/events/commercial-summit/">
                        <div class="resource-card__text">
                            <div class="resource-chip">
                                <div class="resource-chip__icon">
                                    <span class="icon" data-icon="star-fill-1"></span>
                                </div>
                                Veeva Summit
                            </div>
                            <h6>Commercial Summit</h6>
                            <h5>Shape the Future of <br>Commercial and Medical</h5>
                            <p>Boston | May 7-8, 2024</p>
                            <div class="resource-card__cta button-primary button-primary--white">Register Now</div>
                        </div>
                        <div class="resource-card__media resource-card__media--bg" style="background-image: url('/wp-content/themes/veeva2015/assets/fpo/summit-tile-bg.webp'); background-position: bottom right;">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/commercial-summit-logo-stacked-b.png" alt="Veeva Commercial Summit - Sales · Medical · Marketing"/>
                        </div>
                    </a>

                    <!-- resource card, bg gradient blue, as popup video -->
                    <div class="resource-card js-wistia-resource-card resource-card--with-bg-gradient-dark-blue resource-card--mobile-show-logo" data-wistia-video-id="zif0sst0fa">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Video</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will show popup video: lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-secondary" href="https://google.com" target="_self">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                                <span>CTA Text</span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/alcon.png" alt="alcon" />
                            </div>
                        </div>

                        <div class="resource-card__media">
                            <!-- video with default thumbnail -->
                            <!-- NEED THIS element for video to work -->
                            <div class="video wistia-video"></div>
                        </div>
                    </div>

                    <!-- resource card, bg gradient dark blue, as link  -->
                    <a class="resource-card resource-card--with-bg-gradient-dark resource-card--mobile-show-logo" href="https://www.google.com/" target="_blank">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Video</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open external link: Lorem ipsum dolor sit amet, consectetur adipiscing</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-secondary" href="https://google.com" target="_self">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                                <span>CTA Text</span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/gilead.png" alt="Gilead" />
                            </div>
                        </div>
                        <div class="resource-card__media"></div>
                    </a>

                    <!-- resource card, bg image, as link -->
                    <a class="resource-card resource-card--mobile-show-logo" href="https://www.google.com/" target="_self">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Article</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open link: Lorem ipsum dolor sit amet</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-text-link button-text-link--white">
                                <span class="label">Read More</span>
                                <span class="underline"></span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/veeva.png" alt="Veeva" />
                            </div>
                        </div>
                        <div class="resource-card__media">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                        </div>
                    </a>

                    <!-- resource card, bg gradient orange -->
                    <a class="resource-card resource-card--with-bg-gradient-orange" href="https://www.google.com/" target="_self">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Article</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open link: lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-text-link button-text-link--white">
                                <span class="label">Read More</span>
                                <span class="underline"></span>
                            </div>
                        </div>
                        <div class="resource-card__media"></div>
                    </a>

                    <!-- resource card, bg light gradient blue -->
                    <a class="resource-card resource-card--with-bg-gradient-blue resource-card--mobile-show-logo" href="https://www.google.com/" target="_blank">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Video</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open external link: Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-secondary">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="">
                                <span>CTA Text</span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/alcon.png" alt="Alcon" />
                            </div>
                        </div>
                        <div class="resource-card__media"></div>
                    </a>
                </div>
            </div>
        </section>
    `,
};

const ResourceFeaturedDark = {
    /* html */
    template: `
        <!-- Resource - Featured, Dark -->
        <section class="resource-block-featured resource-block-featured--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum
                    </h6>
                    <h3>
                        Resource Block - Featured <br />
                        Light Mode
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="[url]" target="[target]"> Register Now </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>

                <div class="resource-block__cards resource-block__cards--featured">
                    <!-- resource card, bg gradient orange -->
                    <a id="resource-card--summit" class="resource-card resource-card--with-bg-gradient-orange" href="/events/commercial-summit/">
                        <div class="resource-card__text">
                            <div class="resource-chip">
                                <div class="resource-chip__icon">
                                    <span class="icon" data-icon="star-fill-1"></span>
                                </div>
                                Veeva Summit
                            </div>
                            <h6>Commercial Summit</h6>
                            <h5>Shape the Future of <br>Commercial and Medical</h5>
                            <p>Boston | May 7-8, 2024</p>
                            <div class="resource-card__cta button-primary button-primary--white">Register Now</div>
                        </div>
                        <div class="resource-card__media resource-card__media--bg" style="background-image: url('/wp-content/themes/veeva2015/assets/fpo/summit-tile-bg.webp'); background-position: bottom right;">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/commercial-summit-logo-stacked-b.png" alt="Veeva Commercial Summit - Sales · Medical · Marketing"/>
                        </div>
                    </a>

                    <!-- resource card, bg gradient blue, as popup video -->
                    <div class="resource-card js-wistia-resource-card resource-card--with-bg-gradient-dark-blue resource-card--mobile-show-logo" data-wistia-video-id="zif0sst0fa">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Video</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will show popup video: lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-secondary" href="https://google.com" target="_self">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                                <span>CTA Text</span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/alcon.png" alt="alcon" />
                            </div>
                        </div>

                        <div class="resource-card__media">
                            <!-- video with default thumbnail -->
                            <!-- NEED THIS element for video to work -->
                            <div class="video wistia-video"></div>
                        </div>
                    </div>

                    <!-- resource card, bg gradient dark blue, as link  -->
                    <a class="resource-card resource-card--with-bg-gradient-dark resource-card--mobile-show-logo" href="https://www.google.com/" target="_blank">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Video</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open external link: Lorem ipsum dolor sit amet, consectetur adipiscing</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-secondary" href="https://google.com" target="_self">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                                <span>CTA Text</span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/gilead.png" alt="Gilead" />
                            </div>
                        </div>
                        <div class="resource-card__media"></div>
                    </a>

                    <!-- resource card, bg image, as link -->
                    <a class="resource-card resource-card--mobile-show-logo" href="https://www.google.com/" target="_self">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Article</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open link: Lorem ipsum dolor sit amet</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-text-link button-text-link--white">
                                <span class="label">Read More</span>
                                <span class="underline"></span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/veeva.png" alt="Veeva" />
                            </div>
                        </div>
                        <div class="resource-card__media">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                        </div>
                    </a>

                    <!-- resource card, bg gradient orange -->
                    <a class="resource-card resource-card--with-bg-gradient-orange" href="https://www.google.com/" target="_self">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Article</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open link: lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-text-link button-text-link--white">
                                <span class="label">Read More</span>
                                <span class="underline"></span>
                            </div>
                        </div>
                        <div class="resource-card__media"></div>
                    </a>

                    <!-- resource card, bg light gradient blue -->
                    <a class="resource-card resource-card--with-bg-gradient-blue resource-card--mobile-show-logo" href="https://www.google.com/" target="_blank">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Video</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open external link: Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-secondary">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="">
                                <span>CTA Text</span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/alcon.png" alt="Alcon" />
                            </div>
                        </div>
                        <div class="resource-card__media"></div>
                    </a>
                </div>
            </div>
        </section>
    `,
};

const ResourceFeaturedLightContained = {
    /* html */
    template: `
        <!-- Resource - Featured , Light, Contained -->
        <section class="resource-block-featured resource-block-featured--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum
                    </h6>
                    <h3>
                        Resource Block - Featured <br />
                        Light Mode, contained-xl
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="[url]" target="[target]"> Register Now </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>

                <div class="resource-block__cards resource-block__cards--featured section-contained-width--xl">
                    <!-- resource card, bg gradient orange -->
                    <a id="resource-card--summit" class="resource-card resource-card--with-bg-gradient-orange" href="/events/commercial-summit/">
                        <div class="resource-card__text">
                            <div class="resource-chip">
                                <div class="resource-chip__icon">
                                    <span class="icon" data-icon="star-fill-1"></span>
                                </div>
                                Veeva Summit
                            </div>
                            <h6>Commercial Summit</h6>
                            <h5>Shape the Future of <br>Commercial and Medical</h5>
                            <p>Boston | May 7-8, 2024</p>
                            <div class="resource-card__cta button-primary button-primary--white">Register Now</div>
                        </div>
                        <div class="resource-card__media resource-card__media--bg" style="background-image: url('/wp-content/themes/veeva2015/assets/fpo/summit-tile-bg.webp'); background-position: bottom right;">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/commercial-summit-logo-stacked-b.png" alt="Veeva Commercial Summit - Sales · Medical · Marketing"/>
                        </div>
                    </a>

                    <!-- resource card, bg gradient blue, as popup video -->
                    <div class="resource-card js-wistia-resource-card resource-card--with-bg-gradient-dark-blue resource-card--mobile-show-logo" data-wistia-video-id="zif0sst0fa">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Video</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will show popup video: lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-secondary" href="https://google.com" target="_self">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                                <span>CTA Text</span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/alcon.png" alt="alcon" />
                            </div>
                        </div>

                        <div class="resource-card__media">
                            <!-- video with default thumbnail -->
                            <!-- NEED THIS element for video to work -->
                            <div class="video wistia-video"></div>
                        </div>
                    </div>

                    <!-- resource card, bg gradient dark blue, as link  -->
                    <a class="resource-card resource-card--with-bg-gradient-dark resource-card--mobile-show-logo" href="https://www.google.com/" target="_blank">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Video</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open external link: Lorem ipsum dolor sit amet, consectetur adipiscing</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-secondary" href="https://google.com" target="_self">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                                <span>CTA Text</span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/gilead.png" alt="Gilead" />
                            </div>
                        </div>
                        <div class="resource-card__media"></div>
                    </a>

                    <!-- resource card, bg image, as link -->
                    <a class="resource-card resource-card--mobile-show-logo" href="https://www.google.com/" target="_self">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Article</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open link: Lorem ipsum dolor sit amet</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-text-link button-text-link--white">
                                <span class="label">Read More</span>
                                <span class="underline"></span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/veeva.png" alt="Veeva" />
                            </div>
                        </div>
                        <div class="resource-card__media">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                        </div>
                    </a>

                    <!-- resource card, bg gradient orange -->
                    <a class="resource-card resource-card--with-bg-gradient-orange" href="https://www.google.com/" target="_self">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Article</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open link: lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-text-link button-text-link--white">
                                <span class="label">Read More</span>
                                <span class="underline"></span>
                            </div>
                        </div>
                        <div class="resource-card__media"></div>
                    </a>

                    <!-- resource card, bg light gradient blue -->
                    <a class="resource-card resource-card--with-bg-gradient-blue resource-card--mobile-show-logo" href="https://www.google.com/" target="_blank">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Video</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open external link: Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-secondary">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="">
                                <span>CTA Text</span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/alcon.png" alt="Alcon" />
                            </div>
                        </div>
                        <div class="resource-card__media"></div>
                    </a>
                </div>
            </div>
        </section>
    `,
};

const ResourceFeaturedDarkContained = {
    /* html */
    template: `
        <!-- Resource - Featured, Dark, Contained -->
        <section class="resource-block-featured resource-block-featured--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum
                    </h6>
                    <h3>
                        Resource Block - Featured <br />
                        Light Mode, contained-xl
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="[url]" target="[target]"> Register Now </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>

                <div class="resource-block__cards resource-block__cards--featured section-contained-width--xl">
                    <!-- resource card, bg gradient orange -->
                    <a id="resource-card--summit" class="resource-card resource-card--with-bg-gradient-orange" href="/events/commercial-summit/">
                        <div class="resource-card__text">
                            <div class="resource-chip">
                                <div class="resource-chip__icon">
                                    <span class="icon" data-icon="star-fill-1"></span>
                                </div>
                                Veeva Summit
                            </div>
                            <h6>Commercial Summit</h6>
                            <h5>Shape the Future of <br>Commercial and Medical</h5>
                            <p>Boston | May 7-8, 2024</p>
                            <div class="resource-card__cta button-primary button-primary--white">Register Now</div>
                        </div>
                        <div class="resource-card__media resource-card__media--bg" style="background-image: url('/wp-content/themes/veeva2015/assets/fpo/summit-tile-bg.webp'); background-position: bottom right;">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/commercial-summit-logo-stacked-b.png" alt="Veeva Commercial Summit - Sales · Medical · Marketing"/>
                        </div>
                    </a>

                    <!-- resource card, bg gradient blue, as popup video -->
                    <div class="resource-card js-wistia-resource-card resource-card--with-bg-gradient-dark-blue resource-card--mobile-show-logo" data-wistia-video-id="zif0sst0fa">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Video</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will show popup video: lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-secondary" href="https://google.com" target="_self">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                                <span>CTA Text</span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/alcon.png" alt="alcon" />
                            </div>
                        </div>

                        <div class="resource-card__media">
                            <!-- video with default thumbnail -->
                            <!-- NEED THIS element for video to work -->
                            <div class="video wistia-video"></div>
                        </div>
                    </div>

                    <!-- resource card, bg gradient dark blue, as link  -->
                    <a class="resource-card resource-card--with-bg-gradient-dark resource-card--mobile-show-logo" href="https://www.google.com/" target="_blank">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Video</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open external link: Lorem ipsum dolor sit amet, consectetur adipiscing</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-secondary" href="https://google.com" target="_self">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                                <span>CTA Text</span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/gilead.png" alt="Gilead" />
                            </div>
                        </div>
                        <div class="resource-card__media"></div>
                    </a>

                    <!-- resource card, bg image, as link -->
                    <a class="resource-card resource-card--mobile-show-logo" href="https://www.google.com/" target="_self">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Article</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open link: Lorem ipsum dolor sit amet</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-text-link button-text-link--white">
                                <span class="label">Read More</span>
                                <span class="underline"></span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/veeva.png" alt="Veeva" />
                            </div>
                        </div>
                        <div class="resource-card__media">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/media.jpg" alt="" />
                        </div>
                    </a>

                    <!-- resource card, bg gradient orange -->
                    <a class="resource-card resource-card--with-bg-gradient-orange" href="https://www.google.com/" target="_self">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Article</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open link: lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-text-link button-text-link--white">
                                <span class="label">Read More</span>
                                <span class="underline"></span>
                            </div>
                        </div>
                        <div class="resource-card__media"></div>
                    </a>

                    <!-- resource card, bg light gradient blue -->
                    <a class="resource-card resource-card--with-bg-gradient-blue resource-card--mobile-show-logo" href="https://www.google.com/" target="_blank">
                        <div class="resource-card__text">
                            <!-- resource-chip -->
                            <div class="resource-chip">Video</div>
                            
                            <!-- text -->
                            <h6>Eyebrow</h6>
                            <h5>This will open external link: Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>

                            <!-- button -->
                            <div class="resource-card__cta button-secondary">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="">
                                <span>CTA Text</span>
                            </div>

                            <!-- logo -->
                            <div class="resource-card--featured__logo client-logo">
                                <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/alcon.png" alt="Alcon" />
                            </div>
                        </div>
                        <div class="resource-card__media"></div>
                    </a>
                </div>
            </div>
        </section>
    `,
};
