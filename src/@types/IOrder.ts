export default interface IOrder {
  zipCode: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  state: string
  paymentType: 'credit' | 'debit' | 'money'
}
