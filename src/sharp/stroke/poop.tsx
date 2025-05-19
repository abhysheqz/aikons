import React from "react";
const Poop: React.FC<
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
        d="M19.2 14c1.13.836 1.8 1.874 1.8 3 0 2.761-4.03 5-9 5s-9-2.239-9-5c0-1.126.67-2.164 1.8-3M12.759 8c-1.536-.884-2.83-1.214-3.862-1.203m0 0C7.009 6.818 6 7.983 6 9c0 1.657 2.594 3 5.793 3s5.078-1.518 5.793-3C19.034 6 16.5 2 11 2v.5c1.5 1.5 2.021 3.797-2.103 4.297Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.014 10c1.821.721 2.986 1.826 2.986 3.066C20 15.239 16.418 17 12 17s-8-1.761-8-3.934c0-1.107.93-2.107 2.426-2.822"
      />
    </svg>
  );
};
export default Poop;
