import { useState } from 'react'
import ex from '../Images/ex.svg'
import google from '../Images/Google.svg'
import facebook from '../Images/face.svg'

function Login({okLogin, setOkLogin}){
	
	const closeThat = ()=>{
		setOkLogin(!okLogin)
	}

	const [greenPage, setGreenPage] = useState(0)

	const pages = [
		'Login',
		'Register'
	]

	const changeGreenPage =(index) => {
		setGreenPage(index);
	}   

	const closeLogin = () => {

		setOkLogin(false)
	}
	
	return(<div className="absolute top-0 left-0 w-[100%] h-[100dvh] z-10 bg-background flex items-center justify-center">
		<div className="w-[500px] pb-[40px] pt-[50px] bg-white flex flex-col justify-start items-center relative border-b-[10px] border-primary">
			<ul className='flex gap-[20px]'>
				{pages.map((el,index) => {
					return <li className={index == greenPage ? "text-primary text-[20px] cursor-pointer" : "text-[20px] cursor-pointer"}
					key={index} onClick={() => changeGreenPage(index)}>{el}</li>
				})}	
			</ul>
				{/* when greenPage is equal to 0 */}
				<div className={greenPage == 0 ? 'w-full flex mt-[30px] flex-col justify-start items-center' : "hidden"}>
					<h1 className='text-[13px] text-grey mb-[15px]'>Enter your username and password to login.</h1>
					<input type="text" className='w-[300px] h-[40px] pl-[14px] text-[14px] text-grey outline-none border-[1px] border-grey rounded mb-[17px]'
							placeholder='almamun_uxui@outlook.com' />
					<input type="password" className='w-[300px] h-[40px] pl-[14px] text-[14px] text-grey outline-none border-[1px] border-grey rounded ' placeholder='*********' />
					<div className='w-[300px] text-right mt-[14px] text-primary mb-[27px]'>
						<a href='#'>Forgot Password?</a>
					</div>
					<button className='w-[300px] h-[40px] bg-primary text-white font-bold rounded active:bg-secondary'>Login</button>
					<div className='flex gap-[10px] items-center mt-[45px]'>
						<div className='w-[100px] bg-grey h-[0.5px]'></div>
						<span className='text-grey'>Or login with</span>
						<div className='w-[100px] bg-grey h-[0.5px]'></div>
					</div>
					<div className='w-[300px] h-[40px] border-[1px] mt-[15px] border-gray rounded flex gap-[10px] justify-center items-center cursor-pointer'>
						<img src={google} alt="" />
						<span className='text-grey'>Login with Google</span>
					</div>
					<div className='w-[300px] h-[40px] border-[1px] mt-[15px] border-gray rounded flex gap-[10px] justify-center items-center cursor-pointer'>
						<img src={facebook} alt="" />
						<span className='text-grey'>Login with Facebook</span>
					</div>
				</div>
				
	
				{/*when greenPage is eqaul to 1  */}
				<div className={greenPage == 1 ? 'w-full flex mt-[30px] flex-col justify-start items-center' : "hidden"}>
					<h1 className='text-[13px] text-grey mb-[15px]'>Enter your username and password to login.</h1>
					<input type="text" className='w-[300px] h-[40px] pl-[14px] text-[14px] text-grey outline-none border-[1px] border-grey rounded '
							placeholder='Username' />
					<input type="email" className='w-[300px] h-[40px] pl-[14px] mt-[16px] text-[14px] text-grey outline-none border-[1px] border-grey rounded ' placeholder='Enter your email address' />
					<input type="password" className='w-[300px] h-[40px] pl-[14px] mt-[16px] text-[14px] text-grey outline-none border-[1px] border-grey rounded ' placeholder='Password' />
					<input type="password" className='w-[300px] h-[40px] pl-[14px] mt-[16px] text-[14px] mb-[16px] text-grey outline-none border-[1px] border-grey rounded ' placeholder='Confirm Password' />
					


					<button className='w-[300px] h-[40px] bg-primary text-white font-bold rounded active:bg-secondary'>Register</button>
					<div className='flex gap-[10px] items-center mt-[40px]'>
						<div className='w-[100px] bg-grey h-[0.5px]'></div>
						<span className='text-grey'>Or login with</span>
						<div className='w-[100px] bg-grey h-[0.5px]'></div>
					</div>
					<div className='w-[300px] h-[40px] border-[1px] mt-[15px] border-gray rounded flex gap-[10px] justify-center items-center cursor-pointer'>
						<img src={google} alt="" />
						<span className='text-grey'>Login with Google</span>
					</div>
					<div className='w-[300px] h-[40px] border-[1px] mt-[15px] border-gray rounded flex gap-[10px] justify-center items-center cursor-pointer'>
						<img src={facebook} alt="" />
						<span className='text-grey'>Login with Facebook</span>
					</div>
				</div>

	
			<img src={ex} alt="" onClick={closeThat} className='cursor-pointer absolute top-[15px] right-[15px]'/>
		</div>



	</div>)
}

export default Login