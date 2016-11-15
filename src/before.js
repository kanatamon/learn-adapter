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

export default () => {
	let shapes = [
		new LegacyLine(), 
		new LegacyRectangle()
	]

	let x1 = 10
	let y1 = 20
	let x2 = 30
	let y2 = 60

	// [Problem] - Because the interface between Line and Rectangle objects is incompatible, 
	// the user has to recover the type of each shape and manually supply the correct arguments.
	shapes.forEach((shape) => {
		switch(shape.constructor.name) {
			case 'LegacyLine': 
				shape.draw(x1, y1, x2, y2)
				break
			case 'LegacyRectangle':
				let x = Math.min(x1, x2)
				let y = Math.min(y1, y2)
				let w = Math.abs(x1 - x2)
				let h = Math.abs(y1 - y2)
				
				shape.draw(x, y, w, h)
				
				break
			default:
				break
		}
	})
}