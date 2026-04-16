import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  base:'/productBuilderTS/',
  plugins: [react(), tailwindcss(),
     visualizer({
      open: true, // يفتح التقرير في المتصفح
      filename: 'stats.html', // ملف التحليل
      gzipSize: true,// عرض حجم الملفات بعد الضغط باستخدام gzip
      brotliSize: true,// عرض حجم الملفات بعد الضغط باستخدام brotli
    }),
  ],
  build: {
    minify: 'terser', // استخدم Terser لضغط الكود
    terserOptions: {
      compress: {
        drop_console: true, // إزالة console.log
        drop_debugger: true, // إزالة debugger
      },
    },
  }

 
}
  
)
