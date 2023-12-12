const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={`boxSize ${className}`}>
      <p className="boxText">{text}</p>
    </div>
  );
};

const element = (
  <div className="bgContainer">
    <h1 className="heading">Boxes</h1>
    <div className="boxesContainer">
      <Box className="smallBox" text="Small" />
      <Box className="mediumBox" text="Medium" />
      <Box className="largeBox" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
