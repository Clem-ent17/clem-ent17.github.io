// Import the Component component from React
import React from "react"
// Import the Thumbnail component
// import Thumbnail from './Thumbnail'; 
import WeatherApp from './WeatherApp';
// Import the style sheet
import '../App.css';
 
export default function Work(props) {
  return (
    // Render a Thumbnail component
    <div>
     <WeatherApp />
      {/* <Thumbnail
        link="/twitter"
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        title="Twitter Newsfeed"
        category="Mobile App"
      />
      
      <Thumbnail
        link="/airbnb"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        title="Airbnb Experiences"
        category="Website"
      />
      
      <Thumbnail
        link="/photoshop"
        image="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
        title="Photoshop Redesign"
        category="Desktop App"
      /> */}
    </div>
  )
}