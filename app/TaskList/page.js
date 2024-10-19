// pages/TaskList.js

import TopCard from '../component/topcard'; // Pastikan path ini sesuai dengan lokasi TopCard
import Navbar from '../component/navbar'; // Pastikan path ini sesuai dengan lokasi Navbar

export default function TaskList() {
  return (
    <div className="bg-gradient-to-br from-black via-yellow-500 to-black flex flex-col items-center justify-between mb-24 min-h-screen">
      <TopCard />

      <div className="flex-grow flex items-center justify-center mt-8">
        <div className="w-full max-w-2xl p-6 bg-black text-white rounded-lg mt-12 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-yellow-600">My Task List</h1>
          
          {/* Daftar Tugas */}
          <ul className="space-y-6">
            {/* Tugas 1: Tonton Video YouTube */}
            <li className="flex items-center justify-between p-4 bg-yellow-500 rounded-lg shadow">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="text-lg font-medium">Watch YouTube Video</span>
              </label>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary transition-colors duration-300 hover:text-black">Watch</a>
            </li>

            {/* Tugas 2: Klik Tautan Acak */}
            <li className="flex items-center justify-between p-4 bg-yellow-500 rounded-lg shadow">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="text-lg font-medium">Click Random Link</span>
              </label>
              <a href="#" className="btn btn-secondary transition-colors duration-300 hover:text-black">Click</a>
            </li>

            {/* Tugas 3: Baca Dokumentasi */}
            <li className="flex items-center justify-between p-4 bg-yellow-500 rounded-lg shadow">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="text-lg font-medium">Read Documentation</span>
              </label>
              <a href="#" className="btn btn-secondary transition-colors duration-300 hover:text-black">Read</a>
            </li>

            {/* Tugas 4: Selesaikan Proyek Koding */}
            <li className="flex items-center justify-between p-4 bg-yellow-500 rounded-lg shadow">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="text-lg font-medium">Finish Coding Project</span>
              </label>
              <a href="#" className="btn btn-secondary transition-colors duration-300 hover:text-black">Complete</a>
            </li>
          </ul>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">All tasks completed? Great job!</p>
          </div>
        </div>
      </div>

      <div className="w-screen">
        <Navbar />
      </div>
    </div>
  );
}
