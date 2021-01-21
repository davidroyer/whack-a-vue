const nineItemArray = Array.from(Array(9).keys())

export const molesArray = nineItemArray.map((item, index) => {
  return {
    active: false,
    id: index + 1
  }
})

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
