const HeroFilterCenterGrey = {
    /* html */
    template: `
        <!-- Hero Filter, Center, Grey -->
        <section class="hero-filter hero-filter--grey">
            <div class="container copy-container copy-container--center copy-container--eyebrow-gradient">
                <h6>
                    <span class="icon" data-icon="box-sign"></span>
                    Lorem Ipsum
                </h6>
                <h3>Hero Filter, Grey</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="copy-container__buttons">
                    <a class="button-outline button-outline--black" href="[url]" target="[target]"> CTA Text </a>
                    <a class="button-secondary button-secondary--icon-bg-white" href="https://google.com" target="_self">
                        <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                        <span>CTA Text</span>
                    </a>
                </div>
            </div>

            <!-- filter field wrapper -->
            <div class="filter-field-wrapper container">
                <!-- filter dropdowns wrapper -->
                <div class="filter-dropdowns-wrapper">
                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 1</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f1-1-option-1" data-filter="f1-1-option-1" type="checkbox" value="option1" />
                                <label for="f1-1-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f1-1-option-2" data-filter="f1-1-option-2" type="checkbox" value="option1" />
                                <label for="f1-1-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f1-1-option-3" data-filter="f1-1-option-3" type="checkbox" value="option1" />
                                <label for="f1-1-option-3"> Option 3 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f1-1-option-4" data-filter="f1-1-option-4" type="checkbox" value="option1" />
                                <label for="f1-1-option-4"> Option 4 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f1-1-option-5" data-filter="f1-1-option-5" type="checkbox" value="option1" />
                                <label for="f1-1-option-5"> Option 5 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f1-1-option-6" data-filter="f1-1-option-6" type="checkbox" value="option1" />
                                <label for="f1-1-option-6"> Option 6 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 2</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f1-2-option-1" data-filter="f1-2-option-1" type="checkbox" value="option1" />
                                <label for="f1-2-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f1-2-option-2" data-filter="f1-2-option-2" type="checkbox" value="option1" />
                                <label for="f1-2-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f1-2-option-3" data-filter="f1-2-option-3" type="checkbox" value="option1" />
                                <label for="f1-2-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 3</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f1-3-option-1" data-filter="f1-3-option-1" type="checkbox" value="option1" />
                                <label for="f1-3-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f1-3-option-2" data-filter="f1-3-option-2" type="checkbox" value="option1" />
                                <label for="f1-3-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f1-3-option-3" data-filter="f1-3-option-3" type="checkbox" value="option1" />
                                <label for="f1-3-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 4</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f1-4-option-1" data-filter="f1-4-option-1" type="checkbox" value="option1" />
                                <label for="f1-4-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f1-4-option-2" data-filter="f1-4-option-2" type="checkbox" value="option1" />
                                <label for="f1-4-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f1-4-option-3" data-filter="f1-4-option-3" type="checkbox" value="option1" />
                                <label for="f1-4-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- filter search + modal btn wrapper -->
                <div class="filter-search-tool-wrapper">
                    <!-- filter search -->
                    <div class="filter-search-wrapper">
                        <span class="icon" data-icon="magnifying-glass"></span>
                        <input class="filter-search" name="search" type="text" placeholder="Search" value="" />
                    </div>

                    <!-- filter modal btn -->
                    <button
                        class="filter-modal-btn"
                        data-bs-toggle="modal"
                        data-modal-logo="/wp-content/themes/veeva2015/assets/veeva-2024/logos/trimmed/white/veeva.png"
                        data-modal-title="Filter"
                        data-modal-button-text="Filter"
                    >
                        <span class="icon" data-icon="slider-mobile"></span>
                    </button>
                </div>
            </div>

            <!-- filter tag wrapper -->
            <div class="filter-tag-wrapper container">
                <!-- filter tag -->
                <div class="filter-tag">
                    Filter Tag Name
                </div>
                
                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>
            </div>
        </section>
    `,
};

const HeroFilterCenterLight = {
    /* html */
    template: `
        <!-- Hero Filter, Center, Light -->
        <section class="hero-filter hero-filter--light">
            <div class="container copy-container copy-container--center copy-container--eyebrow-gradient">
                <h6>
                    <span class="icon" data-icon="box-sign"></span>
                    Lorem Ipsum
                </h6>
                <h3>Hero Filter, Light</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="copy-container__buttons">
                    <a class="button-outline button-outline--black" href="[url]" target="[target]"> CTA Text </a>
                    <a class="button-secondary" href="https://google.com" target="_self">
                        <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                        <span>CTA Text</span>
                    </a>
                </div>
            </div>

            <!-- filter field wrapper -->
            <div class="filter-field-wrapper container">
                <!-- filter dropdowns wrapper -->
                <div class="filter-dropdowns-wrapper">
                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 1</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f2-1-option-1" data-filter="f2-1-option-1" type="checkbox" value="option1" />
                                <label for="f2-1-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f2-1-option-2" data-filter="f2-1-option-2" type="checkbox" value="option1" />
                                <label for="f2-1-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f2-1-option-3" data-filter="f2-1-option-3" type="checkbox" value="option1" />
                                <label for="f2-1-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 2</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f2-2-option-1" data-filter="f2-2-option-1" type="checkbox" value="option1" />
                                <label for="f2-2-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f2-2-option-2" data-filter="f2-2-option-2" type="checkbox" value="option1" />
                                <label for="f2-2-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f2-2-option-3" data-filter="f2-2-option-3" type="checkbox" value="option1" />
                                <label for="f2-2-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 3</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f2-3-option-1" data-filter="f2-3-option-1" type="checkbox" value="option1" />
                                <label for="f2-3-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f2-3-option-2" data-filter="f2-3-option-2" type="checkbox" value="option1" />
                                <label for="f2-3-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f2-3-option-3" data-filter="f2-3-option-3" type="checkbox" value="option1" />
                                <label for="f2-3-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 4</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f2-4-option-1" data-filter="f2-4-option-1" type="checkbox" value="option1" />
                                <label for="f2-4-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f2-4-option-2" data-filter="f2-4-option-2" type="checkbox" value="option1" />
                                <label for="f2-4-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f2-4-option-3" data-filter="f2-4-option-3" type="checkbox" value="option1" />
                                <label for="f2-4-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- filter search + modal btn wrapper -->
                <div class="filter-search-tool-wrapper">
                    <!-- filter search -->
                    <div class="filter-search-wrapper">
                        <span class="icon" data-icon="magnifying-glass"></span>
                        <input class="filter-search" name="search" type="text" placeholder="Search" value="" />
                    </div>

                    <!-- filter modal btn -->
                    <button
                        class="filter-modal-btn"
                        data-bs-toggle="modal"
                        data-modal-logo="/wp-content/themes/veeva2015/assets/veeva-2024/logos/trimmed/white/veeva.png"
                        data-modal-title="Filter"
                        data-modal-button-text="Filter"
                    >
                        <span class="icon" data-icon="slider-mobile"></span>
                    </button>
                </div>
            </div>

            <!-- filter tag wrapper -->
            <div class="filter-tag-wrapper container">
                <!-- filter tag -->
                <div class="filter-tag">
                    Filter Tag Name
                </div>
                
                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>
            </div>
        </section>
    `,
};

const HeroFilterCenterBlue = {
    /* html */
    template: `
        <!-- Hero Filter, Center, Blue -->
        <section class="hero-filter hero-filter--blue">
            <div class="container copy-container copy-container--center copy-container--eyebrow-gradient">
                <h6>
                    <span class="icon" data-icon="box-sign"></span>
                    Lorem Ipsum
                </h6>
                <h3>Hero Filter, Light</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="copy-container__buttons">
                    <a class="button-outline button-outline--white" href="[url]" target="[target]"> CTA Text </a>
                    <a class="button-secondary" href="https://google.com" target="_self">
                        <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-play--black.svg" alt="" />
                        <span>CTA Text</span>
                    </a>
                </div>
            </div>

            <!-- filter field wrapper -->
            <div class="filter-field-wrapper container">
                <!-- filter dropdowns wrapper -->
                <div class="filter-dropdowns-wrapper">
                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 1</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f6-1-option-1" data-filter="f6-1-option-1" type="checkbox" value="option1" />
                                <label for="f6-1-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f6-1-option-2" data-filter="f6-1-option-2" type="checkbox" value="option1" />
                                <label for="f6-1-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f6-1-option-3" data-filter="f6-1-option-3" type="checkbox" value="option1" />
                                <label for="f6-1-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 2</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f6-2-option-1" data-filter="f6-2-option-1" type="checkbox" value="option1" />
                                <label for="f6-2-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f6-2-option-2" data-filter="f6-2-option-2" type="checkbox" value="option1" />
                                <label for="f6-2-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f6-2-option-3" data-filter="f6-2-option-3" type="checkbox" value="option1" />
                                <label for="f6-2-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 3</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f6-3-option-1" data-filter="f6-3-option-1" type="checkbox" value="option1" />
                                <label for="f6-3-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f6-3-option-2" data-filter="f6-3-option-2" type="checkbox" value="option1" />
                                <label for="f6-3-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f6-3-option-3" data-filter="f6-3-option-3" type="checkbox" value="option1" />
                                <label for="f6-3-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 4</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f6-4-option-1" data-filter="f6-4-option-1" type="checkbox" value="option1" />
                                <label for="f6-4-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f6-4-option-2" data-filter="f6-4-option-2" type="checkbox" value="option1" />
                                <label for="f6-4-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f6-4-option-3" data-filter="f6-4-option-3" type="checkbox" value="option1" />
                                <label for="f6-4-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- filter search + modal btn wrapper -->
                <div class="filter-search-tool-wrapper">
                    <!-- filter search -->
                    <div class="filter-search-wrapper">
                        <span class="icon" data-icon="magnifying-glass"></span>
                        <input class="filter-search" name="search" type="text" placeholder="Search" value="" />
                    </div>

                    <!-- filter modal btn -->
                    <button
                        class="filter-modal-btn"
                        data-bs-toggle="modal"
                        data-modal-logo="/wp-content/themes/veeva2015/assets/veeva-2024/logos/trimmed/white/veeva.png"
                        data-modal-title="Filter"
                        data-modal-button-text="Filter"
                    >
                        <span class="icon" data-icon="slider-mobile"></span>
                    </button>
                </div>
            </div>

            <!-- filter tag wrapper -->
            <div class="filter-tag-wrapper container">
                <!-- filter tag -->
                <div class="filter-tag">
                    Filter Tag Name
                </div>
                
                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>
            </div>
        </section>
    `,
};

const HeroFilterLeftAlignedGrey = {
    /* html */
    template: `
        <!-- Hero Filter, Left Aligned, Grey -->
        <section class="hero-filter hero-filter--grey">
            <div class="container copy-container copy-container--left copy-container--eyebrow-gradient">
                <h6><span class="icon" data-icon="shipping-box-1"></span>Lorem Ipsum</h6>
                <h3>Hero Filter, Grey</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <!-- filter field wrapper -->
            <div class="filter-field-wrapper container">
                <!-- filter dropdowns wrapper -->
                <div class="filter-dropdowns-wrapper">
                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 1</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f3-1-option-1" data-filter="f3-1-option-1" type="checkbox" value="option1" />
                                <label for="f3-1-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f3-1-option-2" data-filter="f3-1-option-2" type="checkbox" value="option1" />
                                <label for="f3-1-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f3-1-option-3" data-filter="f3-1-option-3" type="checkbox" value="option1" />
                                <label for="f3-1-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 2</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f3-2-option-1" data-filter="f3-2-option-1" type="checkbox" value="option1" />
                                <label for="f3-2-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f3-2-option-2" data-filter="f3-2-option-2" type="checkbox" value="option1" />
                                <label for="f3-2-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f3-2-option-3" data-filter="f3-2-option-3" type="checkbox" value="option1" />
                                <label for="f3-2-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 3</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f3-3-option-1" data-filter="f3-3-option-1" type="checkbox" value="option1" />
                                <label for="f3-3-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f3-3-option-2" data-filter="f3-3-option-2" type="checkbox" value="option1" />
                                <label for="f3-3-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f3-3-option-3" data-filter="f3-3-option-3" type="checkbox" value="option1" />
                                <label for="f3-3-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 4</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f3-4-option-1" data-filter="f3-4-option-1" type="checkbox" value="option1" />
                                <label for="f3-4-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f3-4-option-2" data-filter="f3-4-option-2" type="checkbox" value="option1" />
                                <label for="f3-4-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f3-4-option-3" data-filter="f3-4-option-3" type="checkbox" value="option1" />
                                <label for="f3-4-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- filter search + modal btn wrapper -->
                <div class="filter-search-tool-wrapper">
                    <!-- filter search -->
                    <div class="filter-search-wrapper">
                        <span class="icon" data-icon="magnifying-glass"></span>
                        <input class="filter-search" name="search" type="text" placeholder="Search" value="" />
                    </div>

                    <!-- filter modal btn -->
                    <button
                        class="filter-modal-btn"
                        data-bs-toggle="modal"
                        data-modal-logo="/wp-content/themes/veeva2015/assets/veeva-2024/logos/trimmed/white/veeva.png"
                        data-modal-title="Filter"
                        data-modal-button-text="Filter"
                    >
                        <span class="icon" data-icon="slider-mobile"></span>
                    </button>
                </div>
            </div>

            <!-- filter tag wrapper -->
            <div class="filter-tag-wrapper container">
                <!-- filter tag -->
                <div class="filter-tag">
                    Filter Tag Name
                </div>
                
                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>
            </div>
        </section>
    `,
};

const HeroFilterLeftAlignedLight = {
    /* html */
    template: `
        <!-- Hero Filter, Left Aligned, Light -->
        <section class="hero-filter hero-filter--light">
            <div class="container copy-container copy-container--left copy-container--eyebrow-gradient">
                <h6><span class="icon" data-icon="shipping-box-1"></span>Lorem Ipsum</h6>
                <h3>Hero Filter, Light</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <!-- filter field wrapper -->
            <div class="filter-field-wrapper container">
                <!-- filter dropdowns wrapper -->
                <div class="filter-dropdowns-wrapper">
                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 1</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f4-1-option-1" data-filter="f4-1-option-1" type="checkbox" value="option1" />
                                <label for="f4-1-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f4-1-option-2" data-filter="f4-1-option-2" type="checkbox" value="option1" />
                                <label for="f4-1-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f4-1-option-3" data-filter="f4-1-option-3" type="checkbox" value="option1" />
                                <label for="f4-1-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 2</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f4-2-option-1" data-filter="f4-2-option-1" type="checkbox" value="option1" />
                                <label for="f4-2-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f4-2-option-2" data-filter="f4-2-option-2" type="checkbox" value="option1" />
                                <label for="f4-2-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f4-2-option-3" data-filter="f4-2-option-3" type="checkbox" value="option1" />
                                <label for="f4-2-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 3</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f4-3-option-1" data-filter="f4-3-option-1" type="checkbox" value="option1" />
                                <label for="f4-3-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f4-3-option-2" data-filter="f4-3-option-2" type="checkbox" value="option1" />
                                <label for="f4-3-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f4-3-option-3" data-filter="f4-3-option-3" type="checkbox" value="option1" />
                                <label for="f4-3-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 4</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f4-4-option-1" data-filter="f4-4-option-1" type="checkbox" value="option1" />
                                <label for="f4-4-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f4-4-option-2" data-filter="f4-4-option-2" type="checkbox" value="option1" />
                                <label for="f4-4-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f4-4-option-3" data-filter="f4-4-option-3" type="checkbox" value="option1" />
                                <label for="f4-4-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- filter search + modal btn wrapper -->
                <div class="filter-search-tool-wrapper">
                    <!-- filter search -->
                    <div class="filter-search-wrapper">
                        <span class="icon" data-icon="magnifying-glass"></span>
                        <input class="filter-search" name="search" type="text" placeholder="Search" value="" />
                    </div>

                    <!-- filter modal btn -->
                    <button
                        class="filter-modal-btn"
                        data-bs-toggle="modal"
                        data-modal-logo="/wp-content/themes/veeva2015/assets/veeva-2024/logos/trimmed/white/veeva.png"
                        data-modal-title="Filter"
                        data-modal-button-text="Filter"
                    >
                        <span class="icon" data-icon="slider-mobile"></span>
                    </button>
                </div>
            </div>

            <!-- filter tag wrapper -->
            <div class="filter-tag-wrapper container">
                <!-- filter tag -->
                <div class="filter-tag">
                    Filter Tag Name
                </div>
                
                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>
            </div>
        </section>
    `,
};

const HeroFilterLeftAlignedBlue = {
    /* html */
    template: `
        <!-- Hero Filter, Left Aligned, Blue -->
        <section class="hero-filter hero-filter--blue">
            <div class="container copy-container copy-container--left copy-container--eyebrow-gradient">
                <h6><span class="icon" data-icon="shipping-box-1"></span>Lorem Ipsum</h6>
                <h3>Hero Filter, Blue</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <!-- filter field wrapper -->
            <div class="filter-field-wrapper container">
                <!-- filter dropdowns wrapper -->
                <div class="filter-dropdowns-wrapper">
                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 1</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f5-1-option-1" data-filter="f5-1-option-1" type="checkbox" value="option1" />
                                <label for="f5-1-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f5-1-option-2" data-filter="f5-1-option-2" type="checkbox" value="option1" />
                                <label for="f5-1-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f5-1-option-3" data-filter="f5-1-option-3" type="checkbox" value="option1" />
                                <label for="f5-1-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 2</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f5-2-option-1" data-filter="f5-2-option-1" type="checkbox" value="option1" />
                                <label for="f5-2-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f5-2-option-2" data-filter="f5-2-option-2" type="checkbox" value="option1" />
                                <label for="f5-2-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f5-2-option-3" data-filter="f5-2-option-3" type="checkbox" value="option1" />
                                <label for="f5-2-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 3</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f5-3-option-1" data-filter="f5-3-option-1" type="checkbox" value="option1" />
                                <label for="f5-3-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f5-3-option-2" data-filter="f5-3-option-2" type="checkbox" value="option1" />
                                <label for="f5-3-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f5-3-option-3" data-filter="f5-3-option-3" type="checkbox" value="option1" />
                                <label for="f5-3-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>

                    <!-- filter dropdown -->
                    <div id="[form-id]" class="form-dropdown dropdown form-dropdown--filter">
                        <button class="dropdown-toggle" role="button" id="[toggle-id]" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <h6>Category 4</h6>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="[toggle-id]" data-popper-placement="bottom-start">
                            <!-- filter option -->
                            <li class="dropdown-item">
                                <input id="f5-4-option-1" data-filter="f5-4-option-1" type="checkbox" value="option1" />
                                <label for="f5-4-option-1"> Option 1 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f5-4-option-2" data-filter="f5-4-option-2" type="checkbox" value="option1" />
                                <label for="f5-4-option-2"> Option 2 </label>
                            </li>

                            <li class="dropdown-item">
                                <input id="f5-4-option-3" data-filter="f5-4-option-3" type="checkbox" value="option1" />
                                <label for="f5-4-option-3"> Option 3 </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- filter search + modal btn wrapper -->
                <div class="filter-search-tool-wrapper">
                    <!-- filter search -->
                    <div class="filter-search-wrapper">
                        <span class="icon" data-icon="magnifying-glass"></span>
                        <input class="filter-search" name="search" type="text" placeholder="Search" value="" />
                    </div>

                    <!-- filter modal btn -->
                    <button
                        class="filter-modal-btn"
                        data-bs-toggle="modal"
                        data-modal-logo="/wp-content/themes/veeva2015/assets/veeva-2024/logos/trimmed/white/veeva.png"
                        data-modal-title="Filter"
                        data-modal-button-text="Filter"
                    >
                        <span class="icon" data-icon="slider-mobile"></span>
                    </button>
                </div>
            </div>

            <!-- filter tag wrapper -->
            <div class="filter-tag-wrapper container">
                <!-- filter tag -->
                <div class="filter-tag">
                    Filter Tag Name
                </div>
                
                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>

                <div class="filter-tag">
                    Filter Tag Name
                </div>
            </div>
        </section>
    `,
};