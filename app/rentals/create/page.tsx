import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import React from 'react'
import { createPropertyAction } from '@/utils/actions'
import PriceInput from '@/components/form/PriceInput'


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
                <SubmitButton text='create rental' />
            </FormContainer>
        </section>
    )
}

export default page