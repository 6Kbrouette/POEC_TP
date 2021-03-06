var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'backend'
    },
    port: process.env.PORT || 3001,
    db:  'mongodb://localhost/backend-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'backend'
    },
    port: process.env.PORT || 3001,
    db:  'mongodb://localhost/backend-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'backend'
    },
    port: process.env.PORT || 3001,
    db: process.env.MONGODB_URL || 'mongodb://localhost/backend-production'
  }
};

module.exports = config[env];
