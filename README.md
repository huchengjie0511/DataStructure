# DataStructure

    map 和 object的区别
            Object
            在ECMAScript中，Object是一个特殊的对象。它本身是一个顶级对象，同时还是一个构造函数，可以通过它（如：new Object()）来创建一个对象。我们可以认为JavaScript中所有的对象都是Object的一个实例，对象可以用字面量的方法const obj = {}即可声明。

            Map
            Map是Object的一个子类，可以有序保存任意类型的数据，使用键值对去存储，其中键可以存储任意类型，通过const m = new Map();即可得到一个map实例。
            
            访问
            map: 通过map.get(key)方法去属性, 不存在则返回undefined
            object: 通过obj.a或者obj['a']去访问一个属性, 不存在则返回undefined
            
            赋值
            map: 通过map.set去设置一个值，key可以是任意类型
            object: 通过object.a = 1或者object['a'] = 1，去赋值，key只能是字符串，数字或symbol

            删除
            map: 通过map.delete去删除一个值，试图删除一个不存在的属性会返回false
            object: 通过delete操作符才能删除对象的一个属性，诡异的是，即使对象不存在该属性，删除也返回true，当然可以通过Reflect.deleteProperty(target, prop) 删除不存在的属性还是会返回true。
            go 代码解读复制代码var obj = {}; // undefined
            delete obj.a // true

            大小
            map: 通过map.size即可快速获取到内部元素的总个数
            object: 需要通过Object.keys的转换才能将其转换为数组，再通过数组的length方法去获得或者使用Reflect.ownKeys(obj)也可以获取到keys的集合
            迭代
            map: 拥有迭代器，可以通过for-of forEach去直接迭代元素，切遍历顺序是确定的
            object: 并没有实现迭代器，需要自行实现，不实现只能通过for-in循环去迭代，遍历顺序是不确定的
            
            使用场景
            如果只需要简单的存储key-value的数据，并且key不需要存储复杂类型的，直接用对象
            如果该对象必须通过JSON转换的，则只能用对象，目前暂不支持Map
            map的阅读性更好，所有操作都是通过api形式去调用，更有编程体验
