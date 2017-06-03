module.exports = function(fn, types) {
	let self = this;

	return function() {
		let input = [].slice.call(arguments);

		return fn.apply(self, types.map(function(type) {
			if (typeof type !== "function") {
				return type
			}

			return input.find(function(arg, i) {
				const ok = arg && type.name === arg.constructor.name;

				if (ok) {
					input.splice(i, 1);
				}

				return ok;
			});
		}));
	}
}