export function onDragStartHadnler(e, table, person) {
  console.log(person);
}
export function onDragLeaveHadnler(e, person) {}
export function onDragEndHadnler(e, person) {}
export function onDragOverHadnler(e, person) {
  e.preventDefault();
}
export function onDropHadnler(e, table, person) {
  e.preventDefault();
  console.log(person);
}
