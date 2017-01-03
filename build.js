// basic build

'use strict';

var nunjucks = require('nunjucks');


var
  devBuild = ((process.env.NODE_ENV || '').trim().toLowerCase() !== 'production'),
  pkg = require('./package.json'),
  
  dir = {
	  base: __dirname + '/',
	  source: './src/',
	  dest: './build/'
  };
  nunjucks.configure(dir.source+'template/', {watch: false});
  var
  
  // modules
  i18n = require('metalsmith-i18n'),
  metalsmith = require('metalsmith'),
  markdown = require('metalsmith-markdown'),
  markdownit = require('metalsmith-markdownit'),
  publish = require('metalsmith-publish'),
  wordcount = require("metalsmith-word-count"),
  collections = require('metalsmith-collections'),
  permalinks = require('metalsmith-permalinks'),
  inplace = require('metalsmith-in-place'),
  layouts = require('metalsmith-layouts'),
  sitemap = require('metalsmith-mapsite'),
  rssfeed = require('metalsmith-feed'),
  assets = require('metalsmith-assets'),
  i18next= require('metalsmith-i18next'),
  multilang = require('metalsmith-multi-language'),
  navigation = require('metalsmith-navigation'),
  htmlmin = devBuild ? null : require('metalsmith-html-minifier'),
  browsersync = devBuild ? require('metalsmith-browser-sync') : null,


  siteMeta = {
    devBuild: devBuild,
    version: pkg.version,
    name: 'Mindong Lab',
    desc: 'A demonstration static site built using Metalsmith',
    author: 'Mindong Lab',
    contact: 'https://github.com/MindongLab',
    domain: devBuild ? 'http://127.0.0.1:3000/' : 'https://lab.mindong.asia/', // set domain
    rootpath: devBuild ? null : '/craigbuckler/metalsmith-demo/master/build/' // set absolute path (null for relative)
  },

  templateConfig = {
    engine: 'nunjucks',
	cache: false,
    directory: dir.source + 'template/',
    partials: dir.source + 'partials/',
	includeDir: dir.source + 'partials/',
    default: 'page.html'
  },  
  
  siteLocale = ['en', 'zh-hans'],
  siteDefaultLocale = 'en',
  
  navConfigs = {
	primary: {
		sortBy: 'nav_sort',
		filterProperty: 'nav_groups',
		includeDirs: true
	},
	projectlist: {
		sortBy: 'nav_sort',
		filterProperty: 'nav_groups',
		includeDirs: true
	}
  },
  
  navSettings = {
	navListProperty: 'navs',
	permalinks: true
  };
  
  var ms = metalsmith(dir.base) // the working directory
    .clean(true)            // clean the build directory
    .source(dir.source+'html/')    // the page source directory
    .destination(dir.dest)	// the destination directory
	.metadata(siteMeta)
	.use(multilang({
		default: siteDefaultLocale,
		locales: siteLocale
	}))
	.use(i18n({
		default: siteDefaultLocale,
		locales: siteLocale,
		directory: 'locales'
	}));
	
	var siteCollections = {};
	var sitePermalinkSets = [];
	siteCollections['page'] = 
	{
		sortBy: 'priority',
		reverse: false,
		refer: false,
		metadata: {
			layout: 'page.html'
		}
	};
	siteCollections['project'] =
	{
		sortBy: 'date',
		reverse: true,
		limit: 50,
		metadata: {
			layout: 'page.html'
		}
	};
		
	sitePermalinkSets = [];
	sitePermalinkSets.push({
		match: {collection: 'project'},
		pattern: ':locale/project/:machinename'
	});
		
	sitePermalinkSets.push({
		match: {collection: 'page'},
		pattern: ':locale/:machinename'
	});
	


	ms.use(collections (siteCollections))
    .use(markdownit({
		html: true
	})); // convert markdown-it to HTML
    
	ms.use(permalinks({
		//pattern: ':title',
		date: 'YYYY',
		linksets: sitePermalinkSets
	}));
	
	ms.use(navigation(navConfigs, navSettings));
	ms.use(inplace(templateConfig))
	.use(layouts(templateConfig)); 
	
	
	//if (htmlmin) ms.use(htmlmin());
	
	if (browsersync) ms.use(browsersync({
		server: dir.dest,
		files: [dir.source + '**/*' ]
	}));
	
	ms
	.use(assets({
		source: dir.source + 'assets/',
		destination: './'
	}))
	.build(function(err) {  // build the site
      if (err) throw err;   // and throw errors
    });
