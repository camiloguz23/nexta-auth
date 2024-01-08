module.exports = {
    apps: [
      {
        name: "loginjs",
        script: "./node_modules/.bin/next",
        args: "start",
        watch: false,
        autorestart: true,
      },
    ],
  };