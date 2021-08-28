Array.prototype.shuffle = function() {
	const size = this.length
	for(let i = 0; i < size; i++) {
		const rnd = Math.floor(Math.random() * (size - 1))
		const tmp = this[i]

		this[i] = this[rnd]
		this[rnd] = tmp
	}
}
