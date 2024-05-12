import React from 'react'



const EducationDetails = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col items-center text-white mt-20 font-poppins">
            <div className="grid grid-cols-2 gap-6 mt-10">
            <a
                href="#"
                className="m-5 p-5 bg-lightblack rounded-xl border cursor-pointer hover:border-purple text-left"
              >
                <h2 className="text-3xl font-bold">Master of Science in Artificial Intelligence</h2>
                <h2 className="text-xl">Northeastern University, Boston, MA</h2>
                
<p className="mt-10 opacity-50">
<b>Course work:</b> 
Foundations of Artificial Intelligence | Pattern Recognition and Computer Vision | Natural Language Processing | Machine Learning | Deep Learning | AI in Human Computer Interactions | Algorithms | Program Design
                </p>
              </a>
              
              <a
                href="#"
                className="m-5 p-5 bg-lightblack rounded-xl border cursor-pointer hover:border-purple text-left"
              >
                <h2 className="text-3xl font-bold">Master of Technology in Computer Science and Information Security</h2>
                <h2 className="text-xl">National Institute of Technology, Warangal, India</h2>
 
<p className="mt-10 opacity-50">
<b>Course work:</b>
Foundations of Cryptography | Advance Algorithms | Operating Systems | Adavance Database Security | Privacy Preserving Techniques | Ethics in AI | Network Programming
                </p>
              </a>
              <a
                href="#"
                className="m-5 p-5 bg-lightblack rounded-xl border cursor-pointer hover:border-purple text-left"
              >
                <h2 className="text-3xl font-bold">Bachelor of Technology in Computer Science And Engineering</h2>
                <h2 className="text-xl">Government Engineering College Kottayam, India</h2>
               
                <p className="mt-10 opacity-50">
                <b>Course work: </b>             
Operating Systems | Data Structures and Algorithms | Web Programming | Mobile Computing | Theory of Computation | Computer Graphics | Compiler Design | Artificial Intelligence | Grid and Cloud Computing | Graph Theory and Applications | Cryptography and Network Security | Object-Oriented programming.
                </p>
              </a>
            </div>
        </div>
      )
}

export default EducationDetails