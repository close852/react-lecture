import React, { Component } from 'react';

class App extends Component {
  state = {
    pageName: '',
  };
  componentDidMount() {
    console.log('onpopstate1')
    window.onpopstate = event => {
      console.log('onpopstate2',event)
      this.onChangPage(event.state);
    };
  }
  onChangPage = pageName => {
    this.setState({ pageName });
  };
  onClick1 = () => {
    const pageName = 'page1';
    window.history.pushState(pageName, '', '/page1');
    this.onChangPage(pageName);
  };
  onClick2 = () => {
    const pageName = 'page2';
    window.history.pushState(pageName, '', '/page2');
    this.onChangPage(pageName);
  };
  render() {
    const { pageName } = this.state;
    const {onClick1,onClick2}= this;
    return (
      <div>
        <button onClick={onClick1}>page1</button>
        <button onClick={onClick2}>page2</button>
        {!pageName && <Home />}
        {pageName === 'page1' && <Page1 />}
        {pageName === 'page2' && <Page2 />}
      </div>
    );
  }
}

function Home() {
  return <h2>여기는 홈페이지입니다. 원하는 페이지 버튼을 클릭하세요.</h2>;
}
function Page1() {
  return <h2>여기는 Page1입니다.</h2>;
}
function Page2() {
  return <h2>여기는 Page2입니다.</h2>;
}

export default App;
