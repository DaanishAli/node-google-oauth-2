import passport from "passport";
import { Strategy } from "passport-google-oauth2";
import * as dotenv from "dotenv";
dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const googleAuthMiddleware = () => {
  passport.use(
    new Strategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback",
        passReqToCallback: true,
      },
      function (request, accessToken, refreshToken, profile, done) {
        console.log(profile);
        return done(null, profile);
      }
    )
  );
};
