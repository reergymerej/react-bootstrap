// This is a cheat to avoid multiple calls.
// TODO: Do this the right way.
const SPECIES = {
  'https://swapi.co/api/species/1/': 'human',
  'https://swapi.co/api/species/2/': 'droid',
}

// This acts as a facade, preventing storage of the entire DTO.
const simplifyPerson = (person) => {
  const {
    name,
    height,
    mass,
    gender,
    species,
  } = person
  return {
    name,
    height,
    mass,
    gender,
    species: SPECIES[species[0]],
  }
}

const simplifyPersonResponse = (resp) => {
  return {
    count: resp.count,
    people: resp.results.map(simplifyPerson),
    previous: resp.previous,
    next: resp.next,
  }
}

const objectToQuery = (obj) => Object.keys(obj)
  .map(name => `${name}=${encodeURIComponent(obj[name])}`)
  .join('&')

export default {
  loadPeople: (search, page) => {
    const query = objectToQuery({ search, page })
    const url = `https://swapi.co/api/people/?${query}`
    return fetch(url)
      .then(resp => resp.json())
      .then(simplifyPersonResponse)
  },
}
