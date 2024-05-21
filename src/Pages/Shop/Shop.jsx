import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Footer from '../../Components/Footer'
import myImage1 from '../../Images/myImage1.svg'
import myImage2 from '../../Images/myImage2.png'
import myImage3 from '../../Images/myImage3.svg'
import myImage4 from '../../Images/myImage4.svg'
import group40 from '../../Images/Group 40.svg'
import heart from '../../Images/heart.svg'
import twitter from '../../Images/my2.svg'
import linkedin from '../../Images/my3.svg'
import sms from '../../Images/my4.svg'
import page1 from '../../Images/Page1.svg'
import page2 from '../../Images/Page2.svg'
import page3 from '../../Images/Page3.svg'
import page4 from '../../Images/Page4.svg'
import page5 from '../../Images/Page5.svg'
import Facebook from '../../Images/FacebookIcon';

function Shop(){

	const photos = [
		myImage1,
		myImage2,
		myImage3,
		myImage4
	]
	const [bigPic, setBigPic] = useState(0);

	const changeBigPic = (index) => {
		setBigPic(b => b = index)
	}
	const [size, setSize] = useState(0)

	const sizes = [
		'S',
		'M',
		'L',
		'XL'
	]

	const changeSize = (index) => {
		setSize(s => s = index)
	}

	const [val, setVal] = useState(1)

	const incVal = () => {
		if(val < 10){
			setVal(v => v = v + 1)
		}
	}

	const decVal = () => {
		if(val >= 1){
			setVal(v => v = v - 1)
		}
	}

	const [tab, setTab] = useState(0)
	const tabs = [
		'Product Description',
		'Reviews'
	]
	const changeTab = (index) => {
		setTab(t => t = index)
	}

	return <div className="w-full flex flex-col items-center justify-center">
		<div className='w-[1200px] flex flex-col justify-start items-start pt-[36px]'>
			<h1 className='text-heading text-final mb-[45px]'><span className='font-bold'>Home </span>/ Shop</h1>
			<div className='w-full flex justify-between items-center'>
				{/* for images three-image */}
				<div className='flex items-center gap-[30px]'>
					<div className='flex flex-col gap-[16px]'>
						
						{photos.map((el,index) => {
							return <div className={index == bigPic ? "w-[100px] h-[100px] bg-usha rounded flex justify-center items-center border-[2px] border-grey cursor-pointer" : 'w-[100px] h-[100px] bg-usha rounded flex justify-center items-center border-[2px] border-gray cursor-pointer'}
										onClick={() => changeBigPic(index)}>
								<img src={el} alt="" className='w-[95px]' />
							</div>
						})}

					</div>
					<div className='w-[448px] h-[448px] rounded bg-usha border-[2px] border-gray'>
						<img src={photos[bigPic]} alt="" className='w-[443px]'/>
					</div>
				</div>
				{/* for text part right side */}
				<div className='w-[574px] flex flex-col justify-start items-start'>
					<h1 className='text-final text-[28px] font-bold'>Barberton Daisy</h1>
					<div className='w-full flex justify-between items-center border-b-2 border-gray mb-[15px]'>
						<h2 className='font-bold text-primary text-[22px]'>$119.00</h2>
						<img src={group40} alt="" />
					</div>
					<h1 className='text-final font-bold mb-[10px] text-[15px]'>Short Description:</h1>
					<p className='w-full text-left text-grey text-[14px]'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
					<h2 className='text-final font-bold text-[15px] mt-[20px] mb-[10px]'>Size:</h2>
					{/* react time */}
					<div className='flex gap-[10px]'>
						{sizes.map((el, index) => {
							return <div className={index == size ? "w-[28px] h-[28px] flex justify-center items-center border-2 border-primary rounded-[50%] text-primary cursor-pointer font-bold text-[14px]" : "text-[14] cursor-pointer w-[28px] h-[28px] flex justify-center items-center border-2 border-gray rounded-[50%] text-final"} onClick={() => changeSize(index)}>{el}</div>
						})}
					</div>
					<div className='w-full flex items-center mt-[20px] mb-[25px]'>
						<button className='w-[33px] h-[38px] bg-primary text-white text-[24px] rounded-[50%] active:bg-secondary mr-[12px]' onClick={decVal}>-</button>
						<span className='text-final text-[20px]'>{val}</span>
						<button className='w-[33px] h-[38px] bg-primary text-white text-[24px] rounded-[50%] active:bg-secondary ml-[12px]' onClick={incVal}>+</button>
						<button className='w-[130px] h-[40px] flex justify-center items-center text-white bg-primary rounded font-bold ml-[25px] active:bg-secondary'>BUY NOW</button>
						<button className='w-[130px] h-[40px] border-2 border-grey rounded text-primary ml-[10px]'>ADD TO CART</button>
						<button className='w-[40px] h-[40px] flex justify-center items-center border-2 border-grey rounded ml-[10px]'><img src={heart} alt="" /></button>
					</div>
					<p className='text-grey'>SKU: 1995751877966</p>
					<p className='text-grey mt-[10px]'>Categories: Potter Plants</p>
					<p className='text-grey mt-[10px]'>Tags: Home, Garden, Plants</p>
					<div className='flex gap-[10px] items-center mt-[10px]'>
						<span className='text-final font-[500]'>Share these products:</span>
						<Facebook className="text-primary" />
						<img src={twitter} alt="" />
						<img src={linkedin} alt="" />
						<img src={sms} alt="" />
					</div>
				</div>
			</div>
			<div className='w-full flex gap-[30px] items-center mt-[90px] border-b-2 border-gray'>
				{tabs.map((el, index) => {
					return <div className={index == tab ? "text-primary cursor-pointer pb-[8px] border-b-2 border-grey" : "text-final pb-[10px] cursor-pointer"} onClick={() => changeTab(index)}>{el}</div>
				})}

			</div>
				{/* if tab is equal to 0 */}
			<div className={tab == 0 ? "w-full flex flex-col justify-start items-start mt-[18px]" : "hidden"}>
				<p className='text-grey'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. <br /> <br />
											Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
				<h2 className='text-final mt-[18px] font-bold text-left'>Living room:</h2>
				<p className='text-grey'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<h2 className='text-final mt-[18px] font-bold text-left'>Dining room:</h2>
				<p className='text-grey'>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>
				<h2 className='text-final mt-[18px] font-bold text-left'>Office:</h2>
				<p className='text-grey'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				


			</div>
				{/* if tab is equal to 1 */}
			<div className={tab == 1 ? "block mt-[18px]" : "hidden"}>
				<span className='font-bold '>There is nothing yet</span>
			</div>
			<div className='w-full text-left border-b-2 border-gray mt-[120px] mb-[50px]'>
				<h2 className='font-bold text-primary text-[17px]'>Releted Products</h2>
			</div>
			<Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper" >
          		<SwiperSlide className='h-[400px] '>
					<div className='w-full flex justify-between items-start'>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page1} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page2} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page3} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page4} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page5} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
					</div>
		  		</SwiperSlide>
          		<SwiperSlide className='h-[400px] '>
					<div className='w-full flex justify-between items-start'>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page1} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page2} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page3} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page4} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page5} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
					</div>
		  		</SwiperSlide>
				  <SwiperSlide className='h-[400px] '>
					<div className='w-full flex justify-between items-start'>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page1} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page2} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page3} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page4} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
						<div className='w-[220px] flex flex-col items-start'>
							<div className='w-full h-[255px] bg-usha flex justify-center items-center'>
								<img src={page5} alt="" />
							</div>
							<h1 className='text-heading font-bold text-final mt-[10px]'>Beach Spider Lily</h1>
							<span className='font-bold text-primary text-[16px]'>$129.00</span>
						</div>
					</div>
		  		</SwiperSlide>
        </Swiper>



		</div>




		
	    <Footer />
</div>
}

export default Shop