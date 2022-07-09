export const validateFunction = event => {
  const target = event.target;
  if (!target.value.match(/[0-9_]/g)) {
    target.value = target.value.replace(/[A-Za-zА-Яа-яёЁ]/g, '');
  }
  if (target.matches('select') || target.matches('input')) {
    target.value = target.value.replace(/[A-Za-zА-Яа-яёЁ]/g, '');
  }
};
