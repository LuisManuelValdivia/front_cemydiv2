// components/forms/UploadField.tsx
type Props = { label: string; helper?: string };

export default function UploadField({ label, helper }: Props) {
  return (
    <div className="group">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer bg-gray-50 hover:bg-white hover:border-[#1e6260] hover:shadow-sm transition-all duration-300">
        
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <div className="mb-2 p-2 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-[#1e6260]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <p className="mb-1 text-sm text-gray-500 font-medium group-hover:text-[#1e6260]">
            <span className="font-bold">Haz clic para subir</span> o arrastra aquí
          </p>
          <p className="text-xs text-gray-400">{label}</p>
        </div>
        
        <input type="file" className="hidden" />
      </label>
      
      {helper && (
        <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          {helper}
        </p>
      )}
    </div>
  );
}
