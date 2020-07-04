export function handleType(type, func) {
  func(type);
}

export function handleFilter(target, filter, func) {
  const filterName = target.name;
  let filterValue = target.value;

  if (target.name === "incOffer" || target.name === "incSold") {
      if (!target.checked) {
          filterValue = false;
      }
  }

  func({...filter, [filterName]: filterValue });
}

export function handleSearch(target, filter, func) {
  const filterName = target.name;
  const filterValue = target.value;

  target.value = target.value;

  func({...filter, [filterName]: filterValue });
}