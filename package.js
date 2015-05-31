Package.describe({
  name: 'modweb:baby-parse',
  summary: 'A fast, reliable CSV parser based on PapaParse',
  version: '0.4.3',
  git: 'https://github.com/modweb/meteor-baby-parse'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.export('Baby', 'server');
  api.addFiles('baby-parse.js', 'server');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers', 'coffeescript']);
  api.use('modweb:baby-parse');
  api.addFiles('tests/baby-parse-tests.litcoffee', 'server');
});
