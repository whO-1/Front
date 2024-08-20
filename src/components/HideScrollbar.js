export default function HideScrollbar({children}){
    return(
        <div className="w-100 h-100" style={{overflow:"hidden"} }>
            <div className="w-100 h-100" style={{ overflowY:"auto", overflowX:"hidden", marginLeft:"20px"} }>
                {children}
            </div>
        </div>
    );    
}