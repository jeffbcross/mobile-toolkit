System.config({
	"transpiler": "ts",
	"typescriptOptions": {
		"emitDecoratorMetadata": true,
		"experimentalDecorators": true,
		"declaration": true
	},
	"paths": {
		"ts": "node_modules/plugin-typescript/lib/",
	},
	"map": {
		"typescript": "node_modules/typescript/lib/typescript.js",
		"angular2": "node_modules/angular2",
		"app": "src",
		"reflect-metadata": "node_modules/reflect-metadata/temp/Reflect.js"
	},
	"packages": {
		"app": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    },
		"angular2": {
			"defaultExtension": "js"
		},
		"ts": {
			"defaultExtension": "js",
			"main": "plugin.js"
		},
		"reflect-metadata": {
			"format": "global"
		}
	}
});