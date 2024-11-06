
const IconGrid = {
    props: {
        iconDataPath: {
            type: String,
            required: true,
        },
        isLibraryLoaded: {
            type: Boolean,
            default: false,
        }
    },
    mixins: [copyMixin],
    data() {
        return {
            iconData: [],
            searchQuery: '',
            currentPage: 1,
            itemsPerPage: 120, // lcm number of 3,5,6,8 items per column
            filteredIconData: [],
            iconGridElement: null,
            iconFolderPath: '/wp-content/themes/veeva2015/assets/svg/icons/'
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredIconData.length / this.itemsPerPage);
        },
        paginatedIconData() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;

            return this.filteredIconData.slice(start, end);
        },
    },
    watch: {
        paginatedIconData() {
            if (this.isLibraryLoaded) {
                // Ensure DOM is updated before calling renderIconsInBlock
                this.$nextTick(() => {
                    veevaLib.renderIconsInBlock(this.iconGridElement);
                });
            }
        }
    },
    mounted() {
        this.fetchIconData();
        this.iconGridElement = this.$refs.iconGridWrapper.querySelector('.render-icon-area');
    },
    methods: {
        fetchIconData() {
            fetch(this.iconDataPath)
                .then(response => response.json())
                .then(data => {
                    this.iconData = data.icons;
                    this.filterIconData();
                })
                .catch(error => console.error('Error loading JSON:', error));
        },
        filterIconData() {
            let query = this.searchQuery.toLowerCase();
            this.filteredIconData = this.iconData.filter(icon =>
                icon.name.toLowerCase().includes(query)
            );
            this.currentPage = 1; // Reset to page 1 on search
        },
        changePage(direction) {
            const newPage = this.currentPage + direction;
            if (newPage >= 1 && newPage <= this.totalPages) {
                this.currentPage = newPage;
            }

            this.$refs.iconGridWrapper.scrollIntoView();
        },
        getSpanHTML(iconName) {
            return `<span class="icon" data-icon="${iconName}"></span>`;
        }
    },
    template: /* html */ `
        <div ref="iconGridWrapper" class="container pb-5 icon-grid-wrapper">
            <div class="d-flex align-items-center justify-content-center pb-5 search-panel">
                Search Icon: <input type="text" v-model="searchQuery" @input="filterIconData" placeholder="Search icon..."/>
            </div>

            <div class="render-icon-area">
                <div v-if="filteredIconData.length" class="icon-grid">
                    <div v-for="icon in paginatedIconData" class="icon-grid-item" :key="icon.name" :data-name="icon.name">
                        <p class="icon-grid-item__title"> {{icon.name}}.svg </p>
                        <div
                            class="icon-grid-item__icon"
                        >
                            <span class="icon" :data-icon="icon.name"></span>
                        </div>
                        <div class="icon-grid-item__info">
                            <p class="copy-target" @click="copyText($event, getSpanHTML(icon.name), $refs.copyAlert)">Copy Span </p>
                            <p class="copy-target" @click="copyText($event, icon.name, $refs.copyAlert)">Copy data-icon</p>
                            <a class="doc-link" :href="iconFolderPath + icon.path" :download="icon.path">Download icon</a>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center">
                    <p> No icons found.</p>
                </div>
            </div>

            <div class="pagination-controls pt-5">
                <button @click="changePage(-1)" :disabled="currentPage <= 1">Previous</button>
                <span>Page {{ currentPage }} of {{ totalPages }}</span>
                <button @click="changePage(1)" :disabled="currentPage >= totalPages">Next</button>
            </div>

            <div ref="copyAlert" :class="copyAlertClass">Copied!</div>
        </div>     
    `
}

