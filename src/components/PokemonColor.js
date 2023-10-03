

const pokemonColor = (type) => {
    let color = ""
    if(type==="normal"){
        color="White"
    }
    else if(type==="fire"){
        color = "#ff704d"
    }
    else if(type==="water"){
        color = "#99ddff"
    }
    else if(type==="grass"){
        color = "#85e085"
    }
    else if(type==="electric"){
        color = "#ffff80"
    }
    else if(type==="ice"){
        color = "#3399ff"
    }
    else if(type==="fighting"){
        color = "#993300"
    }
    else if(type==="poison"){
        color = "#ecb3ff"
    }
    else if(type==="flying"){
        color = "#ffeee6"
    }
    else if(type==="psychic"){
        color = "#f0c2e0"
    }
    else if(type==="bug"){
        color = "#00cccc"
    }
    else if(type==="rock"){
        color = "#8c8c8c"
    }
    else if(type==="ghost"){
        color = "#e6e6e6"
    }
    else if(type==="dark"){
        color = ""
    }
    else if(type==="dragon"){
        color = "#ffd966"
    }
    else if(type==="steel"){
        color = "#ecc6c6"
    }
    else if(type==="fairy"){
        color = "#ffffb3"
    }
    else if(type==="ground"){
        color = "#71250b"
    }
    return color
}


export default pokemonColor;
