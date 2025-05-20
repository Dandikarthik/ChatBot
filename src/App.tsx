import React from 'react';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Dandi.co
            </h1>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simplify Your Digital Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Dandi.co helps teams streamline their processes and boost productivity. 
              Try our chat support to learn how we can transform your workflow.
            </p>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Smart Automation',
                description: 'Automate repetitive tasks and focus on what matters most to your business.'
              },
              {
                title: 'Team Collaboration',
                description: 'Work seamlessly with your team in real-time, anywhere in the world.'
              },
              {
                title: 'Advanced Analytics',
                description: 'Get insights into your workflow with detailed analytics and reporting.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-2">
                Dandi.co
              </h3>
              <p className="text-gray-400">Empowering teams to work smarter</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <a href="#" className="hover:text-primary-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;