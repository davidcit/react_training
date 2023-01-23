const Car = ({color, nom, year}) => {

    const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

    if (nom) {
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                <p>Marque: { nom }</p>
                <p>Age: {year}</p>
                {colorInfo}
            </div>
        )
    }

    // return null // ce return est Facultatif
}

export default Car
