export class AmazonMusicNavbar {

    readonly podcastButton = '#navbarMenuItem2'
    readonly searchBox = '#navbarSearchInput'
    readonly searchButton = '#navbarSearchInputButton'

    clickPodcastButton() {
        cy.get(this.podcastButton).click()
    }

    search(searchTerm: string) {
        cy.get(this.searchBox).type(searchTerm)
        cy.get(this.searchButton).click()
    }
}