import React from "react";
const Money_04: React.FC<
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
        d="M2.182 4.232c3.924.981 6.078.97 7.843.734 1.73-.23 3.418-.757 5.975-.757 2.063 0 3.624.259 4.682.523 1.2.3 2.068.764 2.068.764v14.503s-1.288-.701-2.432-.987c-.942-.235-2.381-.477-4.318-.477-2.443 0-3.755.474-5.775.743-1.985.264-4.331.253-8.407-.766l-.568-.141V3.999zM12 8.999a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4.5 11.49v2.01h2v-2.01zm13 1.01h2v-2.01h-2z"
      />
    </svg>
  );
};
export default Money_04;
