import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testemonials = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 40, paddingBottom: 60, background:"#f6f6f6" }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <div className='section-title text-center'>
          <h2>Supporting students to success</h2>
        </div>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
         
          <div>
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
            <p>""I would recommend UGIC because it is based on the main University of Greenwich campus, a cosmopolitan university.""</p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
              <span style={{ fontWeight: 500, color: "#1f386e" }}>- Milissa Dumic</span> ,
              Media Analyst
            </p>
          </div>

          <div>
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
            <p>""I have a lot of international friends here at BUIC, and I’ve learnt so much from them. There is always a lot to do together both on and off-campus.""</p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
              <span style={{ fontWeight: 500, color: "#1f386e" }}>- Johnathan Doe</span> ,
              Media Analyst
            </p>
          </div>
         
          <div>
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
            <p>
              ""I think one of the main reasons the IIM (pre-masters) has been so helpful is because the staff are so supportive and are always able to help me.""
            </p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
              <span style={{ fontWeight: 500, color: "#1f386e" }}>- Anis Doe</span> ,
              Media Analyst
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />

    </div>
  );
};

export default Testemonials;