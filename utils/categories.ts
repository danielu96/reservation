import { IconType } from 'react-icons';

import { FcBiotech, FcAssistant, FcBrokenLink, FcRegisteredTrademark } from "react-icons/fc";

type Category = {
    label: CategoryLabel;
    icon: IconType;
};

export type CategoryLabel =
    | 'apartament'
    | 'bungalow'
    | 'tent'
    | 'Cottage';

export const categories: Category[] = [
    {
        label: 'apartament',
        icon: FcBiotech,
    },
    {
        label: 'bungalow',
        icon: FcBrokenLink,
    },
    {
        label: 'tent',
        icon: FcAssistant,
    },
    {
        label: 'Cottage',
        icon: FcRegisteredTrademark,
    },

];