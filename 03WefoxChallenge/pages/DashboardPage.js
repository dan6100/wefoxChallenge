class DashboardPage {
    constructor() {
    }

    async findAgentImage() {
        return await element(by.css('img.wf-c-agent-card__image'));
    }

    async goToContracts() {
        await element(by.css('[t-selector="sidebar-contracts-link"]')).click();
    }
}

module.exports = new DashboardPage();