const ColorGrid = {
    props: {
        colorData: {
            type: Array,
            isRequired: true
        }
    },
    mixins: [copyMixin],
    mounted() {},
    methods: {
        getColor(color) {
            return color.hexcode ? color.hexcode : color.gradient;
        },
    },
    template: /* html */ `
        <div class="container pb-5">
            <div v-for="(data, index) in colorData" :index="index" class="color-grid-section mb-6">
                <h5 class="pb-3"> {{data.title}} </h5>

                <div class="color-grid">
                    <div v-for="color in data.colors" class="color-grid-item">
                        <div
                            class="color-grid-item__color"
                            :style="{ background: getColor(color) }" :data-color="getColor(color)"
                            @click="copyText($event, getColor(color), $refs.copyAlert)"
                        ></div>

                        <div class="color-grid-item__info pt-2">
                            <p>{{color.name}}</p>
                            <p v-if="color.hexcode" class="copy-target" @click="copyText($event, color.hexcode, $refs.copyAlert)">Hexcode: {{color.hexcode}}</p>
                            <p class="text-decoration-underline copy-target" @click="copyText($event, color.scssVariable, $refs.copyAlert)">Copy SCSS variable</p>
                        </div>
                    </div>
                </div>
            </div>

            <div ref="copyAlert" :class="copyAlertClass">Copied!</div>
        </div>     
    `
}

