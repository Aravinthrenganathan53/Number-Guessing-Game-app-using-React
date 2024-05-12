import React from "react";

export default function Secret({ SecretNum, input }) {

    let result;
    if (input) {
        if (SecretNum < input) {
            result = "you guess the higher number"
        }
        else if (SecretNum > input) {
            result = "you guess the lower number"
        }
        else {
            result = "you guess the correct number"
        }
    }
    return (
        <>
            <h3 id="ans"> Result: {result}</h3>

        </>

    )



}


