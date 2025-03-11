'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {}

export const BannerHome = (props: Props) => {
  const listBanner = [
    {
      name: 'Winter Collection of Kid Items',
      image: '/assets/images/banner/ancient/hero-banner-1.jpg',
    },
    {
      name: 'Winter Collection of Kid Items',
      image: '/assets/images/banner/ancient/hero-banner-2.jpg',
    },
    {
      name: 'Winter Collection of Kid Items',
      image: '/assets/images/banner/ancient/hero-banner-3.jpg',
    },
  ]
  return (
    <div className="relative mx-auto mb-5 max-w-[1920px] md:mb-8 lg:mb-12 xl:mb-14 2xl:mb-[75px]">
      <div className="carouselWrapper carousel-full-width pagination-left relative mx-0">
        <Swiper loop={true} autoplay={{ delay: 5000 }} slidesPerView={1}>
          {listBanner?.map((item, index) => {
            return (
              <SwiperSlide key={index} className="carouselItem">
                <div
                  className="relative mx-auto"
                  style={{
                    minHeight: 'calc(900/1920*100vw)',
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 top-0">
                    <Link
                      className="group relative flex h-full justify-center overflow-hidden"
                      href="/collections/winter-collection"
                    >
                      <Image
                        src={item.image}
                        alt="Winter Collection of Kid Items"
                        width={1920}
                        height={900}
                        objectFit="cover"
                        quality={100}
                        priority
                        className="w-full bg-gray-300 object-cover"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className="absolute top-2/4 z-10 flex hidden w-full items-center">
          <button
            className="duration-250 ltr:shadow-navigation rtl:shadow-navigationReverse 3xl:w-12 3xl:h-12 3xl:text-2xl false absolute flex h-7 w-7 transform items-center justify-center rounded rounded-full bg-white text-sm text-black transition hover:bg-gray-900 hover:text-white focus:outline-none md:text-base lg:h-8 lg:h-9 lg:w-8 lg:w-9 lg:text-lg lg:text-xl xl:h-10 xl:w-10 ltr:left-6 ltr:-translate-x-1/2 ltr:md:left-8 ltr:xl:left-12 ltr:2xl:left-16 rtl:right-6 rtl:translate-x-1/2 rtl:md:right-8 rtl:xl:right-12 rtl:2xl:right-16"
            id="hero-slider-prev"
            aria-label="prev-button"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
            </svg>
          </button>
          <button
            className="duration-250 ltr:shadow-navigation rtl:shadow-navigationReverse 3xl:w-12 3xl:h-12 3xl:text-2xl false absolute flex h-7 w-7 transform items-center justify-center rounded rounded-full bg-white text-sm text-black transition hover:bg-gray-900 hover:text-white focus:outline-none md:text-base lg:h-8 lg:h-9 lg:w-8 lg:w-9 lg:text-lg lg:text-xl xl:h-10 xl:w-10 ltr:right-6 ltr:translate-x-1/2 ltr:md:right-8 ltr:xl:right-12 ltr:2xl:right-16 rtl:left-6 rtl:-translate-x-1/2 rtl:md:left-8 rtl:xl:left-12 rtl:2xl:left-16"
            id="hero-slider-next"
            aria-label="next-button"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
