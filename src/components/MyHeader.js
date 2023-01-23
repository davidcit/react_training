const MyHeader = (props ,children) => {
    console.log(children);
    const currentTitle = props.title;
    const colorTitle = props.color;
    return(
        <h1 style={{color:colorTitle}}> {currentTitle} </h1>
    )
}

export default MyHeader;