
interface NoticeCardProps {
  photo: string;
  notice: string;
  description: string;
}

const NoticeCard = ({photo, notice, description}: NoticeCardProps) => {
    return (
      <div className="flex  flex-col md:items-center  gap-4">
          <div className='flex flex-col md:flex-row  gap-1 mb-4' >
            <img
              src={photo}
              alt="planet-01"
              className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
            />
            <div className="w-full flex justify-between items-center">
              <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px] justify-between items-center">
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
