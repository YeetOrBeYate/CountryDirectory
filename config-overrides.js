const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
     style: true,
    }),
   addLessLoader({
     javascriptEnabled: true,
     // '#1DA57A'
     // '#F45D01' 
     // '#FF8427'
     // '#F68E5F'
     // '#FA824C'
     // '#75DBCD'
     // '#B7C3F3'
     // '#5FB0B7'
     // '#5448C8'
     modifyVars: { '@primary-color': '#5448C8'},
   }),
  );