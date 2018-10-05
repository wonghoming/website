import { cherryRed } from '../shared/themeColours'
import WorkExampleBox from './WorkExampleBox'

export default () => {
  return (
    <div className="boxImage">
      <WorkExampleBox
        title="World Reserve Trust"
        img="/static/gallery/wrt.jpg"
        href="https://www.worldreservetrust.com/">
        <p>
          World Reserve Trust wanted a website which explains who they are and
          to also posts update abot themselves. I designed a modern website with
          animation and 3D graphics to reflect the modernity of their industry,
          cyrptocurrency. The website heavily focuses on their brand and ethos.
        </p>
        <p>
          Many features were added to the website including: a secure admin
          login, a subscription form with validation, Amazon S3, and JWT.
        </p>
      </WorkExampleBox>
      <WorkExampleBox
        title="Cambridge Centre of Alternate Finance (CCAF)"
        img="/static/gallery/ccaf.jpg"
        href="https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/publications/">
        <p>
          The CCAF creates several reports each year, and it is important that
          each report has it's own identity. I used a different colour palette
          for each one to give them each its own theme. Furthermore, every chart
          and graph were custom made, instead of being computer generated, to
          make sure they all retained a high visual quality.
        </p>
        <p>I designed 3 reports for the CCAF, they are:</p>
        <ul>
          <li>
            <a
              href="https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/publications/global-blockchain/#.W5fBxkZKhhE"
              target="_blank">
              The Global Blockchain Report
            </a>
          </li>
          <li>
            <a
              href="https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/publications/global-cryptocurrency/#.W5fBpkZKhhE"
              target="_blank">
              The Global Cryptocurrency Report
            </a>
          </li>
          <li>
            <a
              href="https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/publications/africa-middle-east/"
              target="_blank">
              The Africa and Middle East Report
            </a>
          </li>
        </ul>
      </WorkExampleBox>
      <WorkExampleBox
        title="The Hearing Clinic"
        img="/static/gallery/thc.jpg"
        href="https://thehearingclinic.co.uk/">
        <p>
          The Hearing Clinic wanted a simple update to their wordpress website.
          Working with their designer, I added some design tweaks and
          functionailty changes to the website.
        </p>
        <p>
          Wordpress CMS is a powerful tool that allows the site owner to have
          control over their site. Working closely with the The Hearing Clinic
          and their designer, I made sure that the codebase for this site allows
          for easy editing in the future.
        </p>
      </WorkExampleBox>
      <style jsx>{`
        div.boxImage {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          justify-content: space-around;
          margin: 0 0 100px;
        }
        div.boxImage p {
          margin: 0 0 10px;
        }
        div.boxImage ul {
          padding: 0 0 0 20px;
        }
        div.boxImage ul li {
          margin: 0 0 10px;
        }
        div.boxImage ul li a {
          text-decoration: none;
          font-size: 1.1rem;
          color: inherit;
          transition: 0.2s ease all;
        }
        div.boxImage ul li a:hover {
          color: ${cherryRed};
        }
      `}</style>
    </div>
  )
}
