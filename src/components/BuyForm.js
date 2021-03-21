import React, { Component } from 'react'
import tokenLogo from '../ctez.svg'
import xtzLogo from '../tezos-xtz-logo.png'

class BuyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0'
    }
  }

  render() {
    return (
      <form className="mb-3" onSubmit={(event) => {
          event.preventDefault()
          let xtzAmount
          xtzAmount = this.input.value.toString()
          xtzAmount = 0
          this.props.buyTokens(xtzAmount)
        }}>
        <div>
          <label className="float-left"><b>Input</b></label>
          <span className="float-right text-muted">
            Balance: 
            {/* TODO add balance fetch */}
          </span>
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            onChange={(event) => {
              const xtzAmount = this.input.value.toString()
              this.setState({
                output: xtzAmount * 100
              })
            }}
            ref={(input) => { this.input = input }}
            className="form-control form-control-lg"
            placeholder="0"
            required />
          <div className="input-group-append">
            <div className="input-group-text">
              <img src={xtzLogo} height='32' alt=""/>
              &nbsp;&nbsp;&nbsp; XTZ
            </div>
          </div>
        </div>
        <div>
          <label className="float-left"><b>Output</b></label>
          <span className="float-right text-muted">
            Balance: 
            {/* TODO add balance fetch */}
          </span>
        </div>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="0"
            value={this.state.output}
            disabled
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <img src={tokenLogo} height='32' alt=""/>
              &nbsp; CTEZ
            </div>
          </div>
        </div>
        <div className="mb-5">
          <span className="float-left text-muted">Exchange Rate</span>
          <span className="float-right text-muted">1 XTZ = 100 CTEZ</span>
        </div>
        <button type="submit"  id="swap-btn" className="btn btn-primary btn-block btn-lg">SWAP!</button>
      </form>
    );
  }
}

export default BuyForm;