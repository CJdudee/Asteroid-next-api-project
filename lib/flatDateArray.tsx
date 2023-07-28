import React from 'react'

export default function flatDateArray(asteroidBydate: any) {
  
    let asteroid_array = []
    let keys = Object.keys(asteroidBydate)
    //console.log(keys)

    for (let i = 0; i < keys.length; i++) {
        asteroid_array.push(asteroidBydate[keys[i]])
        //console.log(asteroid_array)
    }
    let merged = [].concat.apply([], asteroid_array)
    //console.log(asteroid_array)
    //console.log(merged)
    return merged
}
