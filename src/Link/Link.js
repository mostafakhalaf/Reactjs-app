 //function component
 //props to send data from parent to child
 const Link=(props) =>{
  return (
    <>
      <a href={props.url}>{props.name}</a>
      <br></br>
    </>
  );
}
export default Link;