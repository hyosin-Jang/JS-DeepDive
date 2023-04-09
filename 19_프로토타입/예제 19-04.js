// 생성자 함수
function Circle(radius) {
	this.radius = radius
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea메서드를
// 공유해서 사용할 수 있도록 프로토타입 프로퍼티에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
	return Math.PI * this.radius ** 2
}

// 프로토타입은 자바스크립트에서 상속할 때 사용하는 생성자 함수의 프로퍼티임
// 인스턴스 간에 프로퍼티나 메서드를 공유해야 할 때, 하나만 생성하는 것이 바람직함

// 즉, 상위 객체(부모)가 자식 간에 공유해야 할 속성이나 메서드를 가지고 있을 때
// 프로토타입으로 구현하면 자식 측에서 중복 구현 없이 상속 받아서 사용할 수 있음

const circle1 = new Circle(1)
const circle2 = new Circle(2)

console.log(circle1.getArea === circle2.getArea) // true

console.log(circle1.getArea())
console.log(circle2.getArea())
