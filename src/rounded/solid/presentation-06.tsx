import React from "react";
const Presentation_06: React.FC<
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
        d="M11 21.507V22a1 1 0 0 0 2 0v-.493c.347.009.458.03.554.07.141.058.274.166.91.802l.329.329a1 1 0 1 0 1.414-1.415l-.328-.328-.099-.098c-.479-.481-.904-.908-1.46-1.138-.411-.17-.847-.214-1.32-.225V17h-2v2.504c-.473.01-.909.055-1.32.225-.556.23-.982.657-1.46 1.138l-.099.098-.328.329a1 1 0 1 0 1.414 1.414l.328-.329c.636-.636.77-.744.91-.802.097-.04.207-.061.555-.07"
      />
      <path
        fill="currentColor"
        d="M21.75 16V7.6c0-3.111 0-4.667-.952-5.633S18.314 1 15.25 1h-6.5c-3.064 0-4.596 0-5.548.967-.952.966-.952 2.522-.952 5.633V16H2a1 1 0 1 0 0 2h20a1 1 0 0 0 0-2z"
      />
    </svg>
  );
};
export default Presentation_06;
