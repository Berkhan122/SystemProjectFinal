import React, { Component } from "react";

import ArticleList from "../data/data.json";
import {
  Card,
  CardContent,
  CardMeta,
  Image,
  List,
  CardHeader,
} from "semantic-ui-react";
import AuthenticationService from "../api/AuthenticationService";
class Articles extends Component {
  render() {
    const userRole = AuthenticationService.getUserRole();
    return (
      <>
        <List divided>
          {ArticleList.map((article) => (
            <Card
              style={{ backgroundColor: "#747474", color: "white" }}
              key={article.id}
            >
              <Image src={article.image}></Image>
              <CardContent>
                <CardHeader>Author:{article.author}</CardHeader>
                <Card.Meta>
                  <span className="date">
                    Yayımlanma Tarihi:{article.publishedAt}
                  </span>
                </Card.Meta>
                <Card.Description>
                  Açıklama:{article.description}
                </Card.Description>
                {userRole === "user" && (
                  <CardMeta>
                    <a href={"/content/" + article.id}> Makale</a>
                  </CardMeta>
                )}
              </CardContent>
            </Card>
          ))}
        </List>
      </>
    );
  }
}

export default Articles;
