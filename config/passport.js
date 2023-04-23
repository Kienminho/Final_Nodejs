const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

//lưu thông tin user vào session
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

//kết nối google
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "454712897153-hm7c5ikf8vfqlu5ee8aqtqo81llbce35.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL:
        "https://appstorekienminho.onrender.com/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Xử lý thông tin user
      return done(null, profile);
    }
  )
);

//kết nối facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: "1233669877584899",
      clientSecret: "92d743d3b4a8fb69accd27b104fd808b",
      callbackURL: "http://localhost:3000/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // Kiểm tra profile
      if (!profile) {
        return cb(new Error("Không thể lấy thông tin profile"));
      }
      // Xử lý logic đăng nhập ở đây
      // ...
      return cb(null, profile);
    }
  )
);

module.exports = passport;
