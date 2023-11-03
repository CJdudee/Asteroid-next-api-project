export function numberWithCommas(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


//will revise if more is added but for this simple filter this is all that is needed for now 
export function filteredAsteroids(asteroidArray: object[], filter: any) {
    const filtered = asteroidArray.filter((earthObj: any) => {
        if (!filter || !filter.danger && !filter.min && !filter.max === null) return earthObj

        let isAllowed = []
        
        if (filter.danger || filter.danger != null) {
            isAllowed.push(earthObj.is_potentially_hazardous_asteroid === filter.danger)
        }

        if (filter.min || filter.min != null) {
            isAllowed.push(earthObj.estimated_diameter.miles.estimated_diameter_max >= filter.min)
        }
        //console.log(typeof filter.max)
        if (filter.max || filter.max != undefined && filter.max != '') {
            isAllowed.push(earthObj.estimated_diameter.miles.estimated_diameter_max <= filter.max)
        }
        
        if(isAllowed.includes(false)) return false

        return true
        
    })

    return filtered

}