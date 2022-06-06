import React, { Component } from "react";
import { Input, Button, Container, Form } from "semantic-ui-react";
import "../css/SearchBar.css";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTopic: "Ukraine",
    };
  }

  handleOnChange = (event) => {
    this.setState({
      searchTopic: event.target.value,
    });
    //console.log(this.state.searchTopic);
  };

  newsWithSearch = (topic) => {};

  render() {
    return (
      <>
        <Container>
          <div>
            <Form>
              <label htmlFor="searchTopic">Topic</label>
              <Input
                type="text"
                className="form-control"
                name="Topic"
                value={this.state.searchTopic}
                onChange={this.handleOnChange}
                class="textField"
              />
              <Button type="submit" className="form-control" name="butsub">
                Search
              </Button>
            </Form>
          </div>
        </Container>
      </>
    );
  }
}

export default SearchBar;
