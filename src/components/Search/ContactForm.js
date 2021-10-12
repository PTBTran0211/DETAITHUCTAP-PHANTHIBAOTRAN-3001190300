import React from 'react'

export default function ContactForm() {
    return (
        <div className="contactform">
            <div className="contactform__left">
                <img src="https://cdn1.ivivu.com/iVivu/2018/12/05/10/undefined-6.png" alt=""/>
            </div>
            <div className="contactform__right">
                <h5>Cần hỗ trợ?</h5>
                <div className="contactform__right--contact">
                    <div className="region">
                        HCM
                    </div>
                    <div className="phone">
                        1900 1877
                    </div>
                </div>
                <div className="contactform__right--contact">
                    <div className="region">
                        HN
                    </div>
                    <div className="phone">
                        1900 2045
                    </div>

                </div>
                <div className="contactform__right--contact">
                    <div className="region">
                        CT
                    </div>
                    <div className="phone">
                        1900 2087
                    </div>

                </div>
            </div>
        </div>
    )
}
