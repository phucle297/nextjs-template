import products from 'data/json/products.json'

export default function handler(req: any, res: any) {
  if (req.method === 'GET') {
    res.status(200).json({ success: true, data: { products } })
  }
}
