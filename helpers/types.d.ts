export type Screening = {
    screeningID?: string,
    startTime?: string,
    duration?: number,
    filmTitle?: string,
};

export type ScreeningDb = {
    screeningID?: string,
    startTime?: number,
    duration?: number,
    filmTitle?: string,
};

export type Hall = {
    name?: string,
    capacity?: string,
}
