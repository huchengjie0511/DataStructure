const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};


// 这里只会搜索键名为0的属性，但是实际上没有
console.log(person[0]);

// 这里会输出John
console.log(person['name']);

// 这里会输出John
console.log(person.name);

//两者是一样的


person.lastName = 'Doe';

//这里会输出Doe 原因在于相当于给对象person里面添加了一个属性
console.log(person.lastName);


//删除了对象里面的age属性
delete person.age;