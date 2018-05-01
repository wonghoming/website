const galleryUrl = '../../../static/gallery/'

export default props => (
  <div className="slides">
    <img src={`${galleryUrl}${props.src}`} />
    <style jsx>
      {`
        div.slides {
          position: absolute;
          transition: 1.5s ease-out all;
          line-height: 0;
          bottom: 0;
          left: 0;
        }
        div.slides img {
          width: 100%;
        }
      `}
    </style>
  </div>
)
