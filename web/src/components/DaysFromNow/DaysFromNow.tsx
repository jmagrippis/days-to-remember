import * as React from 'react'
import moment, { Moment } from 'moment'

type Props = {
  then: Moment
  now?: Moment
}

type State = {
  daysFromNow: string
}

export class DaysFromNow extends React.PureComponent<Props, State> {
  getDaysFromNow = () =>
    moment
      .utc(this.props.then)
      .diff(moment.utc(this.props.now), 'days', true)
      .toFixed(5)

  state = {
    daysFromNow: this.getDaysFromNow()
  }

  calculateDaysFromNow = () => {
    const daysFromNow = this.getDaysFromNow()

    if (this.state.daysFromNow !== daysFromNow) {
      this.setState({ daysFromNow })
    }
  }

  private interval = window.setInterval(this.calculateDaysFromNow, 500)

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { daysFromNow } = this.state

    return <span>{daysFromNow}</span>
  }
}
