import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isHovering, setIsHovering] = useState(false)
  const [accepted, setAccepted] = useState(false)

  // Animation effect for the "No" button
  useEffect(() => {
    if (isHovering) {
      const timeout = setTimeout(() => setIsHovering(false), 600)
      return () => clearTimeout(timeout)
    }
  }, [isHovering])

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-slate-100 to-stone-200 rounded-lg shadow-2xl p-8 max-w-md w-full animate-fade-in-up">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-serif text-slate-700 mb-6">
            Will You Be My Best Man?
          </h1>
          
          <div className="space-y-4">
            <p className="text-lg text-slate-600 mb-4">
              What do you say, big boy?
            </p>
            
            {!accepted ? (
              <div className="flex flex-col space-y-4 items-center">
                <button
                  onClick={() => setAccepted(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full 
                           transform transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  Absolutely Yes
                </button>
                
                <button
                  onMouseEnter={() => setIsHovering(true)}
                  className={`bg-slate-500 text-white font-bold py-3 px-8 rounded-full transition-all 
                            duration-300 ${isHovering ? 'scale-75 opacity-50' : ''}`}
                  style={{
                    transform: isHovering ?
                      `translate(${Math.random() * 200 - 100}%, ${Math.random() * 200 - 100}%)` :
                      'none'
                  }}
                >
                  {isHovering ? 'Nice Try!' : 'Not a Chance'}
                </button>
              </div>
            ) : (
              <div className="animate-heart-beat text-3xl text-emerald-600">
                I love you :)
              </div>
            )}
          </div>
        </div>
        
        {/* Simplified decorative elements */}
        <div className="absolute top-0 left-0 right-0 flex justify-between px-6 opacity-50">
          <span className="text-4xl animate-pulse">🤝</span>
        </div>
      </div>
    </div>
  )
}

export default App
