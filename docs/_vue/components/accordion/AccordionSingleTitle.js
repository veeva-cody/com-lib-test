const AccordionSingleTitle = {
    /* html */
    template: `
        <!-- Accordions, Single Accordion Title -->
        <section class="accordion-block accordion-block--light accordion-block--single-accordion-title">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Questions
                    </h6>
                    <h3>
                        Accordions Block, Light Mode, <br />
                        Single Accordion Title
                    </h3>
                    <p>Times in CEST (Agenda subject to change)</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="[target]"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_blank">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span>View Full Agenda</span>
                        </a>
                    </div>
                </div>

                <!-- accordion contents -->
                <div class="accordion-block__wrapper">
                    <!-- accordion tool 1 -->
                    <div class="accordion-block__section accordion-block__section--active">
                        <h3 class="accordion-block__section-title">About Summit</h3>

                        <div class="accordion-block__section-content">
                            <!-- accordion -->
                            <div class="accordion accordion-block__drawers">
                                <!-- accordion item 1 -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light accordion-drawer--single-accordion-title">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Is Summit free to attend? Do I have to pay a cancellation fee if I can't attend?</h6>
                                            </div>

                                            <span class="arrow-toggle-button">
                                                <span class="icon" data-icon="caret-down"></span>
                                            </span>
                                        </button>
                                    </h2>

                                    <div class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            <div class="accordion-body__content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- accordion item 2 -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light accordion-drawer--single-accordion-title">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">What is a Zone?</h6>
                                            </div>

                                            <span class="arrow-toggle-button">
                                                <span class="icon" data-icon="caret-down"></span>
                                            </span>
                                        </button>
                                    </h2>

                                    <div class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            <div class="accordion-body__content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- accordion item 3 -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light accordion-drawer--single-accordion-title">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">What is Connect?</h6>
                                            </div>

                                            <span class="arrow-toggle-button">
                                                <span class="icon" data-icon="caret-down"></span>
                                            </span>
                                        </button>
                                    </h2>

                                    <div class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            <div class="accordion-body__content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- accordion item 4 -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light accordion-drawer--single-accordion-title">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Who do I contact if I have a question about Summit or my registration?</h6>
                                            </div>

                                            <span class="arrow-toggle-button">
                                                <span class="icon" data-icon="caret-down"></span>
                                            </span>
                                        </button>
                                    </h2>

                                    <div class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            <div class="accordion-body__content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
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
