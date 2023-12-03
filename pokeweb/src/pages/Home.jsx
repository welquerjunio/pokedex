import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../componets/Navbar";
import PokemonCard from "../componets/PokemonCard";

export const Home = () => {

        const [pokemons, setPokemons] = useState([]);

        useEffect(() => {
            getPokemons();
        }, []);

        const getPokemons = () => {
            axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=50")
            .then((res) => setPokemons(res.data.results))
            .catch((err) => console.log(err));
        };
 
    return(
        <div>
            <Navbar />

            <Container maxWidth="false">
                <Grid container>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xs={3} key={key}>
                             <PokemonCard name={pokemon.name} />
                        </Grid>   

                    ))}        
                </Grid>
            </Container>

        </div>
    )
}