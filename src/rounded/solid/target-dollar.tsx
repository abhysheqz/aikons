import React from "react";
const TargetDollar: React.FC<
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
        d="M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M1 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m18 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-7 7a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7a1 1 0 0 1 1 1v.141c.77.224 1.45.709 1.79 1.433a1 1 0 0 1-1.808.852C12.917 10.29 12.6 10 12 10c-.357 0-.641.11-.814.24-.173.129-.186.231-.186.26s.013.131.186.26c.173.13.457.24.814.24.748 0 1.463.226 2.014.64.552.413.986 1.06.986 1.86s-.434 1.447-.986 1.86a3.2 3.2 0 0 1-1.014.5V16a1 1 0 1 1-2 0v-.142c-.77-.223-1.45-.708-1.79-1.432a1 1 0 0 1 1.808-.852c.065.137.381.426.982.426.357 0 .641-.11.814-.24.173-.129.186-.231.186-.26s-.013-.131-.186-.26c-.173-.13-.457-.24-.814-.24-.748 0-1.463-.226-2.014-.64C9.434 11.948 9 11.3 9 10.5s.434-1.447.986-1.86A3.2 3.2 0 0 1 11 8.14V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TargetDollar;
