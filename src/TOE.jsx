import {
  flechsLink,
  getUnitById,
  sumOf
} from './utils'

function UnitRows ({
  unitIds
}) {
  const unitList = unitIds
    .map(getUnitById)
    .sort((a, b) => {
      return Number(a.mass) - Number(b.mass)
    })

  return unitList.map((unit, index) => {
    return (
      <tr key={`${unit['mul id']}_${index}`}>
        <td>{unit.name}</td>
        <td className='text-end'>{unit.bv}</td>
        <td className='text-end'>{unit.tons}</td>
      </tr>
    )
  })
}

export default function TOE ({
  unitIds
}) {
  return (
    <table className='table table-sm'>
      <caption>
        <a href={flechsLink(unitIds)} target="_blank">
          Open in Flechs
        </a>
      </caption>
      <thead>
        <tr>
          <th>Name</th>
          <th className='text-end'>BV</th>
          <th className='text-end'>Tons</th>
        </tr>
      </thead>
      <tbody className='table-group-divider'>
        <UnitRows unitIds={unitIds} />
      </tbody>
      <tfoot className='table-group-divider'>
        <tr>
          <th>Total</th>
          <td className='text-end'>{sumOf(unitIds, 'bv')}</td>
          <td className='text-end'>{sumOf(unitIds, 'tons')}</td>
        </tr>
      </tfoot>
    </table>
  )
}
