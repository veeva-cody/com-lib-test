const BlockCategoryContent = {
    props: {
        blockNavItems: {
            type: Array,
            isRequired: true,
        },
    },
    mounted() {
        // console.log(this.blockNavItems);
    },
    template: /* html*/ `
        <!-- Intra-block Navigation -->
        <section class="card-block-3-up card-block-3-up--light block-catergory-content">
            <div class="container">
                <div class="card-block-3-up__cards">
                    <a v-for="(blockNavItem, i) in blockNavItems" class="icon-card icon-card--light icon-card--medium" :href="blockNavItem.url" target="_self">
                        <div class="floating-icon">
                            <span class="icon" data-icon="hospital-sign-square"></span>
                        </div>
                        <h5>{{blockNavItem.name}}</h5>
                        <p>
                            {{blockNavItem.missingVariant.length > 0 ? 'In Progress, Missing:' : 'Complete' }}

                            <em v-if="blockNavItem.missingVariant && blockNavItem.missingVariant.length > 0">{{ blockNavItem.missingVariant.join(', ') }}</em>
                        </p>
                        <div class="button-text-link button-text-link--black">
                            <span class="button-label">Preview</span>
                            <span class="underline"></span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    `,
};
