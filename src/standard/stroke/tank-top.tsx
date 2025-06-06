import React from "react";
const TankTop: React.FC<
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
        d="M16.617 2.501c.247.77.383 1.614.383 2.5 0 3.59-2.239 6.5-5 6.5s-5-2.91-5-6.5c0-.886.136-1.73.383-2.5M14.5 17.5c-1.846-.618-2.924-.714-5 0M5 18v4m14-4v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 4.501c-1.726.451-3 2.03-3 3.909 0 .765.211 1.481.579 2.091M7 4.501c1.726.451 3 2.03 3 3.909a4.04 4.04 0 0 1-.579 2.091"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.97 17.995c1.39-.032 2.412-.242 3.194-1.276.763-1.009 1.37-2.215.088-4.362-.391-.654-.822-1.308-.91-2.065C19.076 7.982 19.998 5 20.498 4l-3.5-2c-2 0-4 1-4.994 1.998C10.998 3 8.998 2 6.998 2l-3.5 2c.5 1 1.473 4.512 1.134 6.49-.13.754-.614 1.38-.992 2.045-1.021 1.797-.706 2.999.143 4.187 1.078 1.304 2.37 1.3 3.195 1.25"
      />
    </svg>
  );
};
export default TankTop;
