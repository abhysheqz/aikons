import React from "react";
const Backpack_01: React.FC<
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
        d="m19.75 17.448-1.183-.835-.013-.01C17.061 15.5 14.704 14.75 12 14.75s-5.06.749-6.554 1.853l-.005.004-1.191.866V20A2.75 2.75 0 0 0 7 22.75h10A2.75 2.75 0 0 0 19.75 20z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 12a7.75 7.75 0 1 1 15.5 0v3.612l-.31-.22c-1.807-1.333-4.494-2.142-7.44-2.142-2.949 0-5.637.81-7.444 2.145l-.306.223zm6.25-2.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.5a.75.75 0 0 1-1.5 0V5a3.75 3.75 0 1 1 7.5 0v.5a.75.75 0 0 1-1.5 0V5A2.25 2.25 0 0 0 12 2.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.25 13.268A1.75 1.75 0 0 0 1.75 15v4c0 .907.69 1.653 1.573 1.741A3.8 3.8 0 0 1 3.25 20zM20.677 20.741A1.75 1.75 0 0 0 22.25 19v-4a1.75 1.75 0 0 0-1.5-1.732V20q0 .382-.073.741"
      />
    </svg>
  );
};
export default Backpack_01;
