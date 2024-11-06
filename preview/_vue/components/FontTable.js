const FontTable = {
    props: {
        fontData: {
            type: Array,
            isRequired: true
        }
    },
    mixins: [copyMixin],
    template: /* html */ `
        <div class="container font-table-container pb-5">
            <div v-for="(data, index) in fontData" :index="'font-data-' + index" class="font-table-section mb-6">
                <h5 class="pb-3"> {{data.title}} </h5>
                <p v-if="data.description" class="pb-3"> {{data.description}} </p>

                <div class="font-table">
                    <div class="font-table-row font-table-row--title">
                        <div class="h8"> HTML Tag </div>
                        <div class="h8"> CSS Class </div>
                        <div class="h8"> Visual Example </div>
                    </div>
                    <div v-for="(font, i) in data.fonts" class="font-table-row" :key="'font-' + i">
                        <div class="body-s html-tag" @click="copyText($event, font.htmlTag, $refs.copyAlert)">
                            {{font.htmlTag}}
                        </div>
                        <div class="body-s class" @click="copyText($event, font.class, $refs.copyAlert)">
                            {{font.class}}
                        </div>
                        <div class="example" v-html="font.example" @click="copyText($event, font.example, $refs.copyAlert)"></div>
                    </div>
                </div>
            </div>

            <div ref="copyAlert" :class="copyAlertClass">Copied!</div>
        </div>
    `,
}