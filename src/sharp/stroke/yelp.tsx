import React from "react";
const Yelp: React.FC<
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
        strokeWidth={1.5}
        d="m11.984 1.998-6.542 2.53a.01.01 0 0 0-.004.016l5.772 6.485.787-9.02a.01.01 0 0 0-.013-.01ZM19.998 11.983 16.94 7.68a.01.01 0 0 0-.017.001l-2.946 5.027 6.014-.71a.01.01 0 0 0 .007-.015ZM16.43 20.363l3.079-3.833a.01.01 0 0 0-.006-.016l-5.51-1.18 2.42 5.027a.01.01 0 0 0 .017.002ZM7.151 20.03l4.989 1.972a.01.01 0 0 0 .013-.01l-.585-5.983-4.42 4.003a.01.01 0 0 0 .003.017ZM4.48 10.522 4 16.517a.01.01 0 0 0 .014.01l5.99-2.742-5.508-3.27a.01.01 0 0 0-.015.007Z"
      />
    </svg>
  );
};
export default Yelp;
