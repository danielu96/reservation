import { IconType } from 'react-icons';

import { FcBiotech, FcAssistant, FcBrokenLink, FcRegisteredTrademark } from "react-icons/fc";

type Category = {
    label: CategoryLabel;
    icon: IconType;
};

export type CategoryLabel =
    | 'cabin'
    | 'caravan'
    | 'Aila'
    | 'Monty';

export const categories: Category[] = [
    {
        label: 'cabin',
        icon: FcBiotech,
    },
    {
        label: 'caravan',
        icon: FcBrokenLink,
    },
    {
        label: 'Aila',
        icon: FcAssistant,
    },
    {
        label: 'Monty',
        icon: FcRegisteredTrademark,
    },

];