import {address, email, IBAN, OIB, phoneNumber} from '../components/globalValues';

const ContactPage = () => {
    return (
      <div className="flex justify-center min-h-screen">

        <div className="absolute bg-[url('images/letter3.png')] bg-cover max-w-[1300px] h-[100%] w-[100%] p-[15%]">
        <h1 className='text-[#000]/70 font-semibold text-center text-5xl pb-4'>Kontakt i informacije</h1>
        <ul className="absolute pt-8 text-2xl text-[#000]/70 font-semibold text-left">
              <li className='py-2 pl-2'>Kontakt: {phoneNumber}</li>
              <li className='py-2 pl-2'>E-mail: {email}</li>
              <li className='py-2 pl-2'>OIB: {OIB}</li>
              <li className='py-2 pl-2'>IBAN: {IBAN}</li>
              <li className='py-2 pl-2'>Adresa: {address}</li>
            </ul>
        </div>
        
      </div>
      );
}
 
export default ContactPage;
