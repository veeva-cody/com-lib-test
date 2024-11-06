const HeroCustomerTabs = {
    /* html */
    template: `
        <!-- Hero Customer, Customer Tabs -->
        <section class="hero-customer">
            <div class="tab-block tab-block-customer tab-block--light">
                <div class="container">
                    <div class="copy-container copy-container--center">
                        <h6>
                            <span class="icon" data-icon="box-sign"></span>
                            Lorem Ipsum
                        </h6>
                        <h1>
                            Hero Customer <br />
                            Customer Tabs
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="copy-container__buttons">
                            <a class="button-primary button-primary--gradient" href="https://google.com" target="_self"> CTA Text </a>
                            <a class="button-secondary" href="https://google.com" target="_self">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                                <span>CTA Text</span>
                            </a>
                        </div>
                    </div>
                </div>
    
                <div class="tab-block__content">
                    <!-- tablist -->
                    <div class="tablist tablist-client">
                        <ul class="nav nav-pills" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo client-logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo client-logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo client-logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <!-- tablist content -->
                    <div class="container tab-content">
                        <!-- tablist content item 1 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>

                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tablist content item 2 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>
                                                <p>Tablist Content item 2</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tablist content item 3 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>

                                                <p>Tablist Content item 3</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tablist content item 4 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>

                                                <p>Tablist Content item 4</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};

const HeroCustomerVideo = {
    /* html */
    template: `
        <!-- Hero Customer, Video -->
        <section class="hero-customer">
            <div class="container">
                <div class="copy-container copy-container--center">
                    <div class="hero-logo client-logo">
                        <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/white/veeva.png" alt="Veeva" />
                    </div>
                    <h1>
                        Hero Customer <br />
                        Video
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-primary button-primary--gradient" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="hero-customer__video">
                <div class="video-player-stacked__video container">
                    <!-- NOTE: need to add wistia code + aspect ratio * -->
                    <!-- adjust video aspect ratio here -->
                    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                        <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                            <!-- add class here: wistia_async_{wistia-id} -->
                            <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height:100%;width:100%"></div>
                        </div>
                    </div>
                </div>
                <div class="video-player-stacked__stats container">
                    <div class="statistic-3-up-wrapper">
                        <div class="statistic-tool statistic-tool--light">
                            <h3>900 <sup>%</sup></h3>
                            <p>decrease in Site Selected to Site Activated cycle time</p>
                        </div>
                        <div class="statistic-tool statistic-tool--light">
                            <h3>900 <sup>%</sup></h3>
                            <p>decrease in Site Selected to Site Activated cycle time</p>
                        </div>
                        <div class="statistic-tool statistic-tool--light">
                            <h3>900 <sup>%</sup></h3>
                            <p>decrease in Site Selected to Site Activated cycle time</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};

const HeroCustomerCards = {
    /* html */
    template: `
        <!-- Hero Customer, Customer Cards -->
        <section class="hero-customer hero-customer-cards">
            <div class="container">
                <div class="copy-container copy-container--center">
                    <h6>
                        <span class="icon" data-icon="chat-bubble-oval-favorite-star"></span>
                        Customer Stories
                    </h6>
                    <h1>Customers Driving Change and Impact</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-primary button-primary--gradient" href="https://google.com" target="_self"> Watch Video </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="container hero-customer__cards-wrapper">
                <div class="hero-customer__cards">
                    <a class="customer-image-card" href="https://www.veeva.com/blog/csl-behring-decreases-field-planning-time-by-up-to-50/" target="_self">
                        <div class="customer-image-card__image">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="">
                        </div>
                        <div class="customer-image-card__info">
                            <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/color/csl-behring.png" alt="">
                            <h6>Cutting Field Planning Time by Half</h6>
                            <p>Learn Their Strategy</p>
                        </div>
                    </a>

                    <a class="customer-image-card" href="https://www.veeva.com/blog/csl-behring-decreases-field-planning-time-by-up-to-50/" target="_self">
                        <div class="customer-image-card__image">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="">
                        </div>
                        <div class="customer-image-card__info">
                            <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/color/replimune.png" alt="">
                            <h6>Reducing Site Data Entry by 30%</h6>
                            <p>Hear How They’re Speeding Trials</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    `
}

const HeroCustomerTabsBgBlue = {
    /* html */
    template: `
        <!-- Hero Customer, Customer Tabs -->
        <section class="hero-customer hero-customer--blue">
            <div class="tab-block tab-block-customer tab-block--light">
                <div class="container">
                    <div class="copy-container copy-container--center">
                        <h6>
                            <span class="icon" data-icon="box-sign"></span>
                            Lorem Ipsum
                        </h6>
                        <h1>
                            Hero Customer <br />
                            Customer Tabs
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="copy-container__buttons">
                            <a class="button-primary button-primary--gradient" href="https://google.com" target="_self"> CTA Text </a>
                            <a class="button-secondary" href="https://google.com" target="_self">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                                <span>CTA Text</span>
                            </a>
                        </div>
                    </div>
                </div>
    
                <div class="tab-block__content">
                    <!-- tablist -->
                    <div class="tablist tablist-client">
                        <ul class="nav nav-pills" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo client-logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo client-logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo client-logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <!-- tablist content -->
                    <div class="container tab-content">
                        <!-- tablist content item 1 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>

                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tablist content item 2 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>
                                                <p>Tablist Content item 2</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tablist content item 3 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>

                                                <p>Tablist Content item 3</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tablist content item 4 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>

                                                <p>Tablist Content item 4</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};

const HeroCustomerTabsBgGrey = {
    /* html */
    template: `
        <!-- Hero Customer, Customer Tabs -->
        <section class="hero-customer hero-customer--grey">
            <div class="tab-block tab-block-customer tab-block--light">
                <div class="container">
                    <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                        <h6>
                            <span class="icon" data-icon="box-sign"></span>
                            Lorem Ipsum
                        </h6>
                        <h1>
                            Hero Customer <br />
                            Customer Tabs
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="copy-container__buttons">
                            <a class="button-primary button-primary--gradient" href="https://google.com" target="_self"> CTA Text </a>
                            <a class="button-secondary button-secondary--icon-bg-white" href="https://google.com" target="_self">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                                <span>CTA Text</span>
                            </a>
                        </div>
                    </div>
                </div>
    
                <div class="tab-block__content">
                    <!-- tablist -->
                    <div class="tablist tablist-client">
                        <ul class="nav nav-pills" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo client-logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo client-logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo client-logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <!-- tablist content -->
                    <div class="container tab-content">
                        <!-- tablist content item 1 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>

                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tablist content item 2 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>
                                                <p>Tablist Content item 2</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tablist content item 3 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>

                                                <p>Tablist Content item 3</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tablist content item 4 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>

                                                <p>Tablist Content item 4</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};

const HeroCustomerTabsImage = {
    /* html */
    template: `
        <!-- Hero Customer, Customer Tabs -->
        <!-- Can use inline style tag, or target .hero-customer--image via css to update its background images -->
        <section class="hero-customer hero-customer--image" style="--mobile-image: url('/wp-content/themes/veeva2015/assets/veeva-2024/background/gateway-hero-desktop.jpg'); --desktop-image: url('/wp-content/themes/veeva2015/assets/veeva-2024/background/gateway-hero-desktop.jpg');">
            <div class="tab-block tab-block-customer tab-block--light">
                <div class="container">
                    <div class="copy-container copy-container--center">
                        <h6>
                            <span class="icon" data-icon="box-sign"></span>
                            Lorem Ipsum
                        </h6>
                        <h1>
                            Hero Customer <br />
                            Customer Tabs
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="copy-container__buttons">
                            <a class="button-primary button-primary--gradient" href="https://google.com" target="_self"> CTA Text </a>
                            <a class="button-secondary" href="https://google.com" target="_self">
                                <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                                <span>CTA Text</span>
                            </a>
                        </div>
                    </div>
                </div>
    
                <div class="tab-block__content">
                    <!-- tablist -->
                    <div class="tablist tablist-client">
                        <ul class="nav nav-pills" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo client-logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo client-logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tablist-link tablist-link-client">
                                    <div class="tablist-link-client__topbar">
                                        <span>Development Cloud</span>
                                    </div>
                                    <div class="tablist-link-client__logo client-logo">
                                        <span class="logo-svg" data-logo="horizon"></span>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <!-- tablist content -->
                    <div class="container tab-content">
                        <!-- tablist content item 1 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>

                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tablist content item 2 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>
                                                <p>Tablist Content item 2</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tablist content item 3 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>

                                                <p>Tablist Content item 3</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- tablist content item 4 -->
                        <div class="tab-pane">
                            <!-- customer-story-card -->
                            <div class="customer-story-card">
                                <!-- customer-story-card: media -->
                                <a class="customer-story-card__media" href="https://www.veeva.com/blog/what-is-real-time-uat/" target="_blank">
                                    <img class="customer-story-card__image" src="/wp-content/themes/veeva2015/assets/fpo/testimonial-placeholder.jpg" alt="customer story image" />

                                    <div class="customer-story-card__image-overlay">
                                        <div class="customer-story-card__image-content">
                                            <div class="customer-story-card__image-title">
                                                <div class="client-logo">
                                                    <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                                </div>

                                                <h5>
                                                    Reducing Site and Patient Burden <br />
                                                    While Saving Millions
                                                </h5>

                                                <p>Tablist Content item 4</p>
                                            </div>
                                            <div class="customer-story-card__cta">
                                                <span class="icon" data-icon="arrow-up-right--white"> </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <!-- customer-story-card: content -->
                                <div class="customer-story-card__content sidebar">
                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>30%</h4>
                                        <p>Reduction in data entry for sites</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--stats-lg">
                                        <h4>$1 Million+</h4>
                                        <p>Saved per trial</p>
                                    </div>

                                    <div class="sidebar-info-box sidebar-info-box--product-list sidebar-info-box--product-list--title-sm">
                                        <h5 class="h5">Featured Products</h5>
                                        <div class="sidebar-info-box--product-list__links">
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 1 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 2 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                            <a href="https://www.google.com/" class="product-arrow-link" target="_blank">
                                                <div class="product-arrow-link__icon">
                                                    <span class="icon" data-icon="medical-bag"></span>
                                                </div>
                                                <span> Veeva Product 3 </span>
                                                <div class="product-arrow-link__arrow">
                                                    <span class="icon" data-icon="arrow-up-right--black"> </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};

const HeroCustomerVideoBlue = {
    /* html */
    template: `
        <!-- Hero Customer, Video -->
        <section class="hero-customer hero-customer--blue">
            <div class="container">
                <div class="copy-container copy-container--center">
                    <h6>
                        <span class="icon ready" data-icon="box-sign"></span> Lorem Ipsum
                    </h6>
                    <h1>
                        Hero Customer <br />
                        Video
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-primary button-primary--gradient" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="hero-customer__video">
                <div class="video-player-stacked__video container">
                    <!-- NOTE: need to add wistia code + aspect ratio * -->
                    <!-- adjust video aspect ratio here -->
                    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                        <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                            <!-- add class here: wistia_async_{wistia-id} -->
                            <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height:100%;width:100%"></div>
                        </div>
                    </div>
                </div>
                <div class="video-player-stacked__stats container">
                    <div class="statistic-3-up-wrapper">
                        <div class="statistic-tool statistic-tool--light">
                            <h3>900 <sup>%</sup></h3>
                            <p>decrease in Site Selected to Site Activated cycle time</p>
                        </div>
                        <div class="statistic-tool statistic-tool--light">
                            <h3>900 <sup>%</sup></h3>
                            <p>decrease in Site Selected to Site Activated cycle time</p>
                        </div>
                        <div class="statistic-tool statistic-tool--light">
                            <h3>900 <sup>%</sup></h3>
                            <p>decrease in Site Selected to Site Activated cycle time</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};

const HeroCustomerVideoGrey = {
    /* html */
    template: `
        <!-- Hero Customer, Video -->
        <section class="hero-customer hero-customer--grey">
            <div class="container">
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon ready" data-icon="box-sign"></span> Lorem Ipsum
                    </h6>
                    <h1>
                        Hero Customer <br />
                        Video
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-primary button-primary--gradient" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary button-secondary--icon-bg-white" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="hero-customer__video">
                <div class="video-player-stacked__video container">
                    <!-- NOTE: need to add wistia code + aspect ratio * -->
                    <!-- adjust video aspect ratio here -->
                    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                        <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                            <!-- add class here: wistia_async_{wistia-id} -->
                            <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height:100%;width:100%"></div>
                        </div>
                    </div>
                </div>
                <div class="video-player-stacked__stats container">
                    <div class="statistic-3-up-wrapper">
                        <div class="statistic-tool statistic-tool--light">
                            <h3>900 <sup>%</sup></h3>
                            <p>decrease in Site Selected to Site Activated cycle time</p>
                        </div>
                        <div class="statistic-tool statistic-tool--light">
                            <h3>900 <sup>%</sup></h3>
                            <p>decrease in Site Selected to Site Activated cycle time</p>
                        </div>
                        <div class="statistic-tool statistic-tool--light">
                            <h3>900 <sup>%</sup></h3>
                            <p>decrease in Site Selected to Site Activated cycle time</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};

const HeroCustomerVideoImage = {
    /* html */
    template: `
        <!-- Hero Customer, Video -->
        <!-- Can use inline style tag, or target .hero-customer--image via css to update its background images -->
        <section class="hero-customer hero-customer--image" style="--mobile-image: url('/wp-content/themes/veeva2015/assets/veeva-2024/background/gateway-hero-desktop.jpg'); --desktop-image: url('/wp-content/themes/veeva2015/assets/veeva-2024/background/gateway-hero-desktop.jpg');">
            <div class="container">
                <div class="copy-container copy-container--center">
                    <h6>
                        <span class="icon ready" data-icon="box-sign"></span> Lorem Ipsum
                    </h6>
                    <h1>
                        Hero Customer <br />
                        Video
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-primary button-primary--gradient" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="hero-customer__video">
                <div class="video-player-stacked__video container">
                    <!-- NOTE: need to add wistia code + aspect ratio * -->
                    <!-- adjust video aspect ratio here -->
                    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                        <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                            <!-- add class here: wistia_async_{wistia-id} -->
                            <div class="wistia_embed wistia_async_p4uz0e9bjz" style="height:100%;width:100%"></div>
                        </div>
                    </div>
                </div>
                <div class="video-player-stacked__stats container">
                    <div class="statistic-3-up-wrapper">
                        <div class="statistic-tool statistic-tool--light">
                            <h3>900 <sup>%</sup></h3>
                            <p>decrease in Site Selected to Site Activated cycle time</p>
                        </div>
                        <div class="statistic-tool statistic-tool--light">
                            <h3>900 <sup>%</sup></h3>
                            <p>decrease in Site Selected to Site Activated cycle time</p>
                        </div>
                        <div class="statistic-tool statistic-tool--light">
                            <h3>900 <sup>%</sup></h3>
                            <p>decrease in Site Selected to Site Activated cycle time</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};

const HeroCustomerCardsBgBlue = {
    /* html */
    template: `
        <!-- Hero Customer, Customer Cards -->
        <section class="hero-customer hero-customer-cards hero-customer--blue">
            <div class="container">
                <div class="copy-container copy-container--center">
                    <h6>
                        <span class="icon" data-icon="chat-bubble-oval-favorite-star"></span>
                        Customer Stories
                    </h6>
                    <h1>Customers Driving Change and Impact</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-primary button-primary--gradient" href="https://google.com" target="_self"> Watch Video </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="container hero-customer__cards-wrapper">
                <div class="hero-customer__cards">
                    <a class="customer-image-card" href="https://www.veeva.com/blog/csl-behring-decreases-field-planning-time-by-up-to-50/" target="_self">
                        <div class="customer-image-card__image">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="">
                        </div>
                        <div class="customer-image-card__info">
                            <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/color/csl-behring.png" alt="">
                            <h6>Cutting Field Planning Time by Half</h6>
                            <p>Learn Their Strategy</p>
                        </div>
                    </a>

                    <a class="customer-image-card" href="https://www.veeva.com/blog/csl-behring-decreases-field-planning-time-by-up-to-50/" target="_self">
                        <div class="customer-image-card__image">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="">
                        </div>
                        <div class="customer-image-card__info">
                            <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/color/replimune.png" alt="">
                            <h6>Reducing Site Data Entry by 30%</h6>
                            <p>Hear How They’re Speeding Trials</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>    
    `
}

const HeroCustomerCardsGrey = {
    /* html */
    template: `
        <!-- Hero Customer, Customer Cards -->
        <section class="hero-customer hero-customer-cards hero-customer--grey">
            <div class="container">
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="chat-bubble-oval-favorite-star"></span>
                        Customer Stories
                    </h6>
                    <h1>Customers Driving Change and Impact</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-primary button-primary--gradient" href="https://google.com" target="_self"> Watch Video </a>
                        <a class="button-secondary button-secondary--icon-bg-white" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="container hero-customer__cards-wrapper">
                <div class="hero-customer__cards">
                    <a class="customer-image-card" href="https://www.veeva.com/blog/csl-behring-decreases-field-planning-time-by-up-to-50/" target="_self">
                        <div class="customer-image-card__image">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="">
                        </div>
                        <div class="customer-image-card__info">
                            <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/color/csl-behring.png" alt="">
                            <h6>Cutting Field Planning Time by Half</h6>
                            <p>Learn Their Strategy</p>
                        </div>
                    </a>

                    <a class="customer-image-card" href="https://www.veeva.com/blog/csl-behring-decreases-field-planning-time-by-up-to-50/" target="_self">
                        <div class="customer-image-card__image">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="">
                        </div>
                        <div class="customer-image-card__info">
                            <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/color/replimune.png" alt="">
                            <h6>Reducing Site Data Entry by 30%</h6>
                            <p>Hear How They’re Speeding Trials</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>    
    `
}

const HeroCustomerCardsImage = {
    /* html */
    template: `
        <!-- Hero Customer, Customer Cards -->
        <!-- Can use inline style tag, or target .hero-customer--image via css to update its background images -->
        <section class="hero-customer hero-customer-cards hero-customer--image" style="--mobile-image: url('/wp-content/themes/veeva2015/assets/veeva-2024/background/gateway-hero-desktop.jpg'); --desktop-image: url('/wp-content/themes/veeva2015/assets/veeva-2024/background/gateway-hero-desktop.jpg');">
            <div class="container">
                <div class="copy-container copy-container--center">
                    <h6>
                        <span class="icon" data-icon="chat-bubble-oval-favorite-star"></span>
                        Customer Stories
                    </h6>
                    <h1>Customers Driving Change and Impact</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-primary button-primary--gradient" href="https://google.com" target="_self"> Watch Video </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="container hero-customer__cards-wrapper">
                <div class="hero-customer__cards">
                    <a class="customer-image-card" href="https://www.veeva.com/blog/csl-behring-decreases-field-planning-time-by-up-to-50/" target="_self">
                        <div class="customer-image-card__image">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="">
                        </div>
                        <div class="customer-image-card__info">
                            <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/color/csl-behring.png" alt="">
                            <h6>Cutting Field Planning Time by Half</h6>
                            <p>Learn Their Strategy</p>
                        </div>
                    </a>

                    <a class="customer-image-card" href="https://www.veeva.com/blog/csl-behring-decreases-field-planning-time-by-up-to-50/" target="_self">
                        <div class="customer-image-card__image">
                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="">
                        </div>
                        <div class="customer-image-card__info">
                            <img src="/wp-content/themes/veeva2015/assets/logos/trimmed/color/replimune.png" alt="">
                            <h6>Reducing Site Data Entry by 30%</h6>
                            <p>Hear How They’re Speeding Trials</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>    
    `
}
