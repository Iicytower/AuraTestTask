import { Request, Response } from 'express';

const homePage = (req: Request, res: Response) => {
    res.end('You hit the home page!');
}

export default homePage;