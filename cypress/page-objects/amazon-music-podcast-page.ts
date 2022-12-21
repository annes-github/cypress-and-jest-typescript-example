export class AmazonMusicPodcastPage {

    readonly podcastHeadline = 'h1.secondaryHeadline'
    readonly playButton = '[name="play"]'
    readonly pauseButton = '[name="pause"]'
    readonly volumeButton = '#volume-button'

    clickOnPlayButton() {
        cy.get(this.playButton).click()
    }
}