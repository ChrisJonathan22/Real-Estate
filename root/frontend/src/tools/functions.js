import axios from 'axios';

export function handleType(type, filter, func1, func2) {
  func1(type);
  func2({...filter, contractType: type });
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

export async function fetchProperties (url, setPropMethod) {
    try {
      // Fetch all the properties and store them within the state
      let response = await axios.get(url);
      response = response.data.properties;
      setPropMethod(response);
    } catch (error) {
      console.log(error);
    }
}