export type Screening = {
    startTime?: string,
    duration?: number,
    filmTitle?: string,
};

export type ScreeningDb = {
    startTime?: number,
    duration?: number,
    filmTitle?: string,
};

export type Hall = {
    name?: string,
    capacity?: string,
}
