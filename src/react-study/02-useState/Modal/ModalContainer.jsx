import React, { useState } from 'react'
import Modal from './Modal'

export default function ModalContainer() {
    const [isOpen, setIsOpen] = useState(false);
    const post = {
        title: "첫 번재 게시물",
        content: "첫 번째 게시물 내용"
    }

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>모달 열기</button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={post.title} content={post.content}/>
        </div>
    )
}
