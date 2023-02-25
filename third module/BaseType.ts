let a: number = 4
let b = 'svlsdmflv'
let c = true

const d: string[] = ['asdva', 'asdvf', 'sdf']

let e: any = 3

function baseType(a: string): number | string {
  return ''
}

const test2 = (a: number): number => {
  return a * 2
}

let q = d.map((x: string) => x.toLowerCase())

function countCoord(coord: { lat: number, long?: number }) {

}

function printIt(id: number | string) {
  if (typeof id === 'number') {
    console.log(id.toString())
  } else if (typeof id === 'string') {
    id.toUpperCase()
  }
}

function getSum(a: number | number[]) {
  if (Array.isArray(a)) {
  }
}

/* функция ничего не вернет */
const test3 = (a: number): void => {
  return
}

const x: undefined = undefined;
const z: null = null;
