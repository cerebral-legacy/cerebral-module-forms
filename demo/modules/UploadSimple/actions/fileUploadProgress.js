export default function ({state, input}) {
  state.set('uploadSimple.file.value.0.percentComplete', input.percentComplete)
}
