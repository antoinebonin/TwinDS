import { twa } from "../../utils/twa";

export interface StatProps {
    label: string;
    number: number;
    evolution?: "increase" | "decrease";
    helperText?: string;
}

export const Stat = ({
    label,
    number,
    evolution,
    helperText
}: StatProps) => {

    const evolutionIcon = (evolution === "increase") ? "⬆️" : "⬇️";

    return (
        <div className={twa`p-4`}>
            <p className={twa`text-gray-600 text-sm mb-1`}>{label}</p>
            <p className={twa`text-3xl mb-1`}>{number}</p>
            <p className={twa`text-gray-600 text-sm`}>{evolution && evolutionIcon} {helperText}</p>
        </div>
    )
}

