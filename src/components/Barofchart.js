import React, { Component } from 'react'
//import Canvas from 'react-canvas-js/dist/index.js'
import {Canvas} from 'react-canvas-js'


// const particleOptions = [
//     {
//       'maxParticles': 50,
//       'colors': ['#2E1D62', '#513D91', '#487EEF', '#11A887', '#fc5c65', '#fed330'],
//       'shapes': ['circle', 'square'],
//       'size': 10,
//       'minSpeed': 0.05,
//       'maxSpeed': 0.20,
//       'alpha': 0.70,
//       'backgroundColor': '#1E1F29'
//     }
// ]

class BarOfChart extends Component {
    
    render() {
		const options = {
			title: {
				text: "Basic Column Chart"
			},
			data: [
			{
				
				type: "column",
				dataPoints: [
					{ label: "Apple",  y: 10  },
					{ label: "Orange", y: 15  },
					{ label: "Banana", y: 25  },
					{ label: "Mango",  y: 30  },
					{ label: "Grape",  y: 28  }
				]
			}
			]
        }

        // const containerProps = {
        //     height: "300px",
        //     backgroundColor: "lightgrey",
        //     backgroundPosition: 'center'
		// }   
		// containerProps={containerProps}

		return (
		<div className='canvass'>
			 <Canvas options={options} ref="canvas" width={`${90}vw`} height={`${80}vh`}/>
		</div>
		);
    }
}

export default BarOfChart;