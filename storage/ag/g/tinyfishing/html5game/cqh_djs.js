var dj_func = [],
	dj_regexp = /#/g;
function dj_init() {
	dj_func = [];
}
function dj_exists(index) {
	return dj_func[index] ? 1 : 0;
}
function dj_count() {
	var i,
		n = 0;
	for (i in dj_func) {
		n++;
	}
	return n;
}
function dj_fixcode(code) {
	return code["replace"](dj_regexp, "\x0A");
}
function dj_run(code) {
	return new Function(dj_fixcode(code))();
}
function dj_add(index, code) {
	dj_func[index] = new Function(dj_fixcode(code));
}
function dj_call(index) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index]();
}
function dj_add1(index, _1, code) {
	dj_func[index] = new Function(_1, dj_fixcode(code));
}
function dj_call1(index, _1) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](_1);
}
function dj_add2(index, _1, _2, code) {
	dj_func[index] = new Function(_1, _2, dj_fixcode(code));
}
function dj_call2(index, _1, _2) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](_1, _2);
}
function dj_add3(index, _1, _2, _3, code) {
	dj_func[index] = new Function(_1, _2, _3, dj_fixcode(code));
}
function dj_call3(index, _1, _2, _3) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](_1, _2, _3);
}
function dj_add4(index, _1, _2, _3, _4, code) {
	dj_func[index] = new Function(_1, _2, _3, _4, dj_fixcode(code));
}
function dj_call4(index, _1, _2, _3, _4) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](_1, _2, _3, _4);
}
function dj_add5(index, _1, _2, _3, _4, _5, code) {
	dj_func[index] = new Function(_1, _2, _3, _4, _5, dj_fixcode(code));
}
function dj_call5(index, _1, _2, _3, _4, _5) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](_1, _2, _3, _4, _5);
}
function dj_add6(index, _1, _2, _3, _4, _5, _6, code) {
	dj_func[index] = new Function(_1, _2, _3, _4, _5, _6, dj_fixcode(code));
}
function dj_call6(index, _1, _2, _3, _4, _5, _6) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](_1, _2, _3, _4, _5, _6);
}
function dj_add7(index, _1, _2, _3, _4, _5, _6, _7, code) {
	dj_func[index] = new Function(_1, _2, _3, _4, _5, _6, _7, dj_fixcode(code));
}
function dj_call7(index, _1, _2, _3, _4, _5, _6, _7) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](_1, _2, _3, _4, _5, _6, _7);
}
function dj_add8(index, _1, _2, _3, _4, _5, _6, _7, _8, code) {
	dj_func[index] = new Function(
		_1,
		_2,
		_3,
		_4,
		_5,
		_6,
		_7,
		_8,
		dj_fixcode(code),
	);
}
function dj_call8(index, _1, _2, _3, _4, _5, _6, _7, _8) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](_1, _2, _3, _4, _5, _6, _7, _8);
}
function dj_add9(index, _1, _2, _3, _4, _5, _6, _7, _8, _9, code) {
	dj_func[index] = new Function(
		_1,
		_2,
		_3,
		_4,
		_5,
		_6,
		_7,
		_8,
		_9,
		dj_fixcode(code),
	);
}
function dj_call9(index, _1, _2, _3, _4, _5, _6, _7, _8, _9) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](_1, _2, _3, _4, _5, _6, _7, _8, _9);
}
function dj_add10(index, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, code) {
	dj_func[index] = new Function(
		_1,
		_2,
		_3,
		_4,
		_5,
		_6,
		_7,
		_8,
		_9,
		_10,
		dj_fixcode(code),
	);
}
function dj_call10(index, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](_1, _2, _3, _4, _5, _6, _7, _8, _9, _10);
}
function dj_add11(index, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, code) {
	dj_func[index] = new Function(
		_1,
		_2,
		_3,
		_4,
		_5,
		_6,
		_7,
		_8,
		_9,
		_10,
		_11,
		dj_fixcode(code),
	);
}
function dj_call11(index, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11);
}
function dj_add12(
	index,
	_1,
	_2,
	_3,
	_4,
	_5,
	_6,
	_7,
	_8,
	_9,
	_10,
	_11,
	_12,
	code,
) {
	dj_func[index] = new Function(
		_1,
		_2,
		_3,
		_4,
		_5,
		_6,
		_7,
		_8,
		_9,
		_10,
		_11,
		_12,
		dj_fixcode(code),
	);
}
function dj_call12(index, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12);
}
function dj_add13(
	index,
	_1,
	_2,
	_3,
	_4,
	_5,
	_6,
	_7,
	_8,
	_9,
	_10,
	_11,
	_12,
	_13,
	code,
) {
	dj_func[index] = new Function(
		_1,
		_2,
		_3,
		_4,
		_5,
		_6,
		_7,
		_8,
		_9,
		_10,
		_11,
		_12,
		_13,
		dj_fixcode(code),
	);
}
function dj_call13(
	index,
	_1,
	_2,
	_3,
	_4,
	_5,
	_6,
	_7,
	_8,
	_9,
	_10,
	_11,
	_12,
	_13,
) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13);
}
function dj_add14(
	index,
	_1,
	_2,
	_3,
	_4,
	_5,
	_6,
	_7,
	_8,
	_9,
	_10,
	_11,
	_12,
	_13,
	_14,
	code,
) {
	dj_func[index] = new Function(
		_1,
		_2,
		_3,
		_4,
		_5,
		_6,
		_7,
		_8,
		_9,
		_10,
		_11,
		_12,
		_13,
		_14,
		dj_fixcode(code),
	);
}
function dj_call14(
	index,
	_1,
	_2,
	_3,
	_4,
	_5,
	_6,
	_7,
	_8,
	_9,
	_10,
	_11,
	_12,
	_13,
	_14,
) {
	if (!dj_func[index]) {
		return -1;
	}
	return dj_func[index](
		_1,
		_2,
		_3,
		_4,
		_5,
		_6,
		_7,
		_8,
		_9,
		_10,
		_11,
		_12,
		_13,
		_14,
	);
}
var dj_var_map = {};
function dj_var_def(expr, name) {
	var script = window["dj_var_def"]["caller"]["name"];
	if (script === undefined) {
		script = arguments["callee"]["caller"]
			.toString()
			["match"](/function ([^ \(]+)/)[1];
	}
	var gmlrx = "dj_var_def\\(([^,]+)\\s*,\\s*['\"]" + name;
	var gmljs = window[script].toString()["match"](new RegExp(gmlrx, ""))[1];
	dj_var_map[name] = new Function("value", gmljs + " = value;");
}
function dj_var_set(name, value) {
	try {
		dj_var_map[name](value);
		return 1;
	} catch (_) {
		return 0;
	}
}
