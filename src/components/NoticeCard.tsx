
interface NoticeCardProps {
  photo: string;
  notice: string;
  description: string;
}

const NoticeCard = ({photo, notice, description}: NoticeCardProps) => {
    return (
      <div className="w-full flex  flex-col md:items-center   gap-4 ">
          <div className='w-full flex flex-col md:flex-row xl:justify-around  gap-1 mb-4 ' >
            <div className="w-full h-[300px] md:w-[300px]  md:h-[300px] ">
            <img
              src={photo}
              alt={notice}
              className="w-full h-full rounded-[32px] object-cover"
            />
            </div>
            
            <div className="w-full md:w-[65%] flex justify-between items-center ">
              <div className="w-full md:ml-[62px] flex flex-col justify-between items-center">
                <h3 className="w-full text-3xl md:text-4xl text-balance">
                  {notice}
                </h3>
                <p className=" mt-[4px] md:mt-[16px] font-normal italic lg:text-[20px] text-[14px] mb-6 text-gray-900 text-pretty ">
                  {description}
                </p>
              </div>
            </div>
          </div> 
      </div>
    );
  };
  
  export default NoticeCard;
