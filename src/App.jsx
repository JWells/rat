import { useReducer } from 'react'
import TOE from './TOE'
import {
  availableWeightCompositions,
  buildList,
  directLink,
  setInitialState,
  getRandom
} from './utils'
import {
  weightClasses,
  techbases,
  rulesLevels
} from './data'

const initialState = {
  eraMax: '',
  rulesLevelIds: [],
  techbaseId: '',
  unitList1: [],
  unitList2: [],
  weightClassId: '',
  weightCompositionId: '',
}

function reducer (state, action) {
  switch (action.type) {
    case 'setTechbase': {
      const techbaseId = action.value
      const weightCompositionId = getRandom(availableWeightCompositions(state.weightClassId, techbaseId).map(w => w.id))
      const update = {
        techbaseId,
        weightCompositionId,
        unitList1: buildList(techbaseId, state.rulesLevelIds, weightCompositionId, state.eraMax, state.eraMin),
        unitList2: buildList(techbaseId, state.rulesLevelIds, weightCompositionId, state.eraMax, state.eraMin)
      }
      return {
        ...state,
        ...update
      }
    }
    case 'setEraMax': {
      const eraMax = action.value
      const update = {
        eraMax,
        unitList1: buildList(state.techbaseId, state.rulesLevelIds, state.weightCompositionId, eraMax, state.eraMin),
        unitList2: buildList(state.techbaseId, state.rulesLevelIds, state.weightCompositionId, eraMax, state.eraMin)
      }
      return {
        ...state,
        ...update
      }
    }
    case 'setEraMin': {
      const eraMin = action.value
      const update = {
        eraMin,
        unitList1: buildList(state.techbaseId, state.rulesLevelIds, state.weightCompositionId, state.eraMax, eraMin),
        unitList2: buildList(state.techbaseId, state.rulesLevelIds, state.weightCompositionId, state.eraMax, eraMin)
      }
      return {
        ...state,
        ...update
      }
    }

    case 'setRulesLevelIds': {
      const rulesLevelIds = action.value
      const update = {
        rulesLevelIds,
        unitList1: buildList(state.techbaseId, rulesLevelIds, state.weightCompositionId, state.eraMax, state.eraMin),
        unitList2: buildList(state.techbaseId, rulesLevelIds, state.weightCompositionId, state.eraMax, state.eraMin)
      }
      return {
        ...state,
        ...update
      }
    }
    case 'setWeightClassId': {
      const weightClassId = action.value
      const weightCompositionId = getRandom(availableWeightCompositions(weightClassId, state.techbaseId).map(w => w.id))
      const update = {
        weightClassId,
        weightCompositionId,
        unitList1: buildList(state.techbaseId, state.rulesLevelIds, weightCompositionId, state.eraMax, state.eraMin),
        unitList2: buildList(state.techbaseId, state.rulesLevelIds, weightCompositionId, state.eraMax, state.eraMin)
      }
      return {
        ...state,
        ...update
      }
    }
    case 'setWeightCompositionId': {
      const weightCompositionId = action.value
      const update = {
        weightCompositionId,
        unitList1: buildList(state.techbaseId, state.rulesLevelIds, weightCompositionId, state.eraMax, state.eraMin),
        unitList2: buildList(state.techbaseId, state.rulesLevelIds, weightCompositionId, state.eraMax, state.eraMin)
      }
      return {
        ...state,
        ...update
      }
    }
  }
  return state
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, setInitialState)

  const {
    eraMax,
    eraMin,
    rulesLevelIds,
    techbaseId,
    unitList1,
    unitList2,
    weightClassId,
    weightCompositionId
  } = state

  const weightCompositions = availableWeightCompositions(weightClassId, techbaseId)
  return (
    <div className='container'>
      <h1 className='text-center my-4'>Random List Builder</h1>
      <div className='row'>
        <div className='col-sm'>
          <fieldset className='mb-2'>
            <legend>Techbase</legend>
            {
              techbases.map(techbase => {
                return (
                  <div className='form-check' key={techbase.id}>
                    <input
                      checked={techbase.id === techbaseId}
                      className='form-check-input'
                      id={techbase.name}
                      name={techbase.name}
                      onChange={() => dispatch({ type: 'setTechbase', value: techbase.id })}
                      type='radio'
                    />
                    <label className='form-check-label' htmlFor={techbase.name}>
                      {techbase.name}
                    </label>
                  </div>
                )
              })
            }
          </fieldset>
          <div>
            <label 
              className='form-label'
              htmlFor='eraMin'
            >
              Min Year
            </label>
            <input
              className='form-control'
              id='eraMin'
              onChange={(e) => dispatch({ type: 'setEraMin', value: e.target.value})}
              type='number'
              value={eraMin}
            />
          </div>


          <div className='mb-3'>
            <label 
              className='form-label'
              htmlFor='eraMax'
            >
              Max Year
            </label>
            <input
              className='form-control'
              id='eraMax'
              onChange={(e) => dispatch({ type: 'setEraMax', value: e.target.value})}
              type='number'
              value={eraMax}
            />
          </div>
          <fieldset className='mb-2'>
            <legend>Rules Level</legend>
            {
              rulesLevels.map(rulesLevel => {
                return (
                  <div className='form-check' key={rulesLevel.id}>
                    <input
                      checked={rulesLevelIds.includes(rulesLevel.id)}
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id={rulesLevel.name}
                      onChange={(e) => {
                        const checked = e.target.checked
                        const action = { type: 'setRulesLevelIds' }
                        if (checked) {
                          action.value = [rulesLevel.id, ...rulesLevelIds]
                        } else {
                          action.value = rulesLevelIds.filter(id => id !== rulesLevel.id)
                        }
                        dispatch(action)
                      }}
                    />
                    <label className='form-check-label' htmlFor={rulesLevel.name}>
                      {rulesLevel.name}
                    </label>
                  </div>
                )
              })
            }
          </fieldset>

          <div className='mb-2'>
            <label
              className='form-label'
              htmlFor='weightClass'
            >
              Weight Class
            </label>
            <select
              id='weightClass'
              className='form-select'
              onChange={(e) => dispatch({ type: 'setWeightClassId', value: e.target.value })}
              value={weightClassId}
            >
              {
                weightClasses.map(o => {
                  return (
                    <option
                      key={o.id}
                      value={o.id}
                    >
                      {o.name}
                    </option>
                  )
                })
              }
            </select>
          </div>

          <div className='mb-2'>
            <label
              className='form-label'
              htmlFor='weightComposition'
            >
              Weight Composition 
            </label>
            <select
              id='weightComposition'
              className='form-select'
              onChange={(e) => dispatch({ type: 'setWeightCompositionId', value: e.target.value })}
              value={weightCompositionId}
            >
              {
                weightCompositions.map(o => {
                  return (
                    <option
                      key={o.id}
                      value={o.id}
                    >
                      {o.name}
                    </option>
                  )
                })
              }
            </select>
          </div>
          <div>
            <a
              href={directLink(state)}
              target='_blank'>
              Direct Link
            </a>
          </div>
        </div>
        <div className='col-sm'>
          <TOE
            unitIds={unitList1}
          />
        </div>
        <div className='col-sm'>
          <TOE
            unitIds={unitList2}
          />
        </div>
      </div>
    </div>
  )
}

export default App
