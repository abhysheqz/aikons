import React from "react";
const WashingtonMonument: React.FC<
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
        d="M3 21.983h18M20 21.983l-.772-2.314a1 1 0 0 0-.949-.683H5.721a1 1 0 0 0-.949.683L4 21.984M9 5.997h6M12 19v-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.086 18.986 9.03 5.46l2.945-3.472a.01.01 0 0 1 .015 0l3.138 3.472 1.957 13.524"
      />
    </svg>
  );
};
export default WashingtonMonument;
