// 프로토타입의 교체
// 프로토타입은 생성자 함수 또는 인스턴스에 의해 교체될 수 있다.
// 이러한 특징을 활용하면 상속 관계를 동적으로 변경할 수 있음

// 즉시실행함수
const Person = (function () {
	function Person(name) {
		this.name = name
	}
	// 생성자 함수의 prototype 프로퍼티를 통해 프로토타입 교체
	Person.prototype = {
		sayHello() {
			console.log(`Hi! My name is ${this.name}`)
		},
	}
	return Person
})()

const me = new Person("Hyosin")
me.sayHello() // 객체 리터럴 할당, 객체 리터럴은 constructor 프로퍼티가 없음
console.log("me.constructor", me.constructor) // [Function: Object]
