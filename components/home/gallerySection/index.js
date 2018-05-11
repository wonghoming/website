import Title from '../shared/Title'
import GalleryWrapper from './GalleryWrapper'
import { mainBlue, cherryRed } from '../shared/themeColours'

export default () => (
  <section className="gallery">
    <div className="container">
      <Title text="EXEMPLARY " append="portfolio" />
      <p>
        Below is a sample of work I have done over the years. It includes work I
        did whilst at a previous Digital Marketing Company and Freelancing. My
        work ranges from photoshopping, to full stack web development and
        brochure designs. If you are interested in my work and would like to get
        in contact, please email me at: <br />
        <a href="wonghoming.dev@gmail.com">wonghoming.dev@gmail.com</a>
      </p>
    </div>
    <GalleryWrapper />
    <style jsx>
      {`
        section.gallery p {
          width: 80%;
          margin: 0 auto;
        }
        section.gallery p a {
          color: ${mainBlue};
          text-decoration: none;
          font-weight: 700;
          line-height: 3rem;
          transition: all ease-out 0.3s;
        }
        section.gallery p a:hover {
          color: ${cherryRed};
        }
        @media all and (min-width: 1200px) {
          section.gallery p {
            width: 80%;
            margin: 0 auto 100px;
          }
        }
      `}
    </style>
  </section>
)
