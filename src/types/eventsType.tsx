export type eventsType = {
    id : number,
    name :  string,
    introduction : string,
    description : string,
    max_join : number,
    risque_level : number,
    periods : {
        id : number,
        name : string
    }
    time : string,
    time_trip : string,
    images : string,
    price : number
}

export type eventsTypeArray = eventsType[]