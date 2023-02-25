interface FirstFile {
  a: string
}


function FirstFunction (a: FirstFile):FirstFile {
  return a
}

// @ts-ignore
FirstFunction ('First')
