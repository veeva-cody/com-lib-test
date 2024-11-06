const BlockDetailContent = {
    props: {
        isFoundation: {
            type: Boolean,
            default: false,
        },
        sections: {
            type: Object,
            isRequired: true,
        },
    },
    mounted() {
        this.initPrism();
    },
    methods: {
        initPrism() {
            // used prism for copy & trim spacing in code template
            Prism.plugins.NormalizeWhitespace.setDefaults({
                "remove-trailing": true,
                "remove-indent": true,
                "left-trim": true,
                "right-trim": true,
            });
        },
        getTempleteWrapperClass(requiredBackgroundClass) {
            return {
                "template-render-wrapper": true,
                "container": this.isFoundation,
                [`template-render-wrapper--bg-${requiredBackgroundClass}`]: requiredBackgroundClass,
            }
        }
    },
    // <component> part will render sth like <accordion-light></accordion-light>
    template: /* html */ `
        <template v-for="(section, index) in sections" :key="index">
            <div v-if="section.isSeparator" class="block-render-separator"></div>

            <div v-else class="block-render">
                <block-divider :title="section.title" :template="section.componentConfig.template" :doc-link="section.docLink"></block-divider>
                
                <div :class="getTempleteWrapperClass(section.componentConfig.requiredBackgroundClass)">
                    <div>
                        <component v-if="section.hasOwnProperty('blockId')" :is="section.component" :id="section.blockId"></component>

                        <component v-else :is="section.component"></component>
                    </div>
                </div>
            </div>
        </template>
    `,
};
