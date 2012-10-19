var juiRoot = __dirname + '/node_modules/jquery-ui/',
	config = {
		ns: 'jui',
		filename: __filename
};

module.exports = jui;
jui.decorate = 'derby';

function jui(derby, options) {
	var outConfig = Object.create(config),
		scripts, outScripts, i, len, script, styles, outStyles, style;

	if (options && 'styles' in options) {
		styles = options.styles;
		if (typeof styles === 'string') styles = [styles];
		if (Array.isArray(styles)) {
			outStyles = [];
			for (i = 0, len = styles.length; i < len; i++) {
				outStyles.push(juiRoot + styles[i]);
			}
		}
	} else {
		outStyles = juiRoot + './themes/base/jquery.ui.all';
	}


	if (options && 'scripts' in options) {
		scripts = options.scripts;
		if (typeof scripts === 'string') scripts = [scripts];
		if (Array.isArray(scripts)) {
			outScripts = [];
			for (i = 0, len = scripts.length; i < len; i++) {
				outScripts.push(juiRoot + scripts[i]);
			}
		}
	} else {
		outScripts = [juiRoot + './ui', juiRoot + './jquery-1.8.2.js'];
	}

	outConfig.scripts = outScripts;
	outConfig.styles = outStyles;
	derby.createLibrary(outConfig, options);
	return this;
}