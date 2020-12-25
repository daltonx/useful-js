Array.prototype.asyncForEach = async function (callback) {
    for(let i = 0; i < this.length; i++) {
        await callback(this[i], i)
    }
}

const array = [ 'a', 'b', 'c' ]
await array.asyncForEach(async e => {
  await func(e)
})
