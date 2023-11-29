import React from 'react'
const Content = () => {
    const course={
        name:"MERN",
        duration:"6 days",
        topics:['web ','ajax ','react '          
        ]
    }
  return (
    <div>
        <h1>Content</h1>
        <h2>Course Name - {course.name}</h2>
        <h2>Course Duration - {course.duration}</h2>
        <h2>Course topics - {course.topics}</h2>       
    </div>
  )
}

export default Content