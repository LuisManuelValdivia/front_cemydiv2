import Link from 'next/link';

type Props = {
  name: string;
  type: 'compra' | 'renta';
  price: string;
  extra?: string;
};

export default function CartItem({ name, type, price, extra }: Props) {
  return (
    <div style={{border:'1px solid #E5E7EB',borderRadius:12,padding:16,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div>
        <div style={{fontWeight:600}}>{name}</div>
        <div style={{fontSize:14,opacity:0.75}}>Tipo: {type}</div>
        {extra && <div style={{fontSize:14,opacity:0.75}}>{extra}</div>}
      </div>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div style={{fontWeight:700}}>{price}</div>
        <Link href="#" aria-disabled className="text-sm" style={{opacity:0.5,pointerEvents:'none'}}>Quitar</Link>
      </div>
    </div>
  );
}
