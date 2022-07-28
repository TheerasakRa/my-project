import logo from './logo.png';
import './App.css';
import Carousel from './Carousel';
import Menubar from './Manubar';
import Circle from './Circle';
import Kaosan from './Kaosan';
import Cardscss from './Cardscss';
import Cardsinfo from './Cardsinfo';
import Textimage from './Textimage';
import Footers from './Footers';

function App() {
  return (
    <div>
      <header>
      <a class="absolute top-2 right-96 h-16 w-16 text-xs text-gray-400">TH|EN </a>
        <div class="flex justify-center pl-53" >
          <img src={logo} className="inset-0 w-1/4" alt="logo" />
          <a class="pr-2"></a>
          
        <div class="middle ml-60 ">

        
          
          
        <a class="ml-7">
        <div class="mb-3 xl:w-96 " >
        
        <form class="flex items-center">
            
            <div class="relative w-1/2 pr-"> 
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none" >
                    
                </div>
                
                <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full 
                  px-1 py-1 ml-9 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 white:text-white white:focus:ring-blue-500 white:focus:border-blue-500" placeholder="Search this website" required="">
                </input>
                
            </div> 
            
            <button type="submit" class="inline-flex items-center py-1 px-2 ml-10 text-sm font-medium text-white bg-green-700 rounded-md border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Search
            </button>
            
        </form>
        </div>
        </a>
        </div>
        </div>
        
                  
            <div>
            <div class="pt-1">
            <Menubar />
            </div>
            <div class=" pb-2 ">
            <Carousel />
            </div>
            <Circle />
            <Kaosan />
            <div class="flex justify-center pt-12 "><Cardscss /></div>
            <Cardsinfo />
            <div class="flex justify-center pt-24 ">
            <button type="submit" class="inline-flex items-center py-1 px-3 ml-10 text-sm font-medium text-green-500 bg-white-700 rounded-md border border-green-700  focus:ring-4 focus:outline-none focus:ring-green-300 green:bg-green-600 green:hover:bg-green-700 green:focus:ring-white-800">
                Search
            </button>
            </div>
            <div class="flex justify-center pt-12">
            <Textimage />
            </div>
            <div>
              <Footers/>
            </div>
            </div>







      </header>
    </div>
    
  
  );
}


export default App;

