"use client"
import Pagination from 'react-bootstrap/Pagination';

export default function CustomPagination ( {hasNext= false, hasPrev= false, totalPages= 1, currentPage= 1, onChangePage } ) {
    
    const prevPage = () =>  { if (hasPrev && currentPage > 1 )  onChangePage(currentPage-1) };
    const nextPage = () =>  { if (hasNext && currentPage < totalPages ) onChangePage(currentPage+1) };
    
    const changePage = (page) => {
        if(page !== currentPage){
            scrollToTop();
            setTimeout( () =>{
                onChangePage(page);
            },320);
            
        } 
    };
    const firstPage = () => { if(currentPage > 1 ) onChangePage(1)}  ;
    const lastPage = () =>  { if(currentPage < totalPages ) onChangePage(totalPages)}  ;

    const scrollToTop = () => {
        window.scrollTo({
          top: 300,
          behavior: 'smooth'
        });
    }

    return(
        <>
             <Pagination>
                <Pagination.First disabled={!hasPrev} onClick={firstPage} />
                <Pagination.Prev disabled={!hasPrev || currentPage === 1} onClick={prevPage}/>
                
                {
                    totalPages > 5 ? (
                        <>
                            {
                                Array.from({ length: 2 }, (_, i) => (
                                    <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => changePage(i + 1)}> {i + 1} </Pagination.Item>
                                ))
                            }
                            {   currentPage > 3 && <Pagination.Ellipsis />  }
                            {
                                currentPage > 2 && currentPage < totalPages && (
                                    <Pagination.Item key={currentPage} active onClick={() => changePage(currentPage)}> {currentPage} </Pagination.Item>
                                )
                            }
                            {   currentPage < totalPages - 1 && <Pagination.Ellipsis /> }

                            <Pagination.Item key={totalPages} active={totalPages === currentPage} onClick={() => changePage(totalPages)}> {totalPages} </Pagination.Item>
                        </>
                    ) : (
                        
                        (totalPages === 1)?
                            <Pagination.Item  key={1} active  > 1 </Pagination.Item>
                        :
                            Array.from({ length: totalPages }, (_, i) => (
                                <Pagination.Item  key={i + 1} active={i + 1 === currentPage} onClick={() => changePage(i + 1)} > {i + 1} </Pagination.Item>
                            ))
                    )
                }

                <Pagination.Next disabled={!hasNext || currentPage === totalPages} onClick={nextPage} />
                <Pagination.Last disabled={!hasNext} onClick={lastPage} />
            </Pagination> 
        </>

    );
}