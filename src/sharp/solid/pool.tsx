import React from "react";
const Pool: React.FC<
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
        d="M3 20c1.125 0 1.889-.663 2.028-1.237h1.944C7.112 19.337 7.875 20 9 20s1.889-.663 2.028-1.237h1.944c.14.574.903 1.237 2.028 1.237s1.889-.663 2.028-1.237h1.944c.14.574.903 1.237 2.028 1.237h1v2h-1c-1.11 0-2.221-.412-3-1.137-.779.725-1.89 1.137-3 1.137s-2.221-.412-3-1.137C11.221 21.588 10.11 22 9 22s-2.221-.412-3-1.137C5.221 21.588 4.11 22 3 22H2v-2zM15.293 4l2-2 1.414 1.414L17 5.121V17h-2V4.707A1 1 0 0 1 15.293 4M7.293 4l2-2 1.414 1.414L9 5.121V17H7V4.707A1 1 0 0 1 7.293 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 8H8V6h8zm0 4H8v-2h8zm0 4H8v-2h8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pool;
