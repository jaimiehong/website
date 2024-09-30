import React from 'react'
import './background.css'
import gdtLogo from './49a770b0218e10020482508f82820000.png'
import ansibleLogo from './ansible_logo_icon_169596.png'
import wslLogo from './2020-05-21-setup-windows-development-eb5c79a7.png'
import signfy from './signfy.gif'
import sqlLogo from './Sql_data_base_with_logo.png'
function Background(props){
  return(
   <div className = "space">
      <div className = "h1-box">
        <p className = "h1-text">
          Projects
        </p>
        
      </div>
      <a href = "https://www.figma.com/proto/zhqgotsUfDgHmSbycY2Pho/GDT-Companion?node-id=209-2&starting-point-node-id=209%3A2&t=fCZFywIx21J25GJ6-1" target = "_blank">
      <div className = 'item'>


        <div className = 'box'>
          <div>
            <p className = 'title'>
              General Datatech CEC Wireframe
            </p>
            <p className = "descript">
              During the GDT 2024 intern cycle, I directed a team of my peers in creating a Figma wireframe of an app that would provide information on the company's new Client Experience Center. Fully interactive, our clean, user-friendly design provided information on company services, values, and how to get in touch. It was presented to our C-Suite and recieved marks on design and professionalism.
            </p>
          </div>
          <div className = 'logo-container'>
            <img src={gdtLogo} height= "75px" width = 'auto'></img>
          </div>
        </div>

      </div>
      </a>

      <div className = 'item'>
        

        <div className = 'box'>
          <div>
            <p className = 'title'>
              Ansible Playbook for Certificate Validation
            </p>
            <p className = "descript">
              In the summer of 2024, I worked in Windows Subsystem for Linux to create an automation script that would check if site certificates were expired. In order to be properly deployed amongst different servers, I utilized WSL-specific modules in the Ansible documentation to script it as a playbook. If a given site certificate was expired, the script then replaced it, proving its self-healing properties. 
            </p>
          </div>
          <div className = 'logo-container'>
            <img src={ansibleLogo} height= "90px" width = 'auto' className = 'logo'></img>
          </div>
          <div className = 'logo-container'>
            <img src={wslLogo} height= "90px" width = 'auto' className = 'logo'></img>
          </div>
        </div>

      </div>

      <a href = "https://jaimiehong.github.io/signfy/" target = "_blank">
      <div className = 'item'>
         
        <div className = 'box'>
          <div>
            <p className = 'title'>
              Sign Language Translator
            </p>
            <p className = "descript">
              More of a personal project, I created a web app in React that takes in written English input and produces links that directly show each word's ASL equivalent. I scraped HandSpeak's online dictionary and read it into a CSV file using a Python script. The main purpose of this app was to streamline the process of finding the ASL translation of multiple words in a given sentence. 
            </p>
          </div>
          <div className = 'logo-container'>
            <img src={signfy} height= "100px" width = 'auto' className = 'signfy-logo'></img>
          </div>
          <div className = 'logo-container'>
            <img src={sqlLogo} height= "75px" width = 'auto' ></img>
          </div>
        </div>

      </div>
      </a>
    </div>
  )
}

export default Background;