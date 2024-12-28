import { units } from './units.json'
import {
  rulesLevels,
  techbases,
  weightClasses,
  weightTypes,
  weightCompositions,
} from './data'

export function flechsLink (unitIds) {
  const url = new URL('https://sheets.flechs.net')
  const mechNames = unitIds
    .map(unitId => {
      const unit = units.byId[unitId]
      return `${unit.chassis} ${unit.model}`
    })
    .join(',')
  url.searchParams.append('s', mechNames)
  return url.toString()
}

export function tonnageTotal (listIds) {
  return listIds.reduce((total, id) => {
    return total + Number(units.byId[id].mass)
  }, 0)
}

export function getRandomInt (max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min)
}

export function getRandom (list) {
  return list[getRandomInt(list.length)]
}

export function buildList (techbaseId, rulesLevelIds, weightCompositionId, eraMax, eraMin) {
  const techbase = techbases.find(f => f.id === techbaseId)
  const weightComposition = weightCompositions.find(weigthComposition => weigthComposition.id === weightCompositionId)
  const mtfRulesLevels = rulesLevels.filter(rulesLevel => rulesLevelIds.includes(rulesLevel.id)).map(rulesLevel => rulesLevel.mtf)
  const availableUnits = Object.values(units.byId)
    .filter(unit => {
      return (
        unit.techbase === techbase.name &&
        Number(unit.era) <= Number(eraMax) &&
        Number(unit.era) >= Number(eraMin) &&
        mtfRulesLevels.includes(unit['rules level'])
      )
    })

  const result = []
  weightComposition.types.forEach(weightType => {
    const { Min, Max }= weightTypes[weightType]
    const options = availableUnits
      .filter(unit => {
        return (
          Number(unit.mass) >= Min && Number(unit.mass) <= Max &&
          !result.some(existingUnitId => units.byId[existingUnitId].chassis === unit.chassis)
        )
      })
      .map(u => u['mul id'])

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

export function formattedUnitName (unit) {
  return `${unit.chassis} ${unit.model}`.trim()
}

export function getMaxEra () {
  return Math.max(...Object.values(units.byId).map(unit => Number(unit.era)))
}

export function getMinEra () {
  return Math.min(...Object.values(units.byId).map(unit => Number(unit.era)))
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
  const eraMin = searchParams.get('y1') || getRandomInt(eraMinPossible, eraMaxPossible - 1)
  const eraMax = searchParams.get('y2') || getRandomInt(eraMin, eraMaxPossible)

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
