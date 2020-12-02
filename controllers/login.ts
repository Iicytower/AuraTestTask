import { NextFunction, Request, Response } from 'express';
// import database from "../database/database";
// const { User } = database.models;
import bcrypt from "bcryptjs";

import passport from "passport";
import passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;

const login = async (req: Request, res: Response, next: NextFunction) => {
    console.log('login');
}


export default login;