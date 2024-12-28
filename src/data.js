export const rulesLevels = [
  { id: '1', name: 'Introductory', mtf: '1' },
  { id: '2', name: 'Standard', mtf: '2' },
  { id: '3', name: 'Advanced', mtf: '3' }
]

export const techbases = [
  { id: '1', name: 'Inner Sphere' },
  { id: '2', name: 'Clan' }
]

export const weightClasses = [
  { id: '1', name: '1 - Light' },
  { id: '2', name: '2 - Medium' },
  { id: '3', name: '3 - Heavy' },
  { id: '4', name: '4 - Assault' },
]

export const weightCompositions = [
  { id: '1', name: '1', weightClassId: '1', techbaseId: '1', types: ['Light', 'Light', 'Light', 'Light'] }, // l
  { id: '2', name: '2', weightClassId: '1', techbaseId: '1', types: ['Light', 'Light', 'Light', 'Medium'] }, // l
  { id: '3', name: '3', weightClassId: '1', techbaseId: '1', types: ['Light', 'Light', 'Light', 'Medium'] }, // l
  { id: '4', name: '4', weightClassId: '1', techbaseId: '1', types: ['Light', 'Light', 'Medium', 'Medium'] }, // l
  { id: '5', name: '5', weightClassId: '1', techbaseId: '1', types: ['Light', 'Light', 'Medium', 'Medium']}, // l
  { id: '6', name: '6', weightClassId: '1', techbaseId: '1', types: ['Light', 'Light', 'Medium', 'Heavy'] }, // l
  { id: '7', name: '1', weightClassId: '2', techbaseId: '1', types: ['Light', 'Medium', 'Medium', 'Heavy'] }, // m
  { id: '8', name: '2', weightClassId: '2', techbaseId: '1', types: ['Medium', 'Medium', 'Medium', 'Medium'] }, // m
  { id: '9', name: '3', weightClassId: '2', techbaseId: '1', types: ['Medium', 'Medium', 'Medium', 'Medium'] }, // m
  { id: '10', name: '4', weightClassId: '2', techbaseId: '1', types: ['Medium', 'Medium', 'Medium', 'Heavy'] }, // m
  { id: '11', name: '5', weightClassId: '2', techbaseId: '1', types: ['Medium', 'Medium', 'Medium', 'Heavy'] }, // m
  { id: '12', name: '6', weightClassId: '2', techbaseId: '1', types: ['Medium', 'Medium', 'Heavy', 'Heavy'] }, // m
  { id: '13', name: '1', weightClassId: '3', techbaseId: '1', types: ['Medium', 'Heavy', 'Heavy', 'Heavy'] }, // h
  { id: '14', name: '2', weightClassId: '3', techbaseId: '1', types: ['Heavy', 'Heavy', 'Heavy', 'Heavy'] }, // h
  { id: '15', name: '3', weightClassId: '3', techbaseId: '1', types: ['Heavy', 'Heavy', 'Heavy', 'Heavy'] }, // h
  { id: '16', name: '4', weightClassId: '3', techbaseId: '1', types: ['Medium', 'Heavy', 'Heavy', 'Assault'] }, // h
  { id: '17', name: '5', weightClassId: '3', techbaseId: '1', types: ['Medium', 'Heavy', 'Heavy', 'Assault'] }, // h
  { id: '18', name: '6', weightClassId: '3', techbaseId: '1', types: ['Heavy', 'Heavy', 'Heavy', 'Assault'] }, // h
  { id: '19', name: '1', weightClassId: '4', techbaseId: '1', types: ['Medium', 'Heavy', 'Assault', 'Assault'] }, // a 1
  { id: '20', name: '2', weightClassId: '4', techbaseId: '1', types: ['Heavy', 'Heavy', 'Assault', 'Assault'] }, // a 2
  { id: '21', name: '3', weightClassId: '4', techbaseId: '1', types: ['Heavy', 'Heavy', 'Assault', 'Assault'] }, // a 3
  { id: '22', name: '4', weightClassId: '4', techbaseId: '1', types: ['Heavy', 'Assault', 'Assault', 'Assault'] }, // a 4
  { id: '23', name: '5', weightClassId: '4', techbaseId: '1', types: ['Heavy', 'Assault', 'Assault', 'Assault'] }, // a 5
  { id: '24', name: '6', weightClassId: '4', techbaseId: '1', types: ['Assault', 'Assault', 'Assault', 'Assault'] }, // a 6
  { id: '25', name: '1', weightClassId: '1', techbaseId: '2', types: ['Light', 'Light', 'Light', 'Light', 'Light'] }, // l
  { id: '26', name: '2', weightClassId: '1', techbaseId: '2', types: ['Light', 'Light', 'Light', 'Light', 'Medium'] }, // l
  { id: '27', name: '3', weightClassId: '1', techbaseId: '2', types: ['Light', 'Light', 'Light', 'Light', 'Medium'] }, // l
  { id: '28', name: '4', weightClassId: '1', techbaseId: '2', types: ['Light', 'Light', 'Light', 'Medium', 'Medium'] }, // l
  { id: '29', name: '5', weightClassId: '1', techbaseId: '2', types: ['Light', 'Light', 'Light', 'Medium', 'Medium'] }, // l
  { id: '30', name: '6', weightClassId: '1', techbaseId: '2', types: ['Light', 'Light', 'Medium', 'Medium', 'Heavy'] }, // l
  { id: '31', name: '1', weightClassId: '2', techbaseId: '2', types: ['Light', 'Medium', 'Medium', 'Medium', 'Medium'] }, // m
  { id: '32', name: '2', weightClassId: '2', techbaseId: '2', types: ['Medium', 'Medium', 'Medium', 'Medium', 'Medium'] }, // m
  { id: '33', name: '3', weightClassId: '2', techbaseId: '2', types: ['Medium', 'Medium', 'Medium', 'Medium', 'Medium'] }, // m
  { id: '34', name: '4', weightClassId: '2', techbaseId: '2', types: ['Medium', 'Medium', 'Medium', 'Medium', 'Heavy'] }, // m
  { id: '35', name: '5', weightClassId: '2', techbaseId: '2', types: ['Medium', 'Medium', 'Medium', 'Medium', 'Heavy'] }, // m
  { id: '36', name: '6', weightClassId: '2', techbaseId: '2', types: ['Medium', 'Medium', 'Medium', 'Heavy', 'Heavy'] }, // m
  { id: '37', name: '1', weightClassId: '3', techbaseId: '2', types: ['Medium', 'Medium', 'Heavy', 'Heavy', 'Heavy'] }, // h
  { id: '38', name: '2', weightClassId: '3', techbaseId: '2', types: ['Medium', 'Heavy', 'Heavy', 'Heavy', 'Heavy'] }, // h
  { id: '39', name: '3', weightClassId: '3', techbaseId: '2', types: ['Medium', 'Heavy', 'Heavy', 'Heavy', 'Heavy'] }, // h
  { id: '40', name: '4', weightClassId: '3', techbaseId: '2', types: ['Heavy', 'Heavy', 'Heavy', 'Heavy', 'Heavy'] }, // h
  { id: '41', name: '5', weightClassId: '3', techbaseId: '2', types: ['Heavy', 'Heavy', 'Heavy', 'Heavy', 'Heavy'] }, // h
  { id: '42', name: '6', weightClassId: '3', techbaseId: '2', types: ['Medium', 'Heavy', 'Heavy', 'Heavy', 'Assault'] }, // h
  { id: '43', name: '1', weightClassId: '4', techbaseId: '2', types: ['Medium', 'Heavy', 'Heavy', 'Assault', 'Assault'] }, // a
  { id: '44', name: '2', weightClassId: '4', techbaseId: '2', types: ['Heavy', 'Heavy', 'Heavy', 'Heavy', 'Assault'] }, // a
  { id: '45', name: '3', weightClassId: '4', techbaseId: '2', types: ['Heavy', 'Heavy', 'Heavy', 'Heavy', 'Assault'] }, // a
  { id: '46', name: '4', weightClassId: '4', techbaseId: '2', types: ['Heavy', 'Heavy', 'Heavy', 'Assault', 'Assault'] }, // a
  { id: '47', name: '5', weightClassId: '4', techbaseId: '2', types: ['Heavy', 'Heavy', 'Heavy', 'Assault', 'Assault'] }, // a
  { id: '48', name: '6', weightClassId: '4', techbaseId: '2', types: ['Heavy', 'Heavy', 'Assault', 'Assault', 'Assault'] } // a
].map(w => {
  return {
    ...w,
    name: `${w.name} - ${w.types.join(', ')}`
  }
})

export const weightTypes = {
  'Light': { Min: 20, Max: 35 },
  'Medium': { Min: 40, Max: 55 },
  'Heavy': { Min: 60, Max: 75 },
  'Assault': { Min: 75, Max: 100 }
}
