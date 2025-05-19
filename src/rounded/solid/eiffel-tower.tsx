import React from "react";
const EiffelTower: React.FC<
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
        d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 21.248h-.646A34.6 34.6 0 0 1 17.316 15h-.004a38 38 0 0 1-1.735-4h.003a37 37 0 0 1-1.68-6.154c-.02-.112-.046-.256-.074-.351a1.73 1.73 0 0 0-1.484-1.242h-.684a1.73 1.73 0 0 0-1.484 1.242c-.028.095-.054.24-.074.351a37 37 0 0 1-1.68 6.154h.001a38 38 0 0 1-1.735 4h-.002a34.6 34.6 0 0 1-4.038 6.247H2a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 .398-1.386c.114-.52.193-.774.32-.996q.128-.226.301-.417c.236-.26.557-.448 1.514-.976.184-.101.288-.158.368-.195.025-.02.1-.05.198 0 .08.037.184.094.368.195.957.528 1.278.717 1.514.976q.173.19.302.417c.126.221.205.476.32.996A.75.75 0 0 0 15 22.748h7a.75.75 0 0 0 0-1.5M8.358 15a39 39 0 0 0 1.657-4h3.968a39 39 0 0 0 1.657 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 11a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M5.25 15.004a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EiffelTower;
