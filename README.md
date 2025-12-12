# 📱 Responsive Dashboard UI (React Native Expo)

Proyek ini adalah implementasi antarmuka (UI) Dashboard yang **responsif** menggunakan React Native dan Expo. Layout aplikasi akan beradaptasi secara otomatis berdasarkan ukuran layar atau orientasi perangkat.

- **Mobile (Portrait):** Tampilan daftar vertikal (List View).
- **Tablet / Landscape:** Tampilan grid 2 kolom (Grid View).

## ✨ Fitur Utama

*   🚀 **Responsive Layout:** Menggunakan `useWindowDimensions` dan Flexbox `wrap`.
*   🌙 **Dark Mode UI:** Tema warna gelap yang modern dan nyaman di mata.
*   📐 **Orientation Support:** Mendukung rotasi layar (Portrait & Landscape).
*   💎 **TypeScript:** Kode ditulis dengan `.tsx` untuk keamanan tipe data yang lebih baik.

## 🛠️ Tech Stack

*   [React Native](https://reactnative.dev/)
*   [Expo](https://expo.dev/)
*   [TypeScript](https://www.typescriptlang.org/)

## 🚀 Cara Menjalankan Projek

1.  **Masuk ke folder proyek:**
    ```bash
    cd responsive_dashboard
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Jalankan Server Expo:**
    ```bash
    npx expo start
    ```

4.  **Buka Aplikasi:**
    *   Scan QR Code yang muncul di terminal menggunakan aplikasi **Expo Go** (Android/iOS).
    *   Tekan `a` untuk membuka di Android Emulator.
    *   Tekan `i` untuk membuka di iOS Simulator.

## 📝 Konfigurasi Penting

### 1. Mengaktifkan Rotasi Layar
Agar aplikasi bisa merespons saat HP dimiringkan, pastikan konfigurasi di file `app.json` sudah diatur ke `default`:

```json
{
  "expo": {
    "orientation": "default"
  }
}


2. Logika Responsif
Logika utama untuk menentukan tampilan Tablet vs Mobile terdapat di App.tsx.
Aplikasi akan berubah menjadi tampilan Tablet jika lebar layar lebih dari 600px atau lebar layar lebih besar dari tingginya (Landscape).

const { width, height } = useWindowDimensions();
const isTablet = width > 600 || width > height;

// Style lebar kartu: (Tablet: 48%, Mobile: 100%)
width: isTablet ? '48%' : '100%'


🐛 Troubleshooting
Jika Anda mengalami error saat instalasi (seperti EPERM atau ECONNRESET), coba langkah berikut:
Hapus folder node_modules dan file package-lock.json.
Bersihkan cache: npm cache clean --force.
Install ulang: npm install.