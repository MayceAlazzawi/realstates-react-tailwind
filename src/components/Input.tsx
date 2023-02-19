import * as React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
export interface Props {
  Data: {
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
export function Input(props: Props) {
  const [writtenCity, setwrittenCity] = React.useState<string>("");
  return (
    <Menu
      as="div"
      className="relative inline-block text-left w-full font-light"
    >
      <div>
        <Menu.Button
          className={`inline-flex justify-between  w-full justify-center rounded-md border bordefocus:ring-2 p-2 items-center border-[#7E7477] text-darkGreen text-xs font-light`}
        >
          <input
            placeholder="ادخل اسم المحافظة"
            onChange={(event) => setwrittenCity(event.target.value)}
            className={`inline-flex justify-between text-right  w-full justify-center rounded-md border  bordefocus:ring-2 p-2 items-center border-[#7E7477] text-darkGreen text-xs font-light`}
          />
          <ChevronDownIcon
            className={`-mr-1 h-5 w-5 font-light absolute left-2 mt-2 `}
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      {/* <div> */}
      {/* <div className="bg-mint absolute right-0 z-10 mt-2 w-2/3 origin-top-right rounded-md bg-[#fff] shadow-lg ring-1 ring-[#79747E] text-right ring-opacity-5 focus:outline-none"> */}
      {/* {props.Data.map((city) =>
            writtenCity === "" ? (
              writtenCity
            ) : (
              <div>
                {city.name.toLowerCase().includes(writtenCity.toLowerCase())
                  ? city.name
                  : null}
              </div>
            )
          )} */}
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
          className={`absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-[#fff] shadow-lg ring-1 ring-[#79747E] text-right ring-opacity-5 focus:outline-none`}
        >
          <div className="py-1">
            {props.Data.map((city: any) => (
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
            ))}

            {/* <Menu.Item>
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
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
      {/* </div> */}
      {/* </div> */}
    </Menu>
  );
}
