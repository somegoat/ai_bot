import React from 'react'
import { Text } from '@botonic/react'
import axios from 'axios'
import env from 'react-dotenv'

export default class extends React.Component {
  static async botonicInit(request) {
    const txt = request.input.data;
    var resp = "";
    const query = txt.slice(4, txt.length);
    console.log(query);
    if (query === "what is sei network?"){
        resp = "SEI is a layer 1 blockchain known for its lightning fast Transactions Per Second (TPS) and block finality";
    }
    else if (query === "what is the current state of sei?"){
        resp = "SEI network currently appears to be running with no downtime";
    }
    else if (query === "what is the latest news about sei?"){

        resp = 'Sei Development Foundation taps Jamie Finn as strategic advisor (https://crypto.news/sei-development-foundation-taps-jamie-finn-as-strategic-advisor/) \n Sei Labs releases whitepaper for Sei Giga targeting multiproposer EVM L1 (https://crypto.news/sei-labs-releases-whitepaper-for-sei-giga-targeting-multiproposer-evm-l1/) \n Sei proposes EVM-only architecture, phasing out Cosmos transactions and smart contracts  (https://crypto.news/sei-proposes-evm-only-architecture-phasing-out-cosmos-transactions-and-smart-contracts/)';
    }
    else {
        resp = "Looks like your query returned no results";
    }
    return { resp }
  }
  render() {
    return (
      <>
        <Text>
          {this.props.resp}
        </Text>
      </>
    )
  }
}
