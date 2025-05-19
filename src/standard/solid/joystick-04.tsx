import React from "react";
const Joystick_04: React.FC<
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
        d="M12 2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M7.75 5.5A4.25 4.25 0 1 1 13 9.632V14.5a1 1 0 1 1-2 0V9.63A4.25 4.25 0 0 1 7.75 5.5m1.817 7.975a1 1 0 1 0-.895-1.79l-3.84 1.921a1 1 0 0 0-.477.511.75.75 0 0 0-.105.383v4c0 .284.16.544.415.67l6.552 3.277a1.75 1.75 0 0 0 1.566 0l6.552-3.276a.75.75 0 0 0 .415-.671v-4a.75.75 0 0 0-.102-.378 1 1 0 0 0-.479-.516l-3.84-1.92a1 1 0 1 0-.895 1.789l2.47 1.235-4.792 2.396a.25.25 0 0 1-.224 0L7.097 14.71z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Joystick_04;
