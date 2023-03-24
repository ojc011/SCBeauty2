import { useState, useEffect } from 'react';
import GalleryData from '../../data/GalleryData.js';
import ReactPaginate from 'react-paginate';
import Images from './Images';
import ResetLocation from '../../helpers/ResetLocation';
import SideMenuMobile from '../sideMenu/SideMenuMobile';

const Gallery = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 12);
  const [currentGallery, setcurrentGallery] = useState(
    [...GalleryData].reverse().slice(itemOffset, endOffset)
  );

  const handlePageClick = (event: any) => {
    setItemOffset((event.selected * 12) % GalleryData.length);
    ResetLocation();
  };

  useEffect(() => {
    setEndOffset(itemOffset + 12);
    setcurrentGallery([...GalleryData].slice(itemOffset, endOffset));
  }, [setEndOffset, endOffset, itemOffset]);

  return (
    <article className="flex flex-col min-h-screen col-span-2 items-center p-5">
      <SideMenuMobile />
      <section className="flex flex-col items-center w-full">
        <Images imagesToShow={currentGallery} />
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel=" &#62;"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={Math.ceil(GalleryData.length / 12)}
          previousLabel="&#60;"
        />
      </section>
    </article>
  );
};

export default Gallery;
