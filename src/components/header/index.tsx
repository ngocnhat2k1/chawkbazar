import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {LanguageSwitcher} from './LanguageSwitcher';
const menuData: MenuData = {
  menuItems: [
    {
      title: 'Demos',
      href: '/',
      subMenu: [
        {title: 'Modern', href: '/'},
        {title: 'Standard', href: '/standard'},
        {title: 'Minimal', href: '/minimal'},
        {title: 'Vintage', href: '/vintage'},
        {title: 'Classic', href: '/classic'},
        {title: 'Trendy', href: '/trendy'},
        {title: 'Elegant', href: '/elegant'},
        {title: 'Refined', href: '/refined'},
        {title: 'Contemporary', href: '/contemporary'},
        {title: 'Ancient', href: '/ancient'}
      ]
    },
    {
      title: 'Men Wear',
      href: '/search?q=men-wear',
      megaMenu: [
        {
          title: 'Top Wear',
          items: [
            {title: 'T-Shirt', href: '/search?q=t-shirt'},
            {title: 'Casual Shirts', href: '/search?q=casual-shirts'},
            {title: 'Formal Shirts', href: '/search?q=formal-shirts'},
            {title: 'Blazers & Coats', href: '/search?q=blazers-coats'},
            {title: 'Suits', href: '/search?q=suits'},
            {title: 'Jackets', href: '/search?q=jackets'}
          ]
        },
        {
          title: 'Accessories',
          items: [
            {title: 'Belt, Scarves & More', href: '/search?q=belt-scarves'},
            {
              title: 'Watches & Wearables',
              href: '/search?q=watches-wearables'
            }
          ]
        }
      ]
    },
    {
      title: 'Women Wear',
      href: '/search?q=women-wear',
      megaMenu: [
        {
          title: 'Western Wear',
          items: [
            {title: 'Dresses', href: '/search?q=dresses'},
            {title: 'Jumpsuits', href: '/search?q=jumpsuits'},
            {
              title: 'Tops, T-Shirts & Shirts',
              href: '/search?q=tops-t-shirts'
            },
            {title: 'Shorts & Skirts', href: '/search?q=shorts-skirts'},
            {title: 'Shrugs', href: '/search?q=shrugs'},
            {title: 'Blazers', href: '/search?q=blazers'}
          ]
        },
        {
          title: 'Lingerie & Sleepwear',
          items: [
            {title: 'Bra', href: '/search?q=bra'},
            {title: 'Briefs', href: '/search?q=briefs'},
            {title: 'Sleepwear', href: '/search?q=sleepwear'}
          ]
        }
      ]
    },
    {title: 'Search', href: '/search'},
    {title: 'Shops', href: '/shops'},
    {
      title: 'Pages',
      href: '/',
      subMenu: [
        {
          title: 'Users',
          href: '/',
          subMenu: [
            {title: 'My Account', href: '/my-account'},
            {title: 'Sign In', href: '/signin'},
            {title: 'Sign Up', href: '/signup'},
            {title: 'Forget Password', href: '/forget-password'}
          ]
        },
        {title: 'FAQ', href: '/faq'},
        {title: 'Privacy Policy', href: '/privacy'},
        {title: 'Terms & Condition', href: '/terms'},
        {title: 'Contact Us', href: '/contact-us'},
        {title: 'Checkout', href: '/checkout'},
        {title: 'Collection', href: '/collections/mens-collection'},
        {title: 'Category', href: '/category/man'},
        {title: 'Order', href: '/order'},
        {title: '404', href: '/404'}
      ]
    }
  ]
};

const renderSubMenu = (subMenu: SubMenuItem[]) => {
  return (
    <ul className="py-5 text-sm text-body">
      {subMenu.map((item, index) => (
        <li key={index} className="group relative">
          <Link
            className="flex items-center py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-heading hover:bg-gray-300"
            href={item.href}
          >
            {item.title}
            {item.subMenu && (
              <span className="text-sm mt-0.5 shrink-0 ltr:ml-auto rtl:mr-auto">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="transition duration-300 ease-in-out text-body group-hover:text-black"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                </svg>
              </span>
            )}
          </Link>
          {item.subMenu && (
            <ul className="absolute z-0 invisible w-56 py-3 bg-gray-200 opacity-0 subMenuChild shadow-subMenu ltr:right-full rtl:left-full ltr:2xl:right-auto rtl:2xl:left-auto ltr:2xl:left-full rtl:2xl:right-full top-4">
              {renderSubMenu(item.subMenu)}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
const renderMegaMenu = (megaMenu: MegaMenuItem[]) => {
  return (
    <div className="absolute bg-gray-200 megaMenu shadow-header ltr:-left-28 rtl:-right-28 ltr:xl:left-0 rtl:xl:right-0">
      <div className="grid grid-cols-5">
        {megaMenu.map((column, index) => (
          <ul
            key={index}
            className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7"
          >
            <li className="mb-1.5">
              <Link
                className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                href={column.href || '/'}
              >
                {column.title}
              </Link>
            </li>
            {column.items.map((item, idx) => (
              <li key={idx} className="group relative">
                <Link
                  className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

const renderMenuItems = (menuItems: MenuItem[]) => {
  return menuItems.map((item, index) => (
    <div key={index} className="menuItem group cursor-pointer py-7 relative">
      <Link
        className="relative inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
        href={item.href}
      >
        {item.title}
        {(item.subMenu || item.megaMenu) && (
          <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
            </svg>
          </span>
        )}
      </Link>
      {item.subMenu && (
        <div className="absolute invisible bg-gray-200 opacity-0 group-hover:visible subMenu shadow-header ltr:left-0 rtl:right-0 group-hover:opacity-100">
          {renderSubMenu(item.subMenu)}
        </div>
      )}
      {item.megaMenu && renderMegaMenu(item.megaMenu)}
    </div>
  ));
};
export const Header = () => {
  return (
    <header
      id="siteHeader"
      className="relative z-20 w-full h-16 sm:h-20 lg:h-24"
    >
      <div className="fixed z-20 w-full h-16 px-4 text-gray-700 transition duration-200 ease-in-out bg-white innerSticky body-font sm:h-20 lg:h-24 md:px-8 lg:px-6">
        <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
          <Link className="inline-flex focus:outline-none" href="/">
            <span
              style={{
                boxSizing: 'border-box',
                display: 'inline-block',
                overflow: 'hidden',
                width: 95,
                height: 30,
                background: 'none',
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: 'relative'
              }}
            >
              <Image
                alt="ChawkBazar"
                src="/assets/images/logo.svg"
                decoding="async"
                data-nimg="fixed"
                layout="fill"
              />
            </span>
          </Link>
          <nav className="headerMenu flex w-full relative hidden lg:flex ltr:md:ml-6 rtl:md:mr-6 ltr:xl:ml-10 rtl:xl:mr-10">
            {renderMenuItems(menuData.menuItems)}
          </nav>
          <div className="flex-shrink-0 ltr:ml-auto rtl:mr-auto ltr:lg:mr-5 rtl:lg:ml-5 ltr:xl:mr-8 rtl:xl:ml-8 ltr:2xl:mr-10 rtl:2xl:ml-10">
            <LanguageSwitcher />
          </div>
          <div className="items-center justify-end flex-shrink-0 hidden lg:flex gap-x-6 lg:gap-x-5 xl:gap-x-8 2xl:gap-x-10 ltr:ml-auto rtl:mr-auto">
            <button
              className="relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none"
              aria-label="search-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17px"
                height="18px"
                viewBox="0 0 18.942 20"
                className="md:w-4 xl:w-5 md:h-4 xl:h-5"
              >
                <path
                  d="M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z"
                  transform="translate(-367.297 -371.285)"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            <div className="-mt-0.5 flex-shrink-0">
              <button className="text-sm font-semibold xl:text-base text-heading">
                Sign In
              </button>
            </div>
            <button
              className="relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none"
              aria-label="cart-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                viewBox="0 0 20 20"
                className="md:w-4 xl:w-5 md:h-4 xl:h-5"
              >
                <path
                  d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z"
                  transform="translate(-2 -2)"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              <span className="cart-counter-badge flex items-center justify-center bg-heading text-white absolute -top-2.5 xl:-top-3 rounded-full ltr:-right-2.5 ltr:xl:-right-3 rtl:-left-2.5 rtl:xl:-left-3 font-bold">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
