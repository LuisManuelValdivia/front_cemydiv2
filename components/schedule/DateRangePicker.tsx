type Props = { label?: string };

export default function DateRangePicker({ label = 'Selecciona fechas' }: Props) {
  return (
    <fieldset style={{display:'grid',gap:8}}>
      <legend style={{fontWeight:600}}>{label}</legend>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
        <label>
          <span style={{display:'block',fontSize:12,opacity:0.75}}>Inicio</span>
          <input type="date" />
        </label>
        <label>
          <span style={{display:'block',fontSize:12,opacity:0.75}}>Fin</span>
          <input type="date" />
        </label>
      </div>
      <div style={{fontSize:12,opacity:0.75}}>Disponibilidad simulada. Selección libre.</div>
    </fieldset>
  );
}
