import Sortable from 'sortablejs';

const initSortable = () => {
  const list = document.querySelector('#movies');
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 300,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  });
}

export { initSortable };
