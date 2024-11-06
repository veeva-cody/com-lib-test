import { fetchData } from "../../utils/api";

// video
const wistiaApiOptions = {
    method: "GET",
    headers: {
        accept: "application/json",
        authorization: "Bearer bb52b0d01ee3075a1e7e59e333e588908b507139f1cc443e0abc7cda0717c33c",
    },
};

export const fetchWistiaData = (url) => {
    return fetchData(url, wistiaApiOptions);
};

// https://docs.wistia.com/reference/get_medias-media-hashed-id-json
// API Testpoint: https://docs.wistia.com/reference/get_medias-media-id-customizations-json
// Example: https://api.wistia.com/v1/medias/nzu1lv6b2h.json
export const getVideoMainData = (wistiaID) => {
    const apiUrl = `https://api.wistia.com/v1/medias/${wistiaID}.json`;
    return fetchWistiaData(apiUrl);
};

// DOC: https://docs.wistia.com/docs/wistia-data-api#customizations
// API Testpoint: https://docs.wistia.com/reference/get_medias-media-id-customizations-json
// Example: https://api.wistia.com/v1/medias/zzk08gne6l/customizations.json
// NOTE: Wistia Media API for Customization Data doesn't support multiple ids, need to query one by one... QAQ
export const getVideoChapterData = (wistiaID) => {
    const apiUrl = `https://api.wistia.com/v1/medias/${wistiaID}/customizations.json`;
    return fetchWistiaData(apiUrl);
};