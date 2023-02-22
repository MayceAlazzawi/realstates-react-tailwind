import * as React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface Props {
  toggelHidden?: string;
  arrowHidden?: string;
  border?: string;
  menuWidth: string | number;
  name?: string;
  // item1: string;
  // item2: string;
  // item3: string;
  // item4: String;
  arrayOfItems?: string[];
  Data?: {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
    population: number;
    region: string;
  }[];
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const CityDropDown = (props: Props) => {
  return (
    <Menu
      as="div"
      className="relative inline-block text-left w-full font-light"
    >
      <div>
        <Menu.Button
          className={`inline-flex justify-between  w-full justify-center rounded-md ${props.border} bordefocus:ring-2 p-2 items-center border-[#7E7477] text-darkGreen text-xs font-light`}
        >
          {props.arrowHidden === "hidden" ? (
            <svg
              className={`w-6 h-6 ${props.toggelHidden} text-[#fff]`}
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          ) : (
            <ChevronDownIcon
              className={`-mr-1 h-5 w-5 font-light ${props.arrowHidden}`}
              aria-hidden="true"
            />
          )}

          {props.name}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute right-0 z-10 mt-2 ${props.menuWidth} origin-top-right rounded-md bg-[#fff] shadow-lg ring-1 ring-[#79747E] text-right ring-opacity-5 focus:outline-none`}
        >
          <div className="py-1">
            {props.arrayOfItems
              ? props.arrayOfItems?.map((item: string) => (
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 text-[#000]" : "text-[#000]",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {item}
                      </a>
                    )}
                  </Menu.Item>
                ))
              : props.Data?.map(
                  (city: {
                    id: number;
                    name: string;
                    latitude: string;
                    longitude: string;
                    population: number;
                    region: string;
                  }) => (
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100 text-[#000]" : "text-[#000]",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {city.name}
                        </a>
                      )}
                    </Menu.Item>
                  )
                )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

// <CityDropDown
//                 discription="الـمواصفات"
//                 item1="1+0"
//                 item2="1+1"
//                 item3="2+1"
//                 item4="3+1"
//               />
