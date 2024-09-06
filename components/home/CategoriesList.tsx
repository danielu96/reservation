import React from 'react'
const users = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Smith' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson' },
];

const CategoriesList = ({
    search,
}: {
    search?: string;
}) => {
    {
        const searchTerm = search ? `&search=${search}` : '';
        return (
            <section>
                {users.map((user) => {
                    return (
                        <div key={user.id}> {user.firstName} {user.lastName}</div>
                    )
                })}

            </section>
        )
    }
}

export default CategoriesList