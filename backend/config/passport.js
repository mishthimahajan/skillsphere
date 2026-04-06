// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const User = require("../models/User");

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "/api/auth/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         let user = await User.findOne({
//           email: profile.emails[0].value,
//         });

        
//         return done(null, user);
//       } catch (err) {
//         return done(err, null);
//       }
//     }
//   )
// );

// module.exports = passport;

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;

let user = await User.findOne({ email });

if (!user) {
  user = await User.create({
    name: profile.displayName,
    email: email,
    image: profile._json.picture || "",
    password: "google",
    role: null,
  });
}
console.log("PROFILE:", profile);
console.log("PHOTO:", profile.photos);

        // ✅ RETURN USER
        return done(null, user);

      } catch (err) {
        console.log(err);
        return done(err, null);
      }
    }
  )
);

module.exports = passport;