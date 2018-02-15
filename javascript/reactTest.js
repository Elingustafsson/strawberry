const e = React.createElement

ReactDOM.render(
  e('a', { href: "https://google.se" },
    e('img', { src: "../img/profile.jpg", width: '100px', height: '100px'})
), document.getElementById('reactPic'))
