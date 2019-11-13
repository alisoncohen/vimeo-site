import React from "react";
import Carousel from "./carousel";

export default class CarouselWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, error: null, slides: null };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const authToken = "96cf750be0bf7075edc4a7a4d87fc30a";
    const url = "https://api.vimeo.com/ondemand/genres/comedy/pages";
    try {
      const rsp = await fetch(url, {
        headers: new Headers({ Authorization: `Bearer ${authToken}` })
      });
      const { data } = await rsp.json();
      const slides = data.slice(0, 10).map(item => ({
        name: item.name,
        description: item.description,
        image: item.pictures.sizes[6].link,
        color: item.colors.primary,
        secondaryColor: item.colors.primary,
        darken: false,
        buyLink: item.link,
        trailerLink: item.trailer.link
      }));

      this.setState({ isLoading: false, slides });
    } catch (ex) {
      this.setState({ isLoading: false, error: ex });
    }
  }
  render() {
    return this.state.isLoading ? null : (
      <Carousel slides={this.state.slides} />
    );
  }
}
