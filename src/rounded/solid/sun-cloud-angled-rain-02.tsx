import React from "react";
const SunCloudAngledRain_02: React.FC<
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
        d="M8.576 14.98a1 1 0 0 1 .448 1.342l-1 2a1 1 0 1 1-1.79-.894l1-2a1 1 0 0 1 1.342-.447m4.5 0a1 1 0 0 1 .448 1.342l-1 2a1 1 0 0 1-1.79-.894l1-2a1 1 0 0 1 1.342-.447m4.5 0a1 1 0 0 1 .448 1.342l-1 2a1 1 0 0 1-1.79-.894l1-2a1 1 0 0 1 1.342-.447m-8 4a1 1 0 0 1 .448 1.342l-1 2a1 1 0 1 1-1.79-.894l1-2a1 1 0 0 1 1.342-.447m4.5 0a1 1 0 0 1 .448 1.342l-1 2a1 1 0 0 1-1.79-.894l1-2a1 1 0 0 1 1.342-.447"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.583 9.584a5.752 5.752 0 0 0-.709 10.834c.38.162.571.243.714.092s.048-.348-.144-.74c-.454-.929-.984-2.146-.55-3.013l1-2a2.5 2.5 0 0 1 4.472 0 .016.016 0 0 0 .027 0 2.5 2.5 0 0 1 4.473 0 .016.016 0 0 0 .027 0 2.5 2.5 0 1 1 4.473 2.236l-1 2c-.17.34-.565.693-.988 1-.345.251-.518.377-.55.431-.096.167-.037.348.139.425.058.026.258.026.658.026a5.25 5.25 0 0 0 1.242-10.352c-.243-.06-.365-.089-.427-.16-.063-.07-.077-.193-.104-.439a6.251 6.251 0 0 0-12.272-.831c-.05.196-.074.294-.13.352s-.155.085-.35.14"
      />
      <path
        fill="currentColor"
        d="M7.457 1.863a1 1 0 1 0-1.93.525l.014.05A6.15 6.15 0 0 0 3.309 4.13l-.224-.127a1 1 0 0 0-.99 1.737l.205.118a6 6 0 0 0-.364 2.73l-.066.017a1 1 0 1 0 .51 1.934l.079-.02q.179.389.406.744c.452-.498.99-.917 1.591-1.232a4 4 0 0 1-.406-.975 4.03 4.03 0 0 1 .414-3.1 4.15 4.15 0 0 1 2.54-1.92 4.24 4.24 0 0 1 3.436.569 6.3 6.3 0 0 1 2.622-.16 1 1 0 0 0-.163-.284 6 6 0 0 0-.884-.878l.114-.196a1 1 0 0 0-1.726-1.01l-.125.214a6.2 6.2 0 0 0-2.804-.365z"
      />
    </svg>
  );
};
export default SunCloudAngledRain_02;
