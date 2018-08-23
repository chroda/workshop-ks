// var defaults = {
// 	foo: 0,
// 	bar: 4,
// 	bam: {
// 		qux: 0,
// 		qam: 14
// 	}
// };

ajax("http://fun.tld",handleResponse);


// *******************************************************

function handleResponse({
	foo = 0,
	bar = 4,
	baz,
	bam: {
		qux = 0,
		qam = 14
	} = {}
} = {}) {

	checkData({
		foo,
		bar,
		baz,
		bam: {
			qux,
			qam
		}
	});

}

function ajax(url,cb) {
	// fake ajax response:
	cb({
		foo: 2,
		baz: [ 6, 8, 10 ],
		bam: {
			qux: 12
		}
	});
}

function checkData(data) {
	console.log(
		56 === (
			data.foo +
			data.bar +
			data.baz[0] + data.baz[1] + data.baz[2] +
			data.bam.qux +
			data.bam.qam
		)
	);
}
