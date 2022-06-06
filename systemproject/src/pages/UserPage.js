import React, { Component } from "react";
import {
  Button,
  Form,
  Card,
  CardContent,
  CardMeta,
  Icon,
  Image,
  List,
  CardHeader,
  Container,
} from "semantic-ui-react";
import "../css/Users.css";

import Navigation from "../components/Navigation";
class UserPage extends Component {
  render() {
    return (
      <div class="Body">
        <Navigation />
        <Container className="Container" textAlign="justified">
          <div>
            <Card>
              <Image
                src="https://i.imgur.com/W9nHxy5.png"
                className="Image"
              ></Image>
              <CardContent className="Content">
                <CardHeader>Kullanıcı:|Kullanıcı Adı|</CardHeader>
                <Card.Meta>
                  <span className="date">
                    Kayıt Tarihi:|Kullanıcı Kayıt Tarihi|
                  </span>
                </Card.Meta>
                <Card.Description>
                  Hakkımda:|Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Praesent fringilla ornare arcu, ac sollicitudin urna
                  efficitur a. Sed at ante turpis. Donec sapien erat, tincidunt
                  in nibh eu, iaculis posuere ante. Integer finibus pretium
                  ipsum quis porttitor. Morbi imperdiet consectetur lorem non
                  sodales. Sed aliquam elit nec nulla dignissim tempor. Duis sed
                  sapien et ante tempus malesuada.|
                </Card.Description>
                <CardMeta>
                  <a href="https://www.instagram.com/berkhantapan/">
                    Sosyal Medya
                  </a>
                  <span>|Eğer var ise|</span>
                </CardMeta>
                <Button basic color="green">
                  Düzenle
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

export default UserPage;
