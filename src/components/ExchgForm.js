import React, { Component } from 'react'
import BuyForm from './BuyForm'
import SellForm from './SellForm'

class Exchange extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy'
    }
  }

  render() {
    let content
    if(this.state.currentForm === 'buy') {
      content = <BuyForm
        xtzBalance={this.props.xtzBalance}
        tokenBalance={this.props.tokenBalance}
        buyTokens={this.props.buyTokens}
      />
    } else {
      content = <SellForm
        xtzBalance={this.props.xtzBalance}
        tokenBalance={this.props.tokenBalance}
        sellTokens={this.props.sellTokens}
      />
    }

    return (
      <div id="content" className="mt-3">

        <div className="d-flex justify-content-between mb-3">
          <button
              className="btn btn-light"
              onClick={(event) => {
                this.setState({ currentForm: 'buy' })
              }}
            >
            Buy
          </button>
          <span className="text-muted">&lt; &nbsp; &gt;</span>
          <button
              className="btn btn-light"
              onClick={(event) => {
                this.setState({ currentForm: 'sell' })
              }}
            >
            Sell
          </button>
        </div>

        <div className="card mb-4" >

          <div className="card-body">

            {content}

          </div>

        </div>

      </div>
    );
  }
}

export default Exchange;