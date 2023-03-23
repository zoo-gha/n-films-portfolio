import Link from "next/link";
import { useState } from "react";

export default function ModalsPortfolio({ props }: any) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <div className="flex flex-col justify-between items-center">
          <div className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden">
            <div className="hover:overflow-hidden overflow-hidden">
              <img className=" w-full h-[200px] object-cover cursor-pointer hover:scale-125 transition-transform duration-200 ease-in-out overflow-hidden" src={`${props.img}`} alt="" />
            </div>
            
            <div className="p-5 flex flex-col gap-3">
              {/*----app static-----*/}
              <div className="flex items-center gap-6 justify-between">
                <span className="py-1 pb-1 text-sm flex text-emerald-400 float-right space-x-2">
                  <span className="text-xs text-gray-400">carry out  </span> {props.date}
                </span>
                <button
                  onClick={() => setShowModal(true)}
                  type="button"
                  className="border border-blue-100 text-sm bg-emerald-700 text-white active:bg-green-900 hover:bg-emerald-400 rounded-xl p-1"
                >
                  Show Details
                </button>
              </div>
              {/*---app title----- */}
              <h2
                className="font-semibold text-md overflow-ellipsis overflow-hidden whitespace-nowrap hover:text-emerald-400"
                title="app"
              >
                {props.name}
              </h2>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <img
                      src={`${props.img}`}
                      alt="a1"
                      className="h-56 w-full object-cover"
                    />
                    <div className="flex justify-between py-2">
                      <h6
                        className="text-md leading-6 font-medium text-gray-500"
                        id="modal-headline"
                      >
                        <span className="text-xs text-gray-300">réaliser le </span> {props.date}
                      </h6>
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        {props.name}
                      </h3>
                    </div>
                    
                    <div className="mt-2">
                      <p className="text-gray-700">{props.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-700 text-base font-medium text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-emerald-500 sm:ml-3 sm:w-auto sm:text-sm p-2 m-2"
                >
                  Close
                </button>
                <Link href={"/"}>
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-700 text-base font-medium text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-emerald-500 sm:ml-3 sm:w-auto sm:text-sm p-2 m-2"
                  >
                    show project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
