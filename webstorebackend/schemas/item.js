export default {
    name: 'item',
    title: 'Item',
    type: 'document',
    fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name'
        },
        {
            title: 'Short Description',
            name: 'shortDescription',
            type: 'text'
        },
        {
            title: 'Description', 
            name: 'description',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Category',
            name: 'category',
            type: 'string',
            options: {
              list: [
                {title: 'New Arrivals', value: 'newArrivals'},
                {title: 'Best Sellers', value: 'bestSellers'},
                {title: 'Top Rated', value: 'topRated'},
              ], // <-- predefined values
            }
        },
      ]
}