import React from "react";
const Setup_01: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 2v2.859A9.97 9.97 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.422.297 2.775.832 4M5 22v-2.859A9.97 9.97 0 0 0 12 22c5.523 0 10-4.477 10-10a10 10 0 0 0-.832-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.572 6.684 10.2 7.8l-.936.592-1.243-.308a1 1 0 0 0-1.1.46l-.497.837a1 1 0 0 0 .199 1.261l.825.726v1.264l-.825.726a1 1 0 0 0-.199 1.261l.498.837a1 1 0 0 0 1.1.46l1.243-.308.886.497.34 1.173a1 1 0 0 0 .96.722h1.098a1 1 0 0 0 .96-.722l.34-1.173.886-.497 1.244.308a1 1 0 0 0 1.1-.46l.522-.88a1 1 0 0 0-.154-1.22l-.863-.859.001-.994.863-.86a1 1 0 0 0 .154-1.219l-.523-.88a1 1 0 0 0-1.1-.46l-1.243.308L13.8 7.8l-.372-1.116A1 1 0 0 0 12.479 6h-.958a1 1 0 0 0-.949.684"
      />
      <circle cx={12} cy={12} r={1.5} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default Setup_01;
