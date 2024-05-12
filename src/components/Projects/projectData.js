import React from 'react'
import Project from './project'
import churn from '../../images/churn.png'
import piNNit from '../../images/dart.png' 
import image from '../../images/image.jpg'
import zillow from '../../images/zil.webp'
import stock from '../../images/stock.jpeg'
import social from '../../images/social.jpeg'
import stereo from '../../images/stereo.png'
import {Slide} from "react-awesome-reveal";
const ProjectData = ({Title,Info1,Info2,Img1,Title2,Info3,Info4,Img2}) => {
  return (
      <div>
        <Slide>
        <Project 
        Title="StereoVision"
        Info1=""
        Info2="Depth map data is used in a variety of applications, including object avoidance, 3D reconstruction, localization, and more."
        link1="https://github.com/AshwinUnnikrishnan/StereoVision"
        Img1={stereo}

        Title2="Churn Prediction"
        Info4="Performed exploratory data analysis on hotel reservation data and bank customer data to identify the root cause of customer churn(Explainable) and also build model to predict customer churn."
        link2="https://github.com/AshwinUnnikrishnan/ChurnPrediction"
        Img2={churn}
        
        ></Project>
        
        

        <Project 
        Title="Connactify"
        Info1="Built a recommender system to connect users through similar interest in activities."
        Img1={social}
        link1="https://github.com/AshwinUnnikrishnan/Connectify"

        Title2="Light Weight Image Search"
        Info4="Built a light weight image search in C++ to search images based on custom made filters to get features."
        Img2={image}
        link2="https://github.com/AshwinUnnikrishnan/Pattern-Recognition-and-Computer-Vision-CS533-/tree/main/Project%203%20Real-time%20Object%202-D%20Recognition"
        ></Project>

<Project 
        Title="ETL Pipeline Zillow API"
        Info1="Built a whole pipeline to visualize daily changes in the housing prices of california region. Used AWS services to develop the application."
        Img1={zillow}
        link1=""


        Title2="Stock Market Portfolio management application"
        Info4="Designed a JAVA MVC project where people could use it to add portfolio for stockmarket, delete stocks and trade in real time."
        Img2={stock}
        link2=""
        ></Project>
        </Slide>
    </div>
  )
}

export default ProjectData