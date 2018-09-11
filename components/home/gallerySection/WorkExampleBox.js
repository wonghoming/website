import { mainBlue, cherryRed, darkRed } from '../shared/themeColours'

export default props => {
  return (
    <div className="workBox">
      <a target="_blank" href={props.href}>
        <div className="imgWrapper">
          <div className="overlay red" />
          <div className="overlay blue" />
          <div className="viewSite">
            <div className="icon plus">
              <div className="vertical" />
              <div className="horizantal" />
            </div>
          </div>
        </div>
      </a>
      <h4>{props.title}</h4>
      <div className="content">{props.children}</div>
      <style jsx>{`
        div.workBox {
          width: 100%;
          text-align: left;
          margin: 0 0 40px;
        }
        div.workBox div.imgWrapper {
          position: relative;
          padding-bottom: 100%;
          background-position: center;
          background-image: url(${props.img});
          background-size: 100%;
          transition: all 0.5s ease;
          overflow: hidden;
          margin: 0 0 20px;
        }
        div.workBox div.imgWrapper:hover {
          background-size: 120%;
          cursor: pointer;
        }
        div.workBox img {
          width: 100%;
        }
        div.workBox div.imgWrapper div.overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.3;
          transition: all 0.5s ease;
        }
        div.overlay.red {
          left: -100%;
          top: 100%;
          background-color: ${darkRed};
        }
        div.overlay.blue {
          left: 100%;
          top: -100%;
          background-color: ${mainBlue};
        }
        div.viewSite {
          position: absolute;
          width: 100%;
          text-align: center;
          top: 50%;
          transform: translateY(-50%);
          text-transform: uppercase;
          font-size: 1.6rem;
          color: #fff;
          opacity: 0;
          transition: 0.5s ease-in all;
        }
        div.icon.plus {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        div.icon.plus div {
          width: 20%;
          border-top: 4px solid #fff;
          position: absolute;
          transition: 0.5s ease all;
        }
        div.workBox div.imgWrapper:hover div.overlay {
          top: 0;
          left: 0;
        }
        div.workBox div.imgWrapper:hover div.viewSite {
          opacity: 1;
        }
        div.workBox div.imgWrapper:hover div.vertical {
          transform: rotate(-270deg);
        }
        div.workBox div.imgWrapper:hover div.horizantal {
          transform: rotate(180deg);
        }
        div.workBox h4 {
          margin: 0 0 10px;
          font-size: 1.2rem;
          color: ${mainBlue};
        }
        @media all and (min-width: 700px) {
          div.workBox {
            width: 30%;
          }
        }
      `}</style>
    </div>
  )
}
