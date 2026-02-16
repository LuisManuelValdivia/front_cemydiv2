// app/verificar-email/page.tsx
import Link from 'next/link';

export default function VerificarEmail() {
  return (
    <main style={{maxWidth:680,margin:'0 auto',padding:'24px 16px',textAlign:'center'}}>
      <h1 style={{fontSize:28,fontWeight:800}}>Verifica tu correo</h1>
      <p style={{opacity:0.8,marginTop:8}}>
        Te enviamos un enlace para activar tu cuenta. Si no lo ves, revisa tu carpeta de spam.
      </p>
      <div style={{marginTop:16}}>
        <button aria-disabled style={{opacity:0.6}}>Reenviar enlace</button>
      </div>
      <div style={{marginTop:16}}>
        <Link href="/">Volver al inicio</Link>
      </div>
    </main>
  );
}
