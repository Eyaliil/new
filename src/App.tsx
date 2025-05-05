import React from 'react'
import ChatInterface from './components/ChatInterface'

function App() {
  return (
    <div className="min-h-screen bg-cat-background">
      <header className="bg-cat-primary text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Ask Cat 🐱</h1>
        <p className="text-sm">Your friendly feline encyclopedia</p>
      </header>
      <main>
        <ChatInterface />
      </main>
    </div>
  )
}

export default App 