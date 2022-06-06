import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Articles from "../components/Articles";
import "../css/MainPage.css";
import News from "../components/News";
import { Container, Col, Row } from "react-bootstrap";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      news: [],
      data: [],
      helloMessage: "",
    };
  }

  /*
       const response = await getNews();
      console.log(response);
      this.setState({ news: response.articles });
      console.log("Success");
    */

  async componentDidMount() {
    try {
      // apiCalls.getUsers().then((response) => {
      //   this.setState({ users: response.data });
      //   console.log(this.state.users);
      // });
      //const response = await getData();
      //console.log(response);
      // this.setState({
      //   data: response.articles,
      // });
      // apiCalls.getHelloMessage().then((response) => {
      //   console.log(response);
      //   this.setState({ helloMessage: response });
      // });
      //console.log("Success from MainPage.js");
      //console.log(this.state.data)
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <Navigation></Navigation>
        <section>
          <div className="welcome">
            <p
              style={{
                textAlign: "center",
                fontSize: "32px",
                color: "white",
              }}
            >
              Hoş Geldiniz
            </p>
            <p
              style={{ fontSize: "18px", color: "white", textAlign: "center" }}
            >
              Bu sitede askeri tarih ile ilgili bir çok içerik bulacaksınız.
              Bunlara ek olarak yayınlanmış makalelere de erişebilirsiniz. Bu
              site bir üniversite öğrencisinin bitirme projesidir. Burada
              gördüğünüz her şey açık kaynaklardan alınmıştır.
            </p>
          </div>
        </section>
        <Container>
          <Row>
            <Col sm={6} style={{ backgroundColor: "#747474" }}>
              <h4 style={{ textAlign: "center", color: "white" }}>Haberler</h4>
              <News></News>
            </Col>
            <Col sm={6} style={{ backgroundColor: "#747474" }}>
              <h4 style={{ textAlign: "center", color: "white" }}>Yazılar</h4>
              <Articles></Articles>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MainPage;

// <div style={{ width: "100%" }}>
//           {/*className="table" style={{width:window.innerWidth/2-140, marginLeft:window.innerWidth/2+140}}*/}
//           {/*className="table" style={{width:window.innerWidth/2-140}*/}
//           <div
//             className="table"
//             style={{ width: "50%", height: "100px", float: "left" }}
//           >
//             <h4 style={{ textAlign: "center", color: "white" }}>Haberler</h4>
//             <News></News>
//           </div>
//         </div>
