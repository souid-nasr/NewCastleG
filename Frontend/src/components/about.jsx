
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="assets/ieasaw-background.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text ">
              <h2>WHY DID YOU CHOOSE IESAW</h2>
              <p><i className="fa fa-check" aria-hidden="true"></i> {props.data ? props.data.paragraph : "loading..."}</p>
              <p><i className="fa fa-check" aria-hidden="true"></i> {props.data ? props.data.paragraph1 : "loading..."}</p>
              <p><i className="fa fa-check" aria-hidden="true"></i> {props.data ? props.data.paragraph2 : "loading..."}</p>
              <p><i className="fa fa-check" aria-hidden="true"></i> {props.data ? props.data.paragraph3 : "loading..."}</p>
              <p><i className="fa fa-check" aria-hidden="true"></i> {props.data ? props.data.paragraph4 : "loading..."}</p>
              <p><i className="fa fa-check" aria-hidden="true"></i> {props.data ? props.data.paragraph5 : "loading..."}</p>
              <p><i className="fa fa-check" aria-hidden="true"></i> {props.data ? props.data.paragraph6 : "loading..."}</p>
              <p><i className="fa fa-check" aria-hidden="true"></i> {props.data ? props.data.paragraph7 : "loading..."}</p>
              <p><i className="fa fa-check" aria-hidden="true"></i> {props.data ? props.data.paragraph8 : "loading..."}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
