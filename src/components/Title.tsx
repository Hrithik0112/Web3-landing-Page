type Props = {
    heading: string;
    subHeading: string;
    className?: string;
};

export default function Title({ heading, subHeading, className = "" }: Props) {
    return (
        <div className={`${className}`}>
            <h4 className="font-redzone text-[#65d6f4] text-xl">{heading}</h4>
            <h2 className="font-redzone text-4xl">{subHeading}</h2>
        </div>
    );
}
