import React from "react";
const Motorbike_01: React.FC<
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
        d="M19.5 15.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M16 17a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 5.5c.899 0 1.074.017 1.21.072a1 1 0 0 1 .251.145c.115.092.217.235.663 1.016l.153.267h-1.413a2 2 0 0 0-1.253.441L8.783 8.91a1 1 0 0 1-.626.22H4a1 1 0 1 0 0 2h1.988l2.186 2.4-1.005 1.206a3.5 3.5 0 1 0 .829 2.13l1.97-2.366h1.438a2 2 0 0 0 1.756-1.042l1.858-3.407.783 1.37A6 6 0 0 0 13 16.502c0 .85.178 1.663.5 2.4a1 1 0 1 0 1.832-.801 4 4 0 0 1 4.469-5.52 1 1 0 0 0 .398-1.96 6 6 0 0 0-2.534.03l-2.804-4.91-.07-.122c-.334-.586-.629-1.104-1.085-1.467a3 3 0 0 0-.753-.436c-.541-.217-1.137-.216-1.812-.215H11a1 1 0 1 0 0 2M3 17a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Motorbike_01;
