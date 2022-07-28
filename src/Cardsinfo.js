import React from 'react';

/** TODO 
 * 1. interaction
 * 2. state variables
 * 3. methods
 * 4. make it reusable
*/
class Cardsinfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div class="flex justify-center px-2 text-base">
          <div class="w-1/6 rounded overflow-hidden shadow-lg">
              <img class="w-full" src="https://erp.mju.ac.th/picture/information/cf04537852824c56b326728e917cd4dbs.jpg" 
              alt="ม.แม่โจ้"></img>
              <h1 class="px-6 py-4">
                  <h1 class="font-bold text-sx mb-2">ม.แม่โจ้ จัดพิธีถวายพระพรชัยมงคล เนื่องในโอกาสวันเฉลิมพระชนมพรรษาพระบาทสมเด็จพระเจ้าอยู่หัว</h1>
                  <p class="text-gray-700 text-base pt-36">
                  26 กรกฎาคม 2565 </p>
          </h1>
          </div>
          <div class="w-1/6 rounded overflow-hidden shadow-lg ml-6">
              <img class="w-full" src="https://erp.mju.ac.th/picture/information/e13c54a073c744d681559e74ba92383fs.jpg" 
              alt="ม.แม่โจ้"></img>
              <h1 class="px-6 py-4">
                  <h1 class="font-bold text-sx mb-2">ม.แม่โจ้ จับมือ บจก.แอ็กโกร (ประเทศไทย) ร่วมพัฒนาเทคโนโลยี และนวัตกรรมการเกษตร</h1>
                  <p class="text-gray-700 text-base pt-20">
                  25 กรกฎาคม 2565 </p>
          </h1>
          </div>
          <div class="w-1/6 rounded overflow-hidden shadow-lg ml-6">
              <img class="w-full" src="https://erp.mju.ac.th/picture/information/16325343f49a433d8733b986c956505ds.jpg" 
              alt="ม.แม่โจ้"></img>
              <h1 class="px-6 py-4">
                  <h1 class="font-bold text-sx mb-2">ม.แม่โจ้ จัดกิจกรรมจิตอาสาเฉลิมพระเกียรติวันเฉลิมพระชนมพรรษาพระบาทสมเด็จพระเจ้าอยู่หัว ถ่ายทอดองค์ความรู้ศาสตร์พระราชา “ศาสตร์แห่งสายน้ำและพันธุ์พืช”</h1>
                  <p class="text-gray-700 text-base pt-8">
                  25 กรกฎาคม 2565 </p>
          </h1>
          </div>
          <div class="w-1/6 rounded overflow-hidden shadow-lg ml-6">
              <img class="w-full" src="https://erp.mju.ac.th/picture/information/13cbd7302949476d84ff4674982c44f2s.jpg" 
              alt="ม.แม่โจ้"></img>
              <h1 class="px-6 py-4">
                  <h1 class="font-bold text-sx mb-2">คณะศิลปศาสตร์ ม.แม่โจ้ และ ยศค. ร่วมกับกระทรวงศึกษาธิการ จ.เชียงใหม่ และ สนง.ศึกษาธิการ จ.เชียงใหม่ เป็นเจ้าภาพร่วมในการแข่งขันทักษะและความสามารถด้านการใช้ภาษาไทย “รักษ์ไทย” ครั้งที่ ๑</h1>
                  <p class="text-gray-700 text-base pt-2">
                  25 กรกฎาคม 2565 </p>
          </h1>
          </div>
          </div>
          
    

            );
        }
    }
    
export default Cardsinfo;