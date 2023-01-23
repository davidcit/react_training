const Welcome = () => {
    let sayHello = () => {
        console.log('bonjour');
    }
    let sayBonsoir = (param) => {
        console.log(param);
    }
    
    return(
        <div>
            <button onClick={(sayHello)}>Invoquer une fonction</button>
            <button onClick={() => sayBonsoir('Bonsoir')}>Invoquer une fonction avec arg "Bonsoir"</button>
            <button onClick={() => console.log('Bonne nuit')}>Au click afficher bonjour dans console log</button>
        </div>
    )
}
export default Welcome;