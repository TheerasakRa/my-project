import React from 'react';

class Circle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div class="flex justify-center py-8 px-2 text-base">

        
            <div class="rounded-full ... ml-20 " >
                <img src="https://www.mju.ac.th/th/images/pic1-resize300.jpg" alt="..." width="196" height="193" center></img>
                <h2 class="ml-10">ระดับปริญญาตรี</h2>
                <h2 class="ml-7">Bachelor's degree</h2>

            </div>
            <div class="rounded-full ... ml-20" >
                <img src="https://www.mju.ac.th/th/images/stu2-resize300.jpg" alt="..." width="196" height="193" center></img>
                <h2 class="ml-10">ระดับปริญญาโท</h2>
                <h2 class="ml-9">Master's degree</h2>

            </div>
            <div class="rounded-full ... ml-20" >
                <img src="https://www.mju.ac.th/th/images/Stu3_resize300.jpg" alt="..." width="196" height="193" center></img>
                <h2 class="ml-10">ระดับปริญญาเอก</h2>
                <h2 class="ml-10">Doctoral degree</h2>

            </div>
            <div class="rounded-full ... ml-20" >
                <img src="https://www.mju.ac.th/th/images/Stu4-resize300.jpg" alt="..." width="196" height="193" center></img>
                <h2 class="ml-10">หลักสูตรนานาชาติ</h2>
                <h2 class="ml-7 ">International Program</h2>

            </div>
           
            
        </div>

            
            

            );
        }
    }
    
    export default Circle;