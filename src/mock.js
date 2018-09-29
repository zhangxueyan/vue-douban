// 使用 Mock
import Mock from 'mockjs'
var groupData = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'data|2': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 2001,
        'img':()=>Mock.Random.image('48x48','#87d07f','#000','Hello'),
        'prov':()=>Mock.Random.province(),
        "number|3-30": 10,
        'addr':()=>Mock.Random.county()
    }]
})
// 输出结果
// console.log(data)
// console.log(JSON.stringify(data, null, 4))

var singleData = Mock.mock({
    'data':{
    	'2001':{
    	  'img':()=>Mock.Random.image('100x100','#87d07f','#000','Hello'),
    	  'address':()=>Mock.Random.county(),
    	  'num':2001
    	},
    	'2002':{
    	  'img':()=>Mock.Random.image('100x100','#87d07f','#000','Hello'),
    	  'address':()=>Mock.Random.county(),
    	  'num':2002
    	}

    }
})
export {groupData,singleData}