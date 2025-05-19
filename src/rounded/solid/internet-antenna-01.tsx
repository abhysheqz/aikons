import React from "react";
const InternetAntenna_01: React.FC<
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
        d="M12 9.25a2.75 2.75 0 0 0-1.297 5.176l-1.875 4.071c-.297.646-.567 1.232-.708 1.721-.151.528-.226 1.192.19 1.808l.055.077c.426.574 1.06.753 1.606.826.524.071 1.197.071 1.961.071h.135c.764 0 1.438 0 1.962-.07.545-.074 1.18-.253 1.606-.827l.055-.078c.416-.615.34-1.279.19-1.807-.14-.489-.411-1.075-.708-1.72l-1.875-4.072A2.75 2.75 0 0 0 12 9.25"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3a9 9 0 0 0-9 9c0 2.028.67 3.896 1.8 5.4a1 1 0 0 1-1.6 1.202A10.96 10.96 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.476-.819 4.763-2.2 6.602a1 1 0 0 1-1.6-1.202A8.96 8.96 0 0 0 21 12a9 9 0 0 0-9-9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7a5 5 0 0 0-3.727 8.333 1 1 0 1 1-1.49 1.334 7 7 0 1 1 10.435 0 1 1 0 1 1-1.49-1.334A5 5 0 0 0 12 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InternetAntenna_01;
