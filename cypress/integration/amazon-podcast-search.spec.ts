import { AmazonMusicHomePage } from '../page-objects/amazon-music-home-page'
import { AmazonMusicNavbar } from '../page-objects/amazon-music-navbar'
import * as data from '../helpers/data'
require('cypress-xpath')

const amazonMusicHomePage = new AmazonMusicHomePage()
const amazonMusicNavbar = new AmazonMusicNavbar()

describe('Test the user can search for and select a podcast', () => {

    beforeEach(() => {
        amazonMusicHomePage.navigate()
    })

    it('Should navigate to Amazon Music Podcasts', async () => {
        amazonMusicNavbar.clickPodcastButton()
        cy.title().should('eq', data.podcastPageTitle)
    })

    it('Should display results for the podcast submitted in the search', async () => {
        amazonMusicNavbar.search(data.podcastName)
        expect(cy.xpath('//*[contains(text(),"TestGuild Automation Testing Podcast")]').should('contain.text', data.podcastName))
    })

})
