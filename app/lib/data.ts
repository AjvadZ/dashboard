import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: process.env.NODE_ENV === "production" ? "require" : false,
});
// export async function fetchCardData() {
//     try { 

//         const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
//         const customerCountPromise = sql`SELECT COUNT(*) FROM customers`
//         const invoiceStatusPromise = sql`SELECT
//                     SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
//                     SUM(CASE WHEN status  = 'pending' THEN amount ELSE 0 END) AS "pending"
//                     FROM inovices`;

//         const data = await Promise.all([
//             invoiceCountPromise,
//             customerCountPromise,
//             invoiceStatusPromise,
//         ])
//     }
// }