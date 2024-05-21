import topPart from '../Images/Frame.png'
import bottomPart from '../Images/Frame2.png'
import secondImg from '../Images/Group 18.png'
import thirdImg from '../Images/Group 19.png'
import logo from '../Images/LogoSvg.svg'
import location from '../Images/Location.svg'
import message from '../Images/Message.svg'
import calling from '../Images/Calling.svg'
import facebook from '../Images/Facebook.svg'
import instagram from '../Images/Instagram.svg'
import twitter from '../Images/Twitter.svg'
import linkedin from '../Images/Linkedin.svg'
import youtube from '../Images/Union.svg'
import payment from '../Images/image 16.svg'

function Footer(){

	const sources = [
		facebook,
		instagram,
		twitter,
		linkedin,
		youtube
	]

	return <div className="w-[1200px] mt-[100px] flex flex-col">
		<div className="w-full flex bg-usha h-[250px] justify-between p-[25px]">
			<div className="w-[200px] h-full flex flex-col justify-between items-start">
				<div className="flex flex-col items-center">
					<img src={topPart} alt="" />
					<img src={bottomPart} alt="" />
				</div>
				<h1>Garden Care</h1>
				<p className="text-grey text-[14px]">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
			</div>
			<div className="h-full w-[0.5px] bg-grey"></div>
			<div className="w-[200px] h-full flex flex-col justify-between items-start">
				<img src={secondImg} alt="" />
				<h1>Plant Renovation</h1>
				<p className='text-[14px] text-grey'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
			</div>
			<div className="h-full w-[0.5px] bg-grey"></div>
			<div className="w-[200px] h-full flex flex-col justify-between items-start">
				<img src={thirdImg} alt="" />
				<h1>Watering Garden</h1>
				<p className='text-[14px] text-grey'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
			</div>
			<div className="w-[354px] h-full flex flex-col justify-between items-start">
				<h1 className='font-bold text-[18px]'>Would you like to join newsletters?</h1>
				<div className='w-full flex'>
					<input type="text" className='w-[285px] h-[40px] outline-none text-grey pl-[8px]' placeholder='enter your email address...'/>
					<button className='w-[85px] bg-primary text-white rounded active:bg-secondary'>Join</button>
				</div>
				<p className='text-[14px] text-grey'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
			</div>
		</div>
		<div className='w-full bg-grey2 h-[90px] flex justify-start items-center pl-[25px]'>
			<img src={logo} alt="" />
			<div className='flex gap-[12px] ml-[124px]'>
				<img src={location} alt="" />
				<p className='text-grey'>
				<a href="#">70 West Buckingham Ave. <br />
				Farmingdale, NY 11735</a>
				</p>
			</div>
			<div className='flex gap-[12px] ml-[88px]'>
				<img src={message} alt="" />
				<p className='text-grey'>
				<a href="#">contact@greenshop.com</a>
				</p>
			</div>
			<div className='flex gap-[12px] ml-[55px]'>
				<img src={calling} alt="" />
				<p className='text-grey'>
				<a href="#">+88 01911 717 490</a>
				</p>
			</div>
		</div>
		<div className='w-full h-[236px] border-b-2 border-grey bg-usha flex justify-start items-center pl-[25px]'>
			<ul className='flex flex-col gap-[8px]'>
				<li><span className='font-[700] text-[16px]'>My Account</span></li>
				<li><a href="#" className='text-[14px] text-grey'>My Account</a></li>
				<li><a href="#" className='text-[14px] text-grey'>Our Stores</a></li>
				<li><a href="#" className='text-[14px] text-grey'>Contact Us</a></li>
				<li><a href="#" className='text-[14px] text-grey'>Career</a></li>
				<li><a href="#" className='text-[14px] text-grey'>Specials</a></li>
			</ul>
			<ul className='flex flex-col gap-[8px] ml-[210px]'>
				<li><span className='font-[700] text-[16px]'>Help & Guide</span></li>
				<li><a href="#" className='text-[14px] text-grey'>Help Center</a></li>
				<li><a href="#" className='text-[14px] text-grey'>How to buy</a></li>
				<li><a href="#" className='text-[14px] text-grey'>Shipping & Delivery</a></li>
				<li><a href="#" className='text-[14px] text-grey'>Product & Policy</a></li>
				<li><a href="#" className='text-[14px] text-grey'>How to return</a></li>
			</ul>
			<ul className='flex flex-col gap-[8px] ml-[156px]'>
				<li><span className='font-[700] text-[16px]'>Categories</span></li>
				<li><a href="#" className='text-[14px] text-grey'>House Plants</a></li>
				<li><a href="#" className='text-[14px] text-grey'>Potter Plants</a></li>
				<li><a href="#" className='text-[14px] text-grey'>Seeds</a></li>
				<li><a href="#" className='text-[14px] text-grey'>Small Plants</a></li>
				<li><a href="#" className='text-[14px] text-grey'>Accessories</a></li>
			</ul>
			<div className='h-full w-[225px] flex flex-col justify-center items-start ml-[160px]'>
				<h1 className='font-bold text-[18px] mb-[10px]'>Social Media</h1>
				<div className='flex gap-[10px] mb-[33px]'>
					{sources.map((el,index) => {
						return <div className='w-[30px] h-[30px] rounded-small border-2 border-grey flex justify-center items-center cursor-pointer for-hover'><img src={el} alt="" /></div>
					})}

				</div>
				<h1 className='font-bold text-[18px] mb-[10px]'>We accept</h1>
				<a href="#"><img src={payment} alt="" /></a>
			</div>


		</div>
		<p className='w-full text-center text-grey mt-[10px] mb-[10px]'>© 2021 GreenShop. All Rights Reserved.</p>

	</div>
}

export default Footer