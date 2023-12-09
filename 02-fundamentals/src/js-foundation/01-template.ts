export const emailTemplate =(name:string, orderID:number)=> {
    return `
    <div>
        <h1>Hi, ${name}</h1>
        <p>Thank you for your order.</p>
        <p>Order ID: ${orderID}
    </div>`
}
