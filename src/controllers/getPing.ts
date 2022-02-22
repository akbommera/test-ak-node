import { Request, Response } from 'express';

exports.get = async function (req: Request, res: Response) {
    res.status(200).send('Success');
}