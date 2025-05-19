import React from "react";
const ComputerDollar: React.FC<
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
        d="M14.83 17.25H9.17l.381 1.014c.347.92.225 2.01-.244 2.736H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-2.307c-.469-.725-.59-1.815-.244-2.736z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 5a1 1 0 0 1 1 1v.141c.77.224 1.45.709 1.79 1.433a1 1 0 0 1-1.808.852C12.917 8.29 12.6 8 12 8c-.357 0-.641.11-.814.24-.173.129-.186.231-.186.26s.013.131.186.26c.173.13.457.24.814.24.748 0 1.463.226 2.014.64.552.413.986 1.06.986 1.86s-.434 1.447-.986 1.86a3.2 3.2 0 0 1-1.014.5V14a1 1 0 1 1-2 0v-.142c-.77-.223-1.45-.708-1.79-1.432a1 1 0 0 1 1.808-.852c.065.137.381.426.982.426.357 0 .641-.11.814-.24.173-.129.186-.231.186-.26s-.013-.131-.186-.26c-.173-.13-.457-.24-.814-.24-.748 0-1.463-.226-2.014-.64C9.434 9.948 9 9.3 9 8.5s.434-1.447.986-1.86A3.2 3.2 0 0 1 11 6.14V6a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerDollar;
