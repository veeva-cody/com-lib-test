import { createTag } from "../utils/utils";
import { renderIconsInBlock } from "./icon";

const initSidebarProductSimpleLinkArrow = () => {
    const sidebarProductListSimpleItems = document.querySelectorAll('.sidebar-info-box--product-list-simple');

    if (!sidebarProductListSimpleItems || sidebarProductListSimpleItems.length == 0) return;

    sidebarProductListSimpleItems.forEach((sidebarItem) => {
        const productLinks = sidebarItem.querySelectorAll('.product-simple-links a');

        if (!productLinks || productLinks.length == 0) return;

        productLinks.forEach((link) => {
            const arrowIcon = createTag('span', {
                class: "icon",
                "data-icon": "arrow-up-right--black"
            });

            link.append(arrowIcon);
        })

        renderIconsInBlock(sidebarItem);
    })
}

export const initSidebar = () => {
    initSidebarProductSimpleLinkArrow();
}