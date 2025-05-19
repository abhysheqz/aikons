import React from "react";
const WifiLocation: React.FC<
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
        d="M2.25 10.867C2.25 5.583 6.725 1.25 12 1.25s9.75 4.333 9.75 9.617c0 2.74-1.422 5.078-3.254 6.987-1.834 1.911-4.151 3.469-6.104 4.657l-.394.239-.393-.241c-1.946-1.198-4.263-2.75-6.098-4.656-1.833-1.904-3.257-4.237-3.257-6.986m5.113-2.165C8.67 7.639 10.26 7 11.99 7c1.735 0 3.33.644 4.638 1.712l-1.265 1.55C14.368 9.45 13.21 9 11.989 9c-1.218 0-2.372.447-3.364 1.254zm1.93 2.442a5.1 5.1 0 0 1 2.696-.783c.985 0 1.907.29 2.709.79l-1.059 1.697a3.1 3.1 0 0 0-1.65-.487c-.579 0-1.135.168-1.643.483zM11.995 14a1 1 0 1 0 0 2h.006a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiLocation;
