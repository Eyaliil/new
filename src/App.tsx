import ChatInterface from './components/ChatInterface'
import SimpleCatMascot from './components/SimpleCatMascot'

function App() {
  return (
    <div className="h-screen overflow-hidden" style={{ backgroundColor: 'var(--color-cat-background)', color: 'var(--color-cat-text)' }}>
      <div className="h-full max-w-4xl mx-auto px-4 py-4 relative">
        <header className="text-center mb-2">
          <h1 className="text-3xl font-bold mb-1" style={{
            background: 'linear-gradient(to right, var(--color-cat-primary), var(--color-cat-secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Ask Cat
          </h1>
        </header>

        {/* Cat mascot container - fixed in center */}
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <SimpleCatMascot size={200} />
        </div>

        {/* Main content */}
        <main className="relative h-full">
          <div className="absolute inset-0 rounded-3xl blur-3xl -z-10" style={{
            background: 'linear-gradient(to bottom, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))'
          }} />
          <ChatInterface />
        </main>
      </div>
    </div>
  )
}

export default App 