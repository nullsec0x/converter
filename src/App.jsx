import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [inputFormat, setInputFormat] = useState('text')
  const [conversions, setConversions] = useState({})

  const convertText = (text, fromFormat) => {
    if (!text) return {}
    
    try {
      let sourceText = text
      
      // First convert input to text if it's not already
      if (fromFormat === 'binary') {
        sourceText = text.split(' ').map(bin => 
          String.fromCharCode(parseInt(bin, 2))
        ).join('')
      } else if (fromFormat === 'hex') {
        sourceText = text.split(' ').map(hex => 
          String.fromCharCode(parseInt(hex, 16))
        ).join('')
      } else if (fromFormat === 'base64') {
        sourceText = atob(text)
      }
      
      // Now convert to all formats
      return {
        text: sourceText,
        binary: sourceText.split('').map(char => 
          char.charCodeAt(0).toString(2).padStart(8, '0')
        ).join(' '),
        hex: sourceText.split('').map(char => 
          char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')
        ).join(' '),
        base64: btoa(sourceText),
        url: encodeURIComponent(sourceText),
        ascii: sourceText.split('').map(char => 
          char.charCodeAt(0)
        ).join(' ')
      }
    } catch (error) {
      return { error: 'Invalid input format' }
    }
  }

  useEffect(() => {
    const results = convertText(input, inputFormat)
    setConversions(results)
  }, [input, inputFormat])

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  const clearAll = () => {
    setInput('')
    setConversions({})
  }

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="terminal-window w-full max-w-4xl">
        <div className="window-bar">
          <div className="window-controls">
            <div className="control-dot red-dot"></div>
            <div className="control-dot yellow-dot"></div>
            <div className="control-dot green-dot"></div>
          </div>
          <div className="window-title">Binary/Hex Converter v1.0</div>
        </div>
        
        <div className="terminal-content">
          <div className="mb-4">
            <span className="text-gray-400">you@converter.dev ~ % </span>
            <span className="text-green-300">./converter --interactive</span>
            <span className="blink text-green-400 ml-1">█</span>
          </div>
          
          <div className="input-section">
            <div className="section-title">INPUT</div>
            <div className="mb-3">
              <label className="block text-sm mb-2 text-gray-400">Format:</label>
              <select 
                value={inputFormat} 
                onChange={(e) => setInputFormat(e.target.value)}
                className="mb-3"
              >
                <option value="text">Text</option>
                <option value="binary">Binary</option>
                <option value="hex">Hexadecimal</option>
                <option value="base64">Base64</option>
              </select>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Enter your ${inputFormat} here...`}
              rows={4}
              className="w-full"
            />
          </div>

          {Object.keys(conversions).length > 0 && !conversions.error && (
            <div className="output-section">
              <div className="section-title">CONVERSIONS</div>
              
              {conversions.text && (
                <div className="output-item">
                  <div className="output-label">Text:</div>
                  <div className="output-value">{conversions.text}</div>
                  <button 
                    className="copy-btn"
                    onClick={() => copyToClipboard(conversions.text)}
                  >
                    Copy
                  </button>
                </div>
              )}
              
              {conversions.binary && (
                <div className="output-item">
                  <div className="output-label">Binary:</div>
                  <div className="output-value">{conversions.binary}</div>
                  <button 
                    className="copy-btn"
                    onClick={() => copyToClipboard(conversions.binary)}
                  >
                    Copy
                  </button>
                </div>
              )}
              
              {conversions.hex && (
                <div className="output-item">
                  <div className="output-label">Hex:</div>
                  <div className="output-value">{conversions.hex}</div>
                  <button 
                    className="copy-btn"
                    onClick={() => copyToClipboard(conversions.hex)}
                  >
                    Copy
                  </button>
                </div>
              )}
              
              {conversions.base64 && (
                <div className="output-item">
                  <div className="output-label">Base64:</div>
                  <div className="output-value">{conversions.base64}</div>
                  <button 
                    className="copy-btn"
                    onClick={() => copyToClipboard(conversions.base64)}
                  >
                    Copy
                  </button>
                </div>
              )}
              
              {conversions.url && (
                <div className="output-item">
                  <div className="output-label">URL:</div>
                  <div className="output-value">{conversions.url}</div>
                  <button 
                    className="copy-btn"
                    onClick={() => copyToClipboard(conversions.url)}
                  >
                    Copy
                  </button>
                </div>
              )}
              
              {conversions.ascii && (
                <div className="output-item">
                  <div className="output-label">ASCII:</div>
                  <div className="output-value">{conversions.ascii}</div>
                  <button 
                    className="copy-btn"
                    onClick={() => copyToClipboard(conversions.ascii)}
                  >
                    Copy
                  </button>
                </div>
              )}
            </div>
          )}

          {conversions.error && (
            <div className="output-section">
              <div className="text-red-400">Error: {conversions.error}</div>
            </div>
          )}

          <div className="flex gap-4 mt-4">
            <button className="convert-btn" onClick={clearAll}>
              CLEAR ALL
            </button>
          </div>
          
          <div className="mt-4 text-gray-400 text-sm">
            Status: Ready for conversion <span className="blink">█</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

