

export default async function getNeoResults(start_date: String, end_date: String) {
    
    const apiKey = process.env.NASA_API_KEY

    


    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=z7ZbWa9N2UPkWaIrMbXqifBcBHr5011oaFc2sq8O`)

    return response.json() 
}
