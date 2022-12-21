export class AmazonMusicSearchPage {

    clickOnTitleBySection(title: string, section: string) {
        return cy.get(`[primary-text="${section}"][title="${title}"]`).click()
    }
}