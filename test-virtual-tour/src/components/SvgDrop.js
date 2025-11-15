import { defaultTransitionDuration, easeOut } from "../styles/commonStyles";

const SvgDrop = ({ open }) => {
  return (
    <svg
      width="15"
      height="8"
      viewBox="0 0 19 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: open ? "rotate(0deg)" : "rotate(180deg)",
        transition: `all ${easeOut} ${defaultTransitionDuration}`,
      }}
    >
      <path
        d="M10.9285 11.3331C10.1443 12.1334 8.85568 12.1334 8.07147 11.3331L1.22616 4.34702C-0.0140293 3.08133 0.88268 0.947273 2.65469 0.947273L16.3453 0.947272C18.1173 0.947272 19.014 3.08133 17.7738 4.34702L10.9285 11.3331Z"
        fill="white"
      ></path>
    </svg>
  );
};

export default SvgDrop;
