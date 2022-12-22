export default function handleDelete(id, colorState, setter) {
  console.log("handleDelete", id, setter, colorState);
  setter(colorState.filter((element) => element.id !== id));
}
