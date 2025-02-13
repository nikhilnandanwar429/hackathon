import React from 'react';
import { io } from 'socket.io-client';
import FourNumber from './FourNumber';
import HeroSection from './HeroSection';

function NumberFile() {

  const [otp, setOtp] = React.useState('000000000000')

  const socket = io("http://localhost:5000/");

  socket.on("connection", (sock) => {
    console.log(sock.id)
    // sock.on('Number', (number) => {
    //   console.log(number);
    //   setOtp(number)
    // })
  })

  socket.on('Number', (data) => {
    console.log("Received OTP:", data.number);
    setOtp(data.number);
  });

  return (
    <div className='bg-wight w-full h-screen flex items-center justify-center'>
      <div className='w-10/12 h-full flex-col flex items-center justify-center m-9' >
        <HeroSection />
        <div className='flex items-center justify-center gap-4'>
          <FourNumber otp = {otp.slice(0, 4)} index = '1'/>
          
          <FourNumber otp = {otp.slice(4, 8)} index = '2'/>
          <FourNumber otp = {otp.slice(8)} index = '3'/>
        </div>
      </div>
    </div>
  )
}

export default NumberFile
