import React from 'react';
class Menubar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="hidden lg:flex lg:flex-col lg:grow font-semibold">
                
                <div className="flex items-baseline justify-center text-sm bg-green-600 py-2 text-white text-base " >
                        <p className="group cursor-pointer"><a class="group-hover:text-black" href="http://localhost:3000/? ">หน้าแรก</a></p>
                    <div class="flex justify-center">
                  <div>
                    <div class="dropdown relative ml-20 group cursor-pointer">
                      <button
                        class="
                          font-semibold
                          group-hover:text-black
                          dropdown-toggle
                          bg-green-600
                          text-white
                          font-medium
                          text-sm
                          leading-tight
                          uppercase
                          transition
                          duration-150
                          ease-in-out
                          flex
                          items-center
                          whitespace-nowrap
                        "
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        เกี่ยวกับมหาวิทยาลัย
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          class="w-2 ml-1"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                      </button>
                      </div>
                  </div>
                </div>
                    <p class="ml-12 group cursor-pointer"><a class="group-hover:text-black" href="https://admissions.mju.ac.th/www/" target="_blank">เข้าศึกษาต่อ</a></p>
                    <div class="flex justify-center ml-20">
                  <div>
                    <div class="dropdown relative group cursor-pointer">
                      <button
                        class="
                          font-semibold
                          group-hover:text-black
                          dropdown-toggle
                          bg-green-600
                          text-white
                          font-medium
                          text-sm
                          leading-tight
                          uppercase
                          transition
                          duration-150
                          ease-in-out
                          flex
                          items-center
                          whitespace-nowrap
                        "
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        วิจัยและบริการวิชาการ
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          class="w-2 ml-1"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                      </button>
 
                
                    </div>
                  </div>
                </div>
                    <div class="flex justify-center">
                  <div>
                    <div class="dropdown relative ml-20 group cursor-pointer">
                      <button
                        class="
                          group-hover:text-black
                          dropdown-toggle
                          font-semibold
                          bg-green-600
                          text-white
                          font-medium
                          text-sm
                          leading-tight
                          uppercase
                          transition
                          duration-150
                          ease-in-out
                          flex
                          items-center
                          whitespace-nowrap
                        "
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        รอบรั้วมหาวิทยาลัย
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          class="w-2 ml-1"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                      </button>
                      </div>
                  </div>
                </div>
                    <p class="ml-20 group cursor-pointer"><a class="group-hover:text-black" href="https://www.mju.ac.th/th/Contact.html">ติดต่อเรา</a></p>
                </div>
                </div>
        );
    }
}

export default Menubar;