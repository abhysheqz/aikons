import React from "react";
const Clinic: React.FC<
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
        d="M12.43 1.386a.75.75 0 0 0-.86 0l-10.002 7a.75.75 0 0 0-.306.756l2.501 13a.75.75 0 0 0 .737.608h15a.75.75 0 0 0 .736-.608l2.5-13a.75.75 0 0 0-.306-.756zM11 10v3H8v2h3v3h2v-3h3v-2h-3v-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Clinic;
