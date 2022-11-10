import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import img3 from '../../../Assets/CustomerImages/image (2).jpg'
import img5 from '../../../Assets/CustomerImages/image (3).jpg'
import img6 from '../../../Assets/CustomerImages/image (4).jpg'
import img7 from '../../../Assets/CustomerImages/image (5).jpg'
import img9 from '../../../Assets/CustomerImages/image (7).jpg'
const RegularCustomer = () => {
    return (
        <div className='p-6 py-12  font-black cover3 '>
            <h2 className='my-5 font-bold text-orange-500 text-4xl text-center'>Regular Customer</h2>
            <p className='my-5 font-bold text-orange-50 text-1xl text-center'>My Daily And regular custom like my family</p>
            <section className="py-6 ">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <PhotoProvider >
            <PhotoView src={img9}>

		<img src={img9} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 p-12 md:row-start-1 aspect-square bg-white  transform duration-200 hover:p-0 " />
            </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
            <PhotoView src={img7}>
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-white transform duration-200 hover:p-0 p-5 aspect-square" src={img7} />
            </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
            <PhotoView src={img3}>
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-white  transform duration-200 hover:p-0 p-5 aspect-square" src={img3} />
            </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
            <PhotoView src={img6}>
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-white transform duration-200 hover:p-0 p-5 aspect-square" src={img6} />
            </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
            <PhotoView src={img5}>
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-white transform duration-200 hover:p-0 p-5 aspect-square" src={img5} />
            </PhotoView>
        </PhotoProvider>
		
		
		
		
		
	</div>
</section>
        </div>
    );
};

export default RegularCustomer;