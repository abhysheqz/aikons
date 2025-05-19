import React from "react";
const Orange: React.FC<
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
        d="M2.75 14c0-4.875 4.185-8.75 9.25-8.75s9.25 3.875 9.25 8.75-4.185 8.75-9.25 8.75S2.75 18.875 2.75 14"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.26 3.856c-.374.694-.51 1.561-.51 2.144a.75.75 0 0 1-1.5 0c0-.75.164-1.883.69-2.856.543-1.006 1.513-1.894 3.06-1.894a.75.75 0 0 1 0 1.5c-.853 0-1.383.446-1.74 1.106"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.392 1.561A.75.75 0 0 1 6 1.25c3.095 0 4.75.729 5.647 1.842.435.542.642 1.117.772 1.593a14 14 0 0 1 .155.631c.045.186.08.305.115.389A.75.75 0 0 1 12 6.75c-2.663 0-4.291-.806-5.293-1.858-.871-.914-1.199-1.959-1.366-2.491l-.053-.164a.75.75 0 0 1 .104-.676M7.08 2.786c.16.351.38.722.713 1.072.563.591 1.514 1.18 3.211 1.346l-.032-.124c-.105-.383-.242-.734-.494-1.047-.414-.515-1.289-1.1-3.398-1.247"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Orange;
