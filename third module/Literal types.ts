// @ts-ignore
let c: 'test' = 'test'

type actionType = 'up' | 'down'
interface ComplexAction {
  s: string
}
function performAction(action: actionType | ComplexAction){
  switch (action) {
  case 'up':
    return -1
  case 'down':
    return 1
  }
}
