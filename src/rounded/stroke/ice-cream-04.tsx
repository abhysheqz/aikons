import React from "react";
const IceCream_04: React.FC<
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
        d="M16.969 9.042a2.505 2.505 0 0 0-2.465.958m2.465-.958c1.804.333 2.63 2.519 1.546 3.958H6.484c-1.198-1.59-.036-4 2.005-4m8.48.042c.593-3.807-3.604-2.814-4.292-5.12-.184-.617-.034-1.351.825-1.922-2.528 0-4.275 1.557-3.93 3.175m0 0c.133.628.582 1.266 1.423 1.825M9.571 5.175c-2.253.89-1.972 4.29.422 4.775M7.804 18.868 6.5 13h12l-1.304 5.868c-.334 1.501-.5 2.252-1.049 2.692s-1.317.44-2.856.44H11.71c-1.539 0-2.308 0-2.856-.44-.549-.44-.715-1.19-1.05-2.692"
      />
    </svg>
  );
};
export default IceCream_04;
