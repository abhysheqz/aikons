import React from "react";
const Translate: React.FC<
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
        d="M6.95 5.578H5v1.5h3.418a8.6 8.6 0 0 1-.669 1.155q0-.002-.003-.005a5 5 0 0 1-.382-.59l-1.36.633c.11.237.323.554.525.834q.128.177.264.355a20 20 0 0 1-1.465 1.488l1.015 1.104c.457-.42.961-.913 1.455-1.465l.583.605 1.08-1.04-.71-.738c.518-.71.982-1.496 1.293-2.336H11v-1.5H8.45V4.5h-1.5z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M16.627 16.25 16 14.372l-.627 1.878z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 1.25a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h7.25V22c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75h-7.25V2a.75.75 0 0 0-.75-.75zm11.25 8.44V2.75H2.75v10.5h6.94zm1.71 3.06h2.081l2.171 6.513-1.423.474-.662-1.987h-2.252l-.663 1.987-1.423-.474z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 4.75H16.5v-1.5H20a.75.75 0 0 1 .75.75v3.5h-1.5zM3.25 20v-3.5h1.5v2.75H7.5v1.5H4a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Translate;
