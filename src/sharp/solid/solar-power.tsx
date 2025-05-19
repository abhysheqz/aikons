import React from "react";
const SolarPower: React.FC<
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
        d="M8.947 9.75H4.47l-1.25 3.5h4.93zM2.686 14.75l-.892 2.498A.75.75 0 0 0 2.5 18.25h4.515l.795-3.5zM8.553 18.25h6.894l-.796-3.5H9.35zM16.985 18.25H21.5a.75.75 0 0 0 .706-1.002l-.892-2.498H16.19zM20.779 13.25l-1.25-3.5h-4.476l.796 3.5zM13.515 9.75h-3.03l-.795 3.5h4.62z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 2.009a3 3 0 0 0-.835.346l-.36-.36-1.06 1.06.36.36a3 3 0 0 0-.346.835H8.5v1.5h.509c.074.298.192.578.346.835l-.36.36 1.06 1.06.36-.36c.257.154.537.272.835.346V8.5h1.5v-.509q.448-.113.835-.346l.36.36 1.06-1.06-.36-.36q.233-.387.347-.835h.508v-1.5h-.508a3 3 0 0 0-.347-.835l.36-.36-1.06-1.06-.36.36a3 3 0 0 0-.835-.346V1.5h-1.5zM12 3.417a1.583 1.583 0 1 0 0 3.166 1.583 1.583 0 0 0 0-3.166"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M10 17.5v3H2v2h20v-2h-7.944v-3z" />
    </svg>
  );
};
export default SolarPower;
