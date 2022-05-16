import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import '../css/sphere.css';

const styles = {
  large: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  small: {
    opacity: 0.7,
    fontSize: 16
  }
};

class TechSphere extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 3000);
  }

  render() {
    return (
      <div className='app-outer'>
        <div className='app-inner'>
          <TagCloud 
            className='tag-cloud'
            style={{
              fontFamily: 'sans-serif',
              //fontSize: () => Math.round(Math.random() * 50) + 16,
              fontSize: 30,
              color: () => randomColor({
                hue: 'blue'
              }),
              padding: 5,
            }}>
            <div
              style={{
                fontFamily: 'serif',
                fontSize: 40,
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: randomColor()
              }}>Futurama</div>
            <div style={styles.large}>Java</div>
            <div style={styles.large}>C++</div>
            <div style={styles.large}>Javascript</div>
            <div style={styles.large}>C</div>
            <div style={styles.large}>SpringBoot</div>
            <div style={styles.large}>ReactJs</div>
            <div style={styles.large}>NodeJs</div>
            <div className="tag-item-wrapper">
              <div>
              
              </div>
              <div className="tag-item-tooltip">
               
              </div>
            </div>
           
            <div style={styles.medium}>Intellij</div>
            <div style={styles.medium}>VsCode</div>
            <div style={styles.medium}>SonarQube</div>
            <div style={styles.medium}>CheckMarx</div>
           
          </TagCloud>
        </div>
      </div>
    );
  }
}


export default TechSphere;
