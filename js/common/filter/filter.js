import debounce from "lodash-es/debounce";
import { breakpoints } from "../../utils/consts";
import { createTag } from "../../utils/utils";
import { renderIcons } from "../icon";

// mobile filter modal logic ---
const closeFilterModalOnResize = (modal) => {

    const closeButton = modal.querySelector(".modal-btn-close");
    const filterModalBreakpoint = breakpoints.lg;

    window.addEventListener("resize", debounce((e) => {

        if (window.innerWidth < filterModalBreakpoint) return;
        if (!modal.classList.contains("show")) return;
        // close if resizing to large screen
        if (closeButton) closeButton.click();

    }, 100));

};

const createModalHeader = (imgPath) => {

    const logo = imgPath ? imgPath : "/wp-content/themes/veeva2015/assets/veeva-2024/logos/trimmed/white/veeva.png";

    return /* html */ `
        <!-- Modal Top -->
        <div class="modal-header">
            <img class="modal-logo" src="${logo}" alt="Veeva Logo" />

            <button type="button" class="modal-btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span class="icon" data-icon="close"></span>
            </button>
        </div>
    `;

};

const createFilterAccordionButton = (accordionCollapseId, mainCategoryItem) => {

    const categoryDisplay = mainCategoryItem.innerText ? mainCategoryItem.innerText : "Category";

    return /* html */ `
        <button 
            class="accordion-button" 
            type="button" data-bs-toggle="collapse" 
            data-bs-target="#${accordionCollapseId}"
            aria-controls="${accordionCollapseId}"
            aria-expanded="false" 
        >
            ${categoryDisplay}
        </button>
    `;

};

const createMobileFilterOptions = (filterOptions) => {

    let optionHTML = "";

    filterOptions.forEach((option) => {

        let item = createTag("li", {
            class: "dropdown-item",
        });
        let mobileLabel = option.cloneNode(true);

        item.appendChild(mobileLabel);

        optionHTML += item.outerHTML;
    
    });

    return optionHTML;

};

const createFilterAccordion = (wrapper, modalId) => {

    let accordionItemHTML = "";
    const filterDropdowns = wrapper.querySelectorAll(".form-dropdown--filter");

    filterDropdowns.forEach((dropdown, dropdownIndex) => {

        let accordionCollapseId = `${modalId}-dropdown-content-${dropdownIndex}`;
        let mainCategoryItem = dropdown.querySelector(".dropdown-toggle");
        let accordionButtonHTML = createFilterAccordionButton(accordionCollapseId, mainCategoryItem);
        let filterOptions = dropdown.querySelectorAll(".dropdown-item label");
        let filterOptionsHTML = createMobileFilterOptions(filterOptions);
        let accordionItem = /* html */ `
            <div class="accordion-item form-dropdown--filter">
                ${accordionButtonHTML}

                <div id="${accordionCollapseId}" class="accordion-collapse filter-accordion-content collapse" data-bs-parent="#${modalId}">
                    <div class="accordion-body">
                        <ul class="dropdown-menu-mobile">
                            ${filterOptionsHTML}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        accordionItemHTML += accordionItem;
    
    });

    return accordionItemHTML;

};

const createFilterModal = (wrapper, index) => {

    const modalId = `filter-modal-${index}`;

    // bind modal button target to modal
    const toggleModalButton = wrapper.querySelector(".filter-modal-btn");
    if (!toggleModalButton) return; // if no mobile modal button assigned, return

    toggleModalButton.setAttribute("data-bs-target", `#${modalId}`);

    // get modal setting from button
    const modalImgPath = toggleModalButton.getAttribute("data-modal-logo");
    const modalTitle = toggleModalButton.getAttribute("data-modal-title");
    const modalButtonText = toggleModalButton.getAttribute("data-modal-button-text");

    // create modal so that we don't have to do it manually
    const filterModal = createTag("div", {
        class: "modal fade filter-modal",
        id: modalId,
        "aria-labelledby": `Filter Modal ${index + 1}`,
        "aria-hidden": "true",
    });

    const modalHeaderHTML = createModalHeader(modalImgPath);
    const filterAccordionHTML = createFilterAccordion(wrapper, modalId);
    const filterModalInnerHTML = /* html */ `
        <div class="modal-dialog">
            <div class="modal-content">
                ${modalHeaderHTML}
            
                <!-- Modal Content -->
                <div class="modal-body">
                    <h4 class="modal-title" id="filter-modal-label">
                        ${modalTitle ? modalTitle : "Filter"}
                    </h4>

                    <!-- dropdowns wrapper -->
                    <div class="modal-body-content filter-dropdowns-wrapper">
                        <div class="accordion filter-accordion" id="${modalId}-modal-accordion">
                            ${filterAccordionHTML}
                        </div>
                    </div>

                    <!-- bottom button -->
                    <div class="modal-cta-wrapper">
                        <a type="button" class="button-primary button-primary--gradient" data-bs-dismiss="modal"> 
                            ${modalButtonText ? modalButtonText : "Filter"}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    filterModal.innerHTML = filterModalInnerHTML;

    // append modal to main
    const main = document.querySelector("main.veeva-2024");
    main.append(filterModal);

    // close mobile modal when resizing back to large size
    closeFilterModalOnResize(filterModal);

    // add back icon as modal is rendered later
    renderIcons(filterModal);

};

// add active class to filter label based on checkbox update (desktop dropdown option + mobile option)
const initFilterDropdownActiveClassBinding = (wrapper) => {

    const optionCheckboxItems = wrapper.querySelectorAll(".form-dropdown--filter .dropdown-item input");

    optionCheckboxItems.forEach((checkbox) => {

        const checkboxId = checkbox.id;
        const checkboxLabels = document.querySelectorAll(`label[for="${checkboxId}"]`);

        checkbox.addEventListener("change", () => {
            checkboxLabels.forEach((label) => {
                label.classList.toggle("active");
            });
        });

    });

};

// add custom class to optimize layout on large screen
const addFilterDropdownWrapperClass = (wrapper) => {

    const filterDropdownWrapper = wrapper.querySelector(".filter-dropdowns-wrapper");
    if (!filterDropdownWrapper) return;

    const childCount = filterDropdownWrapper.children ? filterDropdownWrapper.children.length : 0;
    const wrapperClass = childCount % 2 == 0 ? "filter-dropdowns-wrapper--even" : "filter-dropdowns-wrapper--odd";
    
    filterDropdownWrapper.classList.add(wrapperClass);

};

export const initFilterDropdowns = () => {

    const filterWrappers = document.querySelectorAll(".filter-field-wrapper");
    if (!filterWrappers || filterWrappers.length <= 0) return;

    filterWrappers.forEach((wrapper, index) => {
    
        addFilterDropdownWrapperClass(wrapper);

        // create modal based on desktop filter setup so that we don't need to copy manually
        createFilterModal(wrapper, index);

        // add active class to corresponding checkbox labels (desktop dropdown option + mobile option)
        initFilterDropdownActiveClassBinding(wrapper);
    
    });

};