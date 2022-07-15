const Airtable = require("airtable");

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_NAME);

const getDataRecords = (records) => {
    return records.map((record) => dataRecord(record));
}

const dataRecord = (record) => {
    return {
        id: record.id,
        fields: record.fields
    }
}

export default async function getData() {
    const records = await table.select({}).all();
    const dataTablesRecords = await getDataRecords(records);

    console.log(records);

    return dataTablesRecords;
}