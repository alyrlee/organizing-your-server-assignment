module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || '2868ba7c-2520-479f-a5f5-581aba9f5de7',
  DB_URL: process.env.DB_URL || 'postgresql://dunder-mifflin@localhost/bookmarks',
}
