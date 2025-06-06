import React from "react";
const Maximize_04: React.FC<
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
        d="M5.116 6.486 2.357 9.239M2.016 6.59l-.018 3.006h3.017m1.861-4.872L9.61 2m-2.62-.396h3.017v2.992M16.59 11.842l.231-1.41c.131-.757-.375-1.524-1.134-1.655-.76-.13-1.458.428-1.59 1.185m5.06 3.34.244-1.48a1.39 1.39 0 0 0-1.145-1.6c-.76-.13-1.46.442-1.592 1.199m-2.8-.095 1.045-6.124c.089-.771-.41-1.467-1.11-1.587a1.39 1.39 0 0 0-1.602 1.061l-1.769 10.095-1.586-1.716c-.652-.804-1.632-.87-2.332-.25-.536.476-.665 1.274-.34 1.911l3.8 6.834a.1.1 0 0 0 .087.051h10.367a.1.1 0 0 0 .099-.083l1.46-8.274c.13-.757-.402-1.478-1.161-1.608-.76-.13-1.466.503-1.598 1.26"
      />
    </svg>
  );
};
export default Maximize_04;
