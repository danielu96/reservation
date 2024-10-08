import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import React from 'react'
import { createPropertyAction } from '@/utils/actions'
import PriceInput from '@/components/form/PriceInput'
import CategoriesInput from '@/components/form/CategoriesInput'
import TextAreaInput from '@/components/form/TextAreaInput'
import CountriesInput from '@/components/form/CountriesInput'
import ImageInput from '@/components/form/ImageInput'
import CounterInput from '@/components/form/CounterInput'
import AmenitiesInput from '@/components/form/AmenitiesInput'


const page = () => {
    return (
        <section>
            <h1 className='text-3xl'>Create</h1>
            <FormContainer action={createPropertyAction}>
                <FormInput
                    name='name'
                    type='text'
                    label='Name'
                    defaultValue='tent trip'
                />
                <FormInput
                    name='tagline'
                    type='text '
                    label='Tagline'
                    defaultValue='hard tent trip'
                />
                <PriceInput />
                <CategoriesInput />
                <TextAreaInput name='description' labelText='Description (10 - 1000 Words)' />
                <CountriesInput />
                <ImageInput />
                <h3 className='text-lg mt-8 mb-4 font-medium'>Accommodation Details</h3>
                <CounterInput detail='guests' />
                <CounterInput detail='bedrooms' />
                <CounterInput detail='beds' />
                <CounterInput detail='baths' />
                <AmenitiesInput />
                <SubmitButton className='mt-2' text='create rental' />
            </FormContainer>
        </section>
    )
}

export default page