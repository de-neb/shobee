const t={titleCase(e){return e.replace(/\w+/g,function(r){return r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()})},toSnakeCase(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()}};export{t as f};
