const ids = new Set()

ids.add(1)
ids.add('abc')
//可以添加不同类型的数据

for(const el of ids){
    console.log(el);
}

// 判断是否存在
console.log(ids.has(1));

// 删除
ids.delete(1)