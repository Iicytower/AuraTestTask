import { Request, Response } from 'express';

const testPage = (req: Request, res: Response) => {
    res.end('You hit the test require endpoint!');
}

export default testPage;