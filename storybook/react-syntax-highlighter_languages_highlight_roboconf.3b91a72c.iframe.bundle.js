(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{3325:function(module,exports){module.exports=function roboconf(hljs){var PROPERTY={className:"attribute",begin:/[a-zA-Z-_]+/,end:/\s*:/,excludeEnd:!0,starts:{end:";",relevance:0,contains:[{className:"variable",begin:/\.[a-zA-Z-_]+/},{className:"keyword",begin:/\(optional\)/}]}};return{name:"Roboconf",aliases:["graph","instances"],case_insensitive:!0,keywords:"import",contains:[{begin:"^facet [a-zA-Z-_][^\\n{]+\\{",end:/\}/,keywords:"facet",contains:[PROPERTY,hljs.HASH_COMMENT_MODE]},{begin:"^\\s*instance of [a-zA-Z-_][^\\n{]+\\{",end:/\}/,keywords:"name count channels instance-data instance-state instance of",illegal:/\S/,contains:["self",PROPERTY,hljs.HASH_COMMENT_MODE]},{begin:"^[a-zA-Z-_][^\\n{]+\\{",end:/\}/,contains:[PROPERTY,hljs.HASH_COMMENT_MODE]},hljs.HASH_COMMENT_MODE]}}}}]);