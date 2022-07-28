import React from 'react';

/** TODO 
 * 1. interaction
 * 2. state variables
 * 3. methods
 * 4. make it reusable
*/
class Cardscss extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="flex justify-center px-2 text-base">
            <div class="w-1/6 rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://erp.mju.ac.th/picture/information/303c5639e02743828f82c7a27d79e750s.jpg" 
                alt="ม.แม่โจ้"></img>
                <h1 class="px-6 py-4">
                    <h1 class="font-bold text-sx mb-2">ม.แม่โจ้ ร่วมพิธีเฉลิมพระเกียรติพระบาทสมเด็จพระเจ้าอยู่หัว เนื่องในโอกาสวันเฉลิมพระชนมพรรษา</h1>
                    <p class="text-gray-700 text-base pt-20">
                    28 กรกฎาคม 2565 </p>
            </h1>
            </div>
            <div class="w-1/6 rounded overflow-hidden shadow-lg ml-6">
                <img class="w-full" src="https://erp.mju.ac.th/picture/information/cf78d102fea94db29b7929bbb5678b96s.jpg" 
                alt="ม.แม่โจ้"></img>
                <h1 class="px-6 py-4">
                    <h1 class="font-bold text-sx mb-2">กิ่งกาชาดอำเภอสันทราย ตรวจเยี่ยม ติดตามดูแลนักเรียนทุนในพระราชานุเคราะห์สมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี ประจำปี 2565</h1>
                    <p class="text-gray-700 text-base pt-8">
                    26 กรกฎาคม 2565 </p>
            </h1>
            </div>
            <div class="w-1/6 rounded overflow-hidden shadow-lg ml-6">
                <img class="w-full" src="https://erp.mju.ac.th/picture/information/93dfc113a39c4e29854332cd5307a1d9s.jpg" 
                alt="ม.แม่โจ้"></img>
                <h1 class="px-6 py-4">
                    <h1 class="font-bold text-sx mb-2">อพ.สธ. ม.แม่โจ้ จัดอบรม วิถีนักพฤกษศาสตร์</h1>
                    <p class="text-gray-700 text-base pt-32">
                    26 กรกฎาคม 2565 </p>
            </h1>
            </div>
            <div class="w-1/6 rounded overflow-hidden shadow-lg ml-6">
                <img class="w-full" src="https://erp.mju.ac.th/picture/information/5e1a1f3b2b4e4e5bb7a20ef33e963ae9s.jpg" 
                alt="ม.แม่โจ้"></img>
                <h1 class="px-6 py-4">
                    <h1 class="font-bold text-sx mb-2">มหาวิทยาลัยแม่โจ้จัดพิธีถวายสัตย์ปฏิญาณเพื่อเป็นข้าราชการที่ดีและพลังของแผ่นดิน ประจำปี 2565 เนื่องในโอกาสวันเฉลิมพระชนมพรรษาพระบาทสมเด็จพระเจ้าอยู่หัว</h1>
                    <p class="text-gray-700 text-base pt-8">
                    26 กรกฎาคม 2565 </p>
            </h1>
            </div>
            </div>
            


            );
        }
    }
    
export default Cardscss;