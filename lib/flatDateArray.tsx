import React from 'react'

export default function flatDateArray(asteroidBydate: any) {
  
    let asteroid_array = []
    let keys = Object.keys(asteroidBydate)

    for (let i = 0; i < keys.length; i++) {
        asteroid_array.push(asteroidBydate[keys[i]])
    }
    let merged = [].concat.apply([], asteroid_array)
    return merged
}
