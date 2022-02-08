
test1 = ['a', 'b', 'c'];
test2 = [1, 2, 3];

function zipList(list1, list2) {
  let combineList = [];
  for (let i = 0; i < list1.length; i++) {
    combineList.push(list1[i]);
    combineList.push(list2[i]);
  }

  return combineList;

}

console.log(zipList(test1, test2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(test1, test2));

