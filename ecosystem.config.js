module.exports = {
    apps: [
      {
        name: "loginjs",
        script: "./node_modules/next/dist/bin/next",
        args: "start",
        watch: false,
        autorestart: true,
      },
    ],
  };