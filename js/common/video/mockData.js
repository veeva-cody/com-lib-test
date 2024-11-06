// NOTE: need to mold Wordpress CMS fields into this format
// uncomment field will use below custom fields instead of value from wistia APIs, wistiaID* field is necessary
const mockCmsVideoMultipleData = [
    {
        wistiaID: "zzk08gne6l",
        title: "GSK & Bayer Switch to Veeva Vault CRM",
        description: "Lorem Ipsum Area / Sub Copy",
        // image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg",
    },
    {
        wistiaID: "nzu1lv6b2h",
        title: "<strong>Customer Name:</strong> Video title lorem ipsum here",
        description: "Lorem Ipsum Area / Sub Copy",
        // image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg",
    },
    {
        wistiaID: "31zfr7kuum",
        // title: "title 3",
        description: "Lorem Ipsum Area / Sub Copy",
        // image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg",
    },
    {
        wistiaID: "i5n0o1mryj",
        // title: "title 4",
        description: "Lorem Ipsum Area / Sub Copy",
        // image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg",
    },
];

// assumed chapters module data all have wistiaID & chapterList configured
const mockCmsVideoChapterData = [
    {
        wistiaID: "zzk08gne6l",
        title: "GSK & Bayer Switch to Veeva Vault CRM",
        description: "Lorem Ipsum Area / Sub Copy",
        // image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg",
    },
    {
        wistiaID: "nzu1lv6b2h",
        // title: "title 2",
        description: "Lorem Ipsum Area / Sub Copy",
        // image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg",
    },
    {
        wistiaID: "31zfr7kuum",
        // title: "title 3",
        description: "Lorem Ipsum Area / Sub Copy",
        // image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg",
    },
    {
        wistiaID: "i5n0o1mryj",
        // title: "title 4",
        description: "Lorem Ipsum Area / Sub Copy",
        // image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg",
    },
];

const mockCmsVideoChapterDataWithoutChapterList = [
    {
        wistiaID: "zzk08gne6l",
        title: "GSK & Bayer Switch to Veeva Vault CRM",
        description: "Lorem Ipsum Area / Sub Copy",
        // image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg",
    },
    {
        wistiaID: "p4uz0e9bjz", // wistia ID without chapter list
        // title: "title 2",
        description: "Lorem Ipsum Area / Sub Copy",
        // image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg",
    },
    {
        wistiaID: "31zfr7kuum",
        // title: "title 3",
        description: "Lorem Ipsum Area / Sub Copy",
        // image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg",
    },
    {
        wistiaID: "i5n0o1mryj",
        // title: "title 4",
        description: "Lorem Ipsum Area / Sub Copy",
        // image: "/wp-content/themes/veeva2015/assets/fpo/media.jpg",
    },
];