function Cow(power) {
	this.cache = new Float64Array(1048576);
	this.power = power;
	for (var i = 0; i < this.cache.length; i++) this.cache[i] = Math.pow(i, power);
}

Cow.prototype = {
	pow: function(n) {
		return n < 1048576 ? this.cache[n >> 0] : Math.pow(n, this.power)
	}
}
