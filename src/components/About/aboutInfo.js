import React from 'react'
import profilepic from "../../images/profile_pic.png"

const AboutInfo = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
        <div className="bg-white bg-opacity-10 w-full h-full flex flex-row justify-between rounded-xl xxs:flex-col sm:flex-row">
                <img
            className="w-3/4 object-cover h-96 rounded-l-lg xxs:w-full sm:w-3/4"
            src={profilepic}
            ></img>
            <div className="flex flex-col">
          <div className="text-white text-right m-6 font-poppins xxs:text-center sm:text-right">
            <h1 className="text-5xl font-bold">Ashwin Unnikrishnan</h1>
          </div>
          <p className="text-white p-6 text-xl text-right xxs:text-center sm:text-right">
            Machine Learning Engineer / Data Scientist{" "}<br />
            Interested in getting insights from data and take informed decisions. Love problem solving and coming up with newusecases and working on new technologies to solve problem.
            I am hardworking, innovative and meticulous, who loves going extra mile to achieve goals.
            I would describe myself as a learner because learning is one such process that never ends. My strengths are good communication skills, perseverance and smart work.
            <br />
            Current Focus: Large Language Models, Data Analytics, Data Science, Machine Learning
          </p>
        </div>
            </div>
        </div>
    
  )
}

export default AboutInfo