import React from 'react'
import { Carousel } from 'react-carousel-minimal';

export default function CarouselHotel() {
    const data = [
        {
          image: "https://cdn1.ivivu.com/iVivu/2020/09/01/12/s-ss-ninh-van-bay-the-water-reserve-2-cr-800x450.jpg",
          caption: "Water Reserve"
        },
        {
          image: "https://cdn1.ivivu.com/iVivu/2020/09/01/12/s-snorkelling-5939-original-cr-800x450.jpg",
          caption: "Lặn ngắm san hô"
        },
        {
          image: "https://cdn1.ivivu.com/iVivu/2019/01/24/22/khu-nghi-duong-terracotta-da-lat-87-800x450.jpg",
          caption: ""
        },
        {
          image: "https://cdn1.ivivu.com/iVivu/2019/01/24/22/khu-nghi-duong-terracotta-da-lat-88-800x450.jpg",
          caption: ""
        },
        {
          image: "https://cdn1.ivivu.com/iVivu/2021/10/01/18/l-alyana-ninh-van-bay-nha-trang-biet-thu-an-lam-ninh-van-bay-nha-trang-cu-20-800x450-1-1-800x450.png",
          caption: "Kayak"
        },
        {
          image: "https://cdn1.ivivu.com/iVivu/2021/10/01/18/a-1-800x450.jpg",
          caption: "Spa"
        },
        {
          image: "https://cdn1.ivivu.com/iVivu/2020/09/01/12/s-ninh-van-bay-vietnam-speedboat-cr-800x450.jpg",
          caption: "Tàu Cao Tốc"
        },
        {
          image: "https://cdn1.ivivu.com/iVivu/2020/09/01/12/s-jetty5-6590-original-cr-800x450.jpg",
          caption: "Bến Tàu"
        },
        {
          image: "https://cdn1.ivivu.com/iVivu/2019/06/14/20/4-drinks-by-the-beach-cr-800x450.png",
          caption: "Quầy Bar trên vịnh"
        },	
        {
          image: "https://cdn1.ivivu.com/iVivu/2020/09/01/12/s-swimming-pool-6594-original-cr-800x450.jpg",
          caption: "Hồ Bơi Chính"
        },
      ];
    
      const captionStyle = {
        position: 'absolute',
        bottom: '15px',
        display: 'table',
        margin:'0 auto',
        width: '100%',
        fontSize: '16px',

        textAlign: 'center',
        padding:'0 10px',
      }
      return (
        <div className="carouselhotel">
          <div style={{ textAlign: "center" }}>
            <div style={{
              padding: "0 20px"
            }}>
              <Carousel
                data={data}
                opacity="1"
                width="100%"
                height="500px"
                captionStyle={captionStyle}
                slideNumber={false}
                captionPosition="bottom"
                dots={false}
                display="block"
                pauseIconColor="white"
                pauseIconSize="40px"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  Width: "100%",
                  maxHeight: "500px",
                }}
              />
            </div>
          </div>
        </div>
      );
}
