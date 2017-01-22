// @flow
import React from 'react'
import { render } from 'react-dom'

import '../css/popup.css'
import Greeting from './popup/greeting_component'

render(
	<Greeting />,
	window.document.getElementById('app-container')
)
