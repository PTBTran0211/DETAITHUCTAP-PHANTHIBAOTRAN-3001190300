import React from 'react'
import Recommended from './Recommended'
export default function ReviewHotel({title}) {
    return (
            <div className="reviewhotel nopadding">
                <div className="reviewhotel__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1639.404224940069!2d109.19606937487099!3d12.235930163605953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170677ae037716b%3A0x34f80a4db849a372!2sM%C6%B0%E1%BB%9Dng%20Thanh%20Luxury%20Nha%20Trang!5e0!3m2!1svi!2s!4v1633511653194!5m2!1svi!2s" height="285"  allowfullscreen="" loading="lazy" title="#"></iframe>
                </div>
                <div className="reviewhotel__recommend">
                    <Recommended title={title}/> 
                </div>
            </div>
    )
}
