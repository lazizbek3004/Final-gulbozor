import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import bigImage from '../../Images/bigImage.png'
import smallPhoto from '../../Images/smallPhoto.png'
import { useNavigate } from 'react-router-dom';
import flower1 from '../../Images/image 12.svg'
import image1 from '../../Images/Image1.png'
import image2 from '../../Images/Image2.png'
import image3 from '../../Images/Image3.png'
import image4 from '../../Images/Image4.png'
import image5 from '../../Images/Image5.png'
import image6 from '../../Images/Image6.png'
import image7 from '../../Images/Image7.png'
import image8 from '../../Images/Image8.png'
import image9 from '../../Images/Image9.png'
import image14 from '../../Images/Image14.png'
import image15 from '../../Images/image 15.png'
import mine1 from '../../Images/mine1.png'
import mine2 from '../../Images/mine2.png'
import mine3 from '../../Images/mine3.png'
import mine4 from '../../Images/mine4.png'
import Footer from '../../Components/Footer'




function Home() {
	
	const navigate = useNavigate()

	const changeLocation = ()=>{
		navigate('/Shop')
	}

	const [dollar, setDollar] = useState(0)

	const changeDollar = (event)=>{
		setDollar(event.target.value)
	}
	const [isGreen, setIsGreen] = useState(0)

	const plants = [
		'All Plants',
		'New Arrivals',
		'Sale'
	]

	const numbers = [
		'1',
		'2',
		'3',
		'4'
	]
	const changeIsGreen = (index)=> {
		setIsGreen(index)
	}

	const [num, setNum] = useState(1)

	const changeNum = (el) => {
		setNum(el)
	}

	const rightArrow = '>'

	const nextFunc = () => {
		if(num < 4){
			setNum(n => n = n + 1)
		}else{
			setNum(n => n = 1)
		}
	}
	
	  
	

  return (
    <div className="w-full flex flex-col items-center justify-center pt-[12px]">
      <div className="w-[1200px] flex flex-row items-start justify-center bg-usha">
        <Swiper pagination={{clickable: true}} modules={[Pagination]}  className="mySwiper" >
          <SwiperSlide className='h-[450px] custom-linear-gradient'>
			<div className='w-full h-[450px] flex items-center pl-[40px] gap-[70px] relative'>
				<div className='w-[575px] h-full flex flex-col gap-[44px] justify-center'>
					<div className='w-full flex flex-col gap-[5px] items-start'>
						<h2 className='text-heading'>WELCOME TO GREENSHOP</h2>
						<h1 className='justText'>Let’s Make a
							Better <span>Planet</span></h1>
						<p className='w-full text-grey text-[14px] text-start'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
					</div>
					<button className='w-[140px] h-[40px] rounded bg-primary text-white text-heading font-bold' onClick={changeLocation}>SHOP NOW</button>
				</div>
				<img src={bigImage} alt="" className='h-[450px] w-[500px]'/>
				<img src={smallPhoto} alt="littleImage" className='absolute bottom-[30px] right-[340px]' />
			</div>
		  </SwiperSlide>
          <SwiperSlide className='h-[450px] custom-linear-gradient'>
			<div className='w-full h-[450px] flex items-center pl-[40px] gap-[70px] relative'>
				<div className='w-[575px] h-full flex flex-col gap-[44px] justify-center'>
					<div className='w-full flex flex-col gap-[5px] items-start'>
						<h2 className='text-heading'>WELCOME TO GREENSHOP</h2>
						<h1 className='justText'>Let’s Make a
							Better <span>Planet</span></h1>
						<p className='w-full text-grey text-[14px] text-start'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
					</div>
					<button className='w-[140px] h-[40px] rounded bg-primary text-white text-heading font-bold' onClick={changeLocation}>SHOP NOW</button>
				</div>
				<img src={bigImage} alt="" className='h-[450px] w-[500px]'/>
				<img src={smallPhoto} alt="littleImage" className='absolute bottom-[30px] right-[340px]' />
			</div>
		  </SwiperSlide>
		  <SwiperSlide className='h-[450px] custom-linear-gradient'>
			<div className='w-full h-[450px] flex items-center pl-[40px] gap-[70px] relative'>
				<div className='w-[575px] h-full flex flex-col gap-[44px] justify-center'>
					<div className='w-full flex flex-col gap-[5px] items-start'>
						<h2 className='text-heading'>WELCOME TO GREENSHOP</h2>
						<h1 className='justText'>Let’s Make a
							Better <span>Planet</span></h1>
						<p className='w-full text-grey text-[14px] text-start'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
					</div>
					<button className='w-[140px] h-[40px] rounded bg-primary text-white text-heading font-bold' onClick={changeLocation}>SHOP NOW</button>
				</div>
				<img src={bigImage} alt="" className='h-[450px] w-[500px]'/>
				<img src={smallPhoto} alt="littleImage" className='absolute bottom-[30px] right-[340px]' />
			</div>
		  </SwiperSlide>
        </Swiper>
      </div>
	  <div className='w-[1200px] pt-[46px] flex justify-start gap-[50px] items-start'>
			<div className='w-[310px] flex flex-col'>
				<div className='w-full h-[775px] custom-linear-gradient flex flex-col justify-between items-start p-[18px]'> {/*first part */}
					<h1 className='text-[18px] font-bold mb-[10px]'>Categories</h1>
					<div className='w-full flex flex-col h-[360px] justify-between pl-[12px]'>
						<div className='w-full flex justify-between items-center'>
							<h3 className='text-[15px] font-[400] text-primary'>House plants</h3>
							<span className='text-[15px] text-primary'>(33)</span>
						</div>
						<div className='w-full flex justify-between items-center'>
							<h3 className='text-[15px] font-[400]'>Potter plants</h3>
							<span className='text-[15px'>(12)</span>
						</div>
						<div className='w-full flex justify-between items-center'>
							<h3 className='text-[15px] font-[400]'>Seeds</h3>
							<span className='text-[15px'>(65)</span>
						</div>
						<div className='w-full flex justify-between items-center'>
							<h3 className='text-[15px] font-[400]'>Small plants</h3>
							<span className='text-[15px'>(39)</span>
						</div>
						<div className='w-full flex justify-between items-center'>
							<h3 className='text-[15px] font-[400]'>Big plants</h3>
							<span className='text-[15px'>(23)</span>
						</div>
						<div className='w-full flex justify-between items-center'>
							<h3 className='text-[15px] font-[400]'>Succelents</h3>
							<span className='text-[15px'>(17)</span>
						</div>
						<div className='w-full flex justify-between items-center'>
							<h3 className='text-[15px] font-[400]'>Tremmirous</h3>
							<span className='text-[15px'>(19)</span>
						</div>
						<div className='w-full flex justify-between items-center'>
							<h3 className='text-[15px] font-[400]'>Gardening</h3>
							<span className='text-[15px'>(13)</span>
						</div>
						<div className='w-full flex justify-between items-center'>
							<h3 className='text-[15px] font-[400]'>Accessories</h3>
							<span className='text-[15px'>(18)</span>
						</div>

					</div>
					<div className='w-full h-[133px] flex flex-col justify-between'>
						<h1 className='text-bold text-[18px] font-bold mb-[10px]'>Price Range</h1>
							<div className='w-full h-[110px] pl-[12px] flex flex-col justify-between'>
								<input type="range" className='w-[209px] accent-primary cursor-pointer bg-grey' min={'0'} max={'12'} onChange={changeDollar} />
								<p className='text-[16px]'>Price:<span className=' text-primary font-bold'>{dollar == 0 ? "$0" : `$${dollar}000`}</span></p>	
								<button className='bg-primary text-white w-[90px] h-[35px] rounded active:bg-secondary'>Filter</button>
							</div>

					</div>
					<h1 className='text-[18px] font-bold mb-[10px]'>Size</h1>
					<div className='w-full flex flex-col h-[120px] justify-between pl-[12px]'>
						<div className='w-full flex justify-between items-center'>
							<h3 className='text-[15px] font-[400]'>Small</h3>
							<span className='text-[15px'>(119)</span>
						</div>
						<div className='w-full flex justify-between items-center'>
							<h3 className='text-[15px] font-[400]'>Medium</h3>
							<span className='text-[15px'>(86)</span>
						</div>
						<div className='w-full flex justify-between items-center'>
							<h3 className='text-[15px] font-[400]'>Large</h3>
							<span className='text-[15px'>(78)</span>
						</div>
					</div>

				</div>
				<div className='w-[310px] h-[470px] custom-linear-gradient2 flex flex-col items-center p-[18px] justify-between'> {/*final part */}
					<h1 className='text-[50px] text-primary'>Super Sale</h1>
					<span className='text-[23px] font-bold'>UP TO 75% OFF</span>
					<img src={flower1} alt="gul" className=''/>
				</div>
			</div>
			<div className='w-full h-full flex flex-col justify-start items-start'>
				<div className='w-full flex justify-between items-center mb-[30px]'>{/*top-right begun */}
					<ul className='flex gap-[30px] items-center'>
						{plants.map((el,index) => {
							return <li key={index} onClick={()=>changeIsGreen(index)} className={isGreen == index ? 'cursor-pointer text-primary border-b-2' : 'cursor-pointer'} >{el}</li>
						})}
					</ul>
					<div className='flex gap-[10px] items-center'>
						<span className='text-[15px]'>Short by: Default sorting</span>
						<select name="" id="" className='cursor-pointer border-0'>
							<option value="nothing" className='bg-primary text-primary onlyOption'></option>
						</select>
					</div>
				</div>
				<div className='w-full grid grid-cols-3 gap-x-[40px] gap-y-[70px]'>
					<div className='w-[258px] h-[350px] flex flex-col gap-[12px]'>
						<div className='w-full h-[300px] bg-usha flex justify-center items-center'>
							<img src={image1} alt="" />
						</div>
						<div className='w-full flex flex-col mt-[12px] justify-start items-start ml-[10px]'>
							<h3 className='text-heading text-grey'>Barbertod Daisy</h3>
							<span className='text-[18px] text-primary font-bold'>$119.00</span>
						</div>
					</div>
					<div className='w-[258px] h-[350px] flex flex-col gap-[12px]'>
						<div className='w-full h-[300px] bg-usha flex justify-center items-center'>
							<img src={image2} alt="" />
						</div>
						<div className='w-full flex flex-col mt-[12px] justify-start items-start ml-[10px]'>
							<h3 className='text-heading text-grey'>Barbertod Daisy</h3>
							<span className='text-[18px] text-primary font-bold'>$119.00</span>
						</div>
					</div>
					<div className='w-[258px] h-[350px] flex flex-col gap-[12px]'>
						<div className='w-full h-[300px] bg-usha flex justify-center items-center'>
							<img src={image3} alt="" />
						</div>
						<div className='w-full flex flex-col mt-[12px] justify-start items-start ml-[10px]'>
							<h3 className='text-heading text-grey'>Barbertod Daisy</h3>
							<span className='text-[18px] text-primary font-bold'>$119.00</span>
						</div>
					</div>
					<div className='w-[258px] h-[350px] flex flex-col gap-[12px]'>
						<div className='w-full h-[300px] bg-usha flex justify-center items-center'>
							<img src={image4} alt="" />
						</div>
						<div className='w-full flex flex-col mt-[12px] justify-start items-start ml-[10px]'>
							<h3 className='text-heading text-grey'>Barbertod Daisy</h3>
							<span className='text-[18px] text-primary font-bold'>$119.00</span>
						</div>
					</div>
					<div className='w-[258px] h-[350px] flex flex-col gap-[12px]'>
						<div className='w-full h-[300px] bg-usha flex justify-center items-center'>
							<img src={image5} alt="" />
						</div>
						<div className='w-full flex flex-col mt-[12px] justify-start items-start ml-[10px]'>
							<h3 className='text-heading text-grey'>Barbertod Daisy</h3>
							<span className='text-[18px] text-primary font-bold'>$119.00</span>
						</div>
					</div>
					<div className='w-[258px] h-[350px] flex flex-col gap-[12px]'>
						<div className='w-full h-[300px] bg-usha flex justify-center items-center'>
							<img src={image6} alt="" />
						</div>
						<div className='w-full flex flex-col mt-[12px] justify-start items-start ml-[10px]'>
							<h3 className='text-heading text-grey'>Barbertod Daisy</h3>
							<span className='text-[18px] text-primary font-bold'>$119.00</span>
						</div>
					</div>
					<div className='w-[258px] h-[350px] flex flex-col gap-[12px]'>
						<div className='w-full h-[300px] bg-usha flex justify-center items-center'>
							<img src={image7} alt="" />
						</div>
						<div className='w-full flex flex-col mt-[12px] justify-start items-start ml-[10px]'>
							<h3 className='text-heading text-grey'>Barbertod Daisy</h3>
							<span className='text-[18px] text-primary font-bold'>$119.00</span>
						</div>
					</div>
					<div className='w-[258px] h-[350px] flex flex-col gap-[12px]'>
						<div className='w-full h-[300px] bg-usha flex justify-center items-center'>
							<img src={image8} alt="" />
						</div>
						<div className='w-full flex flex-col mt-[12px] justify-start items-start ml-[10px]'>
							<h3 className='text-heading text-grey'>Barbertod Daisy</h3>
							<span className='text-[18px] text-primary font-bold'>$119.00</span>
						</div>
					</div>
					<div className='w-[258px] h-[350px] flex flex-col gap-[12px]'>
						<div className='w-full h-[300px] bg-usha flex justify-center items-center'>
							<img src={image9} alt="" />
						</div>
						<div className='w-full flex flex-col mt-[12px] justify-start items-start ml-[10px]'>
							<h3 className='text-heading text-grey'>Barbertod Daisy</h3>
							<span className='text-[18px] text-primary font-bold'>$119.00</span>
						</div>
					</div>


				</div>

			</div>
	  </div>
	  <div className='w-[1200px] flex justify-end items-center gap-[10px] mt-[90px] mb-[90px]'>
			{numbers.map((el, index) => {
				return <button key={index} onClick={() => changeNum(el)} className={el == num ? "w-[35px] h-[35px] cursor-pointer bg-primary text-white rounded-small" : "w-[35px] h-[35px] border-[1px] border-grey rounded-small cursor-pointer"}>{el}</button>
			})}
			<button className='w-[35px] h-[35px] border-[1px] rounded-small border-grey active:bg-primary active:text-white' onClick={nextFunc}>{rightArrow}</button>

	  </div>
	  <div className='w-[1200px] flex justify-between items-center pt-[50px] mb-[138px]'>
			<div className='w-[586px] h-[250px] pr-[30px] flex flex-col justify-center items-end bg-usha relative'>
					<h1 className='font-bold text-right text-[16px]'>SUMMER CACTUS <br />& SUCCULENTS</h1>
					<p className='text-right mt-[10px] z-10 text-grey'>We are an online plant shop offering a wide <br /> range of cheap and trendy plants</p>
					<button className='bg-primary text-white w-[120px] h-[35px] rounded mt-[10px] cursor-pointer active:bg-secondary'>Find more</button>
					<img src={image14} alt="gul" className='absolute bottom-[0] left-[0]' />
			</div>
			<div className='w-[586px] h-[250px] pr-[30px] flex flex-col justify-center items-end bg-usha relative'>
					<h1 className='font-bold text-right text-[16px]'>STYLING TRENDS <br />& MUCH MORE</h1>
					<p className='text-right mt-[10px] z-10 text-grey'>We are an online plant shop offering a wide <br /> range of cheap and trendy plants</p>
					<button className='bg-primary text-white w-[120px] h-[35px] rounded mt-[10px] cursor-pointer active:bg-secondary'>Find more</button>
					<img src={image15} alt="gul" className='absolute bottom-[0] left-[0]' />
			</div>
	  </div>
	  <div className='w-[1200px] flex flex-col justify-center items-center'>
			<h1 className='text-[30px] font-[700] mb-[15px]'>Our Blog Posts</h1>
			<p className='text-grey mb-[35px]'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
			<div className='w-full flex justify-between items-center'>
				<div className='w-[268px] flex flex-col'>
					<img src={mine1} alt="" />
					<div className='w-full h-[167px] bg-usha flex flex-col pl-[15px] justify-start items-start pt-[9px]'>
						<p className='text-[14px] text-primary text-left'>September 12  I Read in 6 minutes</p>
						<h2 className='text-[20px] font-[700] text-left'>Cactus & Succulent <br /> Care Tips</h2>
						<p className='text-[14px] text-grey'>Cacti are succulents are easy care plants for any home or patio. </p>
						<a href="#" className='ml-[4px] mt-[4px] hover:text-primary'>Read more</a>

					</div>
				</div>
				<div className='w-[268px] flex flex-col'>
					<img src={mine2} alt="" />
					<div className='w-full h-[167px] bg-usha flex flex-col pl-[15px] justify-start items-start pt-[9px]'>
						<p className='text-[14px] text-primary text-left'>September 13  I Read in 2 minutes</p>
						<h2 className='text-[20px] font-[700] text-left'>Top 10 Succulents for<br /> Your Home</h2>
						<p className='text-[14px] text-grey'>Best in hanging baskets. Prefers medium to high light.</p>
						<a href="#" className='ml-[4px] mt-[4px] hover:text-primary'>Read more</a>

					</div>
				</div>
				<div className='w-[268px] flex flex-col'>
					<img src={mine3} alt="" />
					<div className='w-full h-[167px] bg-usha flex flex-col pl-[15px] justify-start items-start pt-[9px]'>
						<p className='text-[14px] text-primary text-left'>September 15  I Read in 3 minutes</p>
						<h2 className='text-[20px] font-[700] text-left'>Cactus & Succulent <br /> Care Tips</h2>
						<p className='text-[14px] text-grey'>Cacti are succulents are easy care plants for any home or patio. </p>
						<a href="#" className='ml-[4px] mt-[4px] hover:text-primary'>Read more</a>

					</div>
				</div>
				<div className='w-[268px] flex flex-col'>
					<img src={mine4} alt="" />
					<div className='w-full h-[167px] bg-usha flex flex-col pl-[15px] justify-start items-start pt-[9px]'>
						<p className='text-[14px] text-primary text-left'>September 12  I Read in 6 minutes</p>
						<h2 className='text-[20px] font-[700] text-left'>Best Houseplants <br /> Room By Room</h2>
						<p className='text-[14px] text-grey'>The benefits of houseplants are endless. In addition to..</p>
						<a href="#" className='ml-[4px] mt-[4px] hover:text-primary'>Read more</a>

					</div>
				</div>


			</div>


	  </div>
	 
			<Footer />
    </div>
	
  );
}

export default Home;
