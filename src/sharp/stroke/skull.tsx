import React from "react";
const Skull: React.FC<
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
        strokeWidth={1.5}
        d="M11.59 14.536c-.451.168-.854.49-1.258.749-.843.537-1.701 1.128-2.747 1.075C4.468 16.2 2 12.32 2 9.567 2 5.387 6.101 2 11.16 2c4.559 0 8.34 2.75 9.043 6.352.22 1.124-.282 1.81-.9 2.728L22 14l-1.5 2c.212 1.471.92 4.025-.054 5.284-1.178 1.521-3.458.227-4.833-.304-1.435-.553-2.152-.83-2.633-1.35-1.135-1.229-1.39-5.094-1.39-5.094Zm0 0c1.495-.554 2.721 1.235 4.248.568.522-.228.975-.66 1.43-.997"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21 19-3-1M14 9.02s-1.862 0-2.693 1.309c-.25.392-.632.74-1.084.66C9.018 10.771 7.653 9.997 7 8"
      />
    </svg>
  );
};
export default Skull;
