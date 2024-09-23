import React from "react";

function Doubts() {
    return ( 
        <>
         <div className="flex min-h-screen">
                    <aside className="w-1/4 bg-white p-6 shadow-md">
                        <h1 className="text-xl font-bold mb-6">UDAAN RELOADED 2025</h1>
                        <nav>
                            <ul>
                                <li className="mb-4">
                                    <a href="#" className="text-gray-700 hover:text-purple-600">Profile</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="text-gray-700 hover:text-purple-600">UDAAN RELOADED 2025</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="text-gray-700 hover:text-purple-600">Teacher Feeds Channel</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 font-bold">Student Discussion Channel</a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <main className="flex-1 p-6">
                        <header className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Student Discussion Channel</h2>
                            <i className="fas fa-bell text-gray-600"></i>
                        </header>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex border-b mb-4">
                                <button className="flex-1 py-2 text-center text-purple-600 border-b-2 border-purple-600">All Posts</button>
                                <button className="flex-1 py-2 text-center text-gray-600">My Posts</button>
                            </div>
                            <div>
                                {[
                                    { name: "Ayushi", time: "34 mins ago", text: "Guys ve kya ho raha hai her week class cancelled ho jati hai agar aisa chalta rha to ham logo ki padhai kaise hogi", comments: 0, reacts: 0, shares: 18 },
                                    { name: "Lakshya", time: "an hour ago", text: "Guys YouTube can see Deepak sir lectures on gyaani keeda YouTube channel", comments: 0, reacts: 0, shares: 44 },
                                    { name: "Divyraj", time: "an hour ago", text: "Kisi ko classes ki timing Pata hai", comments: 1, reacts: 0, shares: 45 },
                                    { name: "Hriday", time: "2 hours ago", text: "reloaded me ritik sir aur Kunal sir hone chahiye the", comments: 3, reacts: 3, shares: 75 },
                                ].map((post, index) => (
                                    <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                                        <div className="flex items-center mb-2">
                                            <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mr-4">{post.name.charAt(0)}</div>
                                            <div>
                                                <h3 className="font-bold">{post.name}</h3>
                                                <p className="text-gray-500 text-sm">{post.time}</p>
                                            </div>
                                            <i className="fas fa-ellipsis-h ml-auto text-gray-600"></i>
                                        </div>
                                        <p className="mb-4">{post.text}</p>
                                        <div className="flex justify-between text-gray-600 text-sm">
                                            <div className="flex items-center">
                                                <i className="far fa-thumbs-up mr-2"></i> React
                                            </div>
                                            <div className="flex items-center">
                                                <i className="far fa-comment mr-2"></i> Comment
                                            </div>
                                            <div className="flex items-center">
                                                <i className="far fa-share-square mr-2"></i> Share
                                            </div>
                                            <div className="flex items-center">
                                                <i className="far fa-eye mr-2"></i> {post.shares}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg">
                            <i className="fas fa-plus"></i>
                        </button>
                    </main>
                </div>
        </>
     );
}

export default Doubts;