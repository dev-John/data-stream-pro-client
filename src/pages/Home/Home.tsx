import { Button } from "@/components/ui/button";
import { importFile } from "@/services/api";
import { useState } from "react";

export const Home = () => {
  const [file, setFile] = useState<File>();
  console.log("🚀 ~ file: Home.tsx:17 ~ Home ~ file:", file);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.[0]) setFile(e.target.files[0]);
  };

  const sendFile = async () => {
    if (file) {
      const result = await importFile(file);

      console.log("result: ", result);
    }
  };

  return (
    <>
      <h1>Import a large file to see the magic happen.</h1>

      <input
        type="file"
        id="excel-file"
        accept=".xls,.xlsx"
        // className="sr-only"
        onChange={handleFileChange}
      />

      {file && (
        <h2>
          Would you like to import {file?.size} kb from {file?.name}?
        </h2>
      )}
      {file && (
        <div>
          <Button variant="secondary" onClick={() => setFile(undefined)}>
            Cancel
          </Button>
          <Button onClick={() => sendFile()}>Confirm</Button>
        </div>
      )}

      {/* <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((d, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{d["Column A"]}</TableCell>
              <TableCell>{d["Column B"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </>
  );
};
