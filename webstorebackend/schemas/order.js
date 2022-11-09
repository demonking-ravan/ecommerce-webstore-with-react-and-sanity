export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
            title: 'Username',
            name: 'username',
            type: 'string'
        },
        {
            title: 'Stripe Session Id',
            name: 'stripeSessionId',
            type: 'string'
        },
    ]
}