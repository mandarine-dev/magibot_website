/** @type {import('next').NextConfig} */

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || '';
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || '';
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || '';

const nextConfig = {
    // env: {
    //     AIRTABLE_API_KEY: AIRTABLE_API_KEY,
    //     AIRTABLE_BASE_ID: AIRTABLE_BASE_ID,
    //     AIRTABLE_TABLE_NAME: AIRTABLE_TABLE_NAME,
    // }
}

module.exports = nextConfig
