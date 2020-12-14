export interface Screening {
    screeningID?: string,
    startTime?: string,
    duration?: number,
    filmTitle?: string,
}

export interface ScreeningDb {
    screeningID?: string,
    startTime?: number,
    duration?: number,
    filmTitle?: string,
}

export interface Hall {
    name?: string,
    capacity?: string,
}
