
function mapAsync(iterator, obj, context) {
	var result = obj.map(iterator);
	return Promise.all(result);
	
};
function mapAsyncWithOrder (iterator, array, context, descending) {
	var intitialValue = Promise.resolve([]);
	if(!Array.isArray(array)) {
		return intitialValue;
	}
	iterator = iterator.bind(context);
	var inOrder = function (prevValue, nextValue, nextIndex, array){
		return prevValue.then(function(items){
			return iterator(nextValue, nextIndex, array).then(function(moreItems){
				return items.concat(moreItems);
			});
		});
	}
	if (descending){
		return array.reduceRight(inOrder, intitialValue)
	}
	return array.reduce(inOrder, intitialValue);
}
function mapAsyncInOrder(iterator, array, context) {
	/*var arr = [];
	var n = array.length;
	for (var i =0; i < n; i++){
		var collect = iterator.apply(context, array[i], i.array);
		arr.push(collect);
	
	return Promise.all(arr);*/
	return mapAsyncWithOrder(iterator, array, context, false);
};

function mapAsyncInDescendingOrder(iterator, array, context) {

	/*var arr = [];
	for (var i = 0; i < array.length ; i++){
		arr.push(iterator.(array[i], i, array));
	}
	arr.reverse();
	return Promise.all(arr);*/
	return mapAsyncWithOrder(iterator, array, context, true);
};

/*map : function(list, iterator) {
			var arr = [];
			for (var i = 0; i < list.length; i++) {
				var bong = iterator(list[i]);
				arr.push(bong);
			}
			return arr;
		},*/