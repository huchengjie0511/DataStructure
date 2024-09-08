const result = new Map();

result.set('name', 'John');
result.set('age', 30);


// map中可以把键作为对象

const germany = { name: 'Germany', population: 83 };

result.set(germany, 0.89);


// map可以用来迭代
for (let el of result) {
    console.log(el);
}

// 删除
result.delete('name');