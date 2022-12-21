import { AmazonMusicHomePage } from '../page-objects/amazon-music-home-page'
import { AmazonMusicNavbar } from '../page-objects/amazon-music-navbar'
import { AmazonMusicPodcastPage } from '../page-objects/amazon-music-podcast-page'
import { AmazonMusicSearchPage } from '../page-objects/amazon-music-search-page'
import * as data from '../helpers/data'

let amazonMusicHomePage = new AmazonMusicHomePage()
let amazonMusicNavbar = new AmazonMusicNavbar()
let amazonMusicSearchPage = new AmazonMusicSearchPage()
let amazonMusicPodcastPage = new AmazonMusicPodcastPage()

describe('Test the user can search for and select a podcast', () => {

    beforeEach(() => {
        amazonMusicHomePage.navigate()
    })

    it('Should navigate to Amazon Music Podcasts', async () => {
        amazonMusicNavbar.clickPodcastButton()
        cy.title().should('eq', data.podcastPageTitle)
    })

    it('Should display the podcast submitted in the search in the Top Results section', async () => {
        amazonMusicNavbar.search(data.podcastName)
        amazonMusicSearchPage.clickOnTitleBySection(data.podcastName, 'Top Results')
        cy.get(amazonMusicPodcastPage.podcastHeadline).should('eq', data.podcastName)
    })

    it('Should display the podcast submitted in the search in the Podcasts section', async () => {
        amazonMusicNavbar.search(data.podcastName)
        amazonMusicSearchPage.clickOnTitleBySection(data.podcastName, 'Podcasts')
        cy.get(amazonMusicPodcastPage.podcastHeadline).should('eq', data.podcastName)
    })

    it('Should play the podcast selected', async () => {
        amazonMusicNavbar.search(data.podcastName)
        amazonMusicSearchPage.clickOnTitleBySection(data.podcastName, 'Top Results')
        amazonMusicPodcastPage.clickOnPlayButton()
        cy.get(amazonMusicPodcastPage.pauseButton).should('be.visible')
        cy.get(amazonMusicPodcastPage.volumeButton).should('be.visible')

    })

})
