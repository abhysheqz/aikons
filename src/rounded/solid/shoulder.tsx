import React from "react";
const Shoulder: React.FC<
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
        d="M17 1.25a.75.75 0 0 0-.75.75c-.064.417-.366 1.353-1.06 1.765-.776.553-1.93 1.024-3.427 1.523-2.257.753-4.128 1.539-5.434 2.638C4.972 9.07 4.25 10.53 4.25 12.5a6.2 6.2 0 0 0 .99 3.408c-.051.174-.156.548-.223.856a11.8 11.8 0 0 0-.267 2.467c0 .774.139 1.53.27 2.08.067.277.274.944.274.944A.75.75 0 0 0 6 22.75h5.25v-6.025l-.061-.09-.813-1.219a.75.75 0 0 1 1.248-.832l.813 1.219a3.25 3.25 0 0 0 2.704 1.447h4.609V2a.75.75 0 0 0-.75-.75zm2.75 17.5h-4.61a4.75 4.75 0 0 1-2.39-.645v4.645H19a.75.75 0 0 0 .75-.75zM16.237 6.29a.75.75 0 0 0-.474 1.423l1.5.5a.75.75 0 0 0 .474-1.423zM17 14.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V15a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Shoulder;
