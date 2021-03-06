import React from "react";

export default class DataFetcher extends React.Component {
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
      const slides = data
        .filter(
          item =>
            item.name !==
            "OH NO! IVOR THE DANCE KING AND SOME OF HIS FRIENDS TRY TO SAVE THE WORLD!!"
        )
        .slice(0, 10)
        .map(item => ({
          title: item.name,
          description: item.description,
          image: item.pictures.sizes[6].link,
          color: item.colors.primary,
          secondaryColor: item.colors.primary,
          darken: true,
          buyLink: item.link,
          trailerLink: item.trailer.link
        }));

      this.setState({ isLoading: false, slides });
    } catch (ex) {
      this.setState({ isLoading: false, error: ex });
    }
  }

  render() {
    return this.state.isLoading ? null : this.props.children(this.state.slides);
  }
}
