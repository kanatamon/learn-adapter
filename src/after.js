class LegacyLine {
	draw = (x1, y1, x2, y2) => {
		console.log(`line from (${x1},${y1}) to (${x2},${y2})`)
	}
}

class LegacyRectangle {
	draw = (x, y, w, h) => {
		console.log(`rectangle at (${x},${y}) with width ${w} and height ${h}`)
	}
}

// +
class Shape {
	draw = (x1, y1, x2, y2) => { }
}

// +
class Line extends LegacyLine {
	
	legacyLine = new LegacyLine()
	
	draw = (x1, y1, x2, y2) => {
		this.legacyLine.draw(x1, y1, x2, y2)
	}
}

// +
class Rectangle extends LegacyRectangle {

	legacyRectangle = new LegacyRectangle()
	
	draw = (x1, y1, x2, y2) => {
		let x = Math.min(x1, x2)
		let y = Math.min(y1, y2)
		let w = Math.abs(x1 - x2)
		let h = Math.abs(y1 - y2)

		this.legacyRectangle.draw(x, y, w, h)
	}
}

export default () => {
	let shapes = [
		new Line(), 
		new Rectangle()
	]

	let x1 = 10
	let y1 = 20
	let x2 = 30
	let y2 = 60

	shapes.forEach((shape) => {
		shape.draw(x1, y1, x2, y2)
	})
}