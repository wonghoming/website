import Title from '../shared/Title'
import GalleryWrapper from './GalleryWrapper'
import PortfolioBoxContainer from './PortfolioBoxContainer'
import { mainBlue, cherryRed } from '../shared/themeColours'

export default () => (
  <section className="gallery">
    <div className="container">
      <Title text="EXEMPLARY " append="portfolio" />
      <p>
        Below is a sample of work I have done over the years. My skills range
        from CMS sites, photoshopping, full stack web development, brochure &
        report designs and many more. If you are interested in my work and would
        like to get in contact, please email me at: <br />
        <a href="mailto:wonghoming.dev@gmail.com">wonghoming.dev@gmail.com</a>
      </p>
      <PortfolioBoxContainer />
    </div>
    <style jsx>
      {`
        section.gallery p {
          width: 80%;
          margin: 0 auto 30px;
        }
        section.gallery p a {
          color: ${mainBlue};
          text-decoration: none;
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 3.6rem;
          transition: all ease-out 0.3s;
        }
        section.gallery p a:hover {
          color: ${cherryRed};
        }
        @media all and (min-width: 1200px) {
          section.gallery p {
            width: 80%;
            margin: 0 auto 30px;
          }
        }
      `}
    </style>
  </section>
)
