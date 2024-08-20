import NavbarNew from "@/components/navbar/NavbarNew";
import CustomFooter from "@/components/footer/CustomFooter";


export default function CustomPage({ children , data } ){
    return (
        <>
            <NavbarNew data = {data} />

            {children}

            <div className="d-flex flex-column justify-content-end " style={{height:"100vh"}} >
                <CustomFooter/>
            </div>
        </>
    );
}