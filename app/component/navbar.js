
export default function Navbar() {
    return (
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4 text-white">
          <li><a href="/">Home</a></li>
          <li><a href="/TaskList">Task List</a></li>
          <li><a href="/Invites">Invite</a></li>
          {/* Tambahkan tautan lain sesuai kebutuhan */}
        </ul>
      </nav>
    );
  }
  