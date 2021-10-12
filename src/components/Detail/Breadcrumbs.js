import React from 'react'
import {Breadcrumb} from 'react-bootstrap'
export default function Breadcrumbs({name}) {
    return (
        <>
            <Breadcrumb>
            <Breadcrumb.Item href="#">Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item href="#">
                Tìm Kiếm 
            </Breadcrumb.Item>
            <Breadcrumb.Item >{name}</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}
