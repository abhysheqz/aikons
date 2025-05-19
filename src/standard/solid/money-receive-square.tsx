import React from "react";
const MoneyReceiveSquare: React.FC<
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
        fillRule="evenodd"
        d="M2 4a3 3 0 0 1 3-3h9a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-9a1 1 0 1 1 2 0v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.424 7.383A1 1 0 0 1 20.5 8H17a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1.707-.707l1.043 1.043 2.543-2.543a1 1 0 1 1 1.414 1.414L20.164 5.25l1.043 1.043a1 1 0 0 1 .217 1.09M12.5 6.5a1 1 0 0 1 1 1v.141c.77.224 1.45.709 1.79 1.433a1 1 0 0 1-1.808.852C13.417 9.79 13.1 9.5 12.5 9.5c-.357 0-.641.11-.814.24-.173.129-.186.231-.186.26s.013.131.186.26c.173.13.457.24.814.24.748 0 1.463.226 2.014.64.552.413.986 1.06.986 1.86s-.434 1.447-.986 1.86a3.2 3.2 0 0 1-1.014.5v.14a1 1 0 1 1-2 0v-.142c-.77-.223-1.45-.708-1.79-1.432a1 1 0 0 1 1.808-.852c.065.137.381.426.982.426.357 0 .641-.11.814-.24.173-.129.186-.231.186-.26s-.013-.131-.186-.26c-.173-.13-.457-.24-.814-.24-.748 0-1.463-.226-2.014-.64C9.934 11.448 9.5 10.8 9.5 10s.434-1.447.986-1.86a3.2 3.2 0 0 1 1.014-.5V7.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneyReceiveSquare;
