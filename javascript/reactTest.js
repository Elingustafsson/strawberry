const e = React.createElement;

ReactDOM.render(
    e('a', { href: "https://google.se" },
      e('img', { src: "../img/fact.png"})
),
  document.getElementById('react-pic')

);
