import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Articles from "../components/Articles";
import "../css/MainPage.css";
import News from "../components/News";
import { Container, Col, Row } from "react-bootstrap";
import Footer from "../components/Footer";
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
        <Footer></Footer>
      </>
    );
  }
}

export default MainPage;
