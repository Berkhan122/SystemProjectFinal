import React, { Component, useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../css/MainPage.css";
import Navigation from "../components/Navigation";

import ReactPlayer from "react-player";

class ContentPage extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        {/* <div className="container " style={{ alignItems: "center" }}>
          <div className="col-md-6">
            <img src="https://i.imgur.com/0TuQJTV.jpg" />
          </div>
        </div> */}

        <Container>
          <Row>
            <Col style={{ fontSize: "32px", textAlign: "center" }}>
              Yılana Sarılmak: İkinci Dünya Savaşı ve Ordu-Mafya İlişkisi (Bölüm
              I)
            </Col>
          </Row>
          <Row>
            <Col style={{ fontSize: "18px" }}>
              Yazar:Yakup Burak Öksüz aka 'KwK'
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              Yayınlanma Tarihi:30 Mart 2019
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col>
              İkinci Dünya Savaşı’yla Atlantik, denizaltı gemilerinin cirit
              attığı, konvoyların torpidolandığı bir okyanus hâline geldi.
              Atlantik Savaşı olarak nitelendirilen bu deniz savaşları esnasında
              Alman U-Boat’ları Amerika kıyılarına kadar geldi ve hatta Long
              Island’ın 60 mil açıklarında bir Amerikan gemisine saldırma
              “cüretini” gösterdi. Peki, bu U-Boat’lar ikmal problemini nasıl
              aşmışlardı? Nasıl bu kadar uzak mesafede faaliyet gösteriyorlardı?
              Deniz Kuvvetleri’ne göre iki olasılık vardı. Ya içki yasağı
              döneminde kaçakçılıkla uğraşan denizciler şimdilerde bu
              denizaltıların ikmâlini sağlıyordu ya da New York limanında Alman
              ajanları yuvalanmıştı. Bir olay ise artık bu durumla ilgili bir
              şeyler yapılmasının gerekliliğini ortaya koyacaktı.
            </Col>
          </Row>
          <Row>
            <Col>
              <div>Yazının videosuna buradan ulaşabilirsiniz!</div>
              <ReactPlayer url="https://www.youtube.com/watch?v=nBM0-40fg6g" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContentPage;
