import React from 'react'
import ServiceCard from './ServiceCard'
import DatePicker from "react-datepicker"
import { subMonths } from 'date-fns'
import _uniqueId from 'lodash/uniqueId'
 
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

class App extends React.Component {
  state = {
    weddingDate: new Date(),
    brideName: '',
    brideEmail: '',
    serviceTimeline: [],
    cardsActive: false,
  }

  eventHandler = (date) => {

    let dateArr  = date.toString().split(' ')
    let wedMonth = this.monthToNumber(dateArr[1])
    let wedDay   = Number(dateArr[2])
    let wedYear  = Number(dateArr[3])
    
    this.setState({
      weddingDate: date,
      serviceTimeline: {
        laserHair:  {
          title:    'Laser Hair Removal',
          date:     subMonths(new Date(wedYear, wedMonth, wedDay), 9),
          id:       _uniqueId('id-'),
          img:      'https://chubackmedical.com/wp-content/uploads/2020/01/bride-lhr.jpg',
        },
        coolSculpt: {
          title:    'CoolSculpting',
          date:     subMonths(new Date(wedYear, wedMonth, wedDay), 7),
          id:       _uniqueId('id-'),
          img:      'https://chubackmedical.com/wp-content/uploads/2020/01/bride-coolsculpting.jpg',
        },
        prpFacial: {
          title:    'Aquagold Facial',
          date:     subMonths(new Date(wedYear, wedMonth, wedDay), 5),
          id:       _uniqueId('id-'),
          img:      'https://chubackmedical.com/wp-content/uploads/2020/01/bride-prp.jpg',
        },
        filller: {
          title:    'Cosmetic Filler',
          date:     subMonths(new Date(wedYear, wedMonth, wedDay), 4),
          id:       _uniqueId('id-'),
          img:      'https://chubackmedical.com/wp-content/uploads/2020/01/bride-filler.jpg',
        },
        botox: {
          title:    'Botox',
          date:     subMonths(new Date(wedYear, wedMonth, wedDay), 2),
          id:       _uniqueId('id-'),
          img:      'https://chubackmedical.com/wp-content/uploads/2020/01/bride-botox.jpg',
        },
      },
      cardsActive: true
    })

  }

  monthToNumber = (month) => {

    switch(month) {
      case 'Jan':
        return 1
      case 'Feb':
        return 2
      case 'Mar':
        return 3
      case 'Apr':
        return 4
      case 'May':
        return 5
      case 'Jun':
        return 6
      case 'Jul':
        return 7
      case 'Aug':
        return 8
      case 'Sep':
        return 9
      case 'Oct':
        return 10
      case 'Nov':
        return 11
      case 'Dec':
        return 12
      default:
        return 'No Month Entered'
    }

  }

  render() {

    return (
      <div id="flex-container" className="uk-flex uk-flex-middle uk-flex-center">
        <div>
          <h1 className="uk-text-center">Bride to Be Treatment Timeline</h1>
          <div className="uk-container uk-container-center uk-text-center">
            <div className="form-header">
              <label id="wedding-date">Your Wedding Date</label>
              <DatePicker
                selected={this.state.weddingDate}
                onChange={this.eventHandler}
              />
            </div>
            { this.state.cardsActive ? (
              <div className="uk-child-width-1-5@m uk-grid-small uk-grid-match uk-grid">
              {Object.keys(this.state.serviceTimeline).map(i => (
                <div key={this.state.serviceTimeline[i].id}>
                    <ServiceCard
                      service={this.state.serviceTimeline[i]}
                    />
                </div>
              ))}
              </div>
            ) : (
              <div></div>
            ) }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
