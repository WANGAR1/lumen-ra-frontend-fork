{/* ==================Why Lumenra Section================== */}
import React from 'react'
import "./WhyLumenraSection.css"
import FoundationImage from "../../assets/WhyLumenraImages/foundationimage.svg"
import ModuleImage from  "../../assets/WhyLumenraImages/moduleimage.svg"
import SimulationImage from  "../../assets/WhyLumenraImages/simulationimage.svg"

const WhyLumenraSection = () => {
  return (
   
     <section className="why-lumera">
      <div className="container">

        {/*================ Top Section =============== */}
        <div className="lumera-top">
          <h2>Why LUMEN-RA</h2>
          <p>
            The platform focuses on informal, real-world support situations
            rather than clinical intervention.
          </p>
        </div>

        {/*=================== Middle Section ===================*/}
         <div className="lumera-middle">
          <h3>Awareness isn’t the Same as Preparedness</h3>
          <p>
            88% of men are aware of gender-based violence, but many feel unsure
            what to say when someone opens up. Good intentions deserve better
            tools.
          </p>
        </div>

         {/*==================== Bottom Section ===================*/}
          <div className="lumera-bottom">
          <h3>Turning Willingness into Real-World Allyship</h3>
          <div className="lumera-grid">

            <div className="grid-foundations">
              <img src={FoundationImage} alt="Foundations" />
              <h4>Learn the Foundations</h4>
              <p>Expert led modules on trauma awareness and communication</p>
            </div>

            <div className="grid-modules">
              <img src={ModuleImage} alt="Modules" />
              <h4>Structured Learning Modules</h4>
              <p>Interactive situations to build your response skills</p>
            </div>
            
            <div className="grid-simulation">
              <img src={SimulationImage} alt="Simulation" />
              <h4>Scenario-based Simulation</h4>
              <p>Guides and tools for safe, supportive action.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyLumenraSection
