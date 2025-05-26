import React from 'react'
import { Text } from '@botonic/react'
import axios from 'axios'
import env from 'react-dotenv'

export default class extends React.Component {
  static async botonicInit(request) {
    const txt = request.input.data;
    const url = "https://api.serpstack/search";
    var rf = [];
    console.log("hii");
    const key = import.meta.env.REACT_APP_API_KEY;
    console.log(key);
    try {
      const res = await axios.get(url, {
        params: {
          query: txt,
          access_key: process.env.API_KEY
        }
      });
      console.log(res);
      const results = res.data.results || [];
      rf = results.slice(0, 3).map(result => ({
        title: result.title,
        url: result.url,
        description: result.content || 'No description available'
      }));
    }
    catch (err){
      console.log(err);
    }
    console.log(rf);
    return { txt }
  }
  render() {
    return (
      <>
        <Text>
          {this.props.txt} is your query. Is it not?
        </Text>
      </>
    )
  }
}
