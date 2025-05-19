import React from "react";
const Heartbreak: React.FC<
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
        d="M17 2.75c3.348 0 5.75 2.702 5.75 5.944 0 2.46-1.56 4.93-3.331 6.966-1.574 1.81-3.416 3.39-4.812 4.475l-.569.433a3.39 3.39 0 0 1-3.844.16l-.232-.16c-1.433-1.071-3.582-2.84-5.38-4.908-1.772-2.036-3.332-4.507-3.332-6.966C1.25 5.452 3.652 2.75 7 2.75c1.537 0 3.026.48 4.807 2.044l1.348 4.048-2.231 2.678a.75.75 0 0 0 .046 1.01l1.617 1.618-.758 1.518a.75.75 0 0 0 1.342.67l1-2a.75.75 0 0 0-.14-.866l-1.516-1.516 2.061-2.473a.75.75 0 0 0 .136-.717l-1.573-4.721C14.518 3.07 15.743 2.75 17 2.75"
      />
    </svg>
  );
};
export default Heartbreak;
