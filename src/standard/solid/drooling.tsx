import React from "react";
const Drooling: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14.742 17.054c.371.696.335 1.301.294 1.995l-.006.103c-.026.449-.053 1.01.133 1.58.196.6.598 1.13 1.276 1.614.68.485 1.6.607 2.4.376.831-.24 1.581-.88 1.816-1.936l.001-.006c.197-.925.075-1.74-.29-2.437-.359-.681-.921-1.195-1.524-1.585-.755-.49-1.64-.827-2.433-1.068a5.8 5.8 0 0 1-1.667 1.364"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 1.961-.525 3.8-1.442 5.382-.484-.755-1.134-1.309-1.76-1.715-.901-.584-1.917-.963-2.76-1.22-.048-.015-.086-.03-.125-.044-.056-.021-.116-.044-.214-.071-.246-.105-.803-.11-1.049.218a4.24 4.24 0 0 1-3.4 1.7 4.24 4.24 0 0 1-3.4-1.7.75.75 0 1 0-1.2.9 5.755 5.755 0 0 0 6.136 2.092q.026.063.059.125c.18.337.185.598.143 1.305l-.008.121c-.026.445-.071 1.225.197 2.044q.234.708.702 1.29c-.841.21-1.722.323-2.629.323-5.937 0-10.75-4.813-10.75-10.75m19.236 6.6a10.8 10.8 0 0 1-4.494 3.385c-.415-.385-.681-.799-.83-1.253-.186-.569-.159-1.13-.133-1.58l.006-.103c.042-.693.078-1.298-.293-1.994a5.8 5.8 0 0 0 1.667-1.365c.793.242 1.678.58 2.432 1.068.603.39 1.166.905 1.524 1.586q.066.125.12.256M6.97 8.47c.46-.461 1.085-.72 1.737-.72H10a.75.75 0 0 1 0 1.5H8.707c-.254 0-.497.1-.677.28a.75.75 0 0 1-1.06-1.06m6.28.03a.75.75 0 0 1 .75-.75h1.293c.652 0 1.277.259 1.737.72a.75.75 0 0 1-1.06 1.06.96.96 0 0 0-.677-.28H14a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Drooling;
