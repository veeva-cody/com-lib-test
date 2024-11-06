const copyMixin = {
    data() {
        return {
            isCopied: false,
            copyTimeout: null
        };
    },
    computed: {
        copyAlertClass() {
            return {
                "copy-target-success": true,
                "active": this.isCopied,
            }
        }
    },
    methods: {
        copyText(event, text, alertElement) {
            navigator.clipboard.writeText(text);
            this.isCopied = true;

            alertElement.style.left = `${event.clientX}px`
            alertElement.style.top = `${event.clientY - alertElement.clientHeight / 2}px`
            
            if (this.copyTimeout) {
                clearTimeout(this.copyTimeout)
            }

            this.copyTimeout = setTimeout(() => {
                this.isCopied = false;
            }, 700);
        },
    },
}