function createShiftArr(step) {
	var space = '    ';

	if (isNaN(parseInt(step))) {  // argument is string
		space = step;
	} else { // argument is integer
		switch (step) {
			case 1: space = ' '; break;
			case 2: space = '  '; break;
			case 3: space = '   '; break;
			case 4: space = '    '; break;
			case 5: space = '     '; break;
			case 6: space = '      '; break;
			case 7: space = '       '; break;
			case 8: space = '        '; break;
			case 9: space = '         '; break;
			case 10: space = '          '; break;
			case 11: space = '           '; break;
			case 12: space = '            '; break;
		}
	}

	var shift = ['\n']; // array of shifts
	for (ix = 0; ix < 100; ix++) {
		shift.push(shift[ix] + space);
	}
	return shift;
}

function vkbeautify() {
	this.step = '    '; // 4 spaces
	this.shift = createShiftArr(this.step);
};

//----------------------------------------------------------------------------
function replace_char(str) {
	return str.replace(/\n/g, " ")
		.replace(/\s+/ig, " ")
		.replace(/ AND /ig, " AND ")
		.replace(/\nAND /ig, " AND ")
		.replace(/ THEN /ig, " THEN ")
		.replace(/ WHEN /ig, " WHEN ")
		.replace(/INSERT OVERWRITE/ig, "INSERT OVERWRITE")
		.replace(/INSERT INTO/ig, "INSERT INTO")
		.replace(/ BETWEEN /ig, " BETWEEN ")
		.replace(/ CASE WHEN /ig, " CASE WHEN ")
		.replace(/ \,CASE WHEN /ig, " ,CASE WHEN ")
		.replace(/ DATEDIFF\(/ig, " DATEDIFF(")
		.replace(/\,DATEDIFF\(/ig, ",DATEDIFF(")
		.replace(/ CEIL\(/ig, " CEIL(")
		.replace(/ FLOOR\(/ig, " FLOOR(")
		.replace(/\,CEIL\(/ig, ",CEIL(")
		.replace(/\,FLOOR\(/ig, ",FLOOR(")
		.replace(/ FROM\(/ig, " FROM (")
		.replace(/ JOIN\(/ig, " JOIN (")
		.replace(/ FROM /ig, "\nFROM ")
		.replace(/ DISTRIBUTE BY /ig, "\nDISTRIBUTE BY ")
		.replace(/ AS /ig, " AS ")
		.replace(/ TABLE /ig, " TABLE ")
		.replace(/ IF EXISTS /ig, " IF EXISTS ")
		.replace(/ HAVING /ig, "\nHAVING ")
		.replace(/ USING /ig, " USING ")
		.replace(/ IN /ig, " IN ")
		.replace(/\(SELECT/ig, "( SELECT")
		.replace(/(^|\s{1,})SELECT /ig, "\nSELECT ")
		.replace(/ WHERE /ig, "\nWHERE ")
		.replace(/ ON /ig, "\nON ")
		.replace(/ JOIN /ig, "\nJOIN ")
		.replace(/ CROSS\nJOIN /ig, "\nCROSS JOIN ")
		.replace(/ INNER\nJOIN /ig, "\nINNER JOIN ")
		.replace(/ LEFT\nJOIN /ig, "\nLEFT JOIN ")
		.replace(/ RIGHT\nJOIN /ig, "\nRIGHT JOIN ")
		// .replace(/ ORDER\s{1,}BY /ig, "\nORDER BY ")
		.replace(/ ORDER\s{1,}BY /ig, " ORDER BY ")
		.replace(/ GROUP\s{1,}BY /ig, "\nGROUP BY ")
		.replace(/ GROUPING\s{1,}SETS/ig, "\nGROUPING SETS")
		.replace(/UNION ALL/ig, "\nUNIONALLALL\n")  //先合并unionall避免和union换行发生冲突
		.replace(/(\s|\\n)union(\s|\\n)/ig, "\nUNION \n")
		.replace(/ LEFT OUTER\nJOIN /ig, "\nLEFT OUTER JOIN ")
		.replace(/ RIGHT OUTER\nJOIN /ig, "\nRIGHT OUTER JOIN ")
		.replace(/ FULL OUTER\nJOIN /ig, "\nFULL OUTER JOIN ")
		.replace(/ FULL\nJOIN /ig, "\nFULL JOIN ")
		.replace(/(^)DROP /ig, "\nDROP ")
		.replace(/(;\s{0,})DROP /ig, ";\nDROP ")
		.replace(/(^| )CREATE /ig, "\nCREATE ")
		.replace(/(^| )INSERT /ig, "\nINSERT ")
		.replace(/(^| )SET /ig, "\nSET ")
		.replace(/(^| )DELETE /ig, "\nDELETE ")
		.replace(/ADD JAR/ig, "ADD JAR")
		.replace(/Alter /ig, "\nALTER ")
		.replace(/MAX\(/ig, "MAX(")
		.replace(/MIN\(/ig, "MIN(")
		.replace(/SUM\(/ig, "SUM(")
		.replace(/AVG\(/ig, "AVG(")
		.replace(/COUNT\(/ig, "COUNT(")
		.replace(/WITH /ig, "\nWITH ")
		.replace(/(^|\s{1,})LIMIT /ig, "\nLIMIT ")
		.replace(/\s{0,}=\s{0,}/ig, " = ") //等号左右强制加空格
		.replace(/! =/ig, "!=")
		.replace(/< =/ig, "<=")
		.replace(/> =/ig, ">=")
		.replace(/: =/ig, ":=") //mysql写法自适应
		.replace(/\s{0,}>\s{0,}/ig, " > ") //大于号左右强制加空格
		.replace(/> =/ig, ">=")
		.replace(/< >/ig, "<>")
		.replace(/\s{0,}<\s{0,}/ig, " < ") //小于号左右强制加空格
		.replace(/< =/ig, "<=")
		.replace(/< >/ig, "<>")
		.replace(/- >/ig, "->")
		.replace(/\s{0,}!=\s{0,}/ig, " != ") //小于等号左右强制加空格
};

function get_bracket(str) {
	var text = str.replace(/\(/g, "\n\(").replace(/\)/g, "\n\)").replace(/\'/g, "\n\'");
	text_list_orginal = text.split("\n");
	text_list = []
	for (i = 0; i < text_list_orginal.length; i++) {
		if (text_list_orginal[i] != "" && text_list_orginal[i] != " ") {
			text_list.push(text_list_orginal[i]);
		}
	}

	var text_final = '';
	var left = [];
	var right = [];
	var bracket = [];
	var bracket_back = [];
	var is_colon = 0;

	for (i = 0; i < text_list.length; i++) {
		last_str = i == 0 ? "" : text_list[i - 1];

		if (text_list[i][0] == "'") {
			if (is_colon == 0) {
				is_colon += 1
			} else {
				is_colon -= 1
			}
		}

		if (/\(/ig.exec(text_list[i]) && is_colon == 0) {
			// 加入with as 的判断可能会有坑
			if (

				(/JOIN|WITH/.exec(last_str)

					|| /^\)\s*\,\s*\w+\s+AS/.exec(last_str)
					|| (/FROM /.exec(last_str) && !/ EXPLODE/ig.exec(last_str))


				)

				&& !/ORDER BY/.exec(last_str)


			) {

				left.push(i);
				bracket.push(i);
				bracket_back.push(1);
			} else { // 由于''之间可以随便出现多个中文(号 所以需要过滤一层条件
				bracket.push(i);
				bracket_back.push(0);
			}
		}

		if (/\)/ig.exec(text_list[i]) && is_colon == 0) {
			if (bracket_back[bracket_back.length - 1] == 1) {
				right.push(i);
			}

			bracket = bracket.slice(0, -1);
			bracket_back = bracket_back.slice(0, -1);
		}
	}

	for (i = 0; i < text_list.length; i++) {
		text_list[i] = text_list[i].replace("\n", "");
	}

	for (i = 0; i < left.length; i++) {
		text_list[left[i]] = '\n' + text_list[left[i]];
		text_list[right[i]] = '\n' + text_list[right[i]];
	}

	for (i = 0; i < text_list.length; i++) {
		if (/\(|\)/ig.exec(text_list[i])) {
			text_final += text_list[i];
		} else {
			text_final += "\n" + text_list[i];
		}
	}

	return text_final.replace(/\n\'/ig, "'") //恢复因为'导致的换行
};




String.prototype.times = function (n) {
	return (new Array(n + 1)).join(this);
};

function bracket_deep(str) {
	var text_final = '';
	var text_list = [];
	var text_list_orginal = str.split("\n");
	for (i = 0; i < text_list_orginal.length; i++) {
		if (text_list_orginal[i] != "" && text_list_orginal[i] != " ") {
			text_list.push(text_list_orginal[i]);
		}
	}

	var bracket_deep = 0;
	var deep = "\t";

	for (i = 0; i < text_list.length; i++) {

		if (text_list[i].replace(/\t{0,}/, "")[0] == ')') {
			bracket_deep -= 1;
		}

		text_list[i] = deep.times(bracket_deep) + text_list[i];

		if (text_list[i].replace(/\t{0,}/, "")[0] == '(') {
			bracket_deep += 1;
		}

		text_final += "\n" + text_list[i]
	}
	return text_final
};


function select_wrap(text, tag, as_loc_cnt) {
	var text_final = '';
	var bracket_cnt = 0;
	var quote_cnt = 0;
	var text_final_case = '';
	var as_loc = 0;
	var max_as_loc = 0;
	var as_loc_list = [];
	var text_as_final = '';
	var text_list = [];

	for (let i = 0; i < text.length; i++) {
		let p = i;
		if (text[p] == '(' && quote_cnt == 0) {
			bracket_cnt += 1;
		}

		if (text[p] == '"' || text[p] == "'") {
			if (quote_cnt == 0) {
				quote_cnt += 1;
			} else {
				quote_cnt -= 1;
			}

		}

		if (text[p] == ')' && quote_cnt == 0) {
			if (bracket_cnt > 0) {
				bracket_cnt -= 1;
			}
		}

		if (bracket_cnt == 0 && quote_cnt == 0 && text[p] == ',') {
			if (tag == 0) {
				text_final += '\n       ' + text[p];
			}
			if (tag == 1) {
				text_final += '\n         ' + text[p];
			}

		} else {
			text_final += text[p];
		}
	}

	text_final = extract_quotation_mark(text_final) //为了下面case when和as对齐的逻辑，提取引号内容
	text_final = text_final.replace(', ', ',').replace('GROUP BY', 'GROUP BY ').replace(/\,\s{0,}/ig, ",").replace('SELECT', 'SELECT ');
	text_final = restore_strmark(text_final) //复原



	text_list = text_final.split('\n');

	// 如果else 和 end 对应上面没有 -- 那么就不再换行，如果有就换行
	if (tag == 0) {
		for (let i = 0; i < text_list.length; i++) {
			if (/       \,CASE WHEN/ig.exec(text_list[i])) {
				// console.log(text_list[i]);
				var case_when_list = text_list[i].replace(/WHEN/ig, '\nWHEN').replace(/ELSE/ig, "\nELSE").replace(/\s{1,}END/ig, "\nEND").split("\n");
				var c = 0;
				var if_comment = 0;
				while (c < case_when_list.length) {
					if (c == 0) {
						text_final_case += '\n' + case_when_list[c] + case_when_list[c + 1];
						c += 1;
					} else {
						if ((/ELSE/.exec(case_when_list[c]) || /END/.exec(case_when_list[c])) && if_comment == 0) {
							text_final_case += ' ' + case_when_list[c];
						} else {
							text_final_case += '\n             ' + case_when_list[c];
						}

					}
					if (case_when_list[c].indexOf("--") > 0) {
						if_comment = 1;
					} else {
						if_comment = 0;
					}
					c += 1;
				}
			} else if (/\SELECT\s{0,}CASE WHEN/ig.exec(text_list[i])) {
				var case_when_list = text_list[i].replace(/WHEN/ig, '\nWHEN').replace(/ELSE/ig, "\nELSE").replace(/\s{1,}END/ig, "\nEND").split("\n");
				var c = 0;
				var if_comment = 0;
				while (c < case_when_list.length) {
					if (c == 0) {
						text_final_case += '\n' + case_when_list[c] + case_when_list[c + 1];
						c += 1;
					} else {
						if ((/ELSE/.exec(case_when_list[c]) || /END/.exec(case_when_list[c])) && if_comment == 0) {
							text_final_case += ' ' + case_when_list[c];
						} else {
							text_final_case += '\n             ' + case_when_list[c];
						}

					}
					if (case_when_list[c].indexOf("--") > 0) {
						if_comment = 1;
					} else {
						if_comment = 0;
					}
					c += 1;
				}
			}
			else {
				text_final_case += '\n' + text_list[i];
			}
		}
	}

	if (tag == 1) {
		for (let i = 0; i < text_list.length; i++) {
			if (/       \,CASE WHEN/ig.exec(text_list[i])) {
				// console.log(text_list[i]);
				var case_when_list = text_list[i].replace(/WHEN/ig, '\nWHEN').replace(/ELSE/ig, "\nELSE").replace(/\s{1,}END/ig, "\nEND").split("\n");

				var c = 0;
				var if_comment = 0;
				while (c < case_when_list.length) {
					if (c == 0) {
						text_final_case += '\n' + case_when_list[c] + case_when_list[c + 1];
						c += 1;
					} else {
						if ((/ELSE/.exec(case_when_list[c]) || /END/.exec(case_when_list[c])) && if_comment == 0) {
							text_final_case += ' ' + case_when_list[c]
						} else {
							text_final_case += '\n             ' + case_when_list[c];
						}

					}
					if (case_when_list[c].indexOf("--") > 0) {
						if_comment = 1;
					} else {
						if_comment = 0;
					}
					c += 1;
				}
			} else if (/GROUP BY\s{0,}CASE WHEN/ig.exec(text_list[i])) {
				var case_when_list = text_list[i].replace(/WHEN/ig, '\nWHEN').replace(/ELSE/ig, "\nELSE").replace(/\s{1,}END/ig, "\nEND").split("\n");
				var c = 0;
				var if_comment = 0;
				while (c < case_when_list.length) {
					if (c == 0) {
						text_final_case += '\n' + case_when_list[c] + case_when_list[c + 1];
						c += 1;
					} else {
						if ((/ELSE/.exec(case_when_list[c]) || /END/.exec(case_when_list[c])) && if_comment == 0) {
							text_final_case += ' ' + case_when_list[c]
						} else {
							text_final_case += '\n             ' + case_when_list[c];
						}

					}
					if (case_when_list[c].indexOf("--") > 0) {
						if_comment = 1;
					} else {
						if_comment = 0;
					}
					c += 1;
				}
			}
			else {
				text_final_case += '\n' + text_list[i];
			}
		}
	}




	// 让as进行对齐

	text_as_list = text_final_case.split('\n');

	//获取最大的as 的位置
	for (let i = 0; i < text_as_list.length; i++) {
		if (/ AS /.exec(text_as_list[i])) {
			as_loc = text_as_list[i].lastIndexOf(" AS ");
			if (as_loc > max_as_loc && as_loc < as_loc_cnt) { //150个字符后不再参与as对齐 20211031改成自定义
				max_as_loc = as_loc;
			}
		}
		as_loc_list.push(as_loc);
	}

	//替换as
	for (let i = 0; i < text_as_list.length; i++) {
		if (/ AS /.exec(text_as_list[i]) && as_loc_list[i] <= max_as_loc) {
			new_as = " ".times(max_as_loc - as_loc_list[i]) + " AS ";
			text_as_list[i] = text_as_list[i].slice(0, as_loc_list[i]) + text_as_list[i].slice(as_loc_list[i],).replace(' AS ', new_as);
		}
	}

	for (i = 0; i < text_as_list.length; i++) {
		if (text_as_list[i] != "" && text_as_list[i] != " ") {
			text_as_final += text_as_list[i] + '\n';
		}
	}

	return text_as_final
};

function and_wrap(text) {
	var text_final = '';
	var if_cnt = 0;
	var if_bracket_cnt = 0;
	var bracket_cnt = 0;
	var between_and_cnt = 0;
	text = text.replace('IF (', 'IF(').replace('IN (', 'IN(').replace('if (', 'IF(').replace('if(', 'IF(');
	text_list = text.split(" ");

	for (let i = 0; i < text_list.length; i++) {
		let t = i;
		last_str = i == 0 ? "" : text_list[i - 1];

		if (/BETWEEN/.exec(text_list[t])) {
			between_and_cnt += 1;
		}

		// 如果and后面本身就跟着括号，等同于存在if(或者in
		if (/IF\(/.exec(text_list[t]) || /IN\(/.exec(text_list[t])) {
			if_cnt += 1;
		}

		if (/\(/.exec(text_list[t]) && if_cnt > 0 && text_list[t].indexOf('IF(') == -1 && text_list[t].indexOf('IN(') == -1) {
			if_bracket_cnt += 1;
		}

		if (/\)/.exec(text_list[t]) && if_cnt > 0 && if_bracket_cnt > 0) {
			if_bracket_cnt -= 1;
		}

		if (/\)/.exec(text_list[t]) && if_cnt > 0 && if_bracket_cnt == 0) {
			if_cnt -= 1;
		}

		for (let p = 0; p < text_list[t].length; p++) {
			if (/\(/.exec(text_list[t][p])) {
				bracket_cnt += 1;
			}
			if (/\)/.exec(text_list[t][p])) {
				bracket_cnt -= 1;
			}
		}


		if (/^AND$/.exec(text_list[t])) {
			if (between_and_cnt == 0 && if_cnt == 0 && bracket_cnt == 0) {
				text_list[t] = '\n' + text_list[t];
			}
			if (between_and_cnt > 0) {
				between_and_cnt -= 1;
			}

		}

	}

	for (let i = 0; i < text_list.length; i++) {
		let v = i;
		text_final += text_list[v] + ' ';
		text_final = text_final.replace('IN(', 'IN (');
	}

	return text_final

};

function special_wrap(text, as_loc_cnt) {
	var text_final = '';
	var text_restore_orginal = restore_strmark(text) //先进行复原成原来样子，此时restore_list重新变为空
	var text_list_orginal = text_restore_orginal.split("\n");
	var text_list = [];
	var new_text_list = [];

	for (i = 0; i < text_list_orginal.length; i++) {
		if (text_list_orginal[i] != "" && text_list_orginal[i] != " ") {
			text_list.push(text_list_orginal[i]);
		}
	}

	//因为对齐的时候需要保持原样
	for (let i = 0; i < text_list.length; i++) {
		let q = i
		if (text_list[q].slice(0, 6) == 'SELECT') { //需要部分进行提取再做变化再复原
			text_list[q] = select_wrap(text_list[q], 0, as_loc_cnt);
		}

		if (text_list[q].slice(0, 8) == 'GROUP BY') {
			text_list[q] = select_wrap(text_list[q], 1, as_loc_cnt);
		}

		if (text_list[q].slice(0, 5) == 'WHERE') {
			text_list[q] = and_wrap(text_list[q]);
		}

		//增加order by 换行逻辑
		if (/ORDER BY/ig.exec(text_list[q])) {
			var left_brkt = 0;
			var right_brkt = 0;
			var ordr_loc = text_list[q].indexOf('ORDER BY') + 8;
			var new_str = text_list[q].slice(ordr_loc, -1);
			for (let t = 0; t < new_str.length; t++) {
				if (new_str[t] == '(') {
					left_brkt += 1;
				}
				if (new_str[t] == ')') {
					right_brkt += 1;
				}
			}

			if (right_brkt <= left_brkt) {
				text_list[q] = text_list[q].replace(' ORDER BY ', '\nORDER BY ');
			}
		}

		text_final += "\n" + text_list[q];

	}

	return extract_quotation_mark(text_final);
}

function except_subquery(text) {
	var text_final = '';
	var text_list_orginal = text.split("\n");
	var text_list = [];

	for (i = 0; i < text_list_orginal.length; i++) {
		if (text_list_orginal[i] != "" && text_list_orginal[i] != " ") {
			text_list.push(text_list_orginal[i]);
		}
	}

	var in_bracket_cnt = 0;
	var bracket_cnt = 0;
	var bracket_loc = [];
	var bracket_loc_back = []; //闭

	for (let i = 0; i < text_list.length; i++) {

		if (in_bracket_cnt > 0 && bracket_cnt > 0) {
			for (let p = 0; p < text_list[i].length; p++) {
				if (text_list[i][p] == "(") {
					bracket_cnt += 1;
				}
				if (text_list[i][p] == ")") {
					bracket_cnt -= 1;
					if (bracket_cnt == 0) {
						bracket_loc_back.push(i);
						break;
					}
				}


			}

		}

		if (/IN \($/.exec(text_list[i])) {
			in_bracket_cnt += 1;
			bracket_cnt += 1;
			bracket_loc.push(i);
		}
	}

	for (let i = 0; i < text_list.length; i++) {
		var if_return = 0;
		if (bracket_loc.length > 0) {
			for (let q = 0; q < bracket_loc.length; q++) {
				if (i > bracket_loc[q] && i <= bracket_loc_back[q]) {
					if_return = 1;
					break;
				}
			}

			if (if_return > 0) {
				text_final += " " + text_list[i];
			} else {
				text_final += "\n" + text_list[i];
			}

		} else {
			text_final += "\n" + text_list[i];
		}
	}

	return text_final
};

// 功能型函数
function modify_comma_to_speicific(text) {
	var quote_cnt = 0;
	var quote_tag = '';
	var start_loc = 0;
	var end_loc = 0;
	for (let p = 0; p < text.length; p++) {
		if (text[p] == '"' || text[p] == "'") {
			if (quote_cnt == 0) {
				quote_cnt += 1;
				quote_tag = text[p];
			}
			else {
				if (text[p] == quote_tag) {
					quote_cnt -= 1;
					end_loc = p
				}
			}
		} else if (text[p] == ',' && quote_cnt != 0) {
			text = text.slice(0, p) + '，' + text.slice(p + 1,)
		}
	}
	return text
}


function ddl(str) {
	var str = modify_comma_to_speicific(str);
	var text_final = '';
	var text_list = [];
	var text_list_orginal = str.replace(/(\d+)\s{0,},\s{0,}(\d+)/ig, "$1，$2") //处理ddl列名中有数字的形式 demical(8,2) demical(8 ,2) demical(8 , 2)
		.replace(/\,/ig, ",\n")
		.replace(/\n\s{1,}/ig, "\n")
		.replace(/\s{1,}BIGINT/ig, " BIGINT")
		.replace(/\s{1,}DOUBLE/ig, " DOUBLE")
		.replace(/\s{1,}INT/ig, " INT")
		.replace(/\s{1,}VARCHAR/ig, " VARCHAR")
		.replace(/\s{1,}STRING/ig, " STRING")
		.replace(/\s{1,}DECIMAL/ig, " DECIMAL")
		.replace(/ COMMENT/ig, " COMMENT ")
		.replace(/ COMMENT '/ig, "COMMENT'")
		.replace(/ COMMENT "/ig, 'COMMENT"')
		.replace(/CREATE TABLE/ig, "CREATE TABLE")
		.replace(/PARTITIONED/ig, "\nPARTITIONED")
		.replace(/string\s{0,},\s{0,}string/ig, "STRINGSTRING")
		.replace(/COLUMNS\s{0,}\(/ig, "COLUMNS\n(")
		.replace(/^\(/ig, "(\n")
		.replace(/\s{1,}DECIMAL\s{1,}\(/ig, " DECIMAL(")
		.replace(/ \s{1,}timestamp/ig, " TIMESTAMP")
		.split("\n");

	for (i = 0; i < text_list_orginal.length; i++) {
		if (text_list_orginal[i] != "" && text_list_orginal[i] != " ") {
			if (/^\(/ig.exec(text_list_orginal[i]) && text_list_orginal[i].slice(1).replace(/\s{1,}/ig, " ") != "") {
				text_list.push("(");
				text_list.push(text_list_orginal[i].slice(1).replace(/\s{1,}/ig, " "));
			} else {
				text_list.push(text_list_orginal[i].replace(/\s{1,}/ig, " "));
			}
		}
	}

	m = 0
	n = 0
	is_comment_before = 0
	while (n < text_list.length) {
		current_text = text_list[n]
		last_text = text_list[m]

		// if((is_comment_before == 0 ||  /comment/ig.exec(text_list[n]) || n == 0 || /^\(|^\)|PARTITIONED|STORED|STRING|DOUBLE|BIGINT|INT|VARCHAR/ig.exec(text_list[n])) && /,\s{0,}string>/ig.exec(text_list[n]) == null ){
		// 	n = n+1
		// 	m = n - 1
		// }


		if (is_comment_before == 1
			&& /^,/ig.exec(text_list[n])
			&& / STRING| DOUBLE| BIGINT| INT| VARCHAR| DECIMAL| TIMESTAMP/ig.exec(text_list[n]) == null) {
			text_list[m] += text_list[n]
			delete text_list[n]
			n = n + 1
		} else {
			n = n + 1
			m = n - 1
		}

		if (/comment/ig.exec(last_text)) {
			is_comment_before = 1
		} else {
			is_comment_before = 0
		}
	}

	var col_name = [];
	var col_len = [];
	var col_type = [];
	var col_type_len = [];
	var col_comment = [];
	var start_end = [];

	for (i = 0; i < text_list.length; i++) {
		if (/ STRING | DOUBLE | BIGINT | INT | VARCHAR| DECIMAL| TIMESTAMP| BIGINT| TINYINT| DATETIME| TEXT| FLOAT\(/ig.exec(text_list[i]) && text_list[i].indexOf('PARTITIONED') == -1) {
			var new_str_list = text_list[i].replace(/\s{1,}/ig, " ")
				// .replace(/(\d+),(\d+)/, "$1#?$2")
				.replace(/,\s{0,}/ig, "")
				.replace(/^\s{1,}/ig, "")
				.replace(/\s{0,},/ig, ",")
				.replace(/string\s{0,}string/ig, "string,string")
				.split(" ");
			col_name.push(new_str_list[0]);
			col_len.push(new_str_list[0].length)
			col_type.push(new_str_list[1]);
			col_type_len.push(new_str_list[1].length)
			col_comment.push(text_list[i].split("COMMENT")[1]);
			start_end.push(i);
		}

	}

	if (col_name.length > 0) {
		var col = '';
		if (col_name.length > 0) {
			var max_col_name = Math.max.apply(Math, col_len);
			var max_col_type = Math.max.apply(Math, col_type_len);
			for (let q = 0; q < col_name.length; q++) {
				if (q == 0) {
					col += '\n     ';
				} else {
					col += '\n    ,';
				}

				col += col_name[q] + " ".times(max_col_name - col_len[q]) + " " + col_type[q] + " ".times(max_col_type - col_type_len[q]) + " " + "COMMENT " + col_comment[q];
			}
		}

		for (let i = 0; i < start_end[0]; i++) {
			if (i == 0) {
				text_final += text_list[i];
			} else {
				text_final += "\n" + text_list[i];
			}
		}

		text_final = text_final + col;

		for (let i = start_end[start_end.length - 1] + 1; i < text_list.length; i++) {
			text_final += "\n" + text_list[i];
		}

	} else {
		for (let i = 0; i < text_list.length; i++) {
			if (i == 0) {
				text_final += text_list[i];
			} else {
				text_final += "\n" + text_list[i];
			}
		}
	}

	return text_final.replace(/COMMENT'/ig, "COMMENT '").replace(/COMMENT"/ig, 'COMMENT "').replace(/\n\s{0,}\n/ig, '\n')
		.replace(/，/ig, ',')
}


// 优化有comment的语句
// 几种常见的评论形式
// SELECT a -- comment 
// ,b

// SELECT a,
// -- comment
// b,

// SELECT nvl(a,' --'),
// -- comment
// b,

// SELECT nvl(a.xxx,' --') -- comm--e)nt 如果有三个注释符号如果定位到中间一个

function reshape_comment(str) {
	var text_final = '';
	str = str
		.replace(/\-\- WHERE/ig, "\-\-WHEREiscomment")
		.replace(/\-\- AND/ig, "\-\-ANDiscomment")
		.replace(/\-\- SELECT/ig, "\-\-SELECTiscomment")
		.replace(/\-\- FROM/ig, "\-\-FROMiscomment")
		.replace(/\-\- between/ig, "\-\-BETWEENiscomment")
		.replace(/\-\- order by/ig, "\-\-orderbyiscomment")
		//避免关键词注释换行先缩进
		.replace(/\n *\-\-/ig, " \-\-{}")

	var quo_cnt = 0;
	var quo_text = ""
	for (let i = 0; i < str.length; i++) {
		if (str[i] == "'" && quo_cnt == 0) {
			quo_cnt += 1
		} else if (str[i] == "'" && quo_cnt == 1) {
			quo_cnt -= 1
		}

		if (quo_cnt == 0 && str[i] == ",") {
			quo_text = quo_text + str[i] + " "
		} else {
			quo_text += str[i]
		}

	}

	var text_list_orginal = quo_text.split("\n"); // 已知评论不可能和下个字段写在一行


	for (let i = 0; i < text_list_orginal.length; i++) {
		var comment_loc = 0;

		if (text_list_orginal[i] != "" && text_list_orginal[i] != " ") {
			is_comment = text_list_orginal[i].indexOf('--')
			if (is_comment > 0) {
				comment_loc = return_right_comment_loc(text_list_orginal[i])
			}

			//如果出现SELECT nvl(a.xxx,' --') -- comment"这类，会错误的把commet_loc定位错，所以需要判断所有--符号的位置
			if (is_comment > 0) {
				var a = text_list_orginal[i].slice(0, comment_loc).replace(/\s+/ig, " "); //注释前的东西
				text_list_orginal[i] = a.replace(/(\,)\s+$/ig, " ") + " " + text_list_orginal[i].slice(comment_loc,)
					.replace(/\,/ig, "{comma}") //剔除注释后的逗号
					.replace(/\(/ig, "{.*.*}")
					.replace(/\)/ig, "{*.*.}") + 'shouldhavenbehind'

					; //让注释后的括号不参加排序

				if (/\,$/.exec(a.replace(/\s+/ig, ""))) {
					text_list_orginal[i] = text_list_orginal[i] + ','
				}
			}
			text_final += "\n" + text_list_orginal[i];
		}
	}
	return text_final
}


function extra(str) {
	text = str.replace(/^\n/ig, "")
		.replace(/UNIONALL/ig, "\nUNION ALL\n")
		.replace(/^ *--/ig, "--")
		.replace(/\s{0,}\;/ig, ";");
	// .replace(/\;\s{0,}INSERT/ig, ";\n\nINSERT")
	// .replace(/\;\s{0,}DROP/ig, ";\n\nDROP");

	var text_final = '';
	var text_list_orginal = str.split("\n");
	var text_list = [];

	for (i = 0; i < text_list_orginal.length; i++) {
		if (text_list_orginal[i] != "" && text_list_orginal[i] != " ") {
			text_list.push(text_list_orginal[i].replace(/\s$/ig, ""));//剔除行末尾空格
		}
	}

	for (let i = 0; i < text_list.length; i++) {
		last_str = i == 0 ? "" : text_list[i - 1];

		if (i > 0) {
			text_final += '\n';
		}

		if (i > 0 && (/\s{0,}[^,]INSERT/ig.exec(text_list[i]) || /\s{0,}DROP/ig.exec(text_list[i]) || /\s{0,}ALTER/ig.exec(text_list[i]) || (/^\s{0,}CREATE/ig.exec(text_list[i]) && last_str.indexOf('DROP') == -1 && last_str.indexOf('ADD JAR') == -1) || (/^\s{0,}SET/ig.exec(text_list[i]) && last_str.indexOf('SET') == -1))) {
			text_final += '\n' + text_list[i];   //必须不是首行
		} else if (i > 0 && (/\s{0,}SELECT/ig.exec(text_list[i]) && last_str.indexOf(';') >= 0)) {
			text_final += '\n' + text_list[i];
		}
		else {
			text_final += text_list[i];
		}
	}

	return text_final.replace(/\n{1,2} *--/ig, "\n--").replace(/^ */ig, "")
		.replace(/\-\-WHEREiscomment/ig, "\-\- WHERE")
		.replace(/\-\-ANDiscomment/ig, "\-\- AND")
		.replace(/\-\-SELECTiscomment/ig, "\-\- SELECT")
		.replace(/\-\-FROMiscomment/ig, "\-\- FROM")
		.replace(/\-\-BETWEENiscomment/ig, "\-\- BETWEEN")
		.replace(/\-\-orderbyiscomment/ig, "\-\- ORDER BY")
		//避免关键词注释换行先缩进
		.replace(/\-\-orderbyiscomment/ig, "\-\- ORDER BY")
		.replace(/\{comma\}/ig, ",") //换回之前的逗号
		.replace(/UNIONALLALL/ig, "UNION ALL")
		.replace(/(\s|\n){1,};(\n|\s){0,}/ig, "\n;\n\n")
		.replace(/shouldhavenbehind\n/ig, "\n")
		.replace(/shouldhavenbehind/ig, "\n")
}

//辅助函数，定位正确的comment
function return_right_comment_loc(text) {
	var bracket_cnt = 0;
	var last_char = '';
	var quote_cnt = 0;
	var final_loc = 0;

	for (let i = 0; i < text.length; i++) {
		let p = i;
		if (text[p] == '(' && quote_cnt == 0) {
			bracket_cnt += 1;
		}

		if (text[p] == '"' || text[p] == "'") {
			if (quote_cnt == 0) {
				quote_cnt += 1;
			} else {
				quote_cnt -= 1;
			}
		}

		if (text[p] == ')' && quote_cnt == 0) {
			if (bracket_cnt > 0) {
				bracket_cnt -= 1;
			}
		}

		if (bracket_cnt == 0 && quote_cnt == 0 && text[p] == '-' && last_char == '-') {
			break
		}

		last_char = text[p];
		final_loc = i;
	}

	return final_loc
}


//遍历替换逻辑
function repeat_text_replace(text) {
	var quote_cnt = 0;
	var quote_tag = '';
	var start_loc = 0;
	var end_loc = 0;
	for (let p = 0; p < text.length; p++) {
		if (text[p] == '"' || text[p] == "'") {
			if (quote_cnt == 0) {
				quote_cnt += 1;
				quote_tag = text[p]; // 需要对起始符号标记类型
				start_loc = p;
			} else {
				if (text[p] == quote_tag) {
					//命中处理逻辑
					quote_cnt -= 1;
					end_loc = p
					//提取p和q 
					modify_line = text.slice(0, start_loc) + 'NEEDReplace' + text.slice(end_loc + 1,)
					restore_list.push(text.slice(start_loc, end_loc + 1))
					return repeat_text_replace(modify_line)
				}
			}
		}
	}
	return text
}


function extract_quotation_mark(str) {
	text_list_orginal = str.split("\n");
	var text_final = '';
	for (let i = 0; i < text_list_orginal.length; i++) {
		var this_line = text_list_orginal[i]

		//假如有评论?,只需处理评论前一段的东西
		var is_comment = this_line.indexOf('--')
		if (is_comment >= 0) {
			comment_loc = return_right_comment_loc(this_line)
			var line_fisrt = this_line.slice(0, comment_loc)
			var line_last = this_line.slice(comment_loc,)
			text_final += repeat_text_replace(line_fisrt) + line_last + '\n'
		}
		else {
			text_final += repeat_text_replace(this_line) + '\n'
		}
	}
	return text_final
}

function restore_strmark(str) {
	var replace_loc = str.indexOf('NEEDReplace')
	if (replace_loc >= 0) {
		modify_line = str.slice(0, replace_loc) + restore_list[restore_cnt] + str.slice(replace_loc + 11,)
		restore_cnt += 1
		return restore_strmark(modify_line)
	}
	else {
		restore_list = []
		restore_cnt = 0
		return str
	}
}



function newsql(text) {
	step1 = reshape_comment(text);
	step2 = replace_char(step1);
	step3 = get_bracket(step2);
	step4 = except_subquery(step3)
		.replace(/\{\.\*\.\*\}/ig, "(")  //复原之前修改的注释后中文()的项目
		.replace(/\{\*\.\*\.\}/ig, ")");

	step5 = special_wrap(step4).replace(/\-\-\s{0,}\n/ig, "\n-- ");
	// console.log(step5);
	step6 = bracket_deep(step5); //union all需要单独函数来考虑
	step7 = extra(step6);
	return step7;
}


function extractddl(str) {
	str = newsql(str)
		.replace(/\n\s{0,}WHEN/ig, " WHEN");

	var text_final = '';

	var text_list = str.split("\n");
	for (let i = 0; i < text_list.length; i++) {
		text_elmt = text_list[i].trim().replace(/\s{1,}/ig, " ").replace(/\./ig, " ")
		// 判断是否有注释
		var comment_loc = text_elmt.indexOf('--');
		if (comment_loc > 0 && text_elmt.indexOf('FROM') == -1) {
			var as_text = text_elmt.slice(0, comment_loc);
			var comment_text = text_elmt.slice(comment_loc,).replace(/-/ig, "").trim();
			var test_list_list = as_text.trim().replace(/\s{1,}/ig, " ").split(" ");
			text_final += test_list_list[test_list_list.length - 1] + ' BIGINT COMMENT "' + comment_text + '"\n';

		} else if (text_elmt.indexOf('FROM') == -1) {
			var test_list_list = text_elmt.split(" ");
			text_final += test_list_list[test_list_list.length - 1] + ' BIGINT COMMENT " "\n';
		}
	}
	text_final = '     ' + ddl(text_final).trim();
	return text_final
}

function convert_lowercase(str) {
	return str.replace(/ AND /ig, " and ")
		.replace(/\nAND /ig, "\nand ")
		.replace(/\tAND /ig, "\tand ")
		.replace(/THEN /ig, "then ")
		.replace(/ALTER /ig, "alter ")
		.replace(/OVERWRITE /ig, "overwrite ")
		.replace(/WHEN /ig, "when ")
		.replace(/ELSE /ig, "else ")
		.replace(/ END /ig, " end ")
		.replace(/INSERT/ig, "insert")
		.replace(/INSERT INTO/ig, "insert into")
		.replace(/BETWEEN /ig, "between ")
		.replace(/CASE WHEN/ig, "case when")
		.replace(/DATEDIFF\(/ig, "datediff(")
		.replace(/CEIL\(/ig, "ceil(")
		.replace(/FLOOR\(/g, "floor(")
		.replace(/FROM /ig, "from ")
		.replace(/\nFROM\n/ig, "\nfrom\n")
		.replace(/\tFROM\n/ig, "\tfrom\n")
		.replace(/\tFROM\t/ig, "\tfrom\t")
		.replace(/JOIN /ig, "join ")
		.replace(/\nJOIN\n/ig, "\njoin\n")
		.replace(/DISTRIBUTE BY /ig, "distribute by ")
		.replace(/ AS/ig, " as")
		.replace(/TABLE /ig, "table ")
		.replace(/IF EXISTS/ig, "if exists")
		.replace(/HAVING /ig, "having ")
		.replace(/USING /ig, "using ")
		.replace(/IN /g, "in ")
		.replace(/SELECT/ig, "select")
		.replace(/WHERE/ig, "where")
		.replace(/ON /ig, "on ")
		.replace(/CROSS JOIN /ig, "cross join ")
		.replace(/\nCROSS JOIN\n/ig, "\ncross join\n")
		.replace(/INNER JOIN /ig, "inner join ")
		.replace(/\nINNER JOIN\n/ig, "\ninner join\n")
		.replace(/LEFT JOIN /ig, "left join ")
		.replace(/\nLEFT JOIN\n/ig, "\nleft join\n")
		.replace(/\tLEFT JOIN\n/ig, "\tleft join\n")
		.replace(/\tLEFT JOIN\t/ig, "\tleft join\t")
		.replace(/RIGHT JOIN /ig, "right join ")
		.replace(/\nRIGHT JOIN\n/ig, "\nright join\n")
		.replace(/\tRIGHT JOIN\n/ig, "\tright join\n")
		.replace(/\tRIGHT JOIN\t/ig, "\tright join\t")
		.replace(/ORDER BY /ig, "order by ")
		.replace(/GROUP BY /ig, "group by ")
		.replace(/GROUPING SETS/ig, "grouping sets")
		.replace(/UNION ALL/ig, "union all")
		.replace(/UNION /ig, "union ")
		.replace(/UNION\n/ig, "union\n")
		.replace(/LEFT OUTER JOIN /ig, "left outer join ")
		.replace(/\nLEFT OUTER JOIN\n/ig, "\nleft outer join\n")
		.replace(/\tLEFT OUTER JOIN\t/ig, "\tleft outer join\t")
		.replace(/\tLEFT OUTER JOIN\n/ig, "\tleft outer join\n")
		.replace(/RIGHT OUTER JOIN /ig, "right outer join ")
		.replace(/\nRIGHT OUTER JOIN\n/ig, "\nright outer join\n")
		.replace(/\tRIGHT OUTER JOIN\n/ig, "\tright outer join\n")
		.replace(/\tRIGHT OUTER JOIN\t/ig, "\tright outer join\t")
		.replace(/FULL OUTER JOIN /ig, "full outer join ")
		.replace(/\nFULL OUTER JOIN\n/ig, "\nfull outer join\n")
		.replace(/\tFULL OUTER JOIN\t/ig, "\tfull outer join\t")
		.replace(/\tFULL OUTER JOIN\n/ig, "\tfull outer join\n")
		.replace(/FULL JOIN /ig, "full join ")
		.replace(/\nFULL JOIN\n/ig, "\nfull join\n")
		.replace(/\tFULL JOIN\n/ig, "\tfull join\n")
		.replace(/\tFULL JOIN\t/ig, "\tfull join\t")
		.replace(/DROP /ig, "drop ")
		.replace(/CREATE/ig, "create")
		.replace(/SET/ig, "set")
		.replace(/MAX\(/ig, "max(")
		.replace(/MIN\(/ig, "min(")
		.replace(/SUM\(/ig, "sum(")
		.replace(/AVG\(/ig, "avg(")
		.replace(/COUNT\(/ig, "count(")
		.replace(/LIMIT/ig, "limit")
		.replace(/LATERAL VIEW explode/ig, "lateral view explode")
}

function convert_comma_loaction(str) {
	var text_final = '';
	var text_list = str.replace(/\n *\-\-/ig, " \-\-{}").split("\n");
	for (let i = 0; i < text_list.length; i++) {
		this_line = text_list[i]

		if (i + 1 <= text_list.length) {
			next_line = text_list[i + 1]
		} else {
			next_line = ''
		}

		//判断this line是否有评论
		is_comment = this_line.indexOf('--')
		if (is_comment >= 0) {
			comment_loc = return_right_comment_loc(this_line)
		}

		//针对本行，如果有逗号，先剔除
		if (/^\s+\,/.exec(this_line)) {
			var the_comma_loc = this_line.indexOf(',');
			this_line = this_line.slice(0, the_comma_loc) + ' ' + this_line.slice(the_comma_loc + 1,);
		}

		this_line.replace(/\s$/ig, "") + ',' + '\n '


		if (/^\s+\,/.exec(next_line)) {
			if (is_comment > 0) {//如果有comment可以调整逗号位置
				text_final += this_line.slice(0, comment_loc).replace(/\s$/ig, "") + "," + this_line.slice(comment_loc,) + '\n';
			} else {
				text_final += this_line.replace(/\s$/ig, "") + ',' + '\n';
			}

		} else {
			text_final += this_line + '\n';
		}
	}
	return text_final.replace(/\-\-\{\}/ig, "\n--")
}

function order_comment(str) {
	final_text = "";
	var text_list = str.split("\n");
	var max_comment_loc = 0;
	for (let i = 0; i < text_list.length; i++) {
		var comment_loc = text_list[i].indexOf(' --');
		if (comment_loc > max_comment_loc && comment_loc < 126) {
			max_comment_loc = comment_loc;
		}
	}
	// console.log(max_comment_loc)

	for (let i = 0; i < text_list.length; i++) {
		segment = text_list[i].split(' --')
		if (segment.length > 1 && segment[0].length < 126) {
			num = max_comment_loc + 2 - segment[0].length
			for (let j = 0; j < num; j++) {
				// console.log(j)
				segment[0] = segment[0] + " "
			}
			segment[0] = (segment[0] + "--" + segment[1]);
		} else if (segment.length > 1 && segment[0].length >= 126) {
			segment[0] += "\n"
			num = max_comment_loc + 2
			for (let j = 0; j < num; j++) {
				segment[0] = segment[0] + " "
			}
			segment[0] = (segment[0] + "--" + segment[1]);
		}
		final_text += (segment[0] + "\n");
	}
	return final_text;
}
// and 与 on 与 where 等主要选择性字符不同，将where后面的and增加缩进
function order_where(str) {
	final_text = "";
	var text_list = str.split("\n");

	for (let i = 0; i < text_list.length; i++) {

		sen = text_list[i]
		loc = sen.indexOf("and ")
		// console.log(loc)

		if (loc != -1 && loc < 2) {
			// console.log("进入修改")
			sen = sen.replace("and ", "      and ")
		}
		final_text = final_text + sen + "\n"
	}
	return final_text;
}
// 将where后面的on增加缩进
function order_on(str) {
	final_text = "";
	var text_list = str.split("\n");

	for (let i = 0; i < text_list.length; i++) {

		sen = text_list[i]
		loc = sen.indexOf("on ")
		// console.log(loc)

		if (loc != -1 && loc < 2) {
			// console.log("进入修改")
			sen = sen.replace("on ", "     on ")
		}
		if (sen != "") {
			final_text = final_text + sen + "\n"
		}
	}
	return final_text;
}


vkbeautify.prototype.sql = function (text, uppercase, comma_location, bracket_char, as_loc_cnt) {
	restore_list = []
	restore_cnt = 0

	step0 = extract_quotation_mark(text)
	step1 = reshape_comment(step0);
	step2 = replace_char(step1);
	step3 = get_bracket(step2);
	step4 = except_subquery(step3)
		.replace(/\{\.\*\.\*\}/ig, "(")  //复原之前修改的注释后中文()的项目
		.replace(/\{\*\.\*\.\}/ig, ")");
	// step5 = special_wrap(step4).replace(/\-\-\s{0,}\n/ig, "\n-- ");
	step5 = special_wrap(step4, as_loc_cnt).replace(/\s{0,1}--{}/ig, "\n--");
	// console.log(step5);
	step6 = bracket_deep(step5); //union all需要单独函数来考虑
	step7 = extra(step6);
	step8 = restore_strmark(step7);
	step9 = convert_lowercase(step8); //转换小写
	step10 = order_comment(step9);    //排序评论
	step11 = order_where(step10);     //排序where后面条件
	step12 = order_on(step11);        //排序on条件

	if (uppercase == true && comma_location == true && bracket_char == false) {
		return convert_comma_loaction(step8)
	}
	else if (uppercase == true && comma_location == true && bracket_char == true) {
		return convert_comma_loaction(step8).replace(/\t/ig, "    ") //用四个空格替换
	}

	else if (uppercase == true && comma_location == false && bracket_char == false) {
		return step8
	}

	else if (uppercase == true && comma_location == false && bracket_char == true) {
		return step8.replace(/\t/ig, "    ")
	}

	else if (uppercase == false && comma_location == true && bracket_char == false) {
		return convert_comma_loaction(step9)
	}
	else if (uppercase == false && comma_location == true && bracket_char == true) {
		return convert_comma_loaction(step9).replace(/\t/ig, "    ") //用四个空格替换
	}

	else if (uppercase == false && comma_location == false && bracket_char == false) {
		return step12
	}

	else if (uppercase == false && comma_location == false && bracket_char == true) {
		return step12.replace(/\t/ig, "    ")
	};
}

vkbeautify.prototype.sqlddl = function (text) {
	return ddl(text)
}


vkbeautify.prototype.extractddl = function (text) {
	return extractddl(text)
}

module.exports = new vkbeautify();