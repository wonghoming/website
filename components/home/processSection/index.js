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
        delay: 300,
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
            No two projects are the same, which is why I like to work closely
            with the clients to help them realise the vision they have for their
            product. To create something perfect takes time and effort, and
            nothing worth having comes cheap or quick.
          </p>
        </div>
        <div className="box-container">
          <TextBox
            title="embark"
            tagline="Lake of Ideas"
            backgroundColor="grey">
            The first step is to discuss the vision for the project. When there
            is a goal in mind, the myriad of decisions become a lot clearer and
            helps make sure the project stays on track.
          </TextBox>
          <TextBox
            title="exploration"
            tagline="Jungle of Creativity"
            backgroundColor="red">
            I will create designs that best suite your product. Exploring
            different styles will help focus your product in the right
            direction.
          </TextBox>
          <TextBox
            title="arrival"
            tagline="Reaching the Summit"
            backgroundColor="blue">
            Using the technology that best match your requirements, whether that
            be CMS sites, web apps or EDMs; I will make sure you will have a
            product that will please and amaze you.
          </TextBox>
        </div>
      </div>
      <style jsx>{`
        section.process {
          width: 100%;
          position: relative;
        }
        div.sky {
          position: absolute;
          width: 100%;
          height: 40vh;
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
          flex-wrap: wrap;
          justify-content: space-around;
          padding-top: 50px;
        }
        section.process .invisible {
          opacity: 0;
          z-index: -20;
        }
        @media all and (min-width: 1200px) {
          section.process {
            height: 100vh;
          }
          div.sky {
            height: 60vh;
          }
        }
      `}</style>
    </section>
  )
}
