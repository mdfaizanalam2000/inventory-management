import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "sticky",
        width: "100%",
        bottom: 0
    }
    return (
        <footer className='bg-dark text-light p-2 text-center mt-3' style={footerStyle}>
            Copyright &copy; 2022, TODOS-LIST
        </footer>
    )
}
