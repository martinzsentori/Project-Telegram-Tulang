import TopCard from '../component/topcard'; // Pastikan path ini sesuai dengan lokasi TopCard
import Navbar from '../component/navbar'; // Pastikan path ini sesuai dengan lokasi Navbar

export default function InviteFriends() {
  const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Fay', 'George', 'Hannah', 'Ivy', 'Jack'];

  return (
    <div className="bg-gradient-to-br from-black via-yellow-500 to-black min-h-screen flex flex-col items-center justify-between">
      <TopCard />

      <div className="container mx-auto mt-20 p-4 flex-grow">
        <div className="bg-black text-white rounded-lg mb-16 shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center text-yellow-500 mb-8">Invite Friends</h1>
          <ul className="space-y-4">
            {friends.map((friend, index) => (
              <li key={index} className="flex items-center justify-between bg-yellow-500 p-4 rounded-lg shadow-md">
                <span className="text-lg font-medium">{friend}</span>
                <button className="hover:text-black ml-5 transition-colors duration-300 hover:bg-yellow-500 p-3 rounded-2xl">
                  Invite
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
}
