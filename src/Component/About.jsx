import imageOne from '../../src/assets/images/about_us/person.jpg'
import imageTwo from '../../src/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center my-16">
              <div className=" relative">
                  <img className='w-9/12' src={imageOne} alt="" />
                  <img className='w-6/12 absolute -bottom-5 right-0' src={imageTwo} alt="" />
              </div>
              <div className=" flex flex-col   space-y-5">
                <p className='text-red-500 font-popin'>About Us</p>
                <h1 className='font-bold text-4xl w-6/12 font-popin '>We are qualified & of experience in this field</h1>
                <p className='font-popin'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='font-popin'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div>
                <button className='text-white px-3 py-2 rounded-md bg-red-500 '>Get Mor Info</button>
                </div>
     
              </div>
        </div>
    );
};

export default About;