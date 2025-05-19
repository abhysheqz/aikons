import React from "react";
const Upwork: React.FC<
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
        d="M9.31 4.018a1 1 0 0 1 1.118.61q.14.349.292.74c.45 1.146.995 2.537 1.68 3.882.592-2.04 2.361-4 5.225-4C20.56 5.25 23 7.69 23 10.625S20.56 16 17.625 16c-1.658 0-3.025-.739-4.143-1.787l-.3 1.595c-.216 1.147-.422 2.056-.574 2.864L12.358 20l-1.966-.37.25-1.329c.153-.807.359-1.716.574-2.862l.604-3.219a16 16 0 0 1-.337-.52 22 22 0 0 1-.983-1.78v1.33c0 2.595-2.155 4.75-4.75 4.75S1 13.845 1 11.25V5h2v6.25C3 12.74 4.26 14 5.75 14s2.75-1.26 2.75-2.75V5a1 1 0 0 1 .81-.982m4.633 7.73C15.031 13.154 16.247 14 17.625 14 19.455 14 21 12.456 21 10.625S19.456 7.25 17.625 7.25c-1.937 0-3.114 1.408-3.391 2.93z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Upwork;
