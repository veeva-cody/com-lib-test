const BlockDivider = {
    props: {
        title: {
            type: String,
            default: "",
        },
        template: {
            type: String,
            default: "",
        },
        docLink: String,
    },
    data() {
        return {
            isCopiedTemplate: false,
            isCopiedBlockLink: false,
        };
    },
    computed: {
        dashedTitle() {
            let dashedLowerCaseTitle = this.title.replace(/[\s,]+/g, "-").toLowerCase();

            return `variant-${dashedLowerCaseTitle}`;
        },
    },
    mounted() {},
    methods: {
        copyLinkToUserClipboard(link) {
            navigator.clipboard.writeText(link);

            this.isCopiedBlockLink = true;
            setTimeout(() => {
                this.isCopiedBlockLink = false;
            }, 1500);
        },
        copySectionHTMLToUserClipboard() {
            // used prism for code formatting
            // https://prismjs.com/plugins/normalize-whitespace/
            const currentEl = this.$refs.blockCodeSnippet;
            const copyButton = currentEl.querySelector(".copy-to-clipboard-button");

            if (copyButton) {
                copyButton.click();

                this.isCopiedTemplate = true;
                setTimeout(() => {
                    this.isCopiedTemplate = false;
                }, 1500);
            }

            // Native way: need to explore way to correct the indentation without prism.js
            // navigator.clipboard.writeText(content);
        },
        copyBlockSectionLinkToUserClipboard() {
            const urlWithoutParams = window.location.origin + window.location.pathname;
            const link = `${urlWithoutParams}#${this.dashedTitle}`;
            this.copyLinkToUserClipboard(link);
        },
    },
    template: /* html */ `
        <!-- Block Divider -->
        <div ref="blockDivider" :id="dashedTitle" class="block-divider">
            <div class="container d-flex align-items-center justify-content-between">
                <div class="block-divider__left d-flex gap-2">
                    <a v-if="docLink" class="icon-doc-link" :href="docLink" target="_blank" title="View Documentation">
                        <span class="icon" data-icon="paperclip-2"></span>
                    </a>
                    <a
                        :href=" '#' + dashedTitle"
                        class="block-anchor"
                        title="Copy link"  @click="copyBlockSectionLinkToUserClipboard()"
                    >
                        <h6>{{title}}</h6>
                        <div class="copy-button__tooltip">
                            {{isCopiedBlockLink ? "Copied!" : "Copy Link"}}
                        </div>
                    </a>
                </div>

                <div 
                    class="copy-button"
                    title="Copy Code"
                    @click="copySectionHTMLToUserClipboard()" 
                >
                    <span 
                        class="icon clipboard-tool" 
                        data-icon="clipboard-add" 
                    ></span>

                    <div class="copy-button__tooltip">
                        {{isCopiedTemplate ? "Copied!" : "Copy Code"}}
                    </div>
                </div>
            </div>
        </div>

        <div ref="blockCodeSnippet" class="container d-none">
            <pre style="width: 100%; overflow-x:scroll; max-width: 100vw; max-height: 300px; font-size: 14px;"> 
                <code class="language-html"> {{template}} </code>
            </pre>
        </div>
    `,
};
