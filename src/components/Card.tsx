import { ReactNode } from "react";

export type CardProps = {
    icon: ReactNode;
    title: string;
    description: string;
};

export default function Card({ icon, description, title }: CardProps) {
    return (
        <div className="py-12 px-6 flex flex-col flex-wrap gap-4 flex-1 max-w-[320px] items-start">
            <div className="mb-4">{icon}</div>
            <h4 className="text-3xl">{title}</h4>
            <span className="text-gray-400 font-nominee">{description}</span>
        </div>
    );
}
