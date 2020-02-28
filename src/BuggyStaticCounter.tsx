import * as React from 'react'

class BuggyStaticCounter extends React.Component<{}, { forceUpdate: any }> {
  private static globalCount = 0
  interval: number

  constructor(props : any) {
    super(props)
    this.state = {
      forceUpdate: {}
    }
  }

  componentDidMount() {
    this.interval = window.setInterval(
      () => {
        BuggyStaticCounter.globalCount++
        
        this.setState({ forceUpdate: {} })
      },
      200,
    )
  }

  generateString1() {
    return "1"
  }

  generateString2 = ()  => {
    return "1"
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return <span>{BuggyStaticCounter.globalCount} - {this.generateString1()} - {this.generateString2()}</span>
  }
}

export default BuggyStaticCounter
