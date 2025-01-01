import { units } from './data.json'
import {
  techbases,
  weightClasses,
  weightTypes,
  weightCompositions,
} from './data'

export function flechsLink (unitIds) {
  const url = new URL('https://sheets.flechs.net')
  const mechNames = unitIds
    .map(unitId => units.byId[unitId].name)
    .join(',')
  url.searchParams.append('s', mechNames)
  return url.toString()
}

export function sumOf (unitIds, property) {
  return unitIds.reduce((total, id) => {
    return total + Number(units.byId[id][property])
  }, 0)
}

export function getRandomInt (max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min)
}

export function getRandom (list) {
  return list[getRandomInt(list.length)]
}

export function buildList (techbaseId, rulesLevelIds, weightCompositionId, eraMax, eraMin) {
  const weightComposition = weightCompositions.find(weigthComposition => weigthComposition.id === weightCompositionId)
  const availableUnits = Object.values(units.byId)
    .filter(unit => {
      return (
        unit.tech === techbaseId &&
        Number(unit.year) <= Number(eraMax) &&
        Number(unit.year) >= Number(eraMin) &&
        rulesLevelIds.includes(unit.level)
      )
    })

  const result = []
  weightComposition.types.forEach(weightType => {
    const { Min, Max }= weightTypes[weightType]
    const options = availableUnits
      .filter(unit => {
        return (
          Number(unit.tons) >= Min && Number(unit.tons) <= Max &&
          !result.some(existingUnitId => units.byId[existingUnitId].name === unit.name)
        )
      })
      .map(u => u.id)

    const unit = getRandom(options)
    if (unit) {
      result.push(unit)
    }
  })
  return result
}

export function availableWeightCompositions (weightClassId, techbaseId) {
  return weightCompositions.filter(w => w.weightClassId === weightClassId && w.techbaseId === techbaseId)
}

export function getUnitById (id) {
  return units.byId[id]
}

export function getMaxEra () {
  return Math.max(...Object.values(units.byId).map(unit => Number(unit.year)))
}

export function getMinEra () {
  return Math.min(...Object.values(units.byId).map(unit => Number(unit.year)))
}

export function directLink (state) {
  const url = new URL(window.location.origin + window.location.pathname)
  url.searchParams.set('y1', state.eraMin)
  url.searchParams.set('y2', state.eraMax)
  url.searchParams.set('t', state.techbaseId)
  url.searchParams.append('r', state.rulesLevelIds.join(','))
  url.searchParams.set('w', state.weightClassId)
  url.searchParams.set('c', state.weightCompositionId)
  url.searchParams.append('u1', state.unitList1.join(','))
  url.searchParams.append('u2', state.unitList2.join(','))

  return url.toString()
}

export function setInitialState (state) {
  const { searchParams } = new URL(window.location.href)

  const weightClassId = searchParams.get('w') || getRandom(weightClasses.map(type => type.id))
  const techbaseId = searchParams.get('t') || getRandom(techbases.map(techbase => techbase.id))
  const rulesLevelIds = searchParams.get('r')?.split(',') || ['1', '2']
  const eraMaxPossible = getMaxEra()
  const eraMinPossible = getMinEra()
  const eraMin = searchParams.get('y1') || eraMinPossible
  const eraMax = searchParams.get('y2') || eraMaxPossible

  const weightCompositionId = searchParams.get('c') || getRandom(availableWeightCompositions(weightClassId, techbaseId).map(w => w.id))

  const unitList1 = searchParams.get('u1')?.split(',') || buildList(techbaseId, rulesLevelIds, weightCompositionId, eraMax, eraMin)
  const unitList2 = searchParams.get('u2')?.split(',') || buildList(techbaseId, rulesLevelIds, weightCompositionId, eraMax, eraMin)

  state.eraMax = eraMax
  state.eraMin = eraMin
  state.techbaseId = techbaseId
  state.rulesLevelIds = rulesLevelIds
  state.weightClassId = weightClassId
  state.weightCompositionId = weightCompositionId
  state.unitList1 = unitList1
  state.unitList2 = unitList2

  return state
}
