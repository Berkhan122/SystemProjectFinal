import React, { Component } from "react";
import { getNews, getNewsTopic } from "../api/newsApi";
import {
  Button,
  Form,
  Card,
  CardContent,
  CardMeta,
  Container,
  Image,
  List,
  CardHeader,
  Input,
} from "semantic-ui-react";
import AuthenticationService from "../api/AuthenticationService";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      searchTopic: "",
      totalResults: "",
      loading: false,
      apiError: "",
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const response = await getNews();
      console.log(response);
      this.setState({
        articles: response.articles,
        totalResults: response.totalResults,
      });
      console.log("Success from News.js");
    } catch (error) {
      console.log(error);
    }
    this.setState({ loading: false });
  }

  handleOnChange = (event) => {
    this.setState({
      searchTopic: event.target.value,
    });
    //console.log(this.state.searchTopic);
  };

  getNewsSearch(topic) {
    this.setState({ loading: true });
    try {
      const response = getNewsTopic(topic);
      console.log(response);
      this.setState({
        articles: response.articles,
        totalResults: response.totalResults,
      });
      console.log("Success from SearchBar");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const userRole = AuthenticationService.getUserRole();
    return (
      <>
        <Container>
          <div>
            <Form>
              <label htmlFor="searchTopic">Topic</label>
              <Input
                type="text"
                className="textField "
                name="Topic"
                value={this.state.searchTopic}
                onChange={this.handleOnChange}
              />
              <Button
                type="submit"
                className="form-control"
                name="butsub"
                onClick={() => this.getNewsSearch(this.state.searchTopic)}
              >
                Search
              </Button>
            </Form>
          </div>
        </Container>
        {/* Koşullu Render İşlemi (SearchBar için kullanılacak) */}
        {/* {this.state.loading && <span> Makaleler yükleniyor.</span>} */}
        <List divided>
          {this.state.articles.map((article) => (
            <Card
              style={{ backgroundColor: "#747474", color: "white" }}
              key={article.id}
            >
              <Image src={article.urlToImage}></Image>
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
                    <a href={article.url}>Makaleye Gidin.</a>
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

export default News;

/*Search Bar for News*/
{
  /* <Form onSubmit={this.handleSubmit}>
          <label for="topic" style={{ justifyContent: "left" }}>
            Konu Başlığı:
          </label>
          <input
            type="text"
            id="topic"
            value={this.state.searchTopic}
            onChange={this.handleOnChange}
          ></input>
          <Button
            type="submit"
            color="green"
            onClick={this.componentDidMount(this.searchTopic)}
          >
            Search
          </Button>
        </Form> */
}
