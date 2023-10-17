import {Request, Response} from 'express';
import NepaliDateConverter from 'nepali-date-converter';

const currentDate = new Date();
const englishDate = currentDate;
const nepaliDate = NepaliDateConverter.fromAD(currentDate).toString();

export const controller = {
  english: async (req: Request, res: Response) => {
    return res.send(englishDate);
  },
  nepali: async (req: Request, res: Response) => {
    return res.json(nepaliDate);
  },
};
