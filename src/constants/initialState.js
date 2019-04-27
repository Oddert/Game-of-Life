
const defaultHeight = 20
const defaultWidth = 20

const defaultCells = (defaultHeight, defaultWidth) => {
  const cells = []
  for (let r=0; r<defaultHeight; r++) {
    const row = []
    for (let c=0; c<defaultWidth; c++) row.push({
      alive: Math.floor(Math.random() * 2) === 0,
      row: r,
      col: c
    })
    cells.push(row)
  }
  return cells
}

const initialState = {
  board: {
    height: defaultHeight,
    width: defaultWidth,
    cellWidth: 20,
    cellHeight: 20,
    cells: defaultCells(defaultHeight, defaultWidth)
  },
  control: {
    paint: {
      active: false,
      mode: 'create'
    }
  }
}

export default initialState
