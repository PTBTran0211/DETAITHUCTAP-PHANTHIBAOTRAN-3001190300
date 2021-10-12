import React from 'react'
import {Col,Row,Container} from 'react-bootstrap'
import {FaMapMarkerAlt} from 'react-icons/fa'
export default function Footer() {
    return (
        
        <div className="footer">
                <Container xs={12}>
                <Row className="footer__top">
                    <Col xs={6} className="flex-row">
                        <Col xs={4}>
                            <div className="footer__panel">
                                <ul>
                                    <li><h3>Về iVIVU.com</h3></li>
                                    <li><a>Chúng tôi</a></li>
                                    <li><a>iVIVU Blog</a></li>
                                    <li><a>PMS - Miễn phí</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="footer__panel">
                                <ul>
                                    <li><h3>Thông Tin Cần Biết</h3></li>
                                    <li><a>Điều kiện & Điều khoản</a></li>
                                    <li><a>Quy chế hoạt động</a></li>
                                    <li><a>Câu hỏi thường gặp</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="footer__panel">
                                <ul>
                                    <li><h3>Đối tác</h3></li>
                                    <li><a>Quy chế bảo hiểm Cathay</a></li>
                                    <li><a>Yêu cầu bồi thường Cathay</a></li>
                                    <li><a>Quy chế trả góp</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Col>
                    <Col xs={6} className="flex-row">
                        <Col xs={6} >
                            <div className="footer__panel">
                                <ul>
                                    <li><h3>Được Chứng Nhận</h3></li>
                                    <li><img src="https://cdn1.ivivu.com/bocongthuong.png" alt=""/></li>
                                </ul>
                            </div>
                        </Col> 
                        <Col xs={6}>
                            <div className="footer__panel">
                            <ul>
                                <li>
                                    <div className="footer__panel--double">
                                        <i className="logo-tmp" alt=""/>
                                        <img src="https://res.ivivu.com/hotel/img/vic.png" alt=""/>
                                    </div>
                                </li>
                                <li><span>Một thành viên của <b>Thiên Minh Group</b></span></li>
                            </ul>
                            </div>
                            
                        </Col>
                    </Col>
                </Row>
                <Row className="footer__bottom">
                        <Col xs={8}>
                            <div className="footer__contact">
                                <div className="footer__contact--header">
                                    <img src="https://res.ivivu.com/hotel/img/ivv-agency-winner.svg" width="43" class="loading" data-was-processed="true" alt=""/>
                                    <b>iVIVU.com © 2020 - Đại lý Du lịch Trực tuyến Hàng đầu Việt Nam 2020</b>
                                </div>
                                <div className="footer__contact--body">
                                    <p>DKKD: 0312788481, Ngày cấp: 21/05/2014, Sở kế hoạch đầu tư thành phố Hồ Chí Minh</p>
                                    <p><FaMapMarkerAlt /> <strong>HCM</strong>: Lầu 2, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp. Hồ Chí Minh </p>
                                    <p><FaMapMarkerAlt /> <strong>HN</strong>: Tầng 1, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội</p>
                                    <p><FaMapMarkerAlt /> <strong>Cần Thơ</strong>: Tầng 7 - Tòa nhà STS - 11B Đại Lộ Hòa Bình, P. Tân An, Q. Ninh Kiều, TP. Cần Thơ</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="footer__info">
                                <div className="footer__info--title">
                                    <b>Bạn cần trợ giúp? Hãy gọi ngay</b>
                                </div>
                                <div className="footer__info--phone">
                                    <b>1900 1870</b>
                                </div>
                                <div className="footer__info--chat">
                                    <img alt="" src="https://cdn1.ivivu.com/app-icon/chat-icon-40x40.png"/>
                                    <b>Tư vấn với Olivia - chatbot của iVIVU</b>
                                </div>
                            </div>
                        </Col>
                </Row>            
                
                </Container>
        </div>
        
    )
}
