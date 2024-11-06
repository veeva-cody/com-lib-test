const AccordionTimetableLight = {
    /* html */
    template: `
        <!-- Accordion, Light, Timetable -->
        <section class="accordion-block accordion-block--light accordion-block--contained-xl">
            <div class="container">
                <!-- copy container -->
                <div class="copy-container copy-container--center copy-container--eyebrow-gradient">
                    <h6>
                        <span class="icon" data-icon="box-sign"></span>
                        Lorem Ipsum
                    </h6>
                    <h3>Accordions, Light, Timetable</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="copy-container__buttons">
                        <a class="button-outline button-outline--black" href="https://google.com" target="_self"> CTA Text </a>
                        <a class="button-secondary button-secondary--light" href="https://google.com" target="_self">
                            <img src="/wp-content/themes/veeva2015/assets/svg/icons/btn-arrow-right--black.svg" alt="" />
                            <span>CTA Text</span>
                        </a>
                    </div>
                </div>


                
                <!-- accordion contents -->
                <div class="accordion-block__wrapper">
                    <!-- accordion tool 1 -->
                    <!-- with 'data-accordion-always-open' will keep its expand state when clicking on other items -->
                    <div class="accordion-block__section accordion-block__section--active accordion-block__section--timetable" data-accordion-always-open>
                        <h3 class="accordion-block__section-title">
                            <span class="date">Monday, 3 June</span>
                            <span class="time">3:30 p.m. - 7:00 p.m.</span>
                        </h3>

                        <div class="accordion-block__section-content">
                            <!-- accordion -->
                            <div class="accordion accordion-block__drawers">
                                <!-- accordion item -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light accordion-drawer--disabled">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Registration Open</h6>
                                                <h6 class="accordion-button__subtitle">
                                                    <span class="time">3:30 p.m. – 4:30 p.m.</span>
                                                </h6>
                                            </div>

                                            <span class="arrow-toggle-button">
                                                <span class="icon" data-icon="caret-down"></span>
                                            </span>
                                        </button>
                                    </h2>
                                </div>

                                <!-- accordion item -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light accordion-drawer--disabled">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Welcome Reception</h6>
                                                <h6 class="accordion-button__subtitle">
                                                    <span class="time">4:30 p.m. - 7:00 p.m.</span>
                                                </h6>
                                            </div>

                                            <span class="arrow-toggle-button">
                                                <span class="icon" data-icon="caret-down"></span>
                                            </span>
                                        </button>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- accordion tool 2 -->
                    <div class="accordion-block__section accordion-block__section--active accordion-block__section--timetable" data-accordion-always-open>
                        <h3 class="accordion-block__section-title">
                            <span class="date">Tuesday, 4 June</span>
                            <span class="time">7:30 a.m. - 9:00 p.m.</span>
                        </h3>

                        <div class="accordion-block__section-content">
                            <!-- accordion -->
                            <div class="accordion accordion-block__drawers">
                                <!-- accordion item -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light accordion-drawer--disabled accordion-drawer--timetable">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Breakfast</h6>
                                                <h6 class="accordion-button__subtitle">
                                                    <span class="time">7:30 a.m. - 8:40 a.m.</span>
                                                </h6>
                                                <h6 class="accordion-button__info">
                                                    Breakfast
                                                    <span class="venue"> Innovation Hub </span>
                                                </h6>
                                            </div>

                                            <span class="arrow-toggle-button">
                                                <span class="icon" data-icon="caret-down"></span>
                                            </span>
                                        </button>
                                    </h2>
                                </div>

                                <!-- accordion item -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light accordion-drawer--disabled">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Opening Keynote</h6>
                                                <h6 class="accordion-button__subtitle">
                                                    <span class="time">9:00 a.m. - 10:00 a.m.</span>
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

                                <!-- accordion item -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light accordion-drawer--disabled">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Connect</h6>
                                                <h6 class="accordion-button__subtitle">
                                                    <span class="time">10:00 a.m. - 10:15 a.m.</span>
                                                </h6>
                                                <h6 class="accordion-button__info">
                                                    Networking, Demos, and More
                                                    <span class="venue"> Innovation Hub </span>
                                                </h6>
                                            </div>

                                            <span class="arrow-toggle-button">
                                                <span class="icon" data-icon="caret-down"></span>
                                            </span>
                                        </button>
                                    </h2>

                                    <div class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            <div class="accordion-body__content">Demos, Networking, and More</div>

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

                                <!-- accordion item -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light accordion-drawer--disabled accordion-drawer--timetable--parent">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Zone Keynotes</h6>
                                                <h6 class="accordion-button__subtitle">
                                                    <span class="time">10:30 a.m. - 11:30 a.m.</span>
                                                </h6>
                                            </div>

                                            <span class="arrow-toggle-button">
                                                <span class="icon" data-icon="caret-down"></span>
                                            </span>
                                        </button>
                                    </h2>
                                </div>

                                <!-- nested items wrapper -->
                                <div class="accordion-drawer-nested-item-wrapper">
                                    <!-- accordion item -->
                                    <div class="accordion-item accordion-drawer accordion-drawer--light">
                                        <h2 class="accordion-drawer__header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                                <div class="accordion-button__content">
                                                    <h6 class="accordion-button__title">Vault PromoMats & Vault Medical Keynote with Astellas</h6>
                                                    <h6 class="accordion-button__subtitle">
                                                        <span class="time">10:00 a.m. - 10:15 a.m.</span>
                                                        <span class="venue">Ballroom</span>
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
                                            </div>
                                        </div>
                                    </div>

                                    <!-- accordion item -->
                                    <div class="accordion-item accordion-drawer accordion-drawer--light">
                                        <h2 class="accordion-drawer__header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                                <div class="accordion-button__content">
                                                    <h6 class="accordion-button__title">Biopharma Panel: The Road to Clinical Data Transformation and Optimization</h6>
                                                    <h6 class="accordion-button__subtitle">
                                                        <span class="time">10:15 a.m. - 11:00 a.m.</span>
                                                        <span class="venue">Ballroom</span>
                                                    </h6>
                                                </div>

                                                <span class="arrow-toggle-button">
                                                    <span class="icon" data-icon="caret-down"></span>
                                                </span>
                                            </button>
                                        </h2>

                                        <div class="accordion-collapse collapse">
                                            <div class="accordion-body">
                                                <div class="accordion-body__content">Clinical data leaders from Novo Nordisk, GSK, Fortrea, and a top CRO discuss their journeys toward clinical data transformation, including optimization approaches and advice for others considering this path.</div>

                                                <div class="accordion-body__info">
                                                    <div class="accordion-body__speakers">
                                                        <!-- speaker 1 -->
                                                        <a class="accordion-speaker" href="#" data-bs-toggle="modal" data-bs-target="#speaker-modal-7">
                                                            <div class="avatar-thumbnail accordion-speaker__image">
                                                                <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                            </div>
                                                            <div class="accordion-speaker__info">
                                                                <h6 class="accordion-speaker__name">Ibrahim Kamstrup-Akkaoui</h6>
                                                                <h6 class="accordion-speaker__title">
                                                                    Novo Nordisk A/S
                                                                    <br />
                                                                    Vice President
                                                                </h6>
                                                            </div>
                                                        </a>

                                                        <!-- speaker 2 -->
                                                        <a class="accordion-speaker" href="#" target="_blank">
                                                            <div class="avatar-thumbnail accordion-speaker__image">
                                                                <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                            </div>
                                                            <div class="accordion-speaker__info">
                                                                <h6 class="accordion-speaker__name">Alex Franklin</h6>
                                                                <h6 class="accordion-speaker__title">
                                                                    GSK <br />
                                                                    Director Data Management 
                                                                </h6>
                                                            </div>
                                                        </a>

                                                        <!-- speaker 3 -->
                                                        <a class="accordion-speaker" href="#" target="_blank">
                                                            <div class="avatar-thumbnail accordion-speaker__image">
                                                                <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                            </div>
                                                            <div class="accordion-speaker__info">
                                                                <h6 class="accordion-speaker__name">Eboni Russell</h6>
                                                                <h6 class="accordion-speaker__title">
                                                                    Fortrea <br />
                                                                    VP Global Head Clinical Data Management 
                                                                </h6>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- accordion item -->
                                    <div class="accordion-item accordion-drawer accordion-drawer--light">
                                        <h2 class="accordion-drawer__header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                                <div class="accordion-button__content">
                                                    <h6 class="accordion-button__title">Vault PromoMats & Vault Medical Keynote with Astellas</h6>
                                                    <h6 class="accordion-button__subtitle">
                                                        <span class="time">11:00 a.m. - 11:30 a.m.</span>
                                                        <span class="venue">Ballroom</span>
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
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <!-- accordion item -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light accordion-drawer--disabled">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Networking Lunch</h6>
                                                <h6 class="accordion-button__subtitle">
                                                    <span class="time">11:30 a.m. - 1:00 p.m.</span>
                                                </h6>
                                            </div>

                                            <span class="arrow-toggle-button">
                                                <span class="icon" data-icon="caret-down"></span>
                                            </span>
                                        </button>
                                    </h2>

                                    <div class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            <div class="accordion-body__content">Blank</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- accordion item -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light accordion-drawer--disabled accordion-drawer--timetable--parent">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Sessions</h6>
                                                <h6 class="accordion-button__subtitle">
                                                    <span class="time">1:00 p.m. - 1:50 p.m.</span>
                                                </h6>
                                            </div>

                                            <span class="arrow-toggle-button">
                                                <span class="icon" data-icon="caret-down"></span>
                                            </span>
                                        </button>
                                    </h2>
                                </div>

                                <!-- nested items wrapper -->
                                <div class="accordion-drawer-nested-item-wrapper">

                                    <!-- accordion item -->
                                    <div class="accordion-item accordion-drawer accordion-drawer--light">
                                        <h2 class="accordion-drawer__header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                                <div class="accordion-button__content">
                                                    <h6 class="accordion-button__title">Vault PromoMats & Vault Medical Keynote with Astellas</h6>
                                                    <h6 class="accordion-button__subtitle">
                                                        <span class="time">1:00 p.m. - 1:30 p.m.</span>
                                                        <span class="venue">Ballroom</span>
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
                                            </div>
                                        </div>
                                    </div>

                                    <!-- accordion item -->
                                    <div class="accordion-item accordion-drawer accordion-drawer--light">
                                        <h2 class="accordion-drawer__header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                                <div class="accordion-button__content">
                                                    <h6 class="accordion-button__title">Biopharma Panel: The Road to Clinical Data Transformation and Optimization</h6>
                                                    <h6 class="accordion-button__subtitle">
                                                        <span class="time">1:30 p.m. - 1:50 p.m.</span>
                                                        <span class="venue">Ballroom</span>
                                                    </h6>
                                                </div>

                                                <span class="arrow-toggle-button">
                                                    <span class="icon" data-icon="caret-down"></span>
                                                </span>
                                            </button>
                                        </h2>

                                        <div class="accordion-collapse collapse">
                                            <div class="accordion-body">
                                                <div class="accordion-body__content">Clinical data leaders from Novo Nordisk, GSK, Fortrea, and a top CRO discuss their journeys toward clinical data transformation, including optimization approaches and advice for others considering this path.</div>

                                                <div class="accordion-body__info">
                                                    <div class="accordion-body__speakers">
                                                        <!-- speaker 1 -->
                                                        <a class="accordion-speaker" href="#" target="_blank">
                                                            <div class="avatar-thumbnail accordion-speaker__image">
                                                                <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                            </div>
                                                            <div class="accordion-speaker__info">
                                                                <h6 class="accordion-speaker__name">Ibrahim Kamstrup-Akkaoui</h6>
                                                                <h6 class="accordion-speaker__title">
                                                                    Novo Nordisk A/S
                                                                    <br />
                                                                    Vice President 
                                                                </h6>
                                                            </div>
                                                        </a>

                                                        <!-- speaker 2 -->
                                                        <a class="accordion-speaker" href="#" target="_blank">
                                                            <div class="avatar-thumbnail accordion-speaker__image">
                                                                <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                            </div>
                                                            <div class="accordion-speaker__info">
                                                                <h6 class="accordion-speaker__name">Alex Franklin</h6>
                                                                <h6 class="accordion-speaker__title">
                                                                    GSK <br />
                                                                    Director Data Management 
                                                                </h6>
                                                            </div>
                                                        </a>

                                                        <!-- speaker 3 -->
                                                        <a class="accordion-speaker" href="#" target="_blank">
                                                            <div class="avatar-thumbnail accordion-speaker__image">
                                                                <img src="/wp-content/themes/veeva2015/assets/fpo/avartar-icon-placeholder.jpg" alt="" />
                                                            </div>
                                                            <div class="accordion-speaker__info">
                                                                <h6 class="accordion-speaker__name">Eboni Russell</h6>
                                                                <h6 class="accordion-speaker__title">
                                                                    Fortrea <br />
                                                                    VP Global Head Clinical Data Management
                                                                </h6>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- accordion item -->
                                <div class="accordion-item accordion-drawer accordion-drawer--light accordion-drawer--disabled">
                                    <h2 class="accordion-drawer__header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true">
                                            <div class="accordion-button__content">
                                                <h6 class="accordion-button__title">Evening Event</h6>
                                                <h6 class="accordion-button__subtitle">
                                                    <span class="time">5:30 pm - 9:00 pm</span>
                                                </h6>
                                            </div>

                                            <span class="arrow-toggle-button">
                                                <span class="icon" data-icon="caret-down"></span>
                                            </span>
                                        </button>
                                    </h2>

                                    <div class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            <div class="accordion-body__content">Blank</div>
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
        <div id="speaker-modal-7" class="modal fade speaker-modal speaker-modal--light" tabindex="-1">
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
