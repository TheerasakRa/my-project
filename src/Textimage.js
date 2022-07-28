import React from 'react';
class Textimage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer" >
                <p class="blur-sm "></p><img src="https://mju-ic.mju.ac.th/goverment/25621125091723_MJUIC/banner_20191217134424_721255.jpg" 
                alt="" width="1920" height="720"></img>
                <div class="absolute top-0 left-0 px-6 py-4">
                <h4 class="flex justify-center mb-3 text-xl font-semibold text-white">MAEJO UNIVERSITY</h4>
                <p class="flex justify-center leading-normal text-gray-100">มุ่งมั่นพัฒนาบัณฑิตสู่ความเป็นผู้อุดมด้วยปัญญา อดทน สู้งาน เป็นผู้มีคุณธรรมและจริยธรรมเพื่อความเจริญรุ่งเรืองวัฒนาของสังคมไทยที่มีการเกษตรเป็นรากฐาน</p>
                </div>
            </div>
            );
        }
    }
    
    export default Textimage;