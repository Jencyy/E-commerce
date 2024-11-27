import React, { useContext } from 'react'
import myContext from '../../context/data/MyContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className='text-center text-4xl font-bold' style={{ color: mode === 'dark' ? 'white' : '#1a1a1a' }}>Testimonials</h1>
                    <h2 className='text-center text-xl font-semibold mb-10' style={{ color: mode === 'dark' ? '#d3d3d3' : '#4a4a4a' }}>What our <span className='text-gray-700' style={{ color: mode === 'dark' ? '#ff6f61' : '#1a1a1a' }}>clients</span> say about us</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center p-6 border rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
                                style={{
                                    backgroundColor: mode === 'dark' ? '#2d2d2d' : '#f9f9f9',
                                    color: mode === 'dark' ? 'white' : 'black'
                                }}>
                                <img alt="testimonial" className="w-24 h-24 mb-6 object-cover object-center rounded-full border-2 border-gray-300 bg-gray-100" src="https://preview.redd.it/demon-slayer-male-designs-vs-female-designs-can-we-talk-v0-nec6dsy69t291.png?width=640&crop=smart&auto=webp&s=6eddb548f89dfa2b96cb802ec0846d14e7ba5e4b" />
                                <p className="leading-relaxed mb-6" style={{ color: mode === 'dark' ? '#d3d3d3' : '#4a4a4a' }}>The team's expertise and dedication to delivering top-notch solutions are evident in every aspect of their work. Highly recommend!</p>
                                <span className="inline-block h-1 w-12 rounded bg-gray-700 mt-4 mb-4" style={{ backgroundColor: mode === 'dark' ? '#ff6f61' : '#1a1a1a' }} />
                                <h2 className="text-xl font-medium title-font tracking-wider" style={{ color: mode === 'dark' ? '#ff6f61' : '#1a1a1a' }}>Tanjiro Kamado</h2>
                                <p className="text-gray-500" style={{ color: mode === 'dark' ? '#d3d3d3' : '#6b6b6b' }}>Demon Slayer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center p-6 border rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
                                style={{
                                    backgroundColor: mode === 'dark' ? '#2d2d2d' : '#f9f9f9',
                                    color: mode === 'dark' ? 'white' : 'black'
                                }}>
                                <img alt="testimonial" className="w-24 h-24 mb-6 object-cover object-center rounded-full border-2 border-gray-300 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4emI8rS92rrTKDD1bYeEORQYdMKjExeGSA&s" />
                                <p className="leading-relaxed mb-6" style={{ color: mode === 'dark' ? '#d3d3d3' : '#4a4a4a' }}>Exceptional service and support! Their innovative approach has significantly boosted our business.</p>
                                <span className="inline-block h-1 w-12 rounded bg-gray-700 mt-4 mb-4" style={{ backgroundColor: mode === 'dark' ? '#ff6f61' : '#1a1a1a' }} />
                                <h2 className="text-xl font-medium title-font tracking-wider" style={{ color: mode === 'dark' ? '#ff6f61' : '#1a1a1a' }}>Muzan Kibutsuji
                                </h2>
                                <p className="text-gray-500" style={{ color: mode === 'dark' ? '#d3d3d3' : '#6b6b6b' }}>The Demon King</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center p-6 border rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
                                style={{
                                    backgroundColor: mode === 'dark' ? '#2d2d2d' : '#f9f9f9',
                                    color: mode === 'dark' ? 'white' : 'black'
                                }}>
                                <img alt="testimonial" className="w-24 h-24 mb-6 object-cover object-center rounded-full border-2 border-gray-300 bg-gray-100" src="https://upload.wikimedia.org/wikipedia/en/c/c0/NezukoKamado.png" />
                                <p className="leading-relaxed mb-6" style={{ color: mode === 'dark' ? '#d3d3d3' : '#4a4a4a' }}>A truly professional team that understands our needs and delivers beyond expectations.</p>
                                <span className="inline-block h-1 w-12 rounded bg-gray-700 mt-4 mb-4" style={{ backgroundColor: mode === 'dark' ? '#ff6f61' : '#1a1a1a' }} />
                                <h2 className="text-xl font-medium title-font tracking-wider" style={{ color: mode === 'dark' ? '#ff6f61' : '#1a1a1a' }}>Nezuko Kamado</h2>
                                <p className="text-gray-500" style={{ color: mode === 'dark' ? '#d3d3d3' : '#6b6b6b' }}> Blood Demon Art (pyrokinesis)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial;
