import React from 'react';

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook'

import '../App.css'

import BigCalendar from '../components/BigCalendar'
import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'
import 'react-big-calendar/lib/css/react-big-calendar.css'

localizer(globalize)

let date0 = new Date()
date0.setHours(8, 0, 0, 0)
let date1 = new Date()
date1.setHours(12, 0, 0, 0)

const events = [
  {
    'title': 'Event 1',
    'start': date0,
    'end': date1
  }
]

storiesOf('Calendar', module)
  .add('Big Calendar', () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>react-big-calendar</h1>
            <a href="https://github.com/intljusticemission/react-big-calendar">github</a>
            <br/><br/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <BigCalendar events={events} />
          </div>
        </div>      
      </div>
    )
  })