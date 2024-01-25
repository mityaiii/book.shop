import { MyForm } from './myform';

export const MyMap = () => {
  return (
    <section className="text-gray-600 body-font relative mt-32 md:mt-12 shadow-blue-gray-900/50">
      <div className="absolute inset-0 bg-gray-300">
        <iframe 
          className='border-primary'
          width="100%" 
          height="100%" 
          title="map" 
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        ></iframe>
      </div>

      <MyForm/>
    </section>
  );
};
