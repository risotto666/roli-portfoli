export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-green-500 mb-4 md:mb-0">Roland</div>
          <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Roland. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
