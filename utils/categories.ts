import { IconType } from 'react-icons';

import { FcBiotech, FcAssistant, FcBrokenLink, FcRegisteredTrademark, FcFactory, FcReddit } from "react-icons/fc";

type Category = {
    label: CategoryLabel;
    icon: IconType;
};

export type CategoryLabel =
    | 'apartament'
    | 'bungalow'
    | 'tent'
    | 'Cottage'
    | 'cabin'
    | 'caravan';

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
    {
        label: 'cabin',
        icon: FcFactory,
    },
    {
        label: 'caravan',
        icon: FcReddit,
    },

];