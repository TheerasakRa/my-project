import React from 'react';

/** TODO 
 * 1. interaction
 * 2. state variables
 * 3. methods
 * 4. make it reusable
*/
class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="default-carousel" class="relative" data-carousel="static">
                <div class="overflow-hidden relative h-56-lg md:h-96 p-60 ">
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                        <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-2/3 sm:text-3xl dark:text-gray-800">First Slide</span>
                        <img src="https://erp.mju.ac.th/picture/banner/11ea770ee72148d6b85cad6e9993c5e3.jpg"  class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 "  alt="..."/>
                    </div>
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                        <img src="https://erp.mju.ac.th/picture/banner/0cba8f04e82c4641ae5f4bc447d3aff5.jpg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                    </div>
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                        <img src="https://erp.mju.ac.th/picture/banner/cebdc45699d643ff80136860a2d82ecd.png" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                    </div>
                </div>
                <div class=" flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    <button type="button" class="w-3 h-3 rounded-full bg-white white:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white white:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white white:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white white:hover:bg-gray-800" aria-current="false" data-carousel-slide-to="3"aria-label="Slide 4"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white white:hover:bg-gray-800" aria-current="false" data-carousel-slide-to="3"aria-label="Slide 4"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white white:hover:bg-gray-800" aria-current="false" data-carousel-slide-to="3"aria-label="Slide 4"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white white:hover:bg-gray-800" aria-current="false" data-carousel-slide-to="3"aria-label="Slide 4"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white white:hover:bg-gray-800" aria-current="false" data-carousel-slide-to="3"aria-label="Slide 4"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white white:hover:bg-gray-800" aria-current="false" data-carousel-slide-to="3"aria-label="Slide 4"></button>

                
                
                
                
                
                
                
                </div>
                
                <button type="button" class="flex absolute top-0 left-20 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                    <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10  ">
                        <svg aria-hidden="true" class="w-20 h-20 text-white sm:w-20 sm:h-20 white:text-gray-800" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="flex absolute top-0 right-20 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                    <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10">
                        <svg aria-hidden="true" class="w-20 h-20 text-white sm:w-20 sm:h-20 white:text-gray-800" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        );
    }
}

export default Carousel;