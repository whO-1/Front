"use client"

export default function CustomFormTwo(){

    return(
        <form 
            action="#" 
            className="form-search d-flex align-items-stretch mb-3 " 
        >
            <input 
                className="form-control placeholder-glow text-primary px-4 py-3" 
                type="text" 
                id="searchInput" 
                pattern="[a-zA-Z0-9]+" 
                title="Only letters and numbers are allowed" 
                required  
                placeholder="Search for an event ..."  
            />
            <button type="submit" className="btn btn-success px-4" onClick={ (e) =>{
                e.preventDefault(); 
                const searchTerm = document.getElementById('searchInput').value;
                if (searchTerm) {
                    window.location.href = `https://localhost:3000/feed?search=${encodeURIComponent(searchTerm)}`;
                }
            }}>Search</button>
        </form>

    );
}