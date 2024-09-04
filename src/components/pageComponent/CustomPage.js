import NavbarNew from "@/components/navbar/NavbarNew";
import CustomFooter from "@/components/footer/CustomFooter";


export default function CustomPage({ children , data } ){
    return (
        <>
            <NavbarNew data = {data} />
            
            <div style={{minHeight:"120vh"}}>
                {children}
            </div>
            
            <CustomFooter/>
          
        </>
    );
}