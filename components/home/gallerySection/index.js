import Title from '../shared/Title'
import GalleryWrapper from './GalleryWrapper'

export default () => (
  <section className="gallery">
    <div className="container">
      <Title text="EXEMPLARY " append="portfolio" />
      <p>
        Below include a sample of work I have done over my time at a digital
        marketing company and freelancing. My work ranges from photoshopping,
        brochure designs to full stack web developing and email campaigns.
      </p>
    </div>
    <GalleryWrapper />
    <style jsx>
      {`
        section.gallery p {
          width: 80%;
          margin: 0 auto 100px;
        }
      `}
    </style>
  </section>
)
