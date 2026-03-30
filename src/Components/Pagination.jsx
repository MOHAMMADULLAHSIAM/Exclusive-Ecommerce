import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Cart from './Cart';
import { useSelector } from 'react-redux';

const Pagination = ({ itemsPerPage }) => {

  const product = useSelector((state) => state.allProducts.value)
  // console.log(product)


  const items = product


  function Items({ currentItems }) {
    return (

      <>
        {currentItems &&
          currentItems.map((items, idx) => (
            <Cart
            id={items.id}
            productdetails={items}
              img={items.thumbnail}
              key={idx}
              title={items.title}
              price={Number(items.price * (1 - items.discountPercentage / 100)).toFixed(2)}
              dltprice={items.price}
              rating={items.reviews.length}
              percentage={items.discountPercentage} />
          ))}
      </>
    );
  }



  const [itemOffset, setItemOffset] = useState(0);


  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);



  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };


  return (

    < >
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className='flex items-center w-200  gap-2.5 '
        pageClassName="bg-black  text-white cursor-pointer select-none"
        pageLinkClassName="w-full py-.5 px-6.25"
      />
    </>
  )
}

export default Pagination
