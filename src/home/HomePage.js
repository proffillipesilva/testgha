import React from 'react'
import store from '../store/store'

const HomePage = props => {
    const { user } = store();
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-lg border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <h1 className="text-xl font-bold text-gray-800">Meu App</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="flex items-center space-x-3">
                                <span className="text-gray-700 font-medium">
                                    {user.nome}
                                </span>
                                <img
                                    className="h-10 w-10 rounded-full object-cover ring-2 ring-indigo-500 ring-offset-2"
                                    width={40}
                                    height={40}
                                    src={user.imagem}
                                    alt={user.nome}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">HomePage</h1>
                    <p className="text-gray-600">Bem-vindo à sua página inicial!</p>
                </div>
            </main>
        </div>
    )
}

HomePage.propTypes = {}

export default HomePage