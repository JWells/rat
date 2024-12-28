import {
  flechsLink,
  formattedUnitName,
  getUnitById,
  tonnageTotal
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
        <td>{formattedUnitName(unit)}</td>
        <td className='text-end'>{unit.mass}</td>
      </tr>)
  })
}

export default function TOE ({
  unitIds
}) {
  return (
    <table className='table table-sm'>
      <caption><a href={flechsLink(unitIds)}>Open in Flechs</a></caption>
      <thead>
        <tr>
          <th>Name</th>
          <th className='text-end'>Tons</th>
        </tr>
      </thead>
      <tbody className='table-group-divider'>
        <UnitRows unitIds={unitIds} />
      </tbody>
      <tfoot className='table-group-divider'>
        <tr>
          <th>Total</th>
          <td className='text-end'>{tonnageTotal(unitIds)}</td>
        </tr>
      </tfoot>
    </table>
  )
}
