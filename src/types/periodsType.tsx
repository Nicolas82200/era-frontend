export type periodsType = {
    id : number,
    name : string, 
    introduction : string,
    description : string,
    time : {
        start : string,
        end : string
    }
    image : string,
    image_logo : string,
    index_name : string
}

export type periodsTypeArray = periodsType[]