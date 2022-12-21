export class AmazonMusicHomePage {

    readonly podcastButton = '#navbarMenuItem2'
    readonly searchBox = '#navbarSearchInput'

    navigate() {
        cy.visit('https://music.amazon.com/')
    }
}