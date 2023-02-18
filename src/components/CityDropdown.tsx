import * as React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface Props {
  name: string;
  item1: string;
  item2: string;
  item3: string;
  item4: String;
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
          className={`inline-flex justify-between w-full justify-center rounded-md border bordefocus:ring-2 p-2 items-center border-[#7E7477] text-darkGreen text-xs font-light`}
        >
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 font-light"
            aria-hidden="true"
          />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#fff] shadow-lg ring-1 ring-[#79747E] text-right ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {props.item1}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {props.item2}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {props.item3}
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm text-right"
                    )}
                  >
                    {props.item4}
                  </button>
                )}
              </Menu.Item>
            </form>
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
