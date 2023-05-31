// const passport = require("passport");
import passport from "passport";

// const GoogleStrategy = require("passport-google-oauth2").Strategy;
import { Strategy as GoogleStrategy } from "passport-google-oauth2";

import * as dotenv from "dotenv";
dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const googleAuthMiddleware = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        passReqToCallback: true,
      },
      function (request, accessToken, refreshToken, profile, done) {
        console.log(profile);
        return done(null, profile);
      }
    )
  );
};
