const commonMixin = {
    data() {
        return {
            isVeevaLibLoaded: false,
        };
    },
    mounted() {
        this.loadVeevaLibScript();
        this.initSiteInfo();
    },
    methods: {
        loadVeevaLibScript() {
            // load this after vue instance is mounted
            const veevaLibScript = document.createElement("script");
            veevaLibScript.src = "/dist/bundle.min.js";
            
            veevaLibScript.onload = () => {
                this.isVeevaLibLoaded = true;
            };

            document.body.appendChild(veevaLibScript);
        },
        initSiteInfo() {
            if (this.title == "Veeva Component Library") return;

            document.title = `${this.title} | Veeva Component Library`;
        },
    },
};
