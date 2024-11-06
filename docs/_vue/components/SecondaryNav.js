// install this vs code extension for viewing syntax in template:
// https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html

const subnavMenuData = {
    category: "Block",
    url: "/",
    icon: "hospital-sign-square",
    desktopSubMenuText: "View More",
    menu: [
        {
            name: "Foundations",
            url: "/foundation/",
            subMenu: [
                {
                    name: "Button",
                    url: "/foundation/button.html",
                },
                {
                    name: "Color",
                    url: "/foundation/color.html",
                },
                {
                    name: "Icon",
                    url: "/foundation/icon.html",
                },
                {
                    name: "Typography",
                    url: "/foundation/typography.html",
                },
            ],
        },
        {
            name: "Accordion",
            url: "/accordion/",
        },
        {
            name: "Alert",
            url: "/alert/",
            subMenu: [
                {
                    name: "Announcement",
                    url: "/alert/announcement.html",
                },
                {
                    name: "Banner",
                    url: "/alert/banner.html",
                },
                {
                    name: "News",
                    url: "/alert/news.html",
                },
            ],
        },
        {
            name: "Cards",
            url: "/cards/",
            subMenu: [
                {
                    name: "Card Blocks",
                    url: "/cards/card-blocks/",
                },
                {
                    name: "Listed Up Blocks",
                    url: "/cards/listed-up/",
                },
                {
                    name: "People Blocks",
                    url: "/cards/people/",
                },
                {
                    name: "Resource Blocks",
                    url: "/cards/resource/",
                },
            ],
        },
        {
            name: "Footer",
            url: "/footer/",
        },
        // {
        //     name: "Forms",
        //     url: "/forms/",
        // },
        {
            name: "General",
            url: "/general/",
            subMenu: [
                {
                    name: "Not Found",
                    url: "/general/result-not-found.html",
                },
            ],
        },
        {
            name: "Hero",
            url: "/hero/",
            subMenu: [
                {
                    name: "Centered",
                    url: "/hero/centered.html",
                },
                {
                    name: "Center Stack",
                    url: "/hero/center-stack.html",
                },
                {
                    name: "Contained",
                    url: "/hero/contained.html",
                },
                {
                    name: "Customer",
                    url: "/hero/customer.html",
                },
                {
                    name: "Filter",
                    url: "/hero/filter.html",
                },
                {
                    name: "Highlights",
                    url: "/hero/highlights.html",
                },
                {
                    name: "Left Aligned",
                    url: "/hero/left-aligned.html",
                },
            ],
        },
        {
            name: "Logo Wall",
            url: "/logo-wall/",
            subMenu: [
                {
                    name: "Animated",
                    url: "/logo-wall/animated.html",
                },
                {
                    name: "Listed",
                    url: "/logo-wall/listed.html",
                },
                {
                    name: "Scattered",
                    url: "/logo-wall/scattered.html",
                },
            ],
        },
        // {
        //     name: "Long Form",
        //     url: "/long-form/",
        // },
        {
            name: "Marquee",
            url: "/marquee/",
            subMenu: [
                {
                    name: "Gallery",
                    url: "/marquee/gallery.html",
                },
                {
                    name: "Subpoints",
                    url: "/marquee/subpoints.html",
                },
            ],
        },
        // {
        //     name: "Navigation",
        //     url: "/navigation/",
        // },
        {
            name: "Quote",
            url: "/quote/",
            subMenu: [
                {
                    name: "3 Up",
                    url: "/quote/3-up.html",
                },
                {
                    name: "Tabs",
                    url: "/quote/tabs.html",
                },
                {
                    name: "Z Pattern",
                    url: "/quote/z-pattern.html",
                },
            ],
        },
        {
            name: "Statistic",
            url: "/statistic/",
            subMenu: [
                {
                    name: "Inline",
                    url: "/statistic/inline.html",
                },
                {
                    name: "Contained",
                    url: "/statistic/contained.html",
                },
            ],
        },
        {
            name: "Tabs",
            url: "/tabs/",
            subMenu: [
                {
                    name: "Customer",
                    url: "/tabs/customer.html",
                },
                {
                    name: "Subpoints",
                    url: "/tabs/subpoints.html",
                },
            ],
        },
        {
            name: "Video",
            url: "/video-player/",
            subMenu: [
                {
                    name: "Chapters",
                    url: "/video-player/chapters.html",
                },
                {
                    name: "Demos",
                    url: "/video-player/demos.html",
                },
                {
                    name: "Multiple",
                    url: "/video-player/multiple.html",
                },
                {
                    name: "Stacked",
                    url: "/video-player/stacked.html",
                },
                {
                    name: "Tabs",
                    url: "/video-player/tabs.html",
                },
            ],
        },
        {
            name: "Z Pattern",
            url: "/z-pattern/",
            subMenu: [
                {
                    name: "Products",
                    url: "/z-pattern/products.html",
                },
                {
                    name: "Stats",
                    url: "/z-pattern/stats.html",
                },
                {
                    name: "Subcopy",
                    url: "/z-pattern/subcopy.html",
                },
                {
                    name: "Subpoints",
                    url: "/z-pattern/subpoints.html",
                },
            ],
        },
    ],
};

const SecondaryNav = {
    props: {
        title: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            subnavMenu: subnavMenuData,
        };
    },
    methods: {
        returnLinkTarget(url) {
            const isLinkExternal = url.startsWith("http://") || url.startsWith("https://");
            return isLinkExternal ? "_blank" : "_self";
        },
        addMainSubnavActiveClass() {
            const activeSubNavItem = document.querySelector(".dropdown-item--sublink.active");
            if (!activeSubNavItem) return;

            const dropdownParent = activeSubNavItem.closest(".dropdown-item.dropdown");
            if (!dropdownParent) return;

            const categoryLink = dropdownParent.querySelector(".dropdown-item--main");
            if (categoryLink) categoryLink.classList.add("subnav-active");
        },
        isCurrentLinkActive(currentLink) {
            const currentUrlPathname = new URL(window.location.href).pathname;

            return currentUrlPathname.includes(currentLink) ? true : false;
        },
        getCurrentSubNavLinkActiveClass(currentLink) {
            const currentUrlPathname = new URL(window.location.href).pathname;
            const isSameUrl = currentUrlPathname == currentLink;
            if (isSameUrl) return "active";

            const isSublinkActive = currentUrlPathname.includes(currentLink);
            if (isSublinkActive) return "subnav-active";

            return "";
        },
        getCategoryLink(url) {
            // Remove trailing slash if present
            url = url.endsWith('/') ? url.slice(0, -1) : url;
            
            // Find the last index of '/'
            var lastSlashIndex = url.lastIndexOf('/');
            
            // If '/' is found, remove the last part of the URL
            if (lastSlashIndex !== -1) {
                return `${url.slice(0, lastSlashIndex)}/`;
            } else {
                // If no '/' is found, return the original URL
                return `${url}/`;
            }
        }
    },
    created() {
        if (this.title.length > 0) {
            this.subnavMenu.category = this.title;
        }

        let currentPath = window.location.pathname;
        if (currentPath == "/preview/") return;

        this.subnavMenu.url = this.getCategoryLink(currentPath);
    },
    mounted() {
        this.addMainSubnavActiveClass();
    },
    template: /* html */ `
    <div id="secondary-navigation" class="secondary-navigation">
        <div class="secondary-navigation__wrapper container">
        <div class="secondary-navigation__left">
            <h3>
                <a href="/preview/" class="preview-main-link">
                    <img class="icon" src="/wp-content/themes/veeva2015/assets/veeva/veeva-logo-small.svg" />
                </a>
                <a :href="subnavMenu.url" class="preview-category-link">
                    {{ subnavMenu.category }}
                </a>
            </h3>
        </div>

        <div class="secondary-navigation__right">
            <ul class="secondary-navigation__desktop-menulist">
            <template v-for="menuItem in subnavMenu.menu" :key="menuItem.name">
                <template v-if="menuItem.subMenu">
                    <div class="dropdown-item dropdown">
                        <a 
                            :class="[
                                'dropdown-toggle',
                                'dropdown-item--main',
                                getCurrentSubNavLinkActiveClass(menuItem.url)
                            ]"
                            :href="menuItem.url" 
                            :target="returnLinkTarget(menuItem.url)"
                            type="button" aria-expanded="false"
                        >
                            <li> {{ menuItem.name }} </li>
                        </a>

                        <ul class="dropdown-menu">
                            <div class="dropdown-menu-content">
                                <a 
                                    v-for="subMenuItem in menuItem.subMenu"
                                    :key="subMenuItem.name"
                                    :class="[
                                        'dropdown-item--sublink', 
                                        { 'active': isCurrentLinkActive(subMenuItem.url) },
                                        
                                    ]" 
                                    :href="subMenuItem.url"
                                    :target="returnLinkTarget(subMenuItem.url)"
                                >
                                    <li> {{ subMenuItem.name }} </li>
                                </a>
                            </div>
                        </ul>
                    </div>
                </template>

                <template v-else>
                    <a 
                        :href="menuItem.url" 
                        :class="[
                            'dropdown-item',
                            { 'active': isCurrentLinkActive(menuItem.url) }
                        ]" 
                        :target="returnLinkTarget(menuItem.url)"
                    >
                        <li>  {{ menuItem.name }} </li>
                    </a>
                </template>
            </template>
            </ul>

            <div id="secondary-navigation__mobile-dropdown" class="secondary-navigation__mobile-menulist dropdown">
                <div class="secondary-navigation__mobile-display-item dropdown-toggle" role="button" id="subnavLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <h6 class="desktop">
                    {{ subnavMenu.desktopSubMenuText }}
                    </h6>
                </div>

                <ul class="secondary-navigation__mobile-dropdown-menu dropdown-menu container" aria-labelledby="subnavLink" data-popper-placement="bottom-start">
                    <div class="dropdown-menu-content"></div>
                </ul>
            </div>
            <a href="https://github.com/Veeva-com/veeva-component-library" target="_blank" aria-label="Veeva Component Library GitHub Repository">
                <svg width="24" height="22" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                    <title id="github-icon-title">Veeva Component Library GitHub Repository</title>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                        fill="#24292f"
                    />
                </svg>
            </a>
        </div>
        </div>
    </div>

  <div class="secondary-navigation__backdrop"></div>
`,
};
