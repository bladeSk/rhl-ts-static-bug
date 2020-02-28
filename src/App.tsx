import { hot } from 'react-hot-loader/root'
import * as React from 'react'
import Counter from './Counter'
import BuggyStaticCounter from './BuggyStaticCounter'

const App = () => (
  <div>
    <h1>Hello, world.</ h1>
    <Counter/><br />
    <BuggyStaticCounter/>
  </div>
)

export default hot(App)
