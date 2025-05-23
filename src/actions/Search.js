import React from 'react'
import { Text } from '@botonic/react'
import axios from 'axios'

export default class extends React.Component {
  static async botonicInit(request) {
    const txt = request.input.data;
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
