export default function handleDelete(id, colorState, setter) {
  setter(colorState.filter((element) => element.id !== id));
}
