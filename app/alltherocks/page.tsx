import getAllAsteroid from "@/lib/getAllAsteroid"
import RockObject from "../components/RockObject"

    // async function getAllRocks() {
    //     const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.NASA_API_KEY}`)

    //     if (!res.ok) {

    //         throw new Error('fail to get data')
    //     }

    //     return res.json()
    // }

export default async function page() {

    const allRocks = await getAllAsteroid()
    //console.log(allRocks.near_earth_objects)
    
  return (
    <>
    <p className="text-2xl">add pagination to this page</p>
    <p className="pt-4 pl-4 text-purple-900 text-2xl underline">browse asteroid</p>
    <div className=" p-4">
        <ul className="p-4">
            {allRocks.near_earth_objects.map((rock: any) => (
                <>
                <RockObject key={rock.id} {...rock} rock={rock} />
                </>
            ))}
        </ul>
    </div>
            </>
  )
}


//fav rock 2001866