const e = React.createElement

ReactDOM.render(
  e('a', { href: "http://i0.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg" },
    e('img', { src: "../img/profile.jpg", width: '100px', height: '100px'})
), document.getElementById('reactPic'))
