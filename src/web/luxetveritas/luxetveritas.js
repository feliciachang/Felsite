import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import LazyLoad from "react-lazyload";
import BlogComponent from "../BlogComponent.js"
import HeaderComponent from "../HeaderComponent.js"

class LuxPage extends Component {
  render(){
    return(
      <div>
      <HeaderComponent
        name="Lux Et Veritas."
        title="Class Project | 2019 Fall"
        des="Lux Et Veritas was an art installation in Yale's Becton Cafe, inside the engineering building. Spanning many LCD screens, Lux Et Veritas was a distributed installation spanning the entire cafe wall, ceiling, and entrance."
        color= "#FFFCDE"
        img="https://felswebsite.s3.amazonaws.com/luxphoto.png"
      />
      <BlogComponent
      number="01."
      title="The Project"
      text="For this project, I was tasked with creating an art installation that considered the space in which it was installed. To me, the Becton Center is the physical manifestation of what people envision engineering to be. With a concrete and stone exterior, the Becton Center feels menacing - a space reserved only for the most logical and mechanical. As a result, I was interested in creating something that was playful through color and type. (Photo by Bentel & Bentel)"
      image={
        <div style={{margin: "0 auto"}}>
        <img style={{objectFit: "contain", width: "80%", height: "auto", display: "block", margin: "auto"}} src="https://www.bentelandbentel.com/~bentelan/images/uploads/cache/images/uploads/project-images/gcbc_0403_1500_998.jpg"/>
        </div>}
      />
      <BlogComponent
      number="02."
      title="The Technical Challenge"
      text="Before building the installation, I needed to first understand the pixel mapping of the space. This was a crucial first step because the Becton LCD screens, which we were displaying our graphics on, spanned many different spaces, from the entrance, to the walls and ceiling."
      image={
        <div style={{margin: "0 auto"}}>
        <img style={{objectFit: "contain", width: "80%", height: "auto", display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/newscreen1.png"/>
        <br/>
        <img style={{objectFit: "contain", width: "80%", height: "auto", display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/BectonFront.jpg"/>
        </div>}
      />
      <BlogComponent
      number="03."
      title="The Design"
      text="Utilizing color, typography, and movement, I built a generative art piece with the intention of bringing warmth into a stereotypically cold space. I knew from the beginning that I wanted to use type to engage with my audience in a way that felt accessible and human. The type was not static, but rather changed in both content and position over time, exuding a sense of playfulness."
      image={
        <div style={{margin: "0 auto", align:"center"}}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/C1u5e_T_vbo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>}
      />
      </div>
    )
  }
}

// class LuxPage extends Component {
//   render() {
//     return (
//       <div>
//           <br/>
//           <div
//             className="video"
//             style={{
//               marginLeft: "17%",
//               position: "relative",
//               paddingBottom: "56.25%" /* 16:9 */,
//               paddingTop: 10,
//               height: 0
//             }}
//           >
//             <iframe
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "80%",
//                 height: "80%"
//               }}
//               src={`https://www.youtube.com/embed/C1u5e_T_vbo`}
//               frameBorder="0"
//             />
//           </div>
//           <div style={{ textAlign: "center" }}>
//           <h3>Design Concept
//           </h3>
//           </div>
//           <div
//             style={{
//               marginRight: "20%",
//               marginLeft: "20%"
//             }}
//           >
//           <p>To me, the Becton Center is the physical manifestation of what people envision engineering to be. With a concrete and stone exterior, the Becton Center feels menacing - a space reserved only for the most logical and mechanical. Perhaps that is why engineering always feels so separate from the liberal arts education that Yale embodies. In the same vein, generative art is often isolated from traditional art. Without any evidence of human touch and influence, generative art feels inhuman.</p>
//           </div>
//           <br/>
//           <div
//             style={{
//               marginRight: "20%",
//               marginLeft: "20%"
//             }}
//           >
//           <p>
//           I was interested in building an art piece that challenged notions of engineering and generative art. Utilizing color, typography, and movement, I built a generative art piece with the intention of bringing warmth into a stereotypically cold space. I knew from the beginning that I wanted to use type to engage with my audience in a way that felt accessible and human. The type was not static, but rather changed in both content and position over time, exuding a sense of playfulness.
//           </p>
//           </div>
//         </div>
//
//     );
//   }
// }

export default LuxPage;
