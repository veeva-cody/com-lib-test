const AccordionLight = {
    /* html */
    template: `
        <!-- Accordion, Light -->
        <section class="accordion-block accordion-block--light">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum igle
                    </h6>
                    <h3>Accordions Block, Light Mode</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>

                <div class="accordion-block__wrapper">
                    <div class="accordion-block__section accordion-block__section--active">
                        <h3 class="accordion-block__section-title">Accordion Drawer - Light</h3>

                        <div class="accordion-block__section-content">
                            <!-- accordion -->
                            <div class="accordion accordion-block__drawers">
                                <!-- accordion item 1 -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Event Title Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                                <h6 class="accordion-button__subtitle">
                                                    <span class="date">Monday</span>
                                                    <span class="time">00:00</span>
                                                </h6>
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

                                            <div class="accordion-body__info">
                                                <div class="accordion-body__speakers">
                                                    <!-- speaker item, modal -->
                                                    <a class="accordion-speaker" href="#" data-bs-toggle="modal" data-bs-target="#speaker-modal-1">
                                                        <div class="avatar-thumbnail accordion-speaker__image">
                                                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                        </div>
                                                        <div class="accordion-speaker__info">
                                                            <h6 class="accordion-speaker__name">Speaker’s Name</h6>
                                                            <h6 class="accordion-speaker__title">
                                                                This will open up modal
                                                            </h6>
                                                        </div>
                                                    </a>

                                                    <!-- speaker 2 -->
                                                    <a class="accordion-speaker" href="#" target="_blank">
                                                        <div class="avatar-thumbnail accordion-speaker__image">
                                                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                        </div>
                                                        <div class="accordion-speaker__info">
                                                            <h6 class="accordion-speaker__name">Speaker’s Name</h6>
                                                            <h6 class="accordion-speaker__title">Position, Company</h6>
                                                        </div>
                                                    </a>

                                                    <!-- speaker 3 -->
                                                    <a class="accordion-speaker" href="#" target="_blank">
                                                        <div class="avatar-thumbnail accordion-speaker__image">
                                                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                        </div>
                                                        <div class="accordion-speaker__info">
                                                            <h6 class="accordion-speaker__name">Speaker’s Name</h6>
                                                            <h6 class="accordion-speaker__title">Position, Company</h6>
                                                        </div>
                                                        <div class="button-text-link button-text-link--black accordion-speaker__link">
                                                            <span class="label">View More</span>
                                                            <span class="underline"></span>
                                                        </div>
                                                    </a>

                                                    <!-- speaker 4 -->
                                                    <a class="accordion-speaker" href="#" target="_blank">
                                                        <div class="avatar-thumbnail accordion-speaker__image">
                                                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                        </div>
                                                        <div class="accordion-speaker__info">
                                                            <h6 class="accordion-speaker__name">Speaker’s Name</h6>
                                                            <h6 class="accordion-speaker__title">Position, Company</h6>
                                                        </div>
                                                        <div class="button-text-link button-text-link--black accordion-speaker__link">
                                                            <span class="label">View More</span>
                                                            <span class="underline"></span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- accordion item 2 -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Event Title Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                                <h6 class="accordion-button__subtitle">
                                                    <span class="date">Monday</span>
                                                    <span class="time">00:00</span>
                                                </h6>
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

                                            <div class="accordion-body__info">
                                                <div class="accordion-body__speakers">
                                                    <!-- speaker 1 -->
                                                    <a class="accordion-speaker" href="#" target="_blank">
                                                        <div class="avatar-thumbnail accordion-speaker__image">
                                                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                        </div>
                                                        <div class="accordion-speaker__info">
                                                            <h6 class="accordion-speaker__name">Speaker’s Name</h6>
                                                            <h6 class="accordion-speaker__title">Position, Company</h6>
                                                        </div>
                                                        <div class="button-text-link button-text-link--black accordion-speaker__link">
                                                            <span class="label">View More</span>
                                                            <span class="underline"></span>
                                                        </div>
                                                    </a>

                                                    <!-- speaker 2 -->
                                                    <a class="accordion-speaker" href="#" target="_blank">
                                                        <div class="avatar-thumbnail accordion-speaker__image">
                                                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                        </div>
                                                        <div class="accordion-speaker__info">
                                                            <h6 class="accordion-speaker__name">Speaker’s Name</h6>
                                                            <h6 class="accordion-speaker__title">Position, Company</h6>
                                                        </div>
                                                        <div class="button-text-link button-text-link--black accordion-speaker__link">
                                                            <span class="label">View More</span>
                                                            <span class="underline"></span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- accordion item 3 -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Event Title Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                                <h6 class="accordion-button__subtitle">
                                                    <span class="date">Monday</span>
                                                    <span class="time">00:00</span>
                                                </h6>
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

                                            <div class="accordion-body__info">
                                                <div class="accordion-body__speakers">
                                                    <!-- speaker 1 -->
                                                    <a class="accordion-speaker" href="#" target="_blank">
                                                        <div class="avatar-thumbnail accordion-speaker__image">
                                                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                        </div>
                                                        <div class="accordion-speaker__info">
                                                            <h6 class="accordion-speaker__name">Speaker’s Name</h6>
                                                            <h6 class="accordion-speaker__title">Position, Company</h6>
                                                        </div>
                                                        <div class="button-text-link button-text-link--black accordion-speaker__link">
                                                            <span class="label">View More</span>
                                                            <span class="underline"></span>
                                                        </div>
                                                    </a>

                                                    <!-- speaker 2 -->
                                                    <a class="accordion-speaker" href="#" target="_blank">
                                                        <div class="avatar-thumbnail accordion-speaker__image">
                                                            <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                        </div>
                                                        <div class="accordion-speaker__info">
                                                            <h6 class="accordion-speaker__name">Speaker’s Name</h6>
                                                            <h6 class="accordion-speaker__title">Position, Company</h6>
                                                        </div>
                                                        <div class="button-text-link button-text-link--black accordion-speaker__link">
                                                            <span class="label">View More</span>
                                                            <span class="underline"></span>
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
                </div>
            </div>
        </section>

        <!-- Speaker Modal, Light -->
        <div id="speaker-modal-1" class="modal fade speaker-modal speaker-modal--light" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="modal-btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span class="icon" data-icon="close"></span>
                        </button>

                        <div class="modal-speaker-info">
                            <div class="avatar-thumbnail">
                                <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                            </div>
                            <div class="modal-speaker-info__text">
                                <h5 class="speaker-name">Fran Paradiso-Hardy</h5>
                                <p>
                                    <span class="speaker-company">Astellas Pharma Inc.</span>
                                    <span class="speaker-position"> Vice-President and Head, Global Medical Communications </span>
                                </p>
                            </div>
                        </div>

                        <hr class="modal-inner-separator" />

                        <div class="modal-speaker-bio">
                            <p>
                                Fran has over 20 years of pharmaceutical experience in various senior medical affairs roles, and is currently the vice president and head of global medical communications with Astellas Pharma Inc.; which includes scientific communications and content scientific publications, medical information, medical education, and library and information services. Fran obtained both her bachelor of pharmacy (BScPhm) degree and masters of science (MSc) degree from the
                                University of Toronto, and her doctors of pharmacy (PharmD) degree from the University of Florida. Prior to joining the pharmaceutical industry, Fran was assistant professor at the University of Toronto (faculty of pharmacy), clinical coordinator, cardiovascular diseases (pharmacy department), and affiliate member (divisions of cardiology and clinical pharmacology) at Sunnybrook Health Sciences Centre. Fran is an active member of the medical affairs professional society (MAPS), medical communication focus area working group (FAWG), as well as the Indegene
                                medical affairs digital strategy council.
                            </p>
                        </div>

                        <div class="modal-speaker-session">
                            <h5>Sessions</h5>
                            <hr />

                            <!-- Optional: data-bs-dismiss="modal" -->
                            <!-- Keep {data-bs-dismiss="modal"} if link is on same page -->
                            <a class="modal-speaker-session__item" href="#" data-bs-dismiss="modal">
                                <h6>Biopharma Panel: The Road to Clinical Data Transformation and Optimization</h6>
                                <p>Tuesday 3:00 p.m.</p>
                                <span class="forward-arrow"></span>
                            </a>

                            <!-- for links not on the same page -->
                            <a class="modal-speaker-session__item" href="#" target="_self">
                                <h6>Biopharma Panel: The Road to Clinical Data Transformation and Optimization</h6>
                                <p>Wednesday 1:00 p.m.</p>
                                <span class="forward-arrow"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
};
