var UriConfigUser = {
  'Macbook Mike' : 'mamonteagudo',
  mamonteagudo : 'mamonteagudo',
  azarzalejo : 'azarzalejo'
};

var keyConfigUser = {
  'Macbook Mike' : 'mpeula',
  mamonteagudo : 'mamonteagudo',
  azarzalejo : 'azarzalejo'
}

var appPath = 'src/thefatfingerWebsite';
var gulpIgnore = ['!' + appPath + '/gulpTasks/**/*', '!' + appPath + '/assets/**/*.scss'];

module.exports = {
  jsFiles: [
    'src/thefatfingerWebsite/**/*.module.js',
    'src/thefatfingerWebsite/**/*.js',
    '!src/thefatfingerWebsite/gulpTasks/**/*'
  ],
  scssFiles: [
    'src/thefatfingerWebsite/**/*.scss'
  ],
  htmlFiles: [
    'src/thefatfingerWebsite/**/*.html'
  ],
  otherFiles: [
    'src/thefatfingerWebsite/**/*.json',
    'src/thefatfingerWebsite/**/*.svg'
  ],
  appPath: appPath,
  gulpIgnore : gulpIgnore,
  sourcePath: 'src/thefatfingerWebsite/app.module.js',
  outputDir: 'dist/thefatfingerWebsite',

  host: '52.18.132.39',
  key: '/Users/'+keyConfigUser[__dirname.split('/')[2]]+'/.ssh/tbs_multicanal.pem',
  user: 'ec2-user',
  remotePath: '/var/www/'+UriConfigUser[__dirname.split('/')[2]]+'_multicanal/code/INR-Platform/public/thefatfingerWebsite'
};
