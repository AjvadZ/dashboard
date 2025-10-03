import {sql} from '@/app/lib/data'
import { NextResponse } from "next/server";

export async function GET() {
  const result = await sql`SELECT NOW();`;
  return NextResponse.json(result);
}