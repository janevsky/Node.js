const candles = [1, 5, 4, 3, 4, 2]

// algoritam za naogjanje na maximum
// algoritam za naogjanje na minimum
let max = 0
candles.forEach(candle => {
  if (candle > max) {
    max = candle
  }
})
// maksimumot e vo promenlivata max

console.log(max)

/**
 * iteracija 1
 * max = -9999
 * candle = 1
 * dali candle e pogolemo od max?
 * da e, znaci max kje bide 1
 * 
 * iteracija 2
 * max = 1
 * candle = 5
 * dali candle e pogolemo od max?
 * da e, znaci max kje bide 5
 * 
 */