exports.get404 = (req, res, nex) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
};
