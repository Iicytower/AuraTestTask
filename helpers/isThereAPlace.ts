export default async(curStart: number, curEnd: number, newStart: number, newEnd: number) => {


    











    return !((curStart <= newStart && newStart <= curEnd) || (curStart <= newEnd && newEnd <= curEnd))
}


