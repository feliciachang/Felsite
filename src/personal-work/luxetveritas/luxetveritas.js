import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import LazyLoad from "react-lazyload";


class LuxPage extends Component {
  render() {
    return (
      <div>
          <br/>
          <div
            className="video"
            style={{
              marginLeft: "17%",
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 10,
              height: 0
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "80%",
                height: "80%"
              }}
              src={`https://www.youtube.com/embed/C1u5e_T_vbo`}
              frameBorder="0"
            />
          </div>
          <div style={{ textAlign: "center" }}>
          <h3>Design Concept
          </h3>
          </div>
          <div
            style={{
              marginRight: "20%",
              marginLeft: "20%"
            }}
          >
          <p>To me, the Becton Center is the physical manifestation of what people envision engineering to be. With a concrete and stone exterior, the Becton Center feels menacing - a space reserved only for the most logical and mechanical. Perhaps that is why engineering always feels so separate from the liberal arts education that Yale embodies. In the same vein, generative art is often isolated from traditional art. Without any evidence of human touch and influence, generative art feels inhuman.</p>
          </div>
          <br/>
          <div
            style={{
              marginRight: "20%",
              marginLeft: "20%"
            }}
          >
          <p>
          I was interested in building an art piece that challenged notions of engineering and generative art. Utilizing color, typography, and movement, I built a generative art piece with the intention of bringing warmth into a stereotypically cold space. I knew from the beginning that I wanted to use type to engage with my audience in a way that felt accessible and human. The type was not static, but rather changed in both content and position over time, exuding a sense of playfulness.
          </p>
          </div>
        </div>

    );
  }
}

export default LuxPage;
