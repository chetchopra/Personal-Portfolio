import _ from 'lodash'
import React, { Component } from 'react'
import About from './components/About'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link, 
  Redirect,
  NavLink
} from 'react-router-dom'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  backgroundColor: 'gray',
  position: 'relative',
}

const fixedMenuStyle = {
  backgroundColor: 'yellow',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}

const LeftImage = () => (
  <Image
    floated='left'
    size='medium'
    src='/images/wireframe/square-image.png'
    style={{ margin: '2em 2em 2em -4em' }}
  />
)

const RightImage = () => (
  <Image
    floated='right'
    size='medium'
    src='/images/wireframe/square-image.png'
    style={{ margin: '2em -4em 2em 2em' }}
  />
)

const Paragraph = () => (
  <p>
    {[
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
      'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
      'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
      'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
      'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
      'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
      'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
      'accumsan porttitor, facilisis luctus, metus',
    ].join('')}
  </p>
)

export default class StickyLayout extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state

    return (

      <Router>
      <div>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>
          {`
          html, body {
            background: #ffffff;
          }
        `}
        </style>

        <Container text style={{ marginTop: '2em' }}>
          
          <Header as='h1'>Chetanya Chopra</Header>
          <p>
            This example shows how to use lazy loaded images, a sticky menu, and a simple text
            container
          </p>

        </Container>



        <Visibility
          offset={80}
          once={false}
          onTopPassed={this.stickOverlay}
          onTopVisible={this.unStickOverlay}
          style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
        >
                    {/* <div ref={this.handleOverlayRef} style={overlayFixed ? fixedOverlayStyle : overlayStyle}> */}
            <Menu
              icon='labeled'
              style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              
            >
              <Menu.Item>
                <Icon name='twitter' />
                Twitter
              </Menu.Item>

              <Menu.Item>
                <Icon name='facebook' />
                Share
              </Menu.Item>

              <Menu.Item>
                <Icon name='mail' />
                Email
              </Menu.Item>
            </Menu>
          {/* </div> */}


        </Visibility>

        

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu pointing secondary
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}

          >
            <Container text>
              <Menu.Item as={NavLink} exact to='/about' activeClassName='active'>About</Menu.Item>
              <Menu.Item as={NavLink} exact to='/projects' activeClassName='active'>Projects</Menu.Item>
              <Menu.Item as={NavLink} exact to='/resume' activeClassName='active'>Resume</Menu.Item>
            </Container>
          </Menu>
        </Visibility>



        <Container text>

          <Switch>
            <Route path='/' exact render={null} />
            <Route path='/about' exact render={props => <About {...props} />} />
            <Redirect from='*' to='/' />
          </Switch>
         
        </Container>

        
      </div>
      </Router>
    )
  }
}