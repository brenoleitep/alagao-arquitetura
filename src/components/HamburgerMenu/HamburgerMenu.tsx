'use client'
import React, { useRef } from 'react'
import Link from 'next/link'

export const HamburgerMenu = () => {
    const modalRef = useRef<HTMLDialogElement | null>(null)

    const handleClick = () => {
        const modalElement = modalRef.current

        if (modalElement) {
            modalElement.showModal()
        }
    }

    const handleOutsideClick = (event: React.MouseEvent<HTMLDialogElement>) => {
        const modalElement = modalRef.current

        if (modalElement && event.target === modalElement) {
            modalElement.close()
        }
    }

    return (
        <div className={'relative lg:hidden'}>
            <button onClick={handleClick} className="btn bg-transparent border-none flex justify-center items-center">
                <svg className="swap-off fill-current text-[#BB9F8A]" xmlns="http://www.w3.org/2000/svg" width="32"
                     height="32"
                     viewBox="0 0 512 512">
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
            </button>

            <dialog
                ref={modalRef}
                id="my_modal_3"
                className="modal"
                onClick={handleOutsideClick}
            >
                <div className="modal-box absolute bottom-0 w-full">
                    <form method="dialog">
                        <button
                            className="btn btn-sm text-[#BB9F8A] text-xl btn-circle btn-ghost absolute right-6 top-6">✕
                        </button>
                    </form>

                    <div
                        className="flex flex-col modalText gap-6 p-6 lg:hidden">
                        <Link href={'/'}>Inicio</Link>
                        <Link href={'/projetos'}>Projetos</Link>
                        <Link href={'/sobre'}>Sobre</Link>
                        <Link href={'/contato'}>Contato</Link>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
