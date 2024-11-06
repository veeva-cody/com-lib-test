const QuoteTabsLightLogoTablist = {
    /* html */
    template: `
        <!-- Quote - Tabs, Light, Logo Tablist -->
        <section class="quote-tabs quote-tabs--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum
                    </h6>
                    <h3>Quote tabs, Light mode, Logo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- content -->
            <div class="quote-tabs__content">
                <!-- tablist: number of items need to be the same as the slide one, maximum 6 items *** -->
                <div class="tablist tablist-logo tablist--light">
                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/illumina.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/takeda.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/baxter.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link" aria-selected="true">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/minaris.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/kyowa-kirin.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/syneos.png" />
                            </button>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <!-- Carousel -->
                    <!-- NOTE: update carousel timing by passing in data-slide-interval="[time]", where time is in milliseconds, if no data-slide-interval is set, it'll use 8500 by default -->
                    <div class="carousel slide carousel-fade" data-slide-interval="8500">
                        <!-- carousel indicators, indicators will be generated based on number of 'carousel-item'  -->
                        <div class="carousel-indicators"></div>

                        <!-- carousel slides, no need to add active class as it'll be added automatically -->
                        <div class="carousel-inner">
                            <!-- slide 1 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"1Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <div class="quote-card__person-info__person">
                                            <div class="avatar-thumbnail">
                                                <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="">
                                            </div>
                                            <div class="quote-card__person-info-text">
                                                <h5>Robert M. Davis</h5>
                                                <h6>Chief Executive Officer and President, Merck</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 2 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"2Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 3 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"3Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 4 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"4Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 5 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"5Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 6 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"6Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
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

const QuoteTabsDarkLogoTablist = {
    /* html */
    template: `
        <!-- Quote - Tabs, Dark, Logo Tablist -->
        <section class="quote-tabs quote-tabs--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum
                    </h6>
                    <h3>Quote tabs, Light mode, Logo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- content -->
            <div class="quote-tabs__content">
                <!-- tablist: number of items need to be the same as the slide one ***, maximum 6 items -->
                <div class="tablist tablist-logo tablist--dark">
                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/illumina.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/takeda.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/baxter.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link" aria-selected="true">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/minaris.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/kyowa-kirin.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/syneos.png" />
                            </button>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <!-- Carousel -->
                    <!-- NOTE: update carousel timing by passing in data-slide-interval="[time]", where time is in milliseconds, if no data-slide-interval is set, it'll use 8500 by default -->
                    <div class="carousel slide carousel-fade" data-slide-interval="8500">
                        <!-- carousel indicators, indicators will be generated based on number of 'carousel-item'  -->
                        <div class="carousel-indicators"></div>

                        <!-- carousel slides, no need to add active class as it'll be added automatically -->
                        <div class="carousel-inner">
                            <!-- slide 1 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"1Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 2 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"2Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 3 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"3Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 4 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"4Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 5 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"5Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 6 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"6Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
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

const QuoteTabsLightLogoTablistSplitGrey = {
    /* html */
    template: `
        <!-- Quote - Tabs, Light, Logo Tablist -->
        <section class="quote-tabs quote-tabs--light quote-tabs--bg-split-grey">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum
                    </h6>
                    <h3>Quote tabs, Light mode, Logo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary button-secondary--icon-bg-white" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- content -->
            <div class="quote-tabs__content">
                <!-- tablist: number of items need to be the same as the slide one, maximum 6 items *** -->
                <div class="tablist tablist-logo tablist--light">
                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/illumina.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/takeda.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/baxter.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link" aria-selected="true">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/minaris.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/kyowa-kirin.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/syneos.png" />
                            </button>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <!-- Carousel -->
                    <!-- NOTE: update carousel timing by passing in data-slide-interval="[time]", where time is in milliseconds, if no data-slide-interval is set, it'll use 8500 by default -->
                    <div class="carousel slide carousel-fade" data-slide-interval="8500">
                        <!-- carousel indicators, indicators will be generated based on number of 'carousel-item'  -->
                        <div class="carousel-indicators"></div>

                        <!-- carousel slides, no need to add active class as it'll be added automatically -->
                        <div class="carousel-inner">
                            <!-- slide 1 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"1Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <div class="quote-card__person-info__person">
                                            <div class="avatar-thumbnail">
                                                <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="">
                                            </div>
                                            <div class="quote-card__person-info-text">
                                                <h5>Robert M. Davis</h5>
                                                <h6>Chief Executive Officer and President, Merck</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 2 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"2Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 3 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"3Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 4 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"4Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 5 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"5Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 6 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"6Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
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

const QuoteTabsDarkLogoTablistBgBlack = {
    /* html */
    template: `
        <!-- Quote - Tabs, Dark, Logo Tablist -->
        <section class="quote-tabs quote-tabs--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum
                    </h6>
                    <h3>Quote tabs, Light mode, Logo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- content -->
            <div class="quote-tabs__content">
                <!-- tablist: number of items need to be the same as the slide one ***, maximum 6 items -->
                <div class="tablist tablist-logo tablist--dark">
                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/illumina.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/takeda.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/baxter.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link" aria-selected="true">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/minaris.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/kyowa-kirin.png" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">
                                <img src="/wp-content/themes/veeva2015/assets/logos/color/syneos.png" />
                            </button>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <!-- Carousel -->
                    <!-- NOTE: update carousel timing by passing in data-slide-interval="[time]", where time is in milliseconds, if no data-slide-interval is set, it'll use 8500 by default -->
                    <div class="carousel slide carousel-fade" data-slide-interval="8500">
                        <!-- carousel indicators, indicators will be generated based on number of 'carousel-item'  -->
                        <div class="carousel-indicators"></div>

                        <!-- carousel slides, no need to add active class as it'll be added automatically -->
                        <div class="carousel-inner">
                            <!-- slide 1 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"1Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 2 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"2Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 3 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"3Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 4 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"4Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 5 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"5Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 6 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"6Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
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

const QuoteTabsLightTextTablist = {
    /* html */
    template: `
        <!-- Quote - Tabs, Light, Text Tablist -->
        <section class="quote-tabs quote-tabs--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum
                    </h6>
                    <h3>Quote tabs, Light mode, Text</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- content -->
            <div class="quote-tabs__content">
                <!-- tablist: number of items need to be the same as the slide one, maximum 6 items *** -->
                <div class="tablist tablist-text tablist--light">
                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Clinical</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Regulatory</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Quality</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link" aria-selected="true">Safety</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Medical</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Commercial</button>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <!-- Carousel -->
                    <!-- NOTE: update carousel timing by passing in data-slide-interval="[time]", where time is in milliseconds, if no data-slide-interval is set, it'll use 8500 by default -->
                    <div class="carousel slide carousel-fade" data-slide-interval="8500">
                        <!-- carousel indicators, indicators will be generated based on number of 'carousel-item'  -->
                        <div class="carousel-indicators"></div>

                        <!-- carousel slides, no need to add active class as it'll be added automatically -->
                        <div class="carousel-inner">
                            <!-- slide 1 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"1Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 2 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"2Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 3 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"3Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 4 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"4Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 5 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"5Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 6 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"6Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
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

const QuoteTabsDarkTextTablist = {
    /* html */
    template: `
        <!-- Quote - Tabs, Dark, Text Tablist -->
        <section class="quote-tabs quote-tabs--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum
                    </h6>
                    <h3>Quote tabs, Light mode, Text</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>
            </div>

            <!--  quote tabs: content -->
            <div class="quote-tabs__content">
                <!-- tablist -->
                <div class="tablist tablist-text tablist--dark">
                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Clinical</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Regulatory</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Quality</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link" aria-selected="true">Safety</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Medical</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Commercial</button>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <!-- Carousel -->
                    <!-- NOTE: update carousel timing by passing in data-slide-interval="[time]", where time is in milliseconds, if no data-slide-interval is set, it'll use 8500 by default -->
                    <div class="carousel slide carousel-fade" data-slide-interval="8500">
                        <!-- carousel indicators, indicators will be generated based on number of 'carousel-item'  -->
                        <div class="carousel-indicators"></div>

                        <!-- carousel slides, no need to add active class as it'll be added automatically -->
                        <div class="carousel-inner">
                            <!-- slide 1 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"1Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 2 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"2Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 3 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"3Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 4 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"4Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 5 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"5Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 6 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"6Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
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

const QuoteTabsLightTextTablistSplitGrey = {
    /* html */
    template: `
        <!-- Quote - Tabs, Light, Text Tablist -->
        <section class="quote-tabs quote-tabs--light quote-tabs--bg-split-grey">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum
                    </h6>
                    <h3>Quote tabs, Light mode, Text</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary button-secondary--icon-bg-white" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- content -->
            <div class="quote-tabs__content">
                <!-- tablist: number of items need to be the same as the slide one, maximum 6 items *** -->
                <div class="tablist tablist-text tablist--light">
                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Clinical</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Regulatory</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Quality</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link" aria-selected="true">Safety</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Medical</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Commercial</button>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <!-- Carousel -->
                    <!-- NOTE: update carousel timing by passing in data-slide-interval="[time]", where time is in milliseconds, if no data-slide-interval is set, it'll use 8500 by default -->
                    <div class="carousel slide carousel-fade" data-slide-interval="8500">
                        <!-- carousel indicators, indicators will be generated based on number of 'carousel-item'  -->
                        <div class="carousel-indicators"></div>

                        <!-- carousel slides, no need to add active class as it'll be added automatically -->
                        <div class="carousel-inner">
                            <!-- slide 1 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"1Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 2 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"2Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 3 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"3Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 4 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"4Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 5 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"5Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 6 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"6Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
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

const QuoteTabsDarkTextTablistBgBlack = {
    /* html */
    template: `
        <!-- Quote - Tabs, Dark, Text Tablist -->
        <section class="quote-tabs quote-tabs--dark quote-tabs--bg-black">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum
                    </h6>
                    <h3>Quote tabs, Light mode, Text</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>
            </div>

            <!--  quote tabs: content -->
            <div class="quote-tabs__content">
                <!-- tablist -->
                <div class="tablist tablist-text tablist--dark">
                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Clinical</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Regulatory</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Quality</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link" aria-selected="true">Safety</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Medical</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tablist-link">Commercial</button>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <!-- Carousel -->
                    <!-- NOTE: update carousel timing by passing in data-slide-interval="[time]", where time is in milliseconds, if no data-slide-interval is set, it'll use 8500 by default -->
                    <div class="carousel slide carousel-fade" data-slide-interval="8500">
                        <!-- carousel indicators, indicators will be generated based on number of 'carousel-item'  -->
                        <div class="carousel-indicators"></div>

                        <!-- carousel slides, no need to add active class as it'll be added automatically -->
                        <div class="carousel-inner">
                            <!-- slide 1 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"1Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 2 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"2Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 3 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"3Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 4 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"4Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 5 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"5Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- slide 6 -->
                            <div class="carousel-item">
                                <div class="quote-card quote-card-full quote-card-full--medium-text">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"6Quote card: medium text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="client-logo">
                                            <img src="/wp-content/themes/veeva2015/assets/logos/color/merck.png" alt="merck" />
                                        </div>
                                        <h5>Robert M. Davis</h5>
                                        <h6>Chief Executive Officer and President, Merck</h6>
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

const QuoteTabsLightSingleQuoteCard = {
    /* html */
    template: `
        <!-- Quote - Tabs, Light, Single Quote Card -->
        <section class="quote-tabs quote-tabs--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="chat-bubble-typing-oval"></span>Testimonials</h6>
                    <h3>What Summit Attendees Say</h3>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                    </div>
                </div>
            </div>

            <div class="quote-tabs__content">
                <div class="container">
                    <!-- Carousel -->
                    <!-- NOTE: update carousel timing by passing in data-slide-interval="[time]", where time is in milliseconds, if no data-slide-interval is set, it'll use 8500 by default -->
                    <div class="carousel slide carousel-fade" data-slide-interval="8500">
                        <div class="carousel-indicators"></div>
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                <!-- quote-card-single -->
                                <div class="quote-card quote-card-single">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"Summit exceeded my expectations. Excellent presentations by industry leaders sparked ideas to take back to my own organization."</p>

                                        <div class="quote-card__person-info-text">
											<h5>Dewey Denham, Sr. Director, Global Quality Control</h5>
											<h6>Fortrea</h6>
										</div>

                                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="quote-card quote-card-single quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"The best thing about Summit is that if you have a question or an experience that you're having a hard time with, there's probably someone here that's had that same experience and has some answers for you."</p>

                                        <div class="quote-card__person-info-text">
											<h5>Lorena Gomez, Global Head, Study Start Up, <br>PRO Management, and Digital Implementation</h5>
											<h6>AbbVie</h6>
										</div>

                                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
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

const QuoteTabsDarkSingleQuoteCard = {
    /* html */
    template: `
        <!-- Quote - Tabs, Dark, Single Quote Card -->
        <section class="quote-tabs quote-tabs--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="chat-bubble-typing-oval"></span>Testimonials</h6>
                    <h3>What Summit Attendees Say</h3>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                    </div>
                </div>
            </div>

            <div class="quote-tabs__content">
                <div class="container">
                    <!-- Carousel -->
                    <!-- NOTE: update carousel timing by passing in data-slide-interval="[time]", where time is in milliseconds, if no data-slide-interval is set, it'll use 8500 by default -->
                    <div class="carousel slide carousel-fade" data-slide-interval="8500">
                        <div class="carousel-indicators"></div>
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                <!-- quote-card-single -->
                                <div class="quote-card quote-card-single">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"Summit exceeded my expectations. Excellent presentations by industry leaders sparked ideas to take back to my own organization."</p>

                                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="quote-card quote-card-single quote-card--bg-blue-gradient">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"The best thing about Summit is that if you have a question or an experience that you're having a hard time with, there's probably someone here that's had that same experience and has some answers for you."</p>

                                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
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

const QuoteTabsLightVerticalQuoteCard = {
    /* html */
    template: `
        <!-- Quote - Tabs, Light, Vertical Quote Card -->
        <section class="quote-tabs quote-tabs--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="chat-bubble-typing-oval"></span>Testimonials</h6>
                    <h3>What Summit Attendees Say</h3>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                    </div>
                </div>
            </div>

            <div class="quote-tabs__content">
                <div class="container">
                    <!-- Carousel -->
                    <!-- NOTE: update carousel timing by passing in data-slide-interval="[time]", where time is in milliseconds, if no data-slide-interval is set, it'll use 8500 by default -->
                    <div class="carousel slide carousel-fade" data-slide-interval="8500">
                        <div class="carousel-indicators"></div>
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                <!-- quote-card-vertical -->
                                <div class="quote-card quote-card-vertical">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"Quote card: vertical stack - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="avatar-thumbnail">
                                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt />
                                        </div>
                                        <div class="quote-card__person-info-text">
                                            <h5>Robert M. Davis</h5>
                                            <h6>Chief Executive Officer and President, Merck</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <!-- quote-card-vertical -->
                                <div class="quote-card quote-card-vertical">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"Quote card: vertical stack - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="avatar-thumbnail">
                                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt />
                                        </div>
                                        <div class="quote-card__person-info-text">
                                            <h5>Robert M. Davis</h5>
                                            <h6>Chief Executive Officer and President, Merck</h6>
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

const QuoteTabsDarkVerticalQuoteCard = {
    /* html */
    template: `
        <!-- Quote - Tabs, Dark, Vertical Quote Card -->
        <section class="quote-tabs quote-tabs--dark">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6><span class="icon" data-icon="chat-bubble-typing-oval"></span>Testimonials</h6>
                    <h3>What Summit Attendees Say</h3>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--white" href="https://google.com" target="_self"> CTA Text </a>
                    </div>
                </div>
            </div>

            <div class="quote-tabs__content">
                <div class="container">
                    <!-- Carousel -->
                    <!-- NOTE: update carousel timing by passing in data-slide-interval="[time]", where time is in milliseconds, if no data-slide-interval is set, it'll use 8500 by default -->
                    <div class="carousel slide carousel-fade" data-slide-interval="8500">
                        <div class="carousel-indicators"></div>
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                <!-- quote-card-vertical -->
                                <div class="quote-card quote-card-vertical">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"Quote card: vertical stack - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="avatar-thumbnail">
                                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt />
                                        </div>
                                        <div class="quote-card__person-info-text">
                                            <h5>Robert M. Davis</h5>
                                            <h6>Chief Executive Officer and President, Merck</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <!-- quote-card-vertical -->
                                <div class="quote-card quote-card-vertical">
                                    <div class="quote-card__quote-wrapper">
                                        <p>"Quote card: vertical stack - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet"</p>
                                    </div>

                                    <div class="quote-card__person-info">
                                        <div class="avatar-thumbnail">
                                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt />
                                        </div>
                                        <div class="quote-card__person-info-text">
                                            <h5>Robert M. Davis</h5>
                                            <h6>Chief Executive Officer and President, Merck</h6>
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
