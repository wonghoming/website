import anime from 'animejs'

import Title from '../shared/Title'
import TextBox from './TextBox'
import { mainBlue } from '../shared/themeColours'

export default props => {
  if (props.animate) {
    const animateProcess = anime.timeline()
    animateProcess
      .add({
        targets: '#title',
        opacity: 1,
        delay: 600,
        easing: 'easeInQuad',
        duration: 800,
      })
      .add({
        targets: '.box:nth-child(1)',
        opacity: 1,
        translateY: -50,
        offset: '+=400',
        duration: 500,
        easing: 'easeOutQuad',
      })
      .add({
        targets: '.box:nth-child(2)',
        opacity: 1,
        translateY: -50,
        offset: '-=200',
        duration: 500,
        easing: 'easeOutQuad',
      })
      .add({
        targets: '.box:nth-child(3)',
        opacity: 1,
        translateY: -50,
        offset: '-=200',
        duration: 500,
        easing: 'easeOutQuad',
      })
  }
  return (
    <section className="process">
      <div className="sky" />
      <div className="scenery">
        <img
          src="../../../static/sceneryBackgroundEdit.png"
          alt="Mountain Landscape with a Lake"
        />
      </div>
      <div className="container">
        <div className="invisible slideDown" id="title">
          <Title text="The Process is a " append="Journey" />
          <p>
            Noste facchuidii seniqua notam menatas traris, Cuppliam etis revid
            faus sat, sediend ientiquit in Itatium am immoena, dees conum nonte
            des, nos pondetre pos rem viur actabus perehem prit; hos. Noste
            facchuidii seniqua notam menatas traris, Cuppliam etis revid faus
            sat, sediend ientiquit in Itatium am immoena.
          </p>
        </div>
        <div className="box-container">
          <TextBox
            title="embark"
            tagline="Discussion & Ideas"
            text="Noste facchuidii seniqua notam menatas traris, sediend ientiquit in Itatium am immoena, dees conum nonte des."
            backgroundColor="grey"
          />
          <TextBox
            title="exploration"
            tagline="Creativity Together"
            text="Noste facchuidii seniqua notam menatas traris, Cuppliam etis revid faus sat, sediend ientiquit in Itatium am immoena, dees conum nonte desdees conum nonte des."
            backgroundColor="red"
          />
          <TextBox
            title="arrival"
            tagline="Constructing the Product"
            text="Noste facchuidii seniqua notam menatas traris, perehem prit; hos. Noste facchuidii seniqua notam menatas traris, Cuppliam etis revid faus sat, sediend ientiquit in Itatium am immoena, dees conum nonte des."
            backgroundColor="blue"
          />
        </div>
      </div>
      <style jsx>{`
        section.process {
          height: 100vh;
          width: 100%;
        }
        div.sky {
          position: absolute;
          width: 100%;
          height: 60vh;
          bottom: 0;
          z-index: -1;
          opacity: 0.4;
          background: linear-gradient(to top, ${mainBlue}, transparent);
        }
        div.scenery {
          width: 100%;
        }
        div.scenery img {
          user-drag: none;
          user-select: none;
          position: absolute;
          bottom: 0;
          width: 100%;
        }
        section.process p {
          width: 80%;
          margin: 0 auto 40px;
        }
        section.process div.box-container {
          display: flex;
          justify-content: space-around;
          padding-top: 50px;
        }
        section.process .invisible {
          opacity: 0;
          z-index: -20;
        }
        section.process .invisible.slideDown {
        }
      `}</style>
    </section>
  )
}
