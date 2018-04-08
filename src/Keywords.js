const Keywords = [
    { divider: true, label: 'Animals', value: 'animals' },
    {
        label: 'Pets', value: 'pets', icon: 'fa-paw',
        children: [
            { label: 'Guppy', value: 'guppy' },
            { label: 'Parrot', value: 'parrot' },
            { label: 'Goldfish', value: 'goldfish' },
            { label: 'Dog', value: 'dog' },
            { label: 'Cat', value: 'cat' },
        ]
    },
    {
        label: 'Wild Animals', value: 'wild animals',
        children: [
            { label: 'Tiger', value: 'tiger' },
            { label: 'Ant', value: 'ant' },
            { label: 'Tetra', value: 'tetra' },
            { label: 'Peafowl', value: 'peafowl' },
            { label: 'Mongoose', value: 'mongoose' }
        ]
    },
    {
        label: 'Domest Animals', value: 'domestic animals',
        children: [
            { label: 'Cow', value: 'cow' },
            { label: 'Pig', value: 'pig' },
            { label: 'Goat', value: 'goat' },
            { label: 'Horse', value: 'horse' }
        ]
    },
    { divider: true, label: 'Food', value: 'food' },
    { 
        label: 'Fast food', value: 'fast food', icon: 'fa-cutlery',
        children: [
            { label: 'Cheesburger', value: 'cheesburger' },
            { label: 'Hamburger', value: 'hamburger' }
        ]
    },
    { 
        label: 'Dessert', value: 'dessert',
        children: [
            { label: 'Chocolate', value: 'chocolate' },
            { label: 'Cookie', value: 'cookie' },
            { label: 'Cake', value: 'cake' },
            { label: 'Pie', value: 'pie' }
        ]
    },
    { divider: true, label: 'Vehicle', value: 'vehicle' },
    { 
        label: 'Motorcycle', value: 'motorcycle', icon: 'fa-motorcycle',
        children: [
            { label: 'Harley Davidson', value: 'harley davidson' }
        ]
    },
    {
        label: 'Car', value: 'car', icon: 'fa-car',
        children: [
            { label: 'Lamborghini', value: 'lamborghini' },
            { label: 'Ferrari', value: 'ferrari' },
            { label: 'Bugatti', value: 'bugatti' },
            { label: 'BMW', value: 'bmw' },
            { label: 'Mercedes', value: 'mercedes' }
        ]
    },
    { divider: true, label: 'Movie', value: 'Movie' },
    { 
        label: 'Science fiction', value: 'science fiction', icon: 'fa-film',
        children: [
            { label: 'Sunshine', value: 'sunshine' },
            { label: 'Interstellar', value: 'interstellar' },
            { label: 'The Moon', value: 'the moon' },
            { label: 'Oblivion', value: 'oblivion' },
            { label: 'Star Trek', value: 'star trek' },
            { label: 'Star Wars', value: 'star wars' }
        ]
    }
];

export default Keywords;