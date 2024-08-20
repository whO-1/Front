"use client"

export default function ToggleButton () {
    const mobileToggleNavbar = (e) => {
        e.target.classList.toggle('bi-list');
        e.target.classList.toggle('bi-x');
        document.body.classList.toggle('mobile-nav-active');
    }   
    return <i onClick={mobileToggleNavbar} className="mobile-nav-toggle d-xl-none bi bi-list" ></i>;
}